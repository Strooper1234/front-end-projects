<template>
    <div class="home-container">
        <div class="home-title">
            <h1 class="name">Felipe Rivera</h1>
            <h3>Machine Learning / Full-Stack / Data Scientist Programmer</h3>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.home-container {
    height: 100vh;
    width: 100%;
    /* background: #ddaa19; */
    display: flex;
    /* align-content: center; */
    /* margin-left: 6vw; */
    overflow: hidden;
}

.home-title {
    padding-left: 6vw;
    padding-right: 6vw;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
}

.name {
    color: var(--accent-color-text);
    font-size: 64px;
    margin-bottom: -1vh;
    font-weight: 400;
    text-transform: capitalize;
    /* border: 1px solid var(--background-color); */
    
    text-shadow: 0px 0px 4px var(--background-color);
}

.home-title h3 {
    /* color: #d4b7ab; */
    color: var(--primary-color-text);
    font-weight: 300;
    font-size: 24px;
    /* background: rgba(var(--background-color-rgb), 0.3);
    box-shadow: 0 0 2em var(--background-color); */
    border: none;
    border-radius: 0.5em;
    margin: 4px 20px 4px -20px;
    padding: 6px 20px;
    text-shadow: 2px 2px 1px black; /* 0 0 0.15em #d4b7ab; */
    /* box-shadow: 0em 0.4em 1em rgba(15,15,15,0.3); */
}
</style>
