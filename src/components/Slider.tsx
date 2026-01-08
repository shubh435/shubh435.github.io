import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { backgroundMedia } from "../assets/assets";
import { IoIosEye } from "react-icons/io";
import { motion } from "framer-motion";
import withRouter from "../utils/withRouter";
import { navigateTo } from "../utils/utils";
import "./style.css";

// Lazy load Three.js to reduce initial bundle size
let THREE: any = null;
let RoomEnvironment: any = null;
interface SliderProps {
  navigate: (text: string) => void;
}

const startRotaionTimeX = 0.0001;
const startRotaionTimeY = 0.0001;
const speedRotaionTimeGlobeY = 0.005;
const speedRotaionTimeGlobeX = 0.005;

interface SliderState {}

const MotionBox = motion(Box);
const MotionButton = motion(Button);

class Slider extends React.PureComponent<SliderProps, SliderState> {
  starsRef: React.RefObject<HTMLDivElement>;
  globeRef: React.RefObject<HTMLDivElement>;
  private isMountedFlag = false;
  private idleCallbackId?: number;
  private fallbackTimeoutId?: number;

  constructor(props: SliderProps) {
    super(props);
    this.state = {};
    this.starsRef = React.createRef();
    this.globeRef = React.createRef();
  }

  generateStars = () => {
    if (!THREE || !this.starsRef.current) return;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.starsRef.current?.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Load the star texture
    const textureLoader = new THREE.TextureLoader();
    const starTexture = textureLoader.load(backgroundMedia.star);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      map: starTexture,
      size: 1, // Adjust the size as needed
      transparent: true, // Ensure transparency is handled if your texture has alpha
      alphaTest: 0.1, // Threshold for alpha transparency
    });

    const starVertices = [];
    for (let i = 0; i < 2500; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);

      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
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
    if (!THREE || !RoomEnvironment || !this.globeRef.current) return;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(window.innerWidth / 1.5, window.innerHeight / 1.5); // Increase size of renderer
    renderer.outputEncoding = THREE.sRGBEncoding;
    this.globeRef.current?.appendChild(renderer.domElement);

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const scene = new THREE.Scene();
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture;

    // Create a sphere geometry for the globe with increased radius
    const geometry = new THREE.SphereGeometry(2, 24, 24); // Slightly lighter mesh than the previous 32 segments

    // Load a texture for the globe
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(backgroundMedia.globe, () => {
      renderer.render(scene, camera);
    });

    const material = new THREE.MeshStandardMaterial({ map: texture });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.set(0, 0, 5); // Adjust camera position for larger globe

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // On window resize
    window.addEventListener("resize", () => {
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

  async loadThreeJS() {
    if (!THREE) {
      const threeModule = await import("three");
      THREE = threeModule;
      const { RoomEnvironment: RoomEnv } = await import(
        "three/examples/jsm/environments/RoomEnvironment.js"
      );
      RoomEnvironment = RoomEnv;
    }
  }

  componentDidMount(): void {
    this.isMountedFlag = true;
    // Defer Three.js loading to not block main thread
    const initThreeJS = async () => {
      await this.loadThreeJS();
      if (!this.isMountedFlag) return;
      this.generateStars();
      this.renderGlobe();
    };

    // Use requestIdleCallback to defer heavy work
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(initThreeJS, {
        timeout: 2000,
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(initThreeJS, 100);
    }
  }

  componentWillUnmount(): void {
    this.isMountedFlag = false;
    if (this.idleCallbackId && "cancelIdleCallback" in window) {
      (window as any).cancelIdleCallback(this.idleCallbackId);
    }
    if (this.fallbackTimeoutId) {
      window.clearTimeout(this.fallbackTimeoutId);
    }
  }

  render() {
    return (
      <Box
        sx={{ position: "relative", background: "#000000", overflow: "hidden" }}
        id="/"
      >
        <Box ref={this.starsRef} sx={webstyle.starContainer} />
        <Container sx={webstyle.container}>
          <Grid container>
            <Grid item lg={2} md={2} component={"section"}></Grid>
            <Grid
              item
              lg={4}
              md={4}
              sm={12}
              sx={{ m: "auto" }}
              component={"section"}
            >
              <MotionBox
                color="#fff"
                sx={{
                  width: "100%",
                  zIndex: 10000,
                  paddingTop: { xs: "14%", lg: "auto" },
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
              >
                <Typography
                  component={"p"}
                  className="text-muted !text-gray-300"
                >
                  Hello, I'm
                </Typography>
                <Typography
                  component={"h1"}
                  variant="h1"
                  className="my-heading-text-shubham !text-[2.4rem] "
                >
                  Shubham Sarode
                </Typography>
                <Typography
                  component={"p"}
                  className="mt-4 text-lg text-muted !text-gray-300"
                  sx={{ maxWidth: { xs: "100%", md: "520px" } }}
                >
                  Product-focused engineer helping founders ship fast with crisp{" "}
                  <b className="">React Native</b> apps and{" "}
                  <b className="">React web</b> interfaces.
                </Typography>

                <Box sx={webstyle.buttonStyle}>
                  <MotionButton
                    variant="outlined"
                    sx={webstyle.button}
                    whileHover={{
                      scale: 1.03,
                      rotate: "-0.8deg",
                      boxShadow: "0 20px 45px rgba(14,165,233,0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      navigateTo("#Freelancing", this.props.navigate)
                    }
                  >
                    Hire me
                  </MotionButton>
                  <MotionButton
                    variant="outlined"
                    sx={webstyle.buttonStyle1}
                    whileHover={{
                      scale: 1.03,
                      rotate: "0.8deg",
                      boxShadow: "0 20px 45px rgba(236,72,153,0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigateTo("/project", this.props.navigate)}
                  >
                    <span>Projects</span> <IoIosEye color={"#FFF"} size={20} />
                  </MotionButton>
                  {/* <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "999px",
                      textTransform: "none",
                      background:
                        "linear-gradient(120deg, #f97316, #ef4444 70%)",
                    }}
                    onClick={() =>
                      navigateTo(
                        "https://drive.google.com/uc?export=download&id=1jj2iw1bHdgiWZ-DPCCIwxll1guDj43VK",
                        this.props.navigate
                      )
                    }
                  >
                    Download Resume (PDF)
                  </Button> */}
                </Box>
              </MotionBox>
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={12}
              sx={{ m: "auto" }}
              component={"section"}
            >
              <Box sx={webstyle.globContainer}>
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
const webstyle = {
  buttonStyle1: {
    display: "flex",
    justifyContent: "center",
    gap: 1,
  },
  globContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    color: "#fff",
  },
  buttonStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    gap: 2,
    flexWrap: "wrap",
    mt: 3,
  },
  starContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  container: {
    position: "relative",
    mx: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
    background: "transparent",
    minHeight: "100vh",
    justifyContent: "space-between",
    overflow: "hidden",
    zIndex: 10,
  },
};
