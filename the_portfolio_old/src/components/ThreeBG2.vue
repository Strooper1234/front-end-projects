<script setup>
import gsap from "gsap";
import * as THREE from "three";
import * as POSTPROCESSING from 'postprocessing';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { render } from "@vue/runtime-dom";
</script>

<template>
    <canvas id="bg2"></canvas>
    <!-- <h1>HELOO</h1> -->
</template>

<script>
export default {
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        // camera.position.z = 4;

        camera.position.z = 1;
        camera.rotation.x = 1.16;
        camera.rotation.y = -0.12;
        camera.rotation.z = 0.27;

        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector("#bg2"),
            antialias: true,
        });
        renderer.setSize(innerWidth, innerHeight); // set the size to be renderer
        renderer.setPixelRatio(window.devicePixelRatio); // set the resolution

        scene.fog = new THREE.FogExp2(0x03544e, 0.001);
        renderer.setClearColor(scene.fog.color);

        // * set the texture loader
        let loader = new THREE.TextureLoader();

        // let cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        // let cloudMaterial = new THREE.MeshLambertMaterial({
        //     map: loader.load("/src/assets/images/smoke3.png"),
        //     transparent: true
        // });
        // cloudMaterial.blending = THREE.AdditiveBlending;
        const cloudMaterial = new THREE.SpriteMaterial({
            map: loader.load("/src/assets/images/smoke3.png")
        });
        let cloudParticles = [];

        for (let i = 0; i < 2; i++){
            // let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            const cloud = new THREE.Sprite(cloudMaterial);
            
            cloud.position.set(
                Math.random()*800 - 400,
                500,
                Math.random()*500 - 500
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random()*2*Math.PI;
            cloud.material.opacity = 0.55;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }

        // * background color ↓
        // renderer.setClearColor(0x113443, 1); //161616 //262637 //262b33

        // const mesh = new THREE.Mesh(
        //     new THREE.TorusGeometry(1, .3, 16, 100),
        //     new THREE.MeshStandardMaterial({ color: 0xFFF0DB, wireframe: true}) // 0xff6347 0xCF6E44, 0x44d0ff
        // );

        // scene.add(mesh);

        // * adding light

        // const pointLight = new THREE.PointLight(0xffffff, .6);
        const ambientLight = new THREE.AmbientLight(0x555555);
        scene.add(ambientLight);

        let dirLight = new THREE.DirectionalLight(0xff8c19);
        dirLight.position.set(0,0,1);
        scene.add(dirLight);

        let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
        orangeLight.position.set(200,300,100);
        scene.add(orangeLight);
        let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
        redLight.position.set(100,300,100);
        scene.add(redLight);
        let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
        blueLight.position.set(300,300,200);
        scene.add(blueLight);

        const controls = new OrbitControls(camera, renderer.domElement);

        //postprocessing
        const bloomEffect = new POSTPROCESSING.BloomEffect({
            blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
            kernelSize: POSTPROCESSING.KernelSize.SMALL,
            useLuminanceFilter: true,
            luminanceThreshold: 0.3,
            luminanceSmoothing: 0.75
            });
        bloomEffect.blendMode.opacity.value = 1.5;

        const mouse = {
            x: undefined,
            y: undefined,
        };

        function animate() {
            // mesh.rotation.z += 0.003;
            // if (mouse.x != undefined) {
            //     // group.rotation.y = mouse.x * 0.4;
            //     gsap.to(mesh.rotation, {
            //         x: mouse.y * 0.3,
            //         y: mouse.x * 0.3,
            //         duration:2
            //     })
            // }
            cloudParticles.forEach( p => {
                p.rotation.z -= 0.001;
            });
            controls.update();

            renderer.render(scene, camera);

            requestAnimationFrame(animate);

        }

        animate();

        addEventListener("mousemove", () => {
            mouse.x = (event.clientX / innerWidth) * 2 - 1; // ? make it range from -1 to 1
            mouse.y = (event.clientY / innerHeight) * 2 - 1;
        });
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
