<script setup>
import gsap from 'gsap';
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
</script>

<template>
    <canvas id="bg"></canvas>
</template>

<script>
export default {
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg'),
            antialias: true
        });
        renderer.setSize(innerWidth, innerHeight); // set the size to be renderer
        renderer.setPixelRatio(window.devicePixelRatio); // set the resolution
        
        // * background color ↓
        renderer.setClearColor(0x113443, 1); //161616 //262637 //262b33

        const mesh = new THREE.Mesh(
            new THREE.TorusGeometry(1, .3, 16, 100),
            new THREE.MeshStandardMaterial({ color: 0xFFF0DB, wireframe: true}) // 0xff6347 0xCF6E44, 0x44d0ff
        );

        scene.add(mesh);

        // * adding light

        const pointLight = new THREE.PointLight(0xffffff, .6);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(pointLight, ambientLight);

        // const controls = new OrbitControls(camera, renderer.domElement);

        const mouse = {
            x: undefined,
            y: undefined
        }


        function animate() {
            requestAnimationFrame(animate);

            mesh.rotation.z += 0.003;
            if (mouse.x != undefined) {
                // group.rotation.y = mouse.x * 0.4;
                gsap.to(mesh.rotation, {
                    x: mouse.y * 0.3,
                    y: mouse.x * 0.3,
                    duration:2
                })
            }
            renderer.render(scene, camera);


            // controls.update();
        }

        animate();

        addEventListener('mousemove', () => {
            mouse.x = (event.clientX / innerWidth) * 2 - 1; // ? make it range from -1 to 1
            mouse.y = (event.clientY / innerHeight) * 2 - 1;
            })
        window.addEventListener("resize", onWindowResize);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    },
};
</script>

<style>
/* canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
} */
</style>
