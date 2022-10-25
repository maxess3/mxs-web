import * as THREE from 'three';

import { gsap } from "gsap";

import GUI from 'lil-gui'; 

// const gui = new GUI();

const webgl = document.querySelector(".webgl");

const sizes = 
{
    width: innerWidth,
    height: innerHeight
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, sizes.width / sizes.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setClearColor( 0x000000, 0);
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
webgl.appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.SphereGeometry(16, 32, 32);
const material = new THREE.MeshBasicMaterial( { color: '#CCC', wireframe: true } );
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
sphere.position.y = -7;
sphere.rotation.z = 10;
camera.position.z = 22;

// GUI Helper
// gui.add(sphere.position, 'x', -20, 20).name('sphere x');
// gui.add(sphere.position, 'y', -20, 20).name('sphere y');
// gui.add(sphere.position, 'z', -20, 20).name('sphere z');
// gui.add(camera.position, 'x', -20, 20).name('camera x');
// gui.add(camera.position, 'y', -20, 20).name('camera y');
// gui.add(camera.position, 'z', -20, 20).name('camera z');
// gui.add(sphere.rotation, 'x', -20, 20).name('camera x');
// gui.add(sphere.rotation, 'y', -20, 20).name('camera y');
// gui.add(sphere.rotation, 'z', -20, 20).name('camera z');

// Animation
let time = Date.now();
function animate() {
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;
	requestAnimationFrame( animate );
	render();
    sphere.rotation.y += 0.0001 * deltaTime;
}
animate();

// Resize object
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
}

// Render
function render(){
    renderer.render( scene, camera );
}

gsap.from(sphere.rotation, { duration: 1, y: -10 });
