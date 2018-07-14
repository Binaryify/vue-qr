# vue-qr
<a href="https://www.npmjs.com/package/vue-qr"><img src="https://img.shields.io/npm/v/vue-qr.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-qr"><img src="https://img.shields.io/npm/l/vue-qr.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vue-qr"><img src="https://img.shields.io/david/dev/binaryify/vue-qr.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/vue-qr"><img src="https://img.shields.io/david/binaryify/vue-qr.svg" alt="devDependencies" ></a>

The Vue 2.x Component for [SumiMakito's Awesome-qr.js](https://github.com/SumiMakito/Awesome-qr.js)

The only one qr code component for Vue.js you need !

### Examples, 样例

> Try to scan these QR codes below with your smart phone.

Example 1|Example 2|Example 3
------------ | ------------- | -------------
<img src="https://raw.githubusercontent.com/Binaryify/vue-qr/master/static/result1.png" width="400"> | <img src="https://raw.githubusercontent.com/Binaryify/vue-qr/master/static/result2.png" width="400"> | <img src="https://raw.githubusercontent.com/Binaryify/vue-qr/master/static/result3.png" width="400">

## Installation
**install with NPM**
```bash
npm install vue-qr --save
```
**Import**
```js
import VueQr from 'vue-qr'

new Vue({
    components: {VueQr}
})
```
## Usage
**In template**

```html
<vue-qr :bgSrc='src' :logoSrc="src2" text="Hello world!" :size="200"></vue-qr>
<vue-qr text="Hello world!" :callback="test" qid="testid"></vue-qr>
```

```js
export default {
    methods:{
        test(dataUrl,id){
            console.log(url, id)
        }
    }
}
```
Parameter | Explanation
----|----
text | Contents to encode. 欲编码的内容
size | Width as well as the height of the output QR code, includes margin. 尺寸, 长宽一致, 包含外边距
margin | Margin to add around the QR code. 二维码图像的外边距, 默认 20px
colorDark | Color of "true" blocks. Works only when both colorDark and colorLight are set. (BYTE_DTA, BYTE_POS, BYTE_AGN, BYTE_TMG) 实点的颜色
colorLight | Color of empty space, or "false" blocks. Works only when both colorDark and colorLight are set. (BYTE_EPT) 空白区的颜色
bgSrc | Background url to embed in the QR code.  欲嵌入的背景图地址
backgroundDimming | Color mask to add above the background image. Helpful when having problems with decoding. 叠加在背景图上的颜色, 在解码有难度的时有一定帮助
logoSrc | Logo url to embed at the center of generated QR code. 欲嵌入至二维码中心的 LOGO 地址
logoScale | Value used to scale the logo image. Larger value may result in decode failure. Size of the logo equals to `logoScale*(size-2*margin)`. Default is 0.2f. 用于计算 LOGO 大小的值, 过大将导致解码失败, LOGO 尺寸计算公式 `logoScale*(size-2*margin)`, 默认 0.2f
logoMargin | White margin that appears around the logo image. Default is 0. LOGO 标识周围的空白边框, 默认为0
logoCornerRadius | Radius of the logo's corners.Default is 0 LOGO 标识及其边框的圆角半径, 默认为0
whiteMargin | If set to true, a white border will appear around the background image. Default is true. 若设为 true, 背景图外将绘制白色边框
dotScale | Value used to scale down the data dots' size. (0 < scale < 1.0f) 数据区域点缩小比例
autoColor | If set to true, the dominant color of backgroundImage will be used as colorDark. Default is true. 若为 true, 背景图的主要颜色将作为实点的颜色, 即 colorDark
binarize | If set to true, the whole image will be binarized with the given threshold, or default threshold if not specified. Default is false. 若为 true, 图像将被二值化处理, 未指定阈值则使用默认值
binarizeThreshold | Threshold used to binarize the whole image. Default is 128. (0 < threshold < 255) 二值化处理的阈值
callback | Data URI of the generated QR code will be available here. 生成的二维码 Data URI 可以在回调中取得,第一个参数为二维码 data URL, 第二个参数为 props 传过来的 qid(因为二维码生成是异步的,所以加个 id 用于排序)
bindElement | If set to true, the generated QR will bind to a HTML element automatically. Default is TRUE. 指定是否需要自动将生成的二维码绑定到HTML上, 默认是TRUE



For more details you should definitely check out [Awesome-qr.js ](https://github.com/SumiMakito/Awesome-qr.js)
