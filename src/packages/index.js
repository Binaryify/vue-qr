import VueQr from './vue-qr.vue'

VueQr.install = (app) => {
  app.component('VueQr', VueQr)
}

export default VueQr
