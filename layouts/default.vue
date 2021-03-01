<template lang="pug">
div.default
  Nav
  nuxt.footer-padding

</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav, 
  },

}
</script>

<style>
.default {
  position: relative;
  min-height: 78vh;
}

a {
  color: #e74898;
  font-weight: 700;
}

p, li{
  margin-bottom: 12px;
}

html {
  
  font-family: 'Franklin Gothic Medium', 'Lato', sans-serif;
  /* font-weight: 800; */
  word-spacing: 1px;
  line-height: 1.3;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2 {
    font-family: 'Franklin Gothic Medium', 'Lato', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
   font-family: 'Franklin Gothic Medium', 'Lato', sans-serif;


  /* background-image: url(../assets/bg.svg); */
  background-color: #f3f3f3;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.footer-padding {
  padding-bottom: 2.5rem;
}

.ucu-main {
  background-color: #e74898;
}
.nusu {
  background-color: #1f4872;
}
</style>
