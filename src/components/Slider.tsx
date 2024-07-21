import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { globImage } from "../assets/assets";
import { IoIosEye } from "react-icons/io";
import withRouter from "../utils/withRouter";

interface SliderProps {
  navigate: (text: string) => void;
}

interface SliderState { }

class Slider extends React.PureComponent<SliderProps, SliderState> {
  threeJsref: React.RefObject<HTMLDivElement>;
  constructor(props: SliderProps) {
    super(props);
    this.state = {};
    this.threeJsref = React.createRef();
  }

  renderGlobe = () => {
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.threeJsref.current?.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    // Create a sphere geometry for the globe
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Load a texture for the globe (replace 'path/to/earth_texture.jpg' with the actual path)
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(globImage);

    // Create a material using the texture
    const material = new THREE.MeshStandardMaterial({ map: texture });

    // Create the globe mesh
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.set(0, 0, 3);

    // On window resize
    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    // Function to animate
    function animate() {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.004;
      renderer.render(scene, camera);
    }

    animate();
  };

  componentDidMount(): void {
    this.renderGlobe();
  }
  navigateTo = (text: string) => {
    if (text.includes("http")) {
      // window.location.href = text;
      window.open(text, "_blank");
      return false;
    }
    this.props.navigate(text);
  };
  render() {
    return (
      <Box sx={{ background: "#000000" }}>
        <Container
          sx={{
            position: "relative",
            mx: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "left",
            background: "#000000",
            minHeight: "100vh",
            justifyContent: "space-between",
          }}
        >
          <Box color="#fff" sx={{ maxWidth: "50%", zIndex: 10000 }}>
            <Typography>Hello, I'm</Typography>
            <Typography sx={{ fontSize: 50 }}>Shubham Sarode</Typography>
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
                  this.navigateTo(
                    "https://drive.google.com/file/d/1jj2iw1bHdgiWZ-DPCCIwxll1guDj43VK/view?usp=sharing"
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
                onClick={() => this.navigateTo("/project")}
              >
                <span>Projects</span> <IoIosEye color={"#FFF"} size={20} />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <Box ref={this.threeJsref} />
          </Box>
        </Container>
      </Box>
    );
  }
}

export default withRouter(Slider);
