<template>
  <div>
    <vue-qr
      text="123456789012345"
      :components="{
        cornerAlignment: {
          scale: 0.5,
          protectors: true
        }
      }"
    />
    <vue-qr
      text="123456789012345"
      :components="{
        cornerAlignment: {
          scale: 1,
          protectors: true
        }
      }"
    />
    <vue-qr
      text="test"
      colorDark="#28D905"
      colorLight="#EB0303"
      backgroundColor="#EB0303"
      :margin="0"
      :bindElement="true"
      @generated="test"
    />
    <vue-qr
      text="hello world"
      :correctLevel="0"
      backgroundColor="rgb(255,0,0)"
    />
    <vue-qr
      text="hello world"
      :correctLevel="1"
      colorLight="rgb(255,0,0)"
    />
    <vue-qr
      text="hello world"
      :correctLevel="1"
      colorLight="rgb(0,255,0)"
    />
    <vue-qr text="hello world" :correctLevel="2" />
    <vue-qr
      :bgSrc="src"
      :logoSrc="src2"
      text="Hello world!"
      :size="260"
      :margin="0"
      :dotScale="0.5"
    />
    <vue-qr
      :bgSrc="src"
      :logoSrc="src2"
      text="Hello world!"
      :size="260"
      :margin="50"
      :dotScale="0.5"
    />
    <vue-qr
      :bgSrc="src"
      :logoSrc="src2"
      text="Hello world!"
      :size="260"
      :margin="0"
      :dotScale="0.5"
      logoBackgroundColor="rgb(255,0,0)"
      :logoMargin="10"
    />

    <vue-qr text="testdsfhsidufhiusdhfi" :bgSrc="src" />
    <vue-qr :text="String(time)" />
    <vue-qr
      :bgSrc="src3"
      text="Hello world!"
      :size="260"
      :margin="0"
      :dotScale="0.6"
    />
    <vue-qr
      :bgSrc="src4"
      text="Hello world!"
      :size="300"
      :dotScale="0.5"
    />
    <vue-qr
      text="Hello world!"
      @generated="test"
      qid="testid"
      :size="300"
    />
    <vue-qr
      text="test test test test test test "
      :gifBgSrc="gifBgSrc1"
      :size="300"
      :dotScale="0.4"
      :logoSrc="src2"
    />
    <vue-qr
      text="test test test test test test "
      :gifBgSrc="gifBgSrc2"
      :size="300"
    />
    <vue-qr
      text="test test test test test "
      :gifBgSrc="gifBgSrc2"
      :size="300"
      backgroundDimming="rgb(255,0,0)"
      colorDark="rgb(0,0,0)"
      :dotScale="0.5"
    />
    <vue-qr text="test" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import VueQr from './packages/vue-qr.vue'
import src from './assets/bg1.png'
import src2 from './assets/avatar.png'
import src3 from './assets/bg2.jpg'
import src4 from './assets/bg3.jpg'
import gifBgSrc1 from './assets/dog.gif'
import gifBgSrc2 from './assets/scare.gif'

const time = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    time.value++
  }, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function test(url, id) {
  console.log(url, id)
}
</script>
