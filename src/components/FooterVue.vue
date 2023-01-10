<template>
    <footer>
        <div class="container">
            <div class="wrapper">
                <div class="navigation">
                    <LogoVue />
                    <nav>
                        <ul>
                            <li>
                                <RouterLink to="/team">team</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/competition">competition</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/about">about us</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/contact">contact</RouterLink>
                            </li>
                            <!-- </ul>

                        <ul> -->
                            <li>
                                <RouterLink to="/faqs">faqs</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/privacy">politicy privacy</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/cookies">cookies</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <CopirightVue />
        </div>
    </footer>
</template>

<script>
import CopirightVue from "@/components/CopirightVue.vue";
import LogoVue from "@/components/LogoVue.vue";

export default {
    components: { CopirightVue, LogoVue }
}
</script>

<style scoped>
footer {
    background: linear-gradient(rgba(0, 0, 0, 0.6), var(--main-1));
}

.wrapper {
    max-width: 133rem;
    padding: 6rem 0;
}

.navigation {
    display: flex;
    flex-direction: column;
    gap: 9rem;
}

nav {
    display: flex;
    gap: 6rem;
}

nav ul {
    columns: 2;
    column-gap: 200px 2rem;
}

nav ul li {
    margin-bottom: 2rem;
}

.navigation a {
    align-self: flex-start;
}
</style>