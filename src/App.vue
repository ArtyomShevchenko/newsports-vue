<template>
  <HeaderVue></HeaderVue>
  <RouterView></RouterView>
</template>

<script>

export default {
  name: 'App',
  components: {
    FooterComponent, HeaderComponent
  }
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
  --blue: #0101a3;
  --dark-blue: rgba(0, 0, 0, 0.2);
  --dark-mask: rgba(0, 0, 0, 0.6);
  --pink: #e92bde;
  --white: #ffffff;
  --light: #b6b6d3;
  --transparent: rgba(0, 0, 0, 0);
  --black: #000000;
  --font: "Bebas Neue", monospace;
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
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: var(--blue);
  color: var(--white);
  font-family: var(--font);
  font-size: 22px;
  text-transform: uppercase;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
