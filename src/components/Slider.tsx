import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { globImage, starImage } from "../assets/assets";
import { IoIosEye } from "react-icons/io";
import withRouter from "../utils/withRouter";
import { navigateTo } from "../utils/utils";
import "./style.css"
interface SliderProps {
  navigate: (text: string) => void;
}

const startRotaionTimeX = 0.0001;
const startRotaionTimeY = 0.0001;
const speedRotaionTimeGlobeY = 0.005;
const speedRotaionTimeGlobeX = 0.005;

interface SliderState { }

class Slider extends React.PureComponent<SliderProps, SliderState> {
  starsRef: React.RefObject<HTMLDivElement>;
  globeRef: React.RefObject<HTMLDivElement>;

  constructor(props: SliderProps) {
    super(props);
    this.state = {};
    this.starsRef = React.createRef();
    this.globeRef = React.createRef();
  }

  generateStars = () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.starsRef.current?.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Load the star texture
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(starImage);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      map: starTexture,
      size: 1, // Adjust the size as needed
      transparent: true, // Ensure transparency is handled if your texture has alpha
      alphaTest: 0.1 // Threshold for alpha transparency
    });

    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    function animateStars() {
      requestAnimationFrame(animateStars);
      stars.rotation.x += startRotaionTimeX;
      stars.rotation.y += startRotaionTimeY;
      renderer.render(scene, camera);
    }

    animateStars();
  };

  renderGlobe = () => {
    console.log('renderGlobe called');
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5); // Increase size of renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.globeRef.current?.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    // Create a sphere geometry for the globe with increased radius
    const geometry = new THREE.SphereGeometry(2, 32, 32); // Increase the size from 1 to 2

    // Load a texture for the globe
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(globImage, () => {
      console.log('Texture loaded');
      // Once the texture is loaded, render the scene
      renderer.render(scene, camera);
    });

    // Create a material using the texture
    const material = new THREE.MeshStandardMaterial({ map: texture });

    // Create the globe mesh
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.set(0, 0, 5); // Adjust camera position for larger globe

    // Mouse move event
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // On window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5);
    });

    // Function to animate
    function animateGlobe() {
      requestAnimationFrame(animateGlobe);
      globe.rotation.x += mouseY * speedRotaionTimeGlobeX;
      globe.rotation.y += mouseX * speedRotaionTimeGlobeY;
      renderer.render(scene, camera);
    }

    animateGlobe();
  };

  componentDidMount(): void {
    this.generateStars();
    this.renderGlobe();
  }

  render() {
    return (
      <Box sx={{ position: 'relative', background: '#000000', overflow: 'hidden' }}>
        <Box
          ref={this.starsRef}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // Ensure the stars are behind
          }}
        />
        <Container
          sx={{
            position: "relative",
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "left",
            background: "transparent", // Make the background transparent
            minHeight: "100vh",
            justifyContent: "space-between",
            overflow: "hidden",
            zIndex: 10, // Ensure it is above the stars
          }}
        >
          <Grid container>
          <Grid item lg={2} md={2} ></Grid>
            <Grid item lg={4} md={4} sm={12} sx={{m:"auto"}}>
            <Box color="#fff" sx={{ width: "100%", zIndex: 10000 }}>
            <Typography>Hello, I'm</Typography>
            <Typography component={"h3"} variant="h3" className="my-heading-text-shubham !text-[2.4rem]">Shubham Sarode</Typography>
            <Typography>
              Software Engineer with 2.5+ years of experience in front-end
              development, seeking full-time front-end roles.
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                mt: 3,
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#fff",
                }}
                onClick={() =>
                  navigateTo(
                    "https://drive.google.com/file/d/1jj2iw1bHdgiWZ-DPCCIwxll1guDj43VK/view?usp=sharing", this.props.navigate
                  )
                }
              >
                Hire me
              </Button>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 1,
                }}
                onClick={() => navigateTo("/project", this.props.navigate)}
              >
                <span>Projects</span> <IoIosEye color={"#FFF"} size={20} />
              </Button>
            </Box>
          </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} sx={{m:"auto"}}>
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%", // Ensure the height is set to 100%
              position: "relative", // Ensure relative positioning
            }}
          >
            <Box
              ref={this.globeRef}
              sx={{
                zIndex: 10, // Ensure the globe is on top
              }}
            />
          </Box>
              </Grid>
          </Grid>
         
         
        </Container>
      </Box>
    );
  }
}

export default withRouter(Slider);
