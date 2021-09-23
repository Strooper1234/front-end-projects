<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <canvas id="bg"></canvas>
  
  <main>

      <header>
        <h1>Felipe Rivera</h1>
        <p>🚀 Welcome to my website!</p>
      </header>


      <blockquote>
        <p>I like making stuff and putting it on the internet</p>
      </blockquote>

      <section>
        <h2>📜 Manifesto</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </section>

      <section class="light">
        <h2>👩🏽‍🚀 Projects</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>🏆 Accomplishments</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </section>

      <blockquote>
        <p>The best way out is always through <br>-Robert Frost</p>
      </blockquote>

      <section class="left">
        <h2>🌮 Work History</h2>

        <h3>McDonalds</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Burger King</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Taco Bell</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </section>

      <blockquote>
        <p>Thanks for watching!</p>
      </blockquote>


    </main>
</template>

<script>
export default {
  setup() {
    
  },
  // data() {
  //   return {
  //     renderer: null,
  //     camera: null,
  //     scene: new THREE.Scene()
  //   }
  // },
  mounted() {

    // * creating the bare minimum: scene, camera, and renderer
    const scene = new THREE.Scene();
//                                        (FOV, aspect ration, view frustum near, view frustum far)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    // console.log("canvas")
    // console.log(document.querySelector('#bg'))
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight);

    //moving the camera further away from the center
    camera.position.setZ(30);

    // * creating the torus with its mesh
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100); //.TorusGeometry(10, 3, 16, 100);

    const material = new THREE.MeshStandardMaterial( {color: 0xFF6347});

    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // * adding the lights

    const pointLight = new THREE.PointLight(0xffffff, 1, 50);
    pointLight.position.set(5,5,5)

    const ambientLight = new THREE.AmbientLight(0xffffff);

    scene.add(pointLight, ambientLight);

    // * adding helpers
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);

    // scene.add(lightHelper, gridHelper);

    // * adding camera control
    // renderer.domElement will be able to listen to mouse events on the screen
    // const controls = new OrbitControls(camera, renderer.domElement); 

    // * generating stars!
    function addStar() {
      const star_geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial( { color: 0xffffff });
      const star = new THREE.Mesh( star_geometry, material);

      const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100) );
      

      star.position.set(x,y,z);
      scene.add(star);

    }

    Array(200).fill().forEach(addStar);

    // * add space background
    const spaceTexture = new THREE.TextureLoader().load("/src/assets/space.jpg");
    scene.background = spaceTexture;

    // * add the moon
    const moonTexture = new THREE.TextureLoader().load('/src/assets/moon.jpg');
    const moonNormal = new THREE.TextureLoader().load('/src/assets/normal.jpg');

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: moonNormal
      })
    );

    scene.add(moon)
    moon.position.z = 30;
    moon.position.setX(-10);

    // * move camera when user scrolls
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;

      moon.rotation.x += 0.015;
      moon.rotation.y += 0.0075;
      moon.rotation.z += 0.005;

      // top its always going to be negative, so mult negative
      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;

    }
    
    document.body.onscroll = moveCamera


    // * the animate function that makes everything moves :D
    function animate() {
      requestAnimationFrame( animate );

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.003;

      // controls.update();

      renderer.render(scene, camera);
    }

    // renderer.render(scene, camera);
    animate();
    
  },
  methods: {
    // animate() {
    //   requestAnimationFrame( this.animate );
    //   this.renderer.render(this.scene, this.camera)
    // }
  }
}
</script>
<style>
// ? delete #app
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

canvas {
  position: fixed;
  top: 0;
  left: 0;
}

:root {
  --dark-bg: rgba(15, 15, 15, 0.95);
  --spacing: 350px;

  font-family: brandon-grotesque, sans-serif;
  font-weight: 400;
  font-style: normal;
}


main {
  width: 100vw;
  color: white;
  z-index: 99;
  position: absolute;
  width: 100%;
  margin: 0px auto;
  padding: 120px 0px;
  
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

h1, h2, h3, blockquote {
  font-family: elevon, sans-serif;
  font-weight: 700;
  font-style: normal;
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
}



  header {
    background: var(--dark-bg);
    grid-column: 2 / span 5;
    font-size: 2.5rem;
    padding: 2rem;
    margin-bottom: var(--spacing);
  }

  section {
    grid-column: 2 / 8;
    padding: 1rem;
    background: var(--dark-bg);
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: var(--spacing);
  }

  blockquote {
    margin: 0;
    padding: 0;
    grid-column: 2 / span 9;
    margin-bottom: var(--spacing);
  }

  blockquote p {
    color: black;
    background-color: white;
    font-size: 4rem;
    display: inline;
    line-height: 1;
  }

  .left {
    grid-column: 6 / 12;
  }
</style>
