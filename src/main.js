var u = require('./u')

var xhr = require('xhr')


xhr.get("./mock/path.json", function(err, resp) {
  var object1 = JSON.parse(resp.body)
  //console.log(1, object.path)
  xhr.get(object1.path, function(error, response) {
    var object2 = JSON.parse(response.body)
    u.renderList(object2.list);
  })
})

//console.log(2, object)
// var stringtext = JSON.stringify({})
// var object = JSON.parse("{}")
//
// setTimeout(function(){
//   console.log(3,object)
// }, 5000)
