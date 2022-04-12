<template>
  <div>
    <vue-qr
      text="test test test test test test "
      :gifBgSrc="gifBgSrc1"
      :size="300"
      :dotScale="0.4"
      :logoSrc="src2"
    ></vue-qr>
  </div>
</template>

<script>
import vueQr from "./packages/vue-qr";
import src from "./assets/bg1.png";
import src2 from "./assets/avatar.png";
import src3 from "./assets/bg2.jpg";
import src4 from "./assets/bg3.jpg";
import gifBgSrc1 from "./assets/dog.gif";
import gifBgSrc2 from "./assets/scare.gif";

export default {
  mounted() {
    setInterval(() => {
      this.time++;
    }, 1000);
  },
  data() {
    return {
      src,
      src2,
      src3,
      src4,
      time: 0,
      gifBgSrc1,
      gifBgSrc2
    };
  },
  components: {
    vueQr
  },
  methods: {
    test(url, id) {
      console.log(url, id);
    }
  }
};
</script>
