const uuidv4 = require('uuid/v4')
import { toBoolean } from './util.js'
import AwesomeQRCode from './awesome-qr'
import imgLoaded from './imgLoaded'
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    qid: {
      type: String
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
      default: '#000000'
    },
    colorLight: {
      type: String,
      default: '#FFFFFF'
    },
    bgSrc: {
      type: String,
      default: undefined
    },
    backgroundDimming: {
      type: String,
      default: 'rgba(0,0,0,0)'
    },
    logoSrc: {
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
      default: function() {
        return undefined
      }
    },
    bindElement: {
      type: Boolean,
      default: true
    }
  },
  name: 'vue-qr',
  data() {
    return {
      uuid: ''
    }
  },
  watch: {
    $props: {
      deep: true,
      handler() {
        this.main()
      }
    }
  },
  mounted() {
    this.uuid = uuidv4()
    this.main()
  },
  methods: {
    async main() {
      const that = this
      if (this.bgSrc && this.logoSrc) {
        const bgImg = await imgLoaded(this.bgSrc)
        const logoImg = await imgLoaded(this.logoSrc)
        this.render(bgImg, logoImg)
        return
      }
      if (this.bgSrc) {
        const img = await imgLoaded(this.bgSrc)
        this.render(img)
        return
      }
      if (this.logoSrc) {
        const img = await imgLoaded(this.logoSrc)
        this.render(undefined, img)
        return
      }

      setTimeout(() => {
        that.render()
      }, 0)
    },
    render(img, logoImg) {
      const that = this
      new AwesomeQRCode().create({
        text: that.text,
        size: that.size,
        margin: that.margin,
        colorDark: that.colorDark,
        colorLight: that.colorLight,
        backgroundImage: img,
        backgroundDimming: that.backgroundDimming,
        logoImage: logoImg,
        logoScale: that.logoScale,
        logoMargin: that.logoMargin,
        logoCornerRadius: that.logoCornerRadius,
        whiteMargin: toBoolean(that.whiteMargin),
        dotScale: that.dotScale,
        autoColor: toBoolean(that.autoColor),
        binarize: toBoolean(that.binarize),
        binarizeThreshold: that.binarizeThreshold,
        callback: function(dataURI) {
          that.callback && that.callback(dataURI, that.qid)
        },
        bindElement: that.bindElement ? that.uuid : undefined
      })
    }
  }
}
