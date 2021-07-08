
let x1 = new Date("2021-07-03 12:00")
let x2 = new Date("2021-07-03 13:30")
let delta = ((x2.getTime() - x1.getTime())/ 1000)/1800*45;
console.log(delta)

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      selectedDate: new Date(),
      events: [
        {
          start: x1,
          end: x2,
          content: '<div ></div>',
          class: 'leisure'
        },
        {
          start: "2021-07-05 12:00",
          end: "2021-07-05 15:30",
          content: '<div class="test"></div>',
          class: 'leisure'
        },
        {
          start: '2018-11-22',
          end: '2018-11-22',
          title: 'Dad\'s birthday!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport'
        }
      ]

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
    months = document.getElementsByClassName("vuecal__title")[0].children[0].innerHTML.split("(")[1].split(" 2")[0].split(" - ")
    let cellArray = Array.from(document.getElementsByClassName("vuecal__time-cell"))
    //document.getElementsByClassName("vuecal__menu")[0].remove()
    //document.getElementsByClassName("vuecal__title-bar")[0].remove()
    document.getElementsByClassName("vuecal__time-cell-label")[0].style["color"] = "transparent"
    weekDays = Array.from(document.getElementsByClassName("weekday-label"))
    let lineArr = Array.from(document.getElementsByClassName("vuecal__time-cell-line"))
    let labelArr = Array.from(document.getElementsByClassName("vuecal__time-cell-label"))

    cellArray.forEach(e=>{
        e.style.height="45px"
    })
    cellArray[cellArray.length-1].style.display = "none"

    if(months[1]){
        console.log(months[1])
    }
    weekDays.forEach(e=>{
        target = e.children[3]
        target.innerHTML = "<br/>" + target.innerHTML + "."
        target.classList.add("date")
    })

    lineArr.forEach(e=>{
        n = lineArr.indexOf(e) 
        if((n + 1) % 2 == 0) e.classList.add("plainHour")
        else labelArr[n].innerHTML=""
    })
}




