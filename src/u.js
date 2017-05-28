var renderElement = require('./renderElement')


function getIteratorHandler(ul) {
  return function thatIteratingThing(ai) {
    renderElement(ul, ai);
  }
}

function renderList(a) {
  var el = document.querySelector("div.poop");
  var ul = document.createElement("ul");

  a.forEach(getIteratorHandler(ul))

  el.appendChild(ul);
}

module.exports = {

  renderList: renderList

};
