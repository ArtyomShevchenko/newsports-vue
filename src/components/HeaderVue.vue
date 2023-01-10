<template>
    <header>
        <div class="wrapper">
            <div class="content">
                <LogoVue color="ggg" height="10000%"/>
                <nav>
                    <RouterLink to="/team">team</RouterLink>
                    <RouterLink to="/competition">competition</RouterLink>
                    <RouterLink to="/about">about us</RouterLink>
                    <RouterLink to="/contact">contact</RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import LogoVue from '@/components/LogoVue.vue';

export default {
    components: { LogoVue }
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    padding: 4rem 0;
    background-color: var(--main-1);
    border-bottom: 1.6rem solid var(--main-2);
}

.wrapper {
    max-width: 133rem;
    margin: 0 auto;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
}

nav {
    display: flex;
    gap: 4rem;
}

.router-link-active {
    color: var(--main-2);
}

nav a {
    position: relative;
    line-height: 3.2rem;
}

nav a::before {
    content: "";
    width: 0;
    height: .4rem;
    background-color: var(--main-2);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all .2s;
}

nav a:hover::before {
    width: 100%;
}
</style>