import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports/optimized/three.js';
import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js';

const vertexShader = `
varying vec2 vertexUV;
varying vec3 vertexNormal;

void main() {
    // uv its given by three.js
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    // position its given by three.js
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}
`
const fragmentShader = `
uniform sampler2D globeTexture;

varying vec2 vertexUV;
varying vec3 vertexNormal;
void main() {

    float intesity = 1.05 - dot(vertexNormal, vec3(0.0,0.0,1.0));
    vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intesity, 1.5);
    
    gl_FragColor = vec4(atmosphere + texture2D(globeTexture, vertexUV).xyz, 1.0);
}
`

const atmosphereVertexShader = `
varying vec3 vertexNormal;

void main() {
    // uv its given by three.js
    vertexNormal = normalize(normalMatrix * normal);
    // position its given by three.js
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
}
`

const atmosphereFragmentShader = `
varying vec3 vertexNormal;

void main() {
    float intesity = pow(0.65 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intesity;
}
`


const canvasContainer = document.querySelector("#earth-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    canvasContainer.offsetWidth / canvasContainer.offsetHeight,
    0.1,
    1000
);
camera.position.z = 15;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#globe"),
    antialias: true,
});
renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);

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
                value: new THREE.TextureLoader().load("/src/assets/earth.jpg"),
                // value: new THREE.TextureLoader().load('/src/assets/4k_moon.tif')
                // value: new THREE.TextureLoader().load("/src/assets/dark-earth.jpg")
            },
        },
    })
);

scene.add(sphere);

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
        side: THREE.BackSide,
    })
);
atmosphere.scale.set(1.2, 1.2, 1.2);

scene.add(atmosphere);

const group = new THREE.Group();
group.add(sphere);
scene.add(group);

// * create lights

const light = new THREE.AmbientLight(0xffffff);
// scene.add(light);

// * create stars

const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
});

// {
//   const x = (Math.random() - 0.5) * 2000;
//   const y = (Math.random() - 0.5) * 2000;
//   const z = -Math.random() * 2000;
//   return x, y, z;

//   // console.log(the_star);
// }
const starVertices = [];
for (let i = 0; i < 10000; i++) {
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = -Math.random() * 3000;
    starVertices.push(x, y, z);
}
// console.log(starVertices);
starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);

scene.add(stars);

const mouse = {
    x: undefined,
    y: undefined,
};
function animate() {
    requestAnimationFrame(animate);
    // camera.position.z -= 0.2;
    sphere.rotation.y += 0.002;
    if (mouse.x != undefined) {
        // group.rotation.y = mouse.x * 0.4;
        gsap.to(group.rotation, {
            x: -mouse.y * 0.8,
            y: mouse.x * 0.8,
            duration: 2,
        });
    }

    renderer.render(scene, camera);
}

animate();

addEventListener("mousemove", () => {
    mouse.x = (event.clientX / innerWidth) * 2 - 1; // ? make it range from -1 to 1
    mouse.y = (event.clientY / innerHeight) * 2 - 1;
});
