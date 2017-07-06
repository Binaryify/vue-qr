const uuidv4 = require('uuid/v4')
import { toBoolean } from './util.js'
import AwesomeQRCode from './awesome-qr.js'
export default {
  props: [
    'text',
    'size',
    'margin',
    'colorDark',
    'colorLight',
    'bgSrc',
    'backgroundDimming',
    'logoSrc',
    'logoScale',
    'logoMargin',
    'logoCornerRadius',
    'whiteMargin',
    'dotScale',
    'autoColor',
    'binarize',
    'binarizeThreshold',
    'callback'
  ],
  name: 'vue-qr',
  data() {
    return {
      uuid: ''
    }
  },
  watch: {
    $props: {
      deep: true,
      handler(nextProps) {
        this.main()
      }
    }
  },
  beforeMount() {
    this.uuid = uuidv4()
    // console.log(this.bgSrc)
  },
  mounted() {
    // console.log(this.$props)
    this.main()
  },
  methods: {
    main() {
      const that = this
      if (this.bgSrc && this.logoSrc) {
        const bgImg = new Image()
        const logoImg = new Image()
        bgImg.src = this.bgSrc
        bgImg.onload = function() {
          logoImg.src = that.logoSrc
          logoImg.onload = function() {
            that.render(bgImg, logoImg)
          }
        }
        return
      }
      if (this.bgSrc) {
        const img = new Image()
        img.src = this.bgSrc
        img.onload = function() {
          that.render(img)
        }
        return
      }
      if (this.logoSrc) {
        const img = new Image()
        img.src = this.logoSrc
        img.onload = function() {
          that.render(undefined, img)
        }
        return
      }
      that.render()
    },
    render(img, logoImg) {
      const that = this
      // console.log(logoImg)
      new AwesomeQRCode().create({
        text: that.text,
        size: that.size || 200,
        margin: that.margin || 20,
        colorDark: that.colorDark || '#000000',
        colorLight: that.colorLight || '#FFFFFF',
        backgroundImage: img,
        backgroundDimming: that.backgroundDimming || 'rgba(0,0,0,0)',
        logoImage: logoImg,
        logoScale: that.logoScale || 0.2,
        logoMargin: that.logoMargin || 0,
        logoCornerRadius: that.logoCornerRadius || 8,
        whiteMargin: toBoolean(that.whiteMargin) || true,
        dotScale: that.dotScale || 0.35,
        autoColor: toBoolean(that.autoColor) || true,
        binarize: toBoolean(that.binarize) || false,
        binarizeThreshold: that.binarizeThreshold || 128,
        callback: function(dataURI) {
          that.callback && that.callback(dataURI)
        },
        bindElement: that.uuid
      })
    }
  }
}
