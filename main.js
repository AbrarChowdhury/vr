import * as THREE from "three"
import { VRButton } from "three/addons/webxr/VRButton.js"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
// import speak from "./pollyHelper"
let camera, mixer
let renderer
let scene
let avatar
let dictionanry
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
      avatar = model
      dictionanry = model.children[0].morphTargetDictionary
      console.log(model.children[0].morphTargetInfluences)
      model.position.z = -1.15
      model.position.y = -1.5
      scene.add(model)
      // Play the first animation clip
      mixer = new THREE.AnimationMixer(model)
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
  document
    .getElementById("runButton")
    .addEventListener("click", changeMorphTargetByName("viseme_O"))
  document
    .getElementById("standButton")
    .addEventListener("click", changeMorphTargetByName("13"))
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

function changeMorphTargetByName(targetName) {
  if (!avatar) {
    console.error("Model not loaded yet.")
    return
  }

  let targetIndex = dictionanry[targetName]

  // Reset All influence
  for (let i = 0; i < avatar.children[0].morphTargetInfluences.length; i++) {
    avatar.children[0].morphTargetInfluences[i] = 0
  }
  avatar.children[0].morphTargetInfluences[targetIndex] = 1
}

function speak(text) {
  const visemeMap = {
    sil: "viseme_sil",
    p: "viseme_PP",
    t: "viseme_TH",
    S: "viseme_SS",
    T: "viseme_TH",
    f: "viseme_FF",
    k: "viseme_kk",
    i: "viseme_I",
    r: "viseme_R",
    s: "viseme_SS",
    u: "viseme_U",
    "@": "viseme_aa",
    a: "viseme_aa",
    e: "viseme_E",
    E: "viseme_E",
    o: "viseme_O",
    O: "viseme_O",
  }

  const visemes = [
    {
      time: 6,
      type: "viseme",
      value: "k",
    },
    {
      time: 72,
      type: "viseme",
      value: "@",
    },
    {
      time: 104,
      type: "viseme",
      value: "t",
    },
    {
      time: 162,
      type: "viseme",
      value: "o",
    },
    {
      time: 448,
      type: "viseme",
      value: "sil",
    },
    {
      time: 639,
      type: "viseme",
      value: "k",
    },
    {
      time: 661,
      type: "viseme",
      value: "a",
    },
    {
      time: 780,
      type: "viseme",
      value: "a",
    },
    {
      time: 824,
      type: "viseme",
      value: "r",
    },
    {
      time: 924,
      type: "viseme",
      value: "i",
    },
    {
      time: 1093,
      type: "viseme",
      value: "u",
    },
    {
      time: 1370,
      type: "viseme",
      value: "sil",
    },
  ]

  visemes.map((vis) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        changeMorphTargetByName(visemeMap[vis.value])
      }, vis.time)
    })
  })
}
