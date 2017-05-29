var dataDiscovery = require('./dataDiscovery')

function addClickHandling(iC, li) {
  li.addEventListener("click", function() {
    //  console.log(iC)
    dataDiscovery.getData("api/item/" + iC, function(what) {
      //console.log(what);
      renderAns(what.text);

    })
  }, false);
};

function renderElement(ul, ai) {
  var li = document.createElement("li");
  li.textContent = ai + " ";
  ul.appendChild(li);
  addClickHandling(ai, li);
}

var body = document.querySelector("body");
var logPoint = document.createElement("div");
logPoint.classList.add("logPoint");
body.appendChild(logPoint);
function renderAns(cos) {


  logPoint.textContent = cos;
}


module.exports = renderElement
