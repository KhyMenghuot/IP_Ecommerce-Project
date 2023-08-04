<template>
    <div class=" col-xl-4 col-md-4 col-12 footer_row">
      <div class="logo">
        <div class="logo_pic">
          <img src="./img/logo.png" alt="">
        </div>
        <h1 style="color: aliceblue;">KMHPC</h1>
        
      </div>
      <div class=" col-xl-4 col-md-4 col-12 More">
        <h1>More product</h1>
        <p><a href="#">Asus</a></p>
        <p><a href="#">Lanovo</a></p>
        <p><a href="#">Dell</a></p>
        <p><a href="#">MSI</a></p>
        

      </div>
      <div class=" col-xl-4 col-md-4 col-12 contact">
        <h1>Contact</h1>
        <p>khymenghuot@gmail.com</p>
        <p>phone number: 015201639</p>
        <p>telegram: khymenghuot</p>
      </div>

    </div>
</template>

<style scoped>
.footer_row{
  display: flex;
  justify-content: space-around;
  background-color:black;
}
 .Contact ,h1,p{
  color: #fff;
}
.More p a{
  color: #fff;
}
.logo_pic img{
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
</style>

