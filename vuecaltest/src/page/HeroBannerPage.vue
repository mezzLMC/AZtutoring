<template lang="pug">
#p1
    nav.navbar.navbar-expand-lg
        .container-fluid
            a#topLogo.navbar-brand.title1 Ayoub Zalali
            #navbarNav.collapse.navbar-collapse
                ul.navbar-nav
                    li.nav-item
                        input.login.button.outline-light(type="button" value="Se connecter")
    #herobanner.row
        #pave
            p.title1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            br
            p.regular-spaced Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus tristique vestibulum eros semper rhoncus, viverra dui, sit lectus.
            br
            input#herobStart.button.fill-dark.reg-nn-medium(type="button" value="Réserver")
            br
        img#herobIllu(src="../assets/herobanilu.png")
    #technos.row
        .col
            .active.techno
                img#ppal.technoImg(src="../assets/paypal final.png")
            .technoExplain.active
                p.technoExp.active Connexion et payement simple et sécurisé
        .col
            .techno
                img#zoom.technoImg(src="../assets/Zoom-Logo-650x366.png")
            .technoExplain
                p.technoExp Accès rapide sur toute les plateformes
        .col
            .techno
                img#gagenda.technoImg(src="../assets/google-calendar.png")
            .technoExplain
                p.technoExp Synchronisation automatique personnalisée
        

</template>
<script>

let counter = 0
let moveInterval = window.setInterval(() => {
    let technoArray = document.getElementsByClassName("techno")
    let explainArray = document.getElementsByClassName("technoExplain")
    technoArray[counter].classList.remove("active")
    explainArray[counter].classList.remove("active")
    counter == 2 ? counter = 0 : counter=counter+1 
    technoArray[counter].classList.add("active")
    explainArray[counter].classList.add("active")
}, 5000);

</script>

<style>
#p1{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    height: 100%;
    display: block;
    overflow-x: hidden;
}
#topLogo{
    margin-left: 20px;
    color: #6B4EFF;
}

#pave{
    max-width: 600px;
    margin-left: 40px;
    margin-top: 70px;
    position: relative;
    z-index: 20;
}
#herobStart{
    margin-top: -10px;
    height: 80px;
    font-size: 35px;
    width: 300px;
    font: "inter";
    font-weight: 600;
}
#herobIllu{
    z-index: 0;
    position: absolute;
    right: -10px;
    max-width: 950px;
    z-index: 10;
    opacity: 0.75;
}
#technos{
    box-shadow: var(--shadow-large);
    max-width: 630px;
    border-radius: 16px;
    margin-left: 40px;
    max-height: 140px;
    z-index: 50;
    margin-top: 55px;
}
.techno{
    height: 160px;
    margin-top: -10px;
}
.techno.active{
    background-color: var(--purle-primary);
    border-radius: 48px;
    box-shadow: var(--shadow-medium);
}

.technoImg{
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    transform: translateY(-50%) translateX(-50%);
}
.technoExplain{
    box-shadow: var(--shadow-large);
    background-color: var(--purle-primary);
    border-radius: 25px;
    margin-top: 10px;
    height: 80px;
    font: "inter";
    font-weight: 700;
    color: #6B4EFF;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    vertical-align: middle;
    padding: auto;
    display: none;
}
.technoExp{
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.technoExplain.active{
    display:block !important;
}
#ppal,#zoom{
    width: 190px;
}
#gagenda{
    width: 110px;
}

</style>
