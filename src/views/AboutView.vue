<template>
  <div class="container">
    <div class="head">
      <img src="./img/article_cover.jpg" alt="">
    </div>
  
  <div class="user">
    <div class="user1">Boy</div>
    <div class="user2">Girl</div>
  </div>
  <div class="box-body">
    <div class="box1">
      <div class="lift">
        <div class="des">
          
            <ul>
              <li>ASUS Vivobook Go 15 OLED (E1504F)</li>
              <li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
              <li> Up to Intel® Core™ i9 HX55 processor</li>
              <li>Up to NVIDIA® GeForce RTX 4070 GPU </li>
              <li> Up to 3.2K 120 Hz OLED display</li>
              <li> Up to 64 GB DDR5 with dual SO-DIMM</li>
              <li> Up to 2 TB SSD with one M.2 Slot</li>
              <li> ASUS IceCool Pro thermal technology</li>
              <li> Dual Thunderbolt™ 4 for up to 40Mbps</li>
            </ul>
        </div>
      </div>
      <div class="right">
        <div class="img"> <img src="./img/product1.jpg" alt=""></div>
        <div class="price"><p>price: 699$</p></div>
        <button>Buy New</button>

      </div>

    </div>
    <div class="box1">
      <div class="lift">
        <div class="des">
          
            <ul>
              <li>ASUS Vivobook Pro 16X OLED (M7601, AMD Ryzen 6000 Series)</li>
              <li>Windows 11 Pro - ASUS recommends Windows 11 Pro for business</li>
              <li>Up to AMD Ryzen™ 9 6900HX Processor</li>
              <li>Up to NVIDIA® GeForce® RTX3060</li>
              <li>3.2K 120Hz 0.2ms OLED display</li>
              <li>Up to DDR5 32GB 4800MHz</li>
            </ul>
        </div>
      </div>
      <div class="right">
        <div class="img"> <img src="./img/image3.jpg" alt=""></div>
        <div class="price"><p>price: 699$</p></div>
        <button>Buy New</button>

      </div>

    </div>
    <div class="box1">
      <div class="lift">
        <div class="des">
          
            <ul>
              <li>ASUS Vivobook Go 15 OLED (E1504F)</li>
              <li>Windows 11 Home - ASUS recommends Windows 11 Pro for business</li>
              <li> Up to Intel® Core™ i9 HX55 processor</li>
              <li>Up to NVIDIA® GeForce RTX 4070 GPU </li>
              <li> Up to 3.2K 120 Hz OLED display</li>
              <li> Up to 64 GB DDR5 with dual SO-DIMM</li>
              <li> Up to 2 TB SSD with one M.2 Slot</li>
              <li> ASUS IceCool Pro thermal technology</li>
              <li> Dual Thunderbolt™ 4 for up to 40Mbps</li>
            </ul>
        </div>
      </div>
      <div class="right">
        <div class="img"> <img src="./img/image6.jpg" alt=""></div>
        <div class="price"><p>price: 699$</p></div>
        <button>Buy New</button>

      </div>

    </div>
  </div>
  <footer>
    <div class="footer_row">
      <div class="logo">
        <div class="logo_pic">
          <img src="./img/logo.png" alt="">
        </div>
        <h1 style="color: aliceblue;">KMHPC</h1>
        
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
  </div>
</template>
<style>
  .container{
  width: 1024px;
  height: 100%;
  background-color: rgb(240, 139, 139);
  margin: auto;

}
.head{
  height: 200px;
  width: 100%; 
  padding: 0px 10px 10px 10px;
 
}
.head img{
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
}
.user{
  display: flex;
  height: 100px;
  background-color: blue;
  margin: 10px;
}
.user1, .user2{
  flex: 50%;
  background-color: darkcyan;
  margin: 5px;
}
.box-body{
  width: 100%;
}
.box1{
  display: flex;
  margin: 5px;
  padding: 5px;
  background-color: rgb(178, 156, 156);  
}
/*footer*/
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