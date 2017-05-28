var u = require('./u')

var xhr = require('xhr')

xhr.get("./mock/data.json", function(err, resp){
  var object = JSON.parse(resp.body)
  //console.log(1, object.list)
  u.renderList(object.list);
})

//console.log(2, object)
// var stringtext = JSON.stringify({})
// var object = JSON.parse("{}")
//
// setTimeout(function(){
//   console.log(3,object)
// }, 5000)
