window.onload = function () {
  //  array to store all the todos
  var todos = {
    dancing: false,
    programming: true,
    health: true,
    corona: false,
  };

  // getting the parent element
  var todosParent = document.getElementById("todos");
  initialize();
  // adding the element in the html
  function initialize() {
    todosParent.innerHTML = "";
    Object.keys(todos).forEach((todo) => {
      let list = document.createElement("li");
      let span = document.createElement("span");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todos[todo];
      let txt = document.createTextNode(todo);
      // Close button
      // let closeBtn = document.createElement("button");
      // closeBtn.innerText = "delete";
      // closeBtn.addEventListener("click", function () {
      //   deleteTodo(todo);
      // });
      // using event
      span.addEventListener("dblclick", function () {
        deleteTodo(todo);
      });

      //  TODO: uncheck and update the status of the task(trur or false)
      checkbox.addEventListener("change", function (event) {
        updateVal(event, todo);
      });

      span.className = "close";
      span.appendChild(checkbox);
      span.appendChild(txt);
      // span.appendChild(closeBtn);
      list.appendChild(span);
      todosParent.appendChild(list);
    });
  }

  // TODO: Add new element in todos

  var btn = document.getElementById("addBtn");
  btn.addEventListener("click", newElement);

  function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    todos[inputValue] = false;
    inputValue = "";
    initialize();
  }

  // to delete todos on double clk
  function deleteTodo(todo) {
    delete todos[todo];
    initialize();
  }

  // to update the value either its true or false
  function updateVal(e, todo) {
    console.log("before===>", todos);
    todos[todo] = e.target.checked;
    console.log("after===>", todos);
    initialize();
  }
};
