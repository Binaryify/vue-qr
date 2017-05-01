<template>
  <div>
    <img ref='qrimg'>
  </div>
</template>

<script>
function autoColorMap(val) {
  const map = {
    undefined: false,
    'false': false,
    'true': true,
    true: true,
    false: false
  }
  return map[val]
}
import AwesomeQRCode from './awesome-qr.js';
export default {
  props: ['text', 'width', 'height', 'colorDark', 'colorLight', 'bgSrc', 'autoColor'],
  name: 'vue-qr',
  mounted() {
    const that = this
    if (this.bgSrc) {
      const img = new Image()
      img.src = this.bgSrc
      img.onload = function () {
        console.log(that.autoColor)
        that.render(img)
      }
      return
    }
    that.render()
  },
  methods: {
    render(img) {
      const that = this
      new AwesomeQRCode(
        {
          text: that.text,  // Contents to encode. 欲编码的内容
          width: that.width || 400, // Width, should equal to height. 宽度, 宽高应当一致
          height: that.height || 400,  // Height, should equal to width. 高度, 宽高应当一致
          colorDark: that.colorDark || "#000000",  // Color of blocks. Will be OVERRIDE by autoColor. 实点的颜色
          colorLight: that.colorLight || "#FFFFFF",  // Color of empty space. Will be OVERRIDE by autoColor. 空白点的颜色
          correctLevel: AwesomeQRCode.CorrectLevel.H,
          backgroundImage: img,     // The background image to embed in the QR code. If undefined, no background image will be embedded. 欲嵌入的背景图
          autoColor: autoColorMap(that.autoColor)  // If true, colorDark will be set to the dominant color of backgroundImage. Default is true. 若为 true, 则将从背景图取主要颜色作为实点颜色
        },
        function (dataUrl) {
          that.$refs.qrimg.src = dataUrl
        }
      );
    }
  }
}
</script>