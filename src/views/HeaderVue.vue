<template>
    <header>

        <div class="navigation">
            <div class="wrapper">
                <RouterLink class="logo" to="/">
                    newsports
                </RouterLink>

                <nav>
                    <RouterLink to="/our-team">team</RouterLink>
                    <RouterLink to="/with-us">competition</RouterLink>
                    <RouterLink to="/about-us">about us</RouterLink>
                    <RouterLink to="/contac-us">contact</RouterLink>
                </nav>
            </div>
        </div>

        <article>
            <section>
                <h1>discover the new sports online</h1>
                <p>13 - 14 june online event</p>
                <p>Lorem ipsum dolor amet, conse ctetur adipiscing elit, sed</p>
                <button>read more</button>
            </section>
            <section>
                <img src="@/assets/image/image_1.jpg" alt="Man">
            </section>
        </article>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    width: 100%;
    max-height: 100%;

    padding: 45px 0;
    background-color: var(--blue);
    border-bottom: 16px solid var(--pink);
}

.navigation .wrapper {
    display: flex;
    justify-content: space-between;
}


.navigation nav {
    display: flex;
    flex-direction: row;
    gap: 40px;
}

@media (max-width: 768px) {
    header .menu-container .menu ul {
        display: flex;
        flex-direction: column;
        max-height: 0px;
        transition: all 0.3s;
        opacity: 0;
        pointer-events: none;
    }
}

header .menu-container .menu ._active {
    max-height: 200px;
    margin-top: 80px;
    text-align: end;
    -webkit-animation: visibleAnimation 0.4s;
    animation: visibleAnimation 0.4s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}

@-webkit-keyframes visibleAnimation {
    75% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes visibleAnimation {
    75% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

header .wrapper-nav {
    max-width: 1330px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

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