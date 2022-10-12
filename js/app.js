import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const webgl = document.querySelector(".webgl");

const size = 
{
    width: innerWidth,
    height: innerHeight
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, size.width / size.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer( { alpha: true });
renderer.setClearColor( 0x000000, 0);
renderer.setSize(size.width, size.height);
webgl.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const material = new THREE.MeshBasicMaterial( { color: 'white', wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 50;

// Controls
const controls = new OrbitControls( camera, renderer.domElement);
controls.enableZoom = false;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    controls.update()
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
}
animate();