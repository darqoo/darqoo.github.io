function addClickHandling(iC, li) {
  li.addEventListener("click", function() {
    console.log(iC)
  }, false);
};

function renderElement(ul, ai) {
  var li = document.createElement("li");
  li.textContent = ai + " ";
  ul.appendChild(li);
  addClickHandling(ai, li);
}

module.exports = renderElement
