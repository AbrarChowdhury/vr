import * as THREE from "three"
import { VRButton } from "three/addons/webxr/VRButton.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import speak from "./pollyHelper"
let camera, mixer
let renderer
let scene
let standAction, walkAction, runAction
const loader = new GLTFLoader()
init()

function init() {
  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  renderer.xr.setReferenceSpaceType("local")
  document.body.appendChild(renderer.domElement)
  document.body.appendChild(VRButton.createButton(renderer))

  //

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x505050)

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    1,
    1000
  )
  camera.layers.enable(1)

  const light = new THREE.AmbientLight(0x404040, 50)
  scene.add(light)

  loader.load(
    // resource URL
    "newModel.glb",
    // called when the resource is loaded
    function (gltf) {
      const model = gltf.scene
    //   console.log(model)
      model.position.z = -2
      model.position.y = -1
      scene.add(model)
      // Play the first animation clip
      mixer = new THREE.AnimationMixer(model)
      //   standAction = mixer.clipAction(gltf.animations[0])
      //   runAction = mixer.clipAction(gltf.animations[1])
      //   walkAction = mixer.clipAction(gltf.animations[3])
      animate()
      // Render loop
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
    },
    // called when loading has errors
    function (error) {
      console.log(error)
    }
  )

  window.addEventListener("resize", onWindowResize)
  //   document.getElementById("runButton").addEventListener("click", startRun)
  // document.getElementById("standButton").addEventListener("click", idle)
  //   document.getElementById("walkButton").addEventListener("click", startWalk)
  document
    .getElementById("speak")
    .addEventListener("click", () => speak("hi what are you doing?"))
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  renderer.setAnimationLoop(render)
}

function render() {
  mixer.update(0.01)
  renderer.render(scene, camera)
}

// function startWalk() {
//   mixer.stopAllAction()
//   console.log("start walking")
//   walkAction.play()
// }
// function startRun() {
//   mixer.stopAllAction()
//   console.log("start walking")
//   runAction.play()
// }
// function idle() {
//   mixer.stopAllAction()
//   console.log("start walking")
//   standAction.play()
// }
