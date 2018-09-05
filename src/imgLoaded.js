function imgLoaded(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function() {
      const url = URL.createObjectURL(this.response)
      const img = new Image()
      img.onload = function() {
        resolve(img)
        URL.revokeObjectURL(url)
      }
      img.onerror = function() {
        reject('Image load error')
      }
      img.src = url
    }
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.send()
  })
}
export default imgLoaded
