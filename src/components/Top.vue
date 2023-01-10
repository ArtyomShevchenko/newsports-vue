<template>
    <header>
        <div class="wrapper">
            <div class="content">
                <div>
                    <h1>discover the new sports online</h1>
                    <p>13 - 14 june online event</p>
                    <p>Lorem ipsum dolor amet, conse ctetur adipiscing elit, sed</p>
                    <button>read more</button>
                </div>
                <div>
                    <img src="@/assets/image/image_1.jpg" alt="Man">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header article section {
    padding-right: 90px;
}

@media (max-width: 768px) {
    header article section {
        padding-right: 0;
    }
}

header article span {
    font-size: 26px;
    color: var(--pink);
    font-weight: 400;
}

header article p {
    max-width: 360px;
    font-weight: 300;
}
</style>