<template>
  <div id="app">
    <vue-qr text="Hello world!" :autoColor='true' :bgSrc='src' :logoSrc="src2" size="400"/>
  </div>
</template>

<script>
import VueQr from '../../src/main.js'
export default {
  name: 'app',
  components: {
    VueQr
  },
  data() {
    return {
      src: require("./assets/bg1.png"),
      src2:require("./assets/avatar.png")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
