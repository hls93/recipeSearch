
let recipeBox = document.querySelector(".recipeList")
let recipes = document.querySelector(".list")
let content = document.querySelector("#container");
let button = document.querySelector("#button");
let search = document.querySelector("#input");

button.addEventListener("click", function(){
fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${search.value}`)

  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
  })

  .then(function(data) {
    let results = data.results;
    for (var i = 0; i < results.length; i++) {
      recipes.innerHTML += `
      <div class="wrap">
    <img src=${results[i].thumbnail}>
    <a href=${results[i].href}><h1 class="title">${results[i].title}</h1></a>
    </div>
    `
    }

  })
})
