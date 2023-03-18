import { Box, Button, Typography } from "@mui/material"
import React from "react"
import * as THREE from "three"
// import Stats from "three/examples/jsm/libs/stats.module"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
// // import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
// import { globImage } from "../assets"
import { IoIosEye } from "react-icons/io"
import { Container } from "@mui/system"

interface SliderProps {}

interface SliderState {}

class Slider extends React.PureComponent<SliderProps, SliderState> {
  threeJsref: React.RefObject<HTMLDivElement>
  constructor(props: SliderProps) {
    super(props)
    this.state = {}
    this.threeJsref = React.createRef()
  }

  renderGlobe = () => {
    // @ts-ignore
    // const stats = new Stats()
    // this.threeJsref.current?.appendChild(stats.dom)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth / 2, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputEncoding = THREE.sRGBEncoding
    this.threeJsref.current?.appendChild(renderer.domElement)

    const pmremGenerator = new THREE.PMREMGenerator(renderer)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    scene.environment = pmremGenerator.fromScene(
      new RoomEnvironment(),
      0.04
    ).texture

    const geometry = new THREE.BoxGeometry(1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x003333 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    camera.position.set(-3, -0.2, 5)

    // controlls
    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.target.set(0, 0.5, 0)
    // controls.update()
    // controls.enablePan = false
    // controls.enableDamping = true

    // // draco loader
    // const dracoLoader = new DRACOLoader()
    // dracoLoader.setDecoderPath("jsm/libs/draco/gltf/")

    // load images
    // const loader = new GLTFLoader()
    // // loader.setDRACOLoader(dracoLoader)
    // loader.load(
    //   globImage,

    //   (response) => {
    //     console.log("----response", response)
    //   },
    //   undefined,
    //   //   function (gltf) {
    //   //     const model = gltf.scene
    //   //     model.position.set(1, 1, 0)
    //   //     model.scale.set(0.01, 0.01, 0.01)
    //   //     scene.add(model)

    //   //     // mixer = new THREE.AnimationMixer(model)
    //   //     // mixer.clipAction(gltf.animations[0]).play()

    //   //     animate()
    //   //   },
    //   (e) => {
    //     console.error(e)
    //   }
    // )

    // on window resize
    window.onresize = function () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    // function to animate
    function animate() {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      //   const delta = clock.getDelta()

      //   mixer.update(delta)

      //   controls.update()

      //   stats.update()
      renderer.render(scene, camera)
    }

    animate()
  }

  componentDidMount(): void {
    this.renderGlobe()
  }

  render() {
    // sx={{ position: "absolute", top: "50%", left: 0, zIndex: 20 }}
    return (
      <Container
        sx={{
          position: "relative",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography>Hello , I'm</Typography>
          <Typography>Shubham S. Sarode</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at,
            numquam asperiores facere voluptatem repellat. Quasi sapiente nulla
            officiis deleniti vitae, a repudiandae quia quisquam aperiam eum.
            Beatae, aperiam aliquid.
          </Typography>
          <Button>Hire me </Button>
          <Button>
            Porjects
            <IoIosEye color={"#fff"} size={20} />
          </Button>
        </Box>
        <Box>
          <Box ref={this.threeJsref} />
        </Box>
      </Container>
    )
  }
}

export default Slider
