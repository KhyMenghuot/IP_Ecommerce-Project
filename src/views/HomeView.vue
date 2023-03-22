<template>
 
  <!-- <div class="home">
    <h1>This is an HOme page</h1>
  </div> -->
  <div class="container">
    <div class="head">
      
      <img src="./img/article_cover.jpg" alt="">
    </div>
    <div class="feature">
      <h1>Feature Message</h1>
    </div>
    <div class="body">
      <div class="row">
        <div class="column">
          <img src="./img/images1.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">599$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/image2.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">899$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/image3.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">799$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/images4.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">699$</div>
          </div>
          <a href="#">More detail</a>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="./img/images5.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">499$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/image6.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">699$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/image7.jpg" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">699$</div>
          </div>
          <a href="#">More detail</a>
        </div>
        <div class="column">
          <img src="./img/image8.webp" alt="">
          <div class="des">
            <div class="name">Asuz</div>
            <div class="price">799$</div>
          </div>
          <a href="#">More detail</a>
        </div>
      </div>
    </div>
  </div>
  <!--Footer-->
  <footer>
    <div class="footer_row">
      <div class="logo">
        <div class="logo_pic">
          <img src="./img/logo.png" alt="">
        </div>
        <h1>KMHPC</h1>
        
      </div>
      <div class="More">
        <h1>More product</h1>
        <p><a href="#">Asus</a></p>
        <p><a href="#">Lanovo</a></p>
        <p><a href="#">Dell</a></p>
        <p><a href="#">MSI</a></p>
        

      </div>
      <div class="contact">
        <h1>Contact</h1>
        <p>khymenghuot@gmail.com</p>
        <p>phone number: 015201639</p>
        <p>telegram: khymenghuot</p>
      </div>

    </div>
  </footer>
</template>

<style>
.container{
  background-color: gray;
}
.head{
  height: 100%;
  width: 100%;
  margin: 10px;
  padding: 10px;
}
.head img{
  width: 100%;
  height: 100%;
  align-items: center;
}
.feature{
  width: 100%;
  height: 100px;
  text-align: center;
  margin: 10px;
  padding: 10px;
  background-color: rgb(245, 245, 245);
}
.body{
  height: 100%;
  
}
.row{
  display: flex;

}
.column{
  width: 24.5%;
    
   margin: 5px;
   padding: 5px;
  background-color: white;
}
.column img{
  width: 100%;
  height: 65%;
}
.des{
  width: 80%;
  display: flex;
  margin: flex-start;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
}
.name{
  margin: flex-start;
  font-size: 40px;
}
.price{
  margin: flex-end;
  font-size: 40px;
  color: red;
}

/*footer*/
.footer_row{
  display: flex;
  justify-content: space-around;
  background-color: red;
}

.logo_pic img{
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
