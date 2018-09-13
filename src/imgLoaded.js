function imgLoaded(url) {
  return new Promise(function(resolve, reject) {
    if (url.slice(0, 4) == 'data') {
      var img = new Image()
      img.onload = function() {
        resolve(img)
      }
      img.onerror = function() {
        reject('Image load error')
      }
      img.src = url
      return
    }
    var xhr = new XMLHttpRequest()
    xhr.onload = function() {
      var newUrl = URL.createObjectURL(this.response)
      var img = new Image()
      img.onload = function() {
        resolve(img)
        URL.revokeObjectURL(newUrl)
      }
      img.onerror = function() {
        reject('Image load error')
      }
      img.src = newUrl
    }
    xhr.open('GET', url, true)
    xhr.responseType = 'blob'
    xhr.send()
  })
}
export default imgLoaded
