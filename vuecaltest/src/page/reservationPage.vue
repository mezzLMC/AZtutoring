<template lang="pug">
#p2
    nav.navbar.navbar-expand-lg(style="background-color: var(--purple-dark);")
        .container-fluid
            a.navbar-brand.title1(style="color: var(--purple-dark)") Ayoub Zalali 
            .collapse.navbar-collapse
                ul.navbar-nav
                    li.nav-item
                        button.fill-dark
                            img#scrollTop(src="../assets/chevron-up.svg")
                    li.nav-item
                        input.login.button.outline-light(type="button" value="Se connecter" style="border-color: white;color: white")
    #reservationBody.row
        #calendar.col-sm
            VueCalComponent
        #recap.col-sm
            p#recapitulatif Récapitulatif
            #courseType
                p.attribut TYPE DE COURS
                p.value ANGLAIS
            #schedules
                p.attribut HORAIRES
                .value
                    .courseGroup
                        img(src="../assets/clock.svg")
                        span 12:00 AM - 1:00PM
                        br
                        span.courseDate Friday, May 3
                    .courseGroup
                        img(src="../assets/clock.svg")
                        span 12:00 AM - 1:00PM
                        br
                        span.courseDate Friday, May 3
                #details
                    img(src="../assets/align-left.svg")
                    span Ajouter une description 
            input.button.fill-dark(type="button" value="Débuter")
</template>
<script>
import VueCalComponent from "../vuecal/VueCalComponent.vue"


</script>

<style>
#p2{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 100%;
    z-index: 30;
}
#scrollTop{
    width: 80px;
    position: absolute;
    background-color: var(--purple-dark);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%) ;
    z-index: 10;
}
#reservationBody{
    max-width: 1300px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 180px;
    bottom: 50px;
    width: 90%;
}
#recap{
    position: absolute;
    height: 90%;
    right: -40px;
    width: 27%;
    border: 2px solid var(--purple-dark);
    border-radius: 10px;
}
#calendar{
    border: 2px solid var(--purple-dark);
    position: absolute;
    height: 70%;
    margin-left: 10px;
    border-radius: 10px;
    width: 70%
}
#recapitulatif{
    color: #5538EE;
    font: 'IBM Plex Sans';
    font-weight: 600;
    font-size: 30px;
    margin-top: 5px;
    margin-left: 5px;
}
.attribut{
    font: 'IBM Plex Sans';
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    color: #5538EE;
}
.value{
    font: 'Inter';
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #6C7072;
}
.courseDate{
    color: #404446;
    margin-left: 35px
}
.courseGroup{
    color: #CDCFD0;
    font-weight: 500;
}

#details{
    margin-top: 20px;
    font-weight: 500;
}
#validbut{
    width: 90%;
    height: 7%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}
</style>
