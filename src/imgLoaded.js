function imgLoaded(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = ''
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function(err) {
      reject('image load error,reason:' + JSON.stringify(err))
    }
    img.src = url
  })
}
export default imgLoaded
