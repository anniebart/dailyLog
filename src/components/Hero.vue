<template>
     <div class="hero flex">
        <div class="hero-text">
        <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h1>
        <a href="/signup"><button class="lg-btn">
            sign up
        </button></a>
    </div>
    </div>
</template>
<script>
export default {
    name: "Hero"
}
</script>
<style scoped>
.hero {
    height: 100vh;
    width: 100vw;
    background-color: #203042;
    min-height: 500px;

}
.hero h1 {
    color: #E7E8E9;
    font-size: 2.2em;
    font-weight: 600;
}
.hero-text {
    width: 60%;
}
</style>