<template>
  <img v-if="bindElement" style="display: inline-block" :src="imgUrl" />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { toBoolean } from './util.js'
import readAsArrayBuffer from './readAsArrayBuffer'
import { AwesomeQR } from '../lib/awesome-qr'

const props = defineProps({
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
  background: {
    type: String,
    default: 'rgba(0,0,0,0)'
  },
  backgroundDimming: {
    type: String,
    default: 'rgba(0,0,0,0)'
  },
  logoSrc: {
    type: String,
    default: undefined
  },
  logoBackgroundColor: {
    type: String,
    default: 'rgba(255,255,255,1)'
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
  bindElement: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String,
    default: '#FFFFFF'
  },
  components: {
    type: Object,
    default: () => ({
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
    })
  }
})

const emit = defineEmits(['generated'])

const imgUrl = ref('')

async function main() {
  if (props.gifBgSrc) {
    const gifImg = await readAsArrayBuffer(props.gifBgSrc)
    const logoImg = props.logoSrc
    render(undefined, logoImg, gifImg)
    return
  }
  const bgImg = props.bgSrc
  const logoImg = props.logoSrc
  render(bgImg, logoImg)
}

async function render(img, logoImg, gifBgSrc) {
  const dataUri = await new AwesomeQR({
    gifBackground: gifBgSrc,
    text: props.text,
    size: props.size,
    margin: props.margin,
    colorDark: props.colorDark,
    colorLight: props.colorLight,
    backgroundColor: props.backgroundColor,
    backgroundImage: img,
    backgroundDimming: props.backgroundDimming,
    logoImage: logoImg,
    logoScale: props.logoScale,
    logoBackgroundColor: props.logoBackgroundColor,
    correctLevel: props.correctLevel,
    logoMargin: props.logoMargin,
    logoCornerRadius: props.logoCornerRadius,
    whiteMargin: toBoolean(props.whiteMargin),
    dotScale: props.dotScale,
    autoColor: toBoolean(props.autoColor),
    binarize: toBoolean(props.binarize),
    binarizeThreshold: props.binarizeThreshold,
    components: props.components
  }).draw()

  imgUrl.value = dataUri
  emit('generated', dataUri, props.qid)
}

watch(
  () => props,
  () => {
    main()
  },
  { deep: true }
)

onMounted(() => {
  main()
})

defineExpose({
  imgUrl
})
</script>
