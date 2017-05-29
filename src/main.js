var u = require('./u')

var xhr = require('xhr')
var dataDiscovery = require('./dataDiscovery')

var cb = function(path) {
  dataDiscovery.getData(path, function(object2) {
    u.renderList(object2.list)
  })
}

dataDiscovery.getPath(cb)






//console.log(2, object)
// var stringtext = JSON.stringify({})
// var object = JSON.parse("{}")
//
// setTimeout(function(){
//   console.log(3,object)
// }, 5000)
