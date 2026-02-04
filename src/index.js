import VueQr from './packages/index.js'

export function install(app) {
  app.component('VueQr', VueQr)
}

export { VueQr }
export default VueQr
