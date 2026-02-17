import type { App, DefineComponent } from 'vue'

export type ComponentOptions = {
  data?: { scale?: number }
  timing?: { scale?: number; protectors?: boolean }
  alignment?: { scale?: number; protectors?: boolean }
  cornerAlignment?: { scale?: number; protectors?: boolean }
}

export interface VueQrProps {
  text: string
  qid?: string
  correctLevel?: number
  size?: number
  margin?: number
  colorDark?: string
  colorLight?: string
  bgSrc?: string
  background?: string
  backgroundDimming?: string
  logoSrc?: string
  logoBackgroundColor?: string
  gifBgSrc?: string
  logoScale?: number
  logoMargin?: number
  logoCornerRadius?: number
  whiteMargin?: boolean | string
  dotScale?: number
  autoColor?: boolean | string
  binarize?: boolean | string
  binarizeThreshold?: number
  bindElement?: boolean
  backgroundColor?: string
  components?: ComponentOptions
}

export type VueQrEmits = {
  generated: (dataUrl: string, qid?: string) => void
}

declare const VueQr: DefineComponent<
  VueQrProps,
  {},
  {},
  {},
  {},
  {},
  {},
  VueQrEmits
> & {
  install: (app: App) => void
}

export declare function install(app: App): void

export { VueQr }
export default VueQr
