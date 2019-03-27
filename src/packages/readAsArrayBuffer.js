function readAsArrayBuffer(url, callback) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "blob"; //设定返回数据类型为Blob
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
          resolve(reader.result)
      };
      reader.readAsArrayBuffer(xhr.response); //xhr.response就是一个Blob，用FileReader读取
    };
    xhr.open("GET", url);
    xhr.send();
  });
}
export default readAsArrayBuffer