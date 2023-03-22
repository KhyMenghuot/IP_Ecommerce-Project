<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'

</script> -->

<template>
  <header>
    

    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">product</RouterLink>
        <!-- <RouterLink to="#">
          <div class="seach">
            <img src="./img/icon search.png" alt="">
          </div>
        </RouterLink> -->

        <button @click="$emit('checkout')">Go to check out</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
   margin-top: 2rem; 
  background-color: blue;
  height: 50px;
}
nav a.router-link-exact-active {
  color: red;
}
nav a.router-link-exact-active:hover {
  color: red;
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  color: white;
  font-size: 20px;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 40;
}
.seach{
  width: 400px;
  height: 30px;
  background-color: aliceblue;
  padding: 10px;
  margin: 10px;
}
.seach img{
  width:30px;
  height: 25px;
  text-align: center;
}
  
</style>

