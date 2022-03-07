import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.set(0.7, -0.6, 1)
mesh.scale.set(2, 0.5, 0.5)
// scene.add(mesh)

console.log("before normalize:", mesh.position.length())
// mesh.position.normalize();
// console.log("after normalize:", mesh.position.length())

const group = new THREE.Group();
group.position.y = 0
group.scale.y = 2
group.rotation.y = Math.PI/3
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -2
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.r = 0
group.add(cube2)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2
group.add(cube3)
scene.add(group)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0,0,4)
scene.add(camera)

console.log("distance to camera: ", mesh.position.distanceTo(camera.position))

// mesh.rotation.y = Math.PI / 2
// mesh.rotation.x = Math.PI / 2
// camera.lookAt(group.position)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
