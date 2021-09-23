<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
import gsap from 'gsap';
import * as THREE from 'three';
//* import custom shader
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl';
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl';

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div class="flex h-screen bg-black">
    <div class="w-1/2 flex flex-col justify-center px-8">
      <div style="max-width:300px;" class="mx-auto">
        <h1 class="text-white text-4xl mb-8 font-exo leading-none">The Earth in Space</h1>
        <p class="text-gray-400 mb-8 font-lato">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Veritatis facilis laborum fugit architecto iure rem neque
          nostrum ullam reiciendis, eius quia incidunt vero dolores 
          aliquid quas assumenda qui expedita veniam.
        </p>
        <div>
          <a href="" class="text-white bg-green-600 inline-block px-8 py-4 rounded-full font-lato">Learn More</a>
        </div>
      </div>
    </div>
    <div class="w-1/2" id="earth-container">
      <canvas id="globe"></canvas>
    </div>
  </div>
  <div class="flex h-screen bg-black">
    <h1 class="text-white">Hello down there</h1>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
  mounted() {
    const canvasContainer = document.querySelector('#earth-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasContainer.offsetWidth / canvasContainer.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGL1Renderer({
      canvas: document.querySelector('#globe'),
      antialias: true
    });
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    renderer.setPixelRatio( window.devicePixelRatio);

    // * create objects
    // the Earth
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 30, 30),
      // new THREE.MeshStandardMaterial({
      //   map: new THREE.TextureLoader().load("/src/assets/earth.jpg")
      // })
      new THREE.ShaderMaterial({
        vertexShader, // === vertexShader: vertexShader // cool js feature
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load("/src/assets/earth.jpg")
            // value: new THREE.TextureLoader().load('/src/assets/4k_moon.tif')
            // value: new THREE.TextureLoader().load("/src/assets/dark-earth.jpg")
          }
        }
      })
    );

    scene.add(sphere)

    // the Earth Atmosphere
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(5, 30, 30),
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
    atmosphere.scale.set(1.2,1.2,1.2);

    scene.add(atmosphere)

    const group = new THREE.Group();
    group.add(sphere);
    scene.add(group);

    // * create lights

    const light = new THREE.AmbientLight(0xffffff);
    // scene.add(light);


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
      const z = -Math.random() * 3000;
      starVertices.push(x,y,z);
    }
    // console.log(starVertices);
    starGeometry.setAttribute('position', 
    new THREE.Float32BufferAttribute(
      starVertices, 3
    ));

    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars)

    const mouse = {
      x: undefined,
      y: undefined
    }
    function animate() {
      requestAnimationFrame( animate );
      // camera.position.z -= 0.2;
      sphere.rotation.y += 0.002;
      if (mouse.x != undefined) {
        // group.rotation.y = mouse.x * 0.4;
        gsap.to(group.rotation, {
          x: -mouse.y * 0.8,
          y: mouse.x * 0.8,
          duration:2
        })
      }

      renderer.render(scene, camera);
    }

    animate();

    addEventListener('mousemove', () => {
      mouse.x = (event.clientX / innerWidth) * 2 - 1; // ? make it range from -1 to 1
      mouse.y = (event.clientY / innerHeight) * 2 - 1;
    })
  }
}
</script>

<style>


#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: black; */
  /* text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}

.font-exo {
  font-family: 'Exo 2', sans-serif; /*lato 400 p */
}
.font-lato {
  font-family: 'Lato', sans-serif;
}

#globe {
  /* position: fixed; */
  /* top: 0;
  left: 0; */
}
</style>
