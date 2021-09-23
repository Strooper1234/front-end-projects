<template>
    <div v-if="projectInfo" class="project-container" :class="{ reverse: (id + 1) % 2 }">
        <div class="project-summary">
            <h3>{{ projectInfo.title }}</h3>
            <p>{{ projectInfo.description }}</p>
        </div>
        <div class="project-image">
            <img :src="projectInfo.image_path" alt="">
        </div>
    </div>
</template>

<script>
import { Store, useStore, mapState } from "vuex";
export default {
    data() {
        return {
            projectInfo: null
        }
    },
    props: {
        // projectInfo: Object,
        id: 0
    },
    setup() {
        // console.log(this)
    },
    mounted() {
        // console.log(this)
        // now we dont need to map it since the pure existance of 
        // this component its because the data exists
        this.projectInfo = this.$store.getters.getProjectById(this.id);
    },
};
</script>

<style>
.project-container {
    /* min-height: 30vh; */
    width: 100%;
    /* background: cyan; */
    display: flex;
    padding: 6px 5vw;
    /* margin: 6px 26px; */
    margin-bottom: 5vh;
}
.reverse {
    flex-direction: row-reverse;
}

.project-summary {
    /* position: relative; */
    width: 45%;
    min-height: 35vh;
    background: rgba(var(--accent-color-rgb), 0.95);
    padding: 30px 26px;
}
.project-summary h3 {
    margin: 20px 0;
    font-size: 30px;
    color: rgba(var(--accent-color-dark-rgb), 1);
    text-transform: capitalize;
}
.project-summary p {
    color: rgba(var(--accent-color-dark-rgb), 0.70);
    text-align: left;
}
.project-image {
    width: 55%;
    /* min-height: 50vh; */
    background: rgba(var(--accent-color-dark-rgb), 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
}
.project-image img {
    width: 95%;
    /* min-width: 100%; */
    /* height: 100%; */
    object-fit: cover; /* retain aspect ratio */
    padding: 3%;
}
</style>
