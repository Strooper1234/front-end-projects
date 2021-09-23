import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import "./index.css";

// * Views import
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/about",
            name: "About",
            component: Home,
        },
        {
            path: "/projects",
            name: "Projects",
            component: Projects,
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact,
        },
    ],
});

const store = createStore({
    state() {
        return {
            projectData: null,
            isLoaded:false
        };
    },
    mutations: {
        setUp(state, data) {
            state.projectData = data;
            state.isLoaded = true;
        },
    },
    getters: {
        getAllProjects(state) {
            console.log("GetData " +  state.projectData)
            return state.projectData;
        },
        getProjectById: (state) => (id) => {
            return state.projectData.find(p => p.id === id)
        }
    },
    actions: {
        //action are Async, Mutation are not
        setUp(context) {
            fetch("/src/assets/projects_data.json")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    context.commit('setUp', data);

                    console.log("DATA IS LOADED!");
                });
        }
    }
});

createApp(App).use(router).use(store).mount("#app");
