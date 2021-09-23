<script setup> 

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import atmosphereVertexShader from '../shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from '../shaders/atmosphereFragment.glsl';

</script>

<template>
  <canvas id="earth-canvas"></canvas>
</template>

<script>
export default {
    mounted() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 4000);
        camera.position.z = 3;
        const renderer = new THREE.WebGL1Renderer({
            canvas: document.querySelector("#earth-canvas")
        })
        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);


        // * EARTH

        // const earthGroup = new THREE.Group();

        const earth_geo = new THREE.SphereBufferGeometry(1, 32, 32);
        const earth_material = new THREE.MeshPhongMaterial({
            map: new THREE.TextureLoader().load('/src/assets/2k_earth_daymap.jpg'),
            normalMap: new THREE.TextureLoader().load('/src/assets/2k_earth_normal_map.tif'),
            normalScale: new THREE.Vector2(20,20),
            specularMap: new THREE.TextureLoader().load('/src/assets/2k_earth_specular_map.tif'),
            specular: 0x242424
            // specular: new THREE.Color('grey')
        })//new THREE.TextureLoader().load('./../assets/earth.jpg');

        
        const earth_mesh = new THREE.Mesh(earth_geo, earth_material);
        earth_mesh.name = "Earth";

        const clouds = new THREE.Mesh(
            new THREE.SphereGeometry(1.05,32,32),
            new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load('/src/assets/2k_earth_clouds.jpg'),
                alphaMap: new THREE.TextureLoader().load('/src/assets/2k_earth_clouds.jpg'),
                side: THREE.DoubleSide,
                opacity: 1,
                transparent: true,
                depthWrite: false
            })
        )

        earth_mesh.add(clouds);

         // the Earth Atmosphere
        const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 30, 30),
        // new THREE.MeshStandardMaterial({
        //   map: new THREE.TextureLoader().load("/src/assets/earth.jpg")
        // })
        new THREE.ShaderMaterial({
            vertexShader: atmosphereVertexShader, // === vertexShader: vertexShader // cool js feature
            fragmentShader: atmosphereFragmentShader,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        })
        );
        atmosphere.scale.set(1.057,1.075,1.075);

        scene.add(atmosphere)

        // earthGroup.add(earth_mesh);
        // scene.add(earth_mesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        const pointLight = new THREE.DirectionalLight(0xffffff, 1.4);
        pointLight.position.set(25,0,35)
        scene.add(pointLight, ambientLight);

        // * let's get the cordinates!
        //47.6062° N, 122.3321° W ← Seattle
        const point = {
            lat: 47.6062,
            lon: 122.3321
        }
        // 33.8688° S, 151.2093°
        // lat: -33.8688 - 90,
        // lon: 151.2093 - 90
        // lat: -33.8688,
        // lon: -151.2093
        const point2 = {
            lat: 38.9072,
            lon: 77.0369
        }

        const pos = this.computePositionFromCords(point);
        // console.log(pos);

        const mesh1 = new THREE.Mesh(
            new THREE.SphereBufferGeometry(.01,10,10),
            new THREE.MeshBasicMaterial({
                color: 0xff0000
            })
        )

        mesh1.position.set(pos.x, pos.y, pos.z);
        // mesh1.geometry.center(0,0,0);
        mesh1.name = "Seattle";
        // mesh1.position.setFromMatrixPosition( earthGroup.getChildByName("Earth").matrixWorld)
        earth_mesh.add(mesh1);
        // mesh1.position.set(pos.x, pos.y, pos.z);
        // scene.add(mesh1);

        // * second point

        let pos2 = this.computePositionFromCords(point2);
        console.log(pos2);

        const mesh2 = new THREE.Mesh(
            new THREE.SphereBufferGeometry(.01,10,10),
            new THREE.MeshBasicMaterial({
                color: 0x00ff00
            })
        )

        mesh2.position.set(pos2.x, pos2.y, pos2.z);
        
        // scene.add(mesh2)
        earth_mesh.add(mesh2);

        // * create stars

        const starGeometry = new THREE.BufferGeometry()
        const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff
        })

        // {
        //   const x = (Math.random() - 0.5) * 2000;
        //   const y = (Math.random() - 0.5) * 2000;
        //   const z = -Math.random() * 2000;
        //   return x, y, z;

        //   // console.log(the_star);
        // }
        const starVertices = [];
        for( let i = 0; i < 10000; i++){
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 3000 - 200;
        starVertices.push(x,y,z);
        }
        // console.log(starVertices);
        starGeometry.setAttribute('position', 
        new THREE.Float32BufferAttribute(
        starVertices, 3
        ));

        const stars = new THREE.Points(starGeometry, starMaterial);

        scene.add(stars)


        // * adding camera control
        // renderer.domElement will be able to listen to mouse events on the screen
        const controls = new OrbitControls(camera, renderer.domElement);

        // const gridHelper = new THREE.GridHelper(20, 20, 0xff0000);

        // scene.add(gridHelper);


        scene.add(earth_mesh);

        // console.log(earthGroup.getChildByName("Seattle"))

        // function resize() {
        //     var aspect = window.innerWidth / window.innerHeight;
        //     renderer.setSize(window.innerWidth, window.innerHeight);
        //     camera.aspect = aspect;
        //     camera.updateProjectionMatrix();
        // }


        function animate() {
            // resize();
            requestAnimationFrame(animate);

            mesh2.position.set(pos2.x, pos2.y, pos2.z);
            
            // mesh1.position.set(0,0,0);
            // mesh1.rotateY(0.02);
            // mesh1.translateX(pos.x);
            // mesh1.translateY(pos.y);
            // mesh1.translateZ(pos.z);
            // mesh1.translate(pos.x);

            earth_mesh.rotation.y += .001;
            clouds.rotation.y -= .0003;
            clouds.rotation.x -= .00009;

            // mesh2.position.z = earth_mesh.position.z;
            // mesh2.position.x = earth_mesh.position.x;
            // mesh1.rotation.x -= 1;
            // earth_mesh.getChildByName("Seattle").rotation.y += 1
            // mesh1.position.setFromMatrixPosition( earthGroup.getChildByName("Earth").matrixWorld)
            // mesh1.setRotationFromMatrix(earthGroup.getChildByName("Seattle").matrixWorld)
            

            controls.update();
            renderer.render(scene, camera);
        }

        

        animate();

    },
    methods: {
        computePositionFromCords(point) {
            const lon = point.lon * (Math.PI/180);
            const lat = point.lat * (Math.PI/180);

            const r = 1.01

            const x = r * Math.cos(lat) * Math.cos(lon);
            const z = r * Math.cos(lat) * Math.sin(lon);
            const y = r * Math.sin(lat);

            return {x,y,z}
        }
    }
}
</script>

<style>
canvas {
    position: absolute;
    top: 0;
    left: 0;
}
</style>