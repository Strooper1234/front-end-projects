<template>
    <div id="nav-container">
        <nav class="scene-nav">
            <ol class="scene-nav-list">
                <!-- <li class="scene-nav-item" v-for="(params, index) in maxScene">
                    <button class="scene-nav-btn" @click="scene = index" :class="{ 'o-active': scene === index }">
                        <a href="#">Hello</a>
                    </button>
                </li> -->

                <li class="scene-nav-item" v-for="item in items">
                    <button class="scene-nav-btn" @click="item.link" :class="{ 'o-active': scene === index }">
                        <p>{{ item.text }}</p>
                    </button>
                </li>
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
                { text: "Home", link: "#"},
                { text: "About", link: "#"},
                { text: "Projects", link: "#"},
                { text: "Contact", link: "#"},
            ]
        }
    },
    mounted() {
        setTimeout(() => {
            this.scene = this.maxScene - 3
        }, 1000)
    }
}
</script>

<style>
.nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.scene-nav {
    position: relative;
}

.scene-nav-list {
    display: flex;
    flex-direction: row;
    /* flex-direction: row-reverse; */
    /* align-items:flex-end; */
    justify-content: center;
    margin: 0;
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
    background: #cf6e4454; /*#ff63471e;*/
    outline: none;
    cursor: pointer;
    transition: 500ms;
    -webkit-clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
    clip-path: polygon(25px 0, calc(100% - 25px) 0, 100% 100%, 0 100%);

}
.scene-nav-btn.o-active {
    width: 160px;
    /* background: #ff6347; */
    background: #CF6E44;
}
.scene-nav-btn:hover{
    /* background: #64fafa; */
    width: 160px;
}
.scene-nav-btn p{
    color: white;
    display: none;
}
.scene-nav-item:nth-child(even) p {
    transform: scaleY(-1);
}

.scene-nav-btn:hover p {
    
    display: block;
}
.scene-nav-btn.o-active p {
    display: block;
}
</style>