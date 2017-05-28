
function addClickHandling(iC, li) {
  li.addEventListener("click", function() {
    console.log(iC)
  }, false);

};

function renderElement(ul,ai) {
  var li = document.createElement("li");
  li.textContent = ai + " ";
  ul.appendChild(li);
  addClickHandling(ai, li);
}

function getIteratorHandler(ul) {
  return function thatIteratingThing(ai) {
    renderElement(ul, ai);
  }

}

var u = {

  renderList: function(a) {
    var el = document.querySelector("div.poop");
    var ul = document.createElement("ul");

    a.forEach(getIteratorHandler(ul))

    el.appendChild(ul);
  }

};

u.renderList(["element1", "element2", "element3"]);
