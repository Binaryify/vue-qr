<template>
  <img style="display: inline-block" :src="imgUrl" v-if="bindElement" />
</template>

<script>
import { toBoolean } from "./util.js";
import readAsArrayBuffer from "./readAsArrayBuffer";
import { AwesomeQR } from "../lib/awesome-qr";
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    qid: {
      type: String
    },
    correctLevel: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 200
    },
    margin: {
      type: Number,
      default: 20
    },
    colorDark: {
      type: String,
      default: "#000000"
    },
    colorLight: {
      type: String,
      default: "#FFFFFF"
    },
    bgSrc: {
      type: String,
      default: undefined
    },
    background: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    backgroundDimming: {
      type: String,
      default: "rgba(0,0,0,0)"
    },
    logoSrc: {
      type: String,
      default: undefined
    },
    logoBackgroundColor: {
      type: String,
      default: "rgba(255,255,255,1)"
    },
    gifBgSrc: {
      type: String,
      default: undefined
    },
    logoScale: {
      type: Number,
      default: 0.2
    },
    logoMargin: {
      type: Number,
      default: 0
    },
    logoCornerRadius: {
      type: Number,
      default: 8
    },
    whiteMargin: {
      type: [Boolean, String],
      default: true
    },
    dotScale: {
      type: Number,
      default: 1
    },
    autoColor: {
      type: [Boolean, String],
      default: true
    },
    binarize: {
      type: [Boolean, String],
      default: false
    },
    binarizeThreshold: {
      type: Number,
      default: 128
    },
    callback: {
      type: Function,
      default: function () {
        return undefined;
      }
    },
    bindElement: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: "#FFFFFF"
    },
    components: {
      default: function () {
        return {
          data: {
            scale: 1
          },
          timing: {
            scale: 1,
            protectors: false
          },
          alignment: {
            scale: 1,
            protectors: false
          },
          cornerAlignment: {
            scale: 1,
            protectors: true
          }
        };
      }
    }
  },
  name: "vue-qr",
  data() {
    return {
      imgUrl: ""
    };
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.main();
      }
    }
  },
  mounted() {
    this.main();
  },
  methods: {
    async main() {
      if (this.gifBgSrc) {
        const gifImg = await readAsArrayBuffer(this.gifBgSrc);
        const logoImg = this.logoSrc;

        this.render(undefined, logoImg, gifImg);
        return;
      }
      const bgImg = this.bgSrc;
      const logoImg = this.logoSrc;
      this.render(bgImg, logoImg);
    },
    async render(img, logoImg, gifBgSrc) {
      const dataUri = await new AwesomeQR({
        gifBackground: gifBgSrc,
        text: this.text,
        size: this.size,
        margin: this.margin,
        colorDark: this.colorDark,
        colorLight: this.colorLight,
        backgroundColor: this.backgroundColor,
        backgroundImage: img,
        backgroundDimming: this.backgroundDimming,
        logoImage: logoImg,
        logoScale: this.logoScale,
        logoBackgroundColor: this.logoBackgroundColor,
        correctLevel: this.correctLevel,
        logoMargin: this.logoMargin,
        logoCornerRadius: this.logoCornerRadius,
        whiteMargin: toBoolean(this.whiteMargin),
        dotScale: this.dotScale,
        autoColor: toBoolean(this.autoColor),
        binarize: toBoolean(this.binarize),
        binarizeThreshold: this.binarizeThreshold,
        components: this.components,
      }).draw();

      this.imgUrl = dataUri;
      that.callback && that.callback(dataUri, that.qid);
    },
  },
};
</script>
