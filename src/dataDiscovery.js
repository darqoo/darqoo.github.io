var xhr = require('xhr')



function getPath(funk) {

  xhr.get("./mock/path.json", function(err, resp) {
    var object1 = JSON.parse(resp.body)
    console.log(1, object1.path)
    funk(object1.path);
  })
}

module.exports = {

  getPath: getPath

};
