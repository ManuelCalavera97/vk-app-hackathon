function getAddress (latitude, longitude) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest()

    var method = 'GET'
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      latitude + ',' + longitude + '&sensor=true'
    var async = true

    request.open(method, url, async)
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          var data = JSON.parse(request.responseText)
          var address = data.results[0]
          resolve(address)
        } else {
          reject(request.status)
        }
      }
    }
    request.send()
  })
}

function getJson () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://cyberowl.me/api/activities', false)
  if (xhr.status !== 200) {
    console.log("Oh no");
    return null;
  } else {
  xhr.send()
  if (xhr.status !== 200) {
    console.log("test")
  } else {
    return JSON.parse(xhr.responseText);
  }
}
}


export default getJson
