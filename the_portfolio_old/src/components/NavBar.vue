<template>
    <div id="nav-container">
        
        <nav class="scene-nav">
            <div class="logo">
                <a href="/#home"><h1>Felipe Rivera</h1></a>
            </div>
            <ol class="scene-nav-list">
                <!-- <li class="scene-nav-item" v-for="(params, index) in maxScene">
                    <button class="scene-nav-btn" @click="scene = index" :class="{ 'o-active': scene === index }">
                        <a href="#">Hello</a>
                    </button>
                </li> -->

                <li class="scene-nav-item" v-for="item in items" :key="item.text">
                    <!-- <router-link :to="{ name: item.text }" class="scene-nav-btn">
                        <p>{{ item.text }}</p>
                    </router-link> -->
                    <a :href="item.link" class="scene-nav-btn" :class="{active: isActive(item.link)}">
                        <p>{{item.text}}</p>
                    </a>
                </li>
                <!-- <a href="#about" class="scene-nav-btn" :class="{active: isActive('#about')}">About 2</a> -->

                
            </ol>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scene: 0,
            maxScene: 8,
            items: [
                { text: "Home", link: "#home"},
                { text: "About", link: "#about"},
                { text: "Projects", link: "#projects"},
                { text: "Contact", link: "#contact"}
            ]
        }
    },
    mounted() {
        
    },
    methods: {
        isActive(link) {
            // console.log(link)
            if (link === this.$router.currentRoute.value.hash) {
                return true;
            }
            return false;
        }
    },
    computed: {
        
    }
}

</script>

<style>
/* .nav-container h1 {
    display: flex;
} */
.nav-container {
    position: fixed;
    top: 0;
    z-index:200;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    width: 100%;
    /* width: 100vw;
    height: 100vh; */
    overflow: hidden;
}

.scene-nav {
    position: relative;
    display: flex;
    justify-content: space-between;
    background: var(--background-color);
    padding: 0px 2em;
}
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--accent-color-text);
    font-size: 22px;
    font-weight: 100;
    font-style: italic;
    /* padding-left: 20px; */
}
.logo h1::before {
    font-family: "Lato";
}

.scene-nav-list {
    display: flex;
    flex-direction: row;
    /* flex-direction: row-reverse; */
    /* align-items:flex-end; */
    justify-content: center;
    /* height: 6vh; */
    padding: 0;
    transform: scaleY(0.6);
}

.scene-nav-item {
    display: block;
}

.scene-nav-item:nth-child(even) {
    transform: scaleY(-1);
}

.scene-nav-item:not(:first-child) {
    margin-left: -8px;
}

.scene-nav-btn {
    display: block;
    
    width: 50px;
    height: 50px;
    border: none;
    /* background: #cf6e4454; #ff63471e; */
    background: rgba(var(--primary-color-rgb), 0.2);
    /* background: var(--primary-color); */
    outline: none;
    cursor: pointer;
    transition: 500ms;
    -webkit-clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
    clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);

}
.scene-nav-btn.active {
    width: 160px;
    /* background: #ff6347; */
    /* background: #CF6E44; */
    background: var(--primary-color);
}
.scene-nav-btn:hover{
    /* background: #64fafa; */
    width: 160px;
}
.scene-nav-btn p{
    position: relative;
    transform: scaleY(1.66); /* set back the y scale for just the text */
    top:25%;
    /* height: 100%; */
    color: var(--accent-color-text);
    display: none;
}
.scene-nav-item:nth-child(even) p {
    transform: scaleY(-1.66);
}

.scene-nav-btn:hover p {
    
    display: block;
}
.scene-nav-btn.active p {
    display: block;
    color: var(--accent-color-text-dark);
}
</style>