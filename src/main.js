var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      selectedDate: new Date(new Date().getFullYear(), 11, 31)

    },
    components: {'vue-cal': vuecal},
    methods: {
        scrollTop(){
            window.scrollTo({
                top: document.getElementById("p1").offsetTop ,
                behavior: 'smooth'
              });
        },
        herobStart(){
            window.scrollTo({
                top: document.getElementById("p2").offsetTop ,
                behavior: 'smooth'
              });
        },
        validbut(){
            window.scrollTo({
                top: document.getElementById("p2").offsetTop ,
                behavior: 'smooth'
              });
        }

    }
  })

var slideUp = {
    distance: '150%',
    origin: 'top',
    opacity: null
};

months = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

window.onload = ()=>{
    month = document.getElementsByClassName("vuecal__title")[0].children[0].innerHTML.split("(")[1].split(" 2")[0]
    nMonth = months.indexOf(month + 1)
    document.getElementsByClassName("vuecal__menu")[0].remove()
    document.getElementsByClassName("vuecal__title-bar")[0].remove()
    document.getElementsByClassName("vuecal__time-cell-label")[0].style["color"] = "transparent"
    let cellArray = Array.from(document.getElementsByClassName("vuecal__time-cell"))
    cellArray.forEach(e=>{
        e.style.height="45px"
    })
    cellArray[cellArray.length-1].style.display = "none"
    Array.from(document.getElementsByClassName("weekday-label")).forEach(e=>{
        target = e.children[3]
        target.innerHTML = "<br/>" + target.innerHTML + "." + nMonth
        target.classList.add("date")
    })
    console.log("pute")
    Array.from(document.getElementsByClassName("vuecal__time-cell-line")).forEach(e=>{
        e.classList.add("chicha")
    })
}



let n = 0
let moveInterval = window.setInterval(() => {
    technoArray = document.getElementsByClassName("techno")
    explainArray = document.getElementsByClassName("technoExplain")
    technoArray[n].classList.remove("active")
    explainArray[n].classList.remove("active")
    n == 2 ? n = 0 : n=n+1 
    technoArray[n].classList.add("active")
    explainArray[n].classList.add("active")

}, 5000);
