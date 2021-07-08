let days = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"]
let x = days.map(el => '<div class="col-sm">' + el + '</div>')
let row =document.getElementById("days")
x.forEach(e=> row.innerHTML = row.innerHTML+e)



let app = new Vue({
    el: '#app',
    list: days.map(el => '<div class="col-sm">' + el + '</div>')
  })
