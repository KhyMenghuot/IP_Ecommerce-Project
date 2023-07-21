<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'

</script> -->

<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-lg bg-body-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><H1>K M H</H1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="  nav-item outline-primary">
              <RouterLink to="/" class="nav-link text-white " aria-current="page"><h3>Home</h3> </RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink to="/product" class="nav-link text-white "><h3>Product</h3></RouterLink>
              
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link text-white  "><h3>About</h3></RouterLink>
              
            </li>
            <li class="nav-item ">
              <router-link to="/Contact" class="nav-link text-white  "><h3>Contact</h3></router-link>
              
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2 w-19" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <router-link to="/cart" class="cart">
              <div class="cart">
                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5UlEQVR4nN2UsQ7BUBSGPwsGAxEziweQiGdQEpNX8QzSd5B0EJ7AKGG3moytCSPBQKXJGZpI6tzmVsKX3O075z+3PS38C08glONlEfCIBdyAGhmxiAWlPaukgJ6FgG1SQA7YiRiFaSkDR6kbfJJHIkaPS4srNWuNXAEusllNhd8AruK3tRN5MpGrcOfiTjGgJUUnoJjgdWTy6AZ1DNkYbM7YtHkVOCgaR5PPgIJpwEQaLGV1rVKS38VduUXG5IFzyq9YzVD5DsK0AZnTB/ZAADgWvDeC2LV9C973Axwp9oGuBe+HeQGdhY4nafPkOQAAAABJRU5ErkJggg==">
                <label for="">Cart(0)</label>
                </div>

              </Router-Link>
        </div>
      </div>
    </nav>
    </div>
  </header>

  <RouterView />

  <footer></footer>
</template>
<style>


nav {
  margin: 10px;
  background-color: #E36D6D;
}
 nav a.router-link h3{
  color: white;
}

nav a.router-link .active {
  color: blue;
}
nav a.router-link-exact-active:hover {
  color: blue;
  background-color: transparent;
}
/* nav a {
  display: inline-block;
  padding: 0 1rem;
  color: white;
  font-size: 20px;
  border-left: 1px solid var(--color-border);
} */

.cart{
  padding: 5px;
  margin: 10px;
}


</style>

