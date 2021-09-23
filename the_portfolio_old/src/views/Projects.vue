<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import { Store, useStore, mapState } from 'vuex';
</script>
<template>
    <div class="projects-container">
        <h2>Projects</h2>
        <br />
        <br />
        <div v-if="projectData">
            <ul class="projects" v-for="data in projectData">
                <!-- <li style="color: red">{{ data.title }}</li> -->
                <ProjectCard :id="data.id" class="project-card"/>
                <br>
            </ul>
        </div>
        <p v-else>Loading...</p>
        <!-- <ProjectCard/> -->
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         // projectData: null,
    //         // isLoaded: false
    //         // store: useStore()
    //     };
    // },
    setup() {
        // this.store = useStore();
        
        // this.isLoaded = true;
    },
    beforeCreate() {
    
    },
    created() {
        // fetch("/src/assets/projects_data.json")
        // .then(response => response.json())
        // .then((data) => {
        //     console.log(data);
        //     this.projectData = data;
        //     this.isLoaded = true;
        //     console.log("DATA IS LOADED!")
        // });
    },
    mounted() {
        // console.log(this.$store.getters.getAllProjects)
        // this.projectData = this.$store.getters.getAllProjects;

    },
    computed: {
        // use mapState to link the state for any changes it might happen
        // like it takes some time to get the data in
        ...mapState({
            projectData: state => state.projectData
        })
    }
};
</script>

<style scoped>
.projects-container {
    min-height: 100vh;
    /* background: cyan; */
    padding: 100px 0;
}

/* ul.projects:nth-child(odd) {
    display: flex;
    margin: 100px;
    flex-direction: row-reverse;
} */
</style>
