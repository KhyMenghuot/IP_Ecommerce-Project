<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'

</script> -->

<template>
  <header>
    

    <div class="wrapper">
      
      <nav>
        <!-- <img class="logo" src="./assets/images/logo.png" alt=""> -->
          <RouterLink to="/"> HOME</RouterLink>
          <RouterLink to="/product">Product</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          
          <router-link to="/Contact">Contact</router-link>
          <span class="search"><input type="text" placeholder="search"></span>
          <router-link to="/cart">
          <div class="cart">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nN2UsQ7BUBSGPwsGAxEziweQiGdQEpNX8QzSd5B0EJ7AKGG3moytCSPBQKXJGZpI6tzmVsKX3O075z+3PS38C08glONlEfCIBdyAGhmxiAWlPaukgJ6FgG1SQA7YiRiFaSkDR6kbfJJHIkaPS4srNWuNXAEusllNhd8AruK3tRN5MpGrcOfiTjGgJUUnoJjgdWTy6AZ1DNkYbM7YtHkVOCgaR5PPgIJpwEQaLGV1rVKS38VduUXG5IFzyq9YzVD5DsK0AZnTB/ZAADgWvDeC2LV9C973Axwp9oGuBe+HeQGdhY4nafPkOQAAAABJRU5ErkJggg==">
            Cart (0)
            </div>
          </Router-Link>

        <!-- <button @click="$emit('checkout')">Go to check out</button> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style>

nav {
  /* lock mennu position fixed top =0*/
  /* position: fixed; */
  
  /* top: 0; */
  z-index: 100;
  width: 100%;
  font-size: 20px;
  text-align: center;
  /* margin-top: 2rem;  */
  background-color: #E36D6D;
  height: 50px;
  text-decoration: none;
}
.nav a.router-link-exact{
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: blue;
}
nav a.router-link-exact-active:hover {
  color: blue;
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

