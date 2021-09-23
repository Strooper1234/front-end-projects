<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { useStore } from 'vuex'

import HelloWorld from "./components/HelloWorld.vue";
import ThreeBG from "./components/ThreeBG.vue";
import ThreeBG2 from "./components/ThreeBG2.vue";
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Contact from './views/Contact.vue';
</script>

<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
    <div class="app-container">
        <!-- <ThreeBG> </ThreeBG> -->
        <ThreeBG2/>
        <NavBar id="navbar" />
        <!-- <router-link to="/#about" class="scene-nav-btn">About 2</router-link> -->
        <!-- <a href="About" >THE LINK</a> -->
        <!-- <router-view :key="$route.path" /> -->
        <!-- <section name="section" ref="/section">New Section</section> -->
        <!-- <div class="scrollable">

            <Home class="section" id="home"/>
            <br>
            <About class="section" id="about"/>
            <br>
            <Projects class="section" id="projects"/>
            <br>
            <Contact class="section" id="contact"/>
            <br>

        </div> -->
        <!-- <div class="first-view"></div> -->
        <!-- <div class="hero 10"> -->
    </div>
</template>

<script>

// TODO: add FOOTER!

export default {
    // components: { About },
    data() {
        return {
            canvas: null,
            sectionObserver: null
        };
    },
    beforeCreate() {
        // this.store = useStore();
        this.$store.dispatch("setUp");
        
    },
    created() {
        
    },
    beforeDestroy() {
        this.sectionObserver.disconnect();
    },
    mounted() {
        
        this.observeSections();
    },
    methods: {
        observeSections() {
            // try {
            //     this.sectionObserver.disconnect();
            // } catch (error) {}

            //? rootMargin: '0px 0px'
            const options = {
                root: document.querySelector("#app-container"),
                rootMargin: '0px 0px',
                treshold: 1
            }

            this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options);

            // * observe each .section
            const sections = document.querySelectorAll('.section');
                // console.log(sections)
            sections.forEach( section => {
                // console.log(section)
                this.sectionObserver.observe(section);
            })
        },
        sectionObserverHandler (entries) {
            // console.log(entries)
            for (const entry of entries) {
                // console.log("Entry", entry)
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    // ! we could use replace instead of push to not clutter the route history
                    // console.log("intersecting " + sectionId);
                    this.$router.replace({ name: this.$route.name, hash: `#${sectionId}` });
                    // console.log(this.$router.currentRoute.value.hash);
                }
            }
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    scroll-behavior: smooth;
    /* height: 100vh;
  width: 100vw; */
    /* margin-top: 60px; */
}
:root {
    --background-color: #113443;
    --bg:#113443 ;
    --background-color-rgb: 17, 52, 67;
    --primary-color: #96D9F5;
    --primary-color-rgb: 150, 217, 245;

    --primary-color-text: #B3DBED;
    --secondary-color-text: #b3c5cb;

    --title-color: white;
    --title-color-rgb: 255, 255, 255;

    --accent-color: #FFF0DB;
    /* --accent-color: #ffedd4; */
    --accent-color-rgb:255, 240, 219;

    --accent-color-dark: #504b47;
    /* --accent-color-dark: #464646; */
    --accent-color-dark-rgb: 70, 70, 70;

    --accent-color-text: #FFF0DB;
    --accent-color-text-dark: #3d3b38;
}

.scrollable {
    scroll-behavior: smooth;
}

#app h1,
#app h2,
#app h3,
#app h4 {
    /* color: white; */
    font-family: "Exo 2", sans-serif;
}
p {
    font-family: "Lato", sans-serif;
    /* color: var(--secondary-color-text); */
    letter-spacing: .45px;
}
#navbar h1 {
    font-family: "Lato",  sans-serif;
    letter-spacing: 2px;
}

#app h2 {
    font-size: 48px;
    color: var(--accent-color);
}
/* 
#bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
} */
#bg2 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
}

#navbar {
    position: fixed;
    width: 100%;
}
</style>
