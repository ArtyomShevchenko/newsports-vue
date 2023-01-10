<template>
    <RouterLink to="/">
        <span></span>
        <span></span>
        NewSports
    </RouterLink>
</template>

<script>
export default {}
</script>

<style scoped>
a {
    color: var(--text-1) !important;
    display: inline-flex;
    align-items: center;
    
    font-size: 2.8rem;
    height: 2rem;
}

span {
    width: 1rem;
    height: 1rem;
    background-color: var(--text-1);
    transition: transform 200ms;
}

span:first-child {
    transform: translateY(-50%);
}

span:last-child {
    margin-right: .8rem;
    transform: translateY(50%);
}

a:hover span:first-child {
    transform: translateY(50%);
}

a:hover span:last-child {
    transform: translateY(-50%);
}



/* ----------------------------------- */
/* a {
    display: inline-block;
    position: relative;
    max-height: 2rem;
    font-size: 3rem;
    line-height: 2rem;
    aspect-ratio: 1/1;
    padding: 2.5rem;
    color: var(--text-1) !important;
} */

/* a::before,
a::after {
    content: "";
    display: block;
    height: 50%;
    aspect-ratio: 1/1;
    background-color: var(--text-1);
    position: absolute;
    left: 0;
    transition: all .2s;
} */

/* a::before {
    top: 0;
}

a::after {
    bottom: 0;
    transform: translateX(100%);
} */

/* a:hover {
    color: var(--main-2) !important;
} */

/* a:hover::before,
a:hover::after {
    background-color: var(--main-2) !important;
} */

/* a:hover::before {
    transform: translateX(100%);
}

a:hover::after {
    transform: translateX(0);
} */
</style>