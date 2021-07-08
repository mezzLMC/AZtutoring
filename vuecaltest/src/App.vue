<template lang="pug">
HeroBanner
#p2holder
Reservation
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HeroBanner from './page/HeroBannerPage.vue'
import Reservation from "./page/reservationPage.vue"


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;

}
.title1{
    font-size: 55px;
    line-height: 56px;
    font-weight: 700;
    font-family: "inter";
}
*{
    --purple-dark: #6B4EFF;
    --purle-primary: #C6C4FF;
    --purple-light: #9990FF;
    --shadow-small: 0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08);
    --shadow-medium: 0px 0px 1px rgba(20, 20, 20, 0.08), 0px 1px 8px 2px rgba(20, 20, 20, 0.08);
    --shadow-large: 0px 1px 24px 8px rgba(20, 20, 20, 0.08);
}
.button{
    border-radius: 48px;  
}
.outline-light{
    border: 2px solid var(--purple-light);
    background: transparent;
    color: var(--purple-light);
    font-family: 'inter';
    font-size: 16pt;
    font-weight: 500;
}
.reg-nn-medium{
    font-family: "inter";
    font-weight: 500;
    font-size: 16px;
}
.regular-spaced{
    font: "inter";
    font-weight: 400;
    font-size: 33.5px;
    line-height: 35.5px;
    letter-spacing: 1.5%;
}
.fill-dark{
    border: none;
    background: var(--purple-dark);
    color: white;
    box-shadow: var(--shadow-large);
}
.fill-dark:hover{
    transform: scale(0.97);
}
.fill-dark:active{
    transform: scale(1.03);
}
#p2holder{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 40px;
    background-color: var(--purple-dark);
    z-index: 1000;
}
.login{
    width: 170px;
    height: 58px;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
}
</style>
