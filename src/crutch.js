function getJsonById (id) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://cyberowl.me/api/activities/'+id.toString(), false)

  if (xhr.status !== 200) {
    console.log("test")
  } else {
    xhr.send()
    return JSON.parse(xhr.responseText);
  }
}
export default getJsonById
