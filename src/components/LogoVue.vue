<template>
    <RouterLink to="/">NewSports</RouterLink>
</template>

<script>
export default {}
</script>

<style scoped>
a {
    position: relative;
    max-height: 2rem;
    font-size: 3rem;
    line-height: 2rem;
    aspect-ratio: 1/1;
    padding-left: 2.5rem;
    color: var(--text-1) !important;
}

a::before,
a::after {
    content: "";
    display: block;
    height: 50%;
    aspect-ratio: 1/1;
    background-color: var(--text-1);
    position: absolute;
    left: 0;
    transition: all .2s;
}

a::before {
    top: 0;
}

a::after {
    bottom: 0;
    transform: translateX(100%);
}

/* a:hover {
    color: var(--main-2) !important;
} */

/* a:hover::before,
a:hover::after {
    background-color: var(--main-2) !important;
} */

a:hover::before {
    transform: translateX(100%);
}

a:hover::after {
    transform: translateX(0);
}
</style>