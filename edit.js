const form = document.querySelector("form");
const input = document.getElementById("item");
const items = JSON.parse(localStorage.getItem("items"));
const itemId = parseInt(localStorage.getItem("itemId"));
let item = {}

items.map(listItem => {
  if (listItem.id === itemId) {
    item = listItem
  }
})
input.value = item.value

form.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("items", JSON.stringify(items.map(listItem => {
    return listItem.id === itemId ? { ...listItem, value: input.value } : listItem
  })))
  window.location.href = 'index.html'
});
