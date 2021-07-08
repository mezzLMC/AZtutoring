<template>
  <div class="row">
    {{ list }}
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'

let days = ["lundi","mardi","mercredi","jeudi","vendredi","samedi"]
module.exports = {
  date: function(){
    return {
      list: days.map(el => '<div class="col-sm">' + el + '</div>')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
