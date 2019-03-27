<template>
    <div>
        <vue-qr text="hello world" :correctLevel="0"></vue-qr>
        <vue-qr :bgSrc="src" :logoSrc="src2" text="Hello world!" :size="260" :margin="0" :dotScale="0.5"></vue-qr>
        <vue-qr :text="time+''"></vue-qr>
        <vue-qr :bgSrc="src3" text="Hello world!" :size="260" :margin="0" :dotScale="0.6"></vue-qr>
        <vue-qr :bgSrc="src4" text="Hello world!" :size="300" :dotScale="0.5"></vue-qr>
        <vue-qr text="Hello world!" :callback="test" qid="testid" :size="300"></vue-qr>
        <vue-qr text="测试内容测试内容测试内容测试内容测试内容测试内容" :gifBgSrc="require('./assets/dog.gif')" :size="300" :dotScale="0.4"></vue-qr>
        <vue-qr text="测试内容测试内容测试内容测试内容测试内容测试内容" :gifBgSrc="require('./assets/scare.gif')" :size="300"></vue-qr>
        <vue-qr text="测试内容测试内容测试内容测试内容测试内容" :gifBgSrc="require('./assets/scare.gif')" :size="300" backgroundDimming="rgb(255,0,0)" colorDark="rgb(0,0,0)" :dotScale="0.5"></vue-qr>
        <vue-qr text="test"></vue-qr>
    </div>
</template>

<script>
import vueQr from "./packages/vue-qr";
export default {
    mounted(){
        setInterval(()=>{
            this.time++
        },1000)
    },  
    data() {
        return {
            src: require("./assets/bg1.png"),
            src2: require("./assets/avatar.png"),
            src3: require("./assets/bg2.jpg"),
            src4: require("./assets/bg3.jpg"),
            time:0
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
