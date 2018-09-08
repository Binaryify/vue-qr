function imgLoaded(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
      var url = URL.createObjectURL(this.response)
      var img = new Image()
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
