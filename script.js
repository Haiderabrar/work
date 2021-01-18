const form = document.querySelector("form");

const ul = document.querySelector("ul");

const li = document.querySelector("li");

const button = document.querySelector("button");

const input = document.getElementById("item");

let itemsArray = localStorage.getItem("items")

  ? JSON.parse(localStorage.getItem("items"))

  : [];



localStorage.setItem("items", JSON.stringify(itemsArray));

const data = JSON.parse(localStorage.getItem("items"));



const liMaker = (id, text) => {

  const li = document.createElement("li");

  const div = document.createElement("div")

  div.className = 'list-item'

  const itemText = document.createElement("div")

  itemText.className = 'item-text'

  itemText.textContent = text;

  const editBtn = document.createElement("button")

  editBtn.onclick = function () {

    localStorage.setItem("itemId", id)

    window.location.href = `edit.html`

  }

  editBtn.dataset = id

  editBtn.className = 'item-edit-btn'

  editBtn.textContent = "Edit"

  div.appendChild(itemText)

  div.appendChild(editBtn)

  li.appendChild(div)

  ul.appendChild(li);

};



const getId = () => {

  let id = 0;

  const items = JSON.parse(localStorage.getItem("items"));

  items.map(item => {

    id = item.id;

  });

  return id + 1;

}



form.addEventListener("submit", function (e) {

  e.preventDefault();

  const id = getId();

  itemsArray.push({ id, value: input.value });

  localStorage.setItem("items", JSON.stringify(itemsArray));

  liMaker(id, input.value);

  input.value = "";

});



data.forEach((item) => {

  liMaker(item.id, item.value);

});



button.addEventListener("click", function () {

  localStorage.clear();

  while (ul.firstChild) {

    ul.removeChild(ul.firstChild);

  }

  itemsArray = [];

});

