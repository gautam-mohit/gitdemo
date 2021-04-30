window.onload = function () {
  var todos = ["dancing", "programming"];
  var todosParent = document.getElementById("todos")

  for (let i = 0; i < todos.length; i++) {
    let list = document.createElement("LI");
    let span = document.createElement("SPAN");
    let txt = document.createTextNode(todos[i]);
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  }

  var btn = document.getElementById("addbtn");
  btn.addEventListener("click", newElement);
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
};
