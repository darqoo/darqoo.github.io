var xhr = require('xhr')



function getPath(funk) {

  xhr.get("./mock/path.json", function(err, resp) {
    var object1 = JSON.parse(resp.body)
    //console.log(1, object1.path)
    funk(object1.path);
  })
}

function getList(path,callback) {

  xhr.get(path, function(error, response) {
    var object2 = JSON.parse(response.body)
    callback(object2.list);
  })

}

module.exports = {

  getPath: getPath,
  getList: getList

};
