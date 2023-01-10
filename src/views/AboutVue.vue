<template>
    <section class="wrapper">
        <h2>about us</h2>
        <p>lorem ipsum dolor sit amet, consecteur adupisicing elit, sed do eiusmod tempor incididunt labore
            et dolore magna aliqua. ut enim ad minim</p>
        <img src="@/assets/image/image_2.jpg" alt="Girl use VR">
        <button class="post-button">read more</button>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

img {
    position: static;
    max-height: 500px;
    min-height: 300px;
    max-width: 100%;
    object-fit: cover;
    object-position: left;
}

h2,
p,
button {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
}
</style>