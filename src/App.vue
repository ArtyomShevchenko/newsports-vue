<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<script>
import HeaderVue from "@/components/HeaderVue.vue"
import FooterVue from "@/components/FooterVue.vue"

export default {
  name: 'App',
  components: { HeaderVue, FooterVue }
}
</script>

<style>
@font-face {
  font-family: 'Bebas Neue';
  src: url('./assets/font/BebasNeueBook.woff2') format('woff2'),
    url('./assets/font/BebasNeueBook.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Bebas Neue';
  src: url('./assets/font/BebasNeueRegular.woff2') format('woff2'),
    url('./assets/font/BebasNeueRegular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Bebas Neue';
  src: url('./assets/font/BebasNeueBold.woff2') format('woff2'),
    url('./assets/font/BebasNeueBold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}

:root {
  --main-1: #0101a3;
  --main-2: #e92bde;
  --text-1: #ffffff;
  /* --black: #000000; */
  --text-2: #000000;

  --dark-blue: rgba(0, 0, 0, 0.2);
  --dark-mask: rgba(0, 0, 0, 0.6);
  --light: #b6b6d3;
  --transparent: rgba(0, 0, 0, 0);

  --font: "Bebas Neue";
  --wrapper: 1190px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  pointer-events: fill;
  user-select: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
span {
  color: inherit;
}

html {
  scroll-behavior: smooth;
  font-size: 10px;
}

#app {
  margin-top: 12.6rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  background-color: var(--main-1);
  color: var(--text-1);
  font-family: var(--font);
  font-size: 22px;
  text-transform: uppercase;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
