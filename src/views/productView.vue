<template>
  
  <div class="container">
    <div class="head">
      <img src="./img/event_slide3.png" alt="">
    </div>
    
    <div class="body">
      
        <div class="feature">
        <h1>Feature Message</h1>
        </div>
        <div class="row " >
          <div class="col-xl-3 col-md-6 col-12 "  v-for=" pro in products" key="product.name">
            <div class="bg-light" style=" text-align: center; margin: 3px; ">
              <div >
                <img :src="pro.imgUrl" >
              </div>
              
            <div class="des">
              <div class="name" >{{ pro.name }}</div>
              <div class="price" >{{pro.price}}$</div>
            </div>
            <button @click="onDetail(pro)" class="btn btn-primary"  >More detail</button>
            </div>
           
          </div>
        </div>
        <div class="feature">
        <h1>Upcomming Message</h1>
        </div>
        <div class="row " >
          <div class="col-xl-3 col-md-6 col-12 "  v-for=" pro in products" key="product.name">
            <div class="bg-light" style=" text-align: center; margin: 3px; ">
              <img :src="pro.imgUrl" >
            <div class="des">
              <div class="name" >{{ pro.name }}</div>
              <div class="price" >{{pro.price}}$</div>
            </div>
            <button @click="onDetail(pro)" class="btn btn-primary"  >More detail</button>
            </div>
           
          </div>
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
        <div class=" More">
          <h1>More product</h1>
          <p><a href="#">Asus</a></p>
          <p><a href="#">Lanovo</a></p>
          <p><a href="#">Dell</a></p>
          <p><a href="#">MSI</a></p>
          

        </div>
        <div class="  contact">
          <h1>Contact</h1>
          <p>khymenghuot@gmail.com</p>
          <p>phone number: 015201639</p>
          <p>telegram: khymenghuot</p>
        </div>

      </div>
    </footer> 
    <!-- footer -->
    
    
  
</template>
<script>
  export default {
    data() {
    return {
      
      products: [
  {
    "id": 1,
    "name": "Dell XPS 13 9380",
    "price": 1080,
    "imgUrl": "https://m.media-amazon.com/images/I/719tCHXNiXL._AC_UL320_.jpg",
    "des": " Dell Inspiron 5510Processor : Intel Processor i5-11300H Up To 4.4 GHz, 8MB Cache, 4 Core Display : 15.6-inch FHD (1920 x 1080) Anti-glare LED Backlight Non-TouchMemory : 8GB, 4GBx2, DDR4, 3200MHz Storage : M.2 512GB PCIe NVMe SSD Battery : 4-Cell , 54WHr (Integrated) VGA : Intel® Iris® Xe Graphics Intel(R) Wi-Fi 6 2×2 (Gig+) and Bluetooth 5.1 Office : Home And Student 2019 (Word,Excel,PowerPoint) OS : Windows 10 Home Single Language Colour : Platinum Silver, Weight : 1.75kg Bag : DELL Backpack"
  },
  {
    "id": 2,
    "name": "Apple 13 inch MacBook Air",
    "price": 999,
    "imgUrl": "https://m.media-amazon.com/images/I/51-oeeCf1zL._AC_UY218_.jpg",
    "des": " 8-Core CPU 7-Core GPU 8GB Unified Memory 256GB SSD Storage footnote 16-core Neural Engine 13-inch Retina display with True Tone Two Thunderbolt / USB 4 ports Magic Keyboard with Touch ID Force Touch trackpad 30W USB-C Power Adapter"
  },
  {
    "id": 3,
    "name": "Lenovo IdeaPad 3",
    "price": 450,
    "imgUrl": "https://m.media-amazon.com/images/I/71MFkYd8TTL._AC_UY218_.jpg",
     "des": "The IdeaPad 3 series has a slim body with immersive sound. A stylish laptop with excellent performance. View 3 Series Laptops. Compare 3 Serie"
  },
  {
    "id": 4,
    "name": "Acer Spin 3 Convertible Laptop",
    "price": 176,
    "imgUrl": "https://m.media-amazon.com/images/I/81H9y1pPW6L._AC_UY218_.jpg",
    "des":"Acer Spin 3 Convertible Laptop, 14 inches Full HD IPS Touch, 8th Gen Intel Core i7-8565U, 16GB DDR4, 512GB PCIe NVMe SSD, Backlit KB, Fingerprint Reader,"
  },
  {
    "id": 5,
    "title": "CHUWI HeroBook Pro 14.1 inch",
    "price": 269,
    "imgUrl": "https://m.media-amazon.com/images/I/71jDooDQHpL._AC_UY218_.jpg",
    "des":"CHUWI HeroBook Pro 14.1'' Laptop, 8GB RAM 256GB SSD, Windows 11 Laptop, 1TB SSD Expand, Intel Celeron N4020(up to 2.8GHz), 2K FHD IPS Display, Ultra Slim, Mini"
  },
  {
    "id": 6,
    "name": "Lenovo Ideapad L340",
    "price": 868,
    "imgUrl": "https://m.media-amazon.com/images/I/81XvT+ahkoL._AC_UY218_.jpg",
    "des":"The IdeaPad L340 Gaming (15) is a real gamer's laptop, from the inside out. Brings out the gamer in you. With up to 9th Gen Intel® Core™ i7 processing."
  },
  {
    "id": 7,
    "name": "HP 2020 Newest 17.3 Inch",
    "price": 699,
    "imgUrl": "https://m.media-amazon.com/images/I/61b7mU3bKbL._AC_UY218_.jpg",
    "des": "HP 2020 Newest Pavilion 17.3 Inch Touchscreen Laptop (Intel 4-Core i5-8265U up to 3.9GHz, 16GB DDR4 RAM, 1TB SSD, Intel UHD 620, WiFi, Bluetooth, HDMI, Webcam, Standing screen display size: 17.3 Inches RAM: 16 GB DDR4"
  },
  {
    "id": 8,
    "name": "ASUS ROG Zephyrus Duo",
    "price": 3699,
    "imgUrl": "https://m.media-amazon.com/images/I/81e1pXhTE2L._AC_UY218_.jpg",
    "des":"The ROG Zephyrus is the ultimate portable machine made with love by ASUS. It's powered by the powerful 10th Gen Intel Core-i9 10980HK CPU and Nvidia's RTX 2080 ..."
  },
  {
    "id": 9,
    "name": "Acer Aspire 5 Slim Laptop",
    "price": 579,
    "imgUrl": "https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg",
    "des":"Acer Aspire 5 Slim Laptop, 15.6 Full HD IPS Display, AMD Ryzen 5 3500U, Vega 8 Graphics, 8GB DDR4, 256GB SSD, Backlit Keyboard, Windows 10 Home, A515-43-R5RE, Graphics Coprocessor: AMD Radeon "
  },
  {
    "id": 10,
    "name": "Alienware New M15",
    "price": 1799,
    "imgUrl": "https://m.media-amazon.com/images/I/7159o5Y0GIL._AC_UL320_.jpg",
    "des":"The Dell Alienware M15 R7 is one of the best gaming machines you can buy. The combination of i7-12700H and RTX 3070 Ti, along with the 240Hz screen, makes for a pleasant and easy-on-the-eyes gaming experience. The trackpad area can get a bit warm during prolonged use, but this is not at the expense of performance"
  }
]

    }
    
  },
  methods: {
    onDetail(product) {
      // const data = JSON.stringify(product);
      this.$router.push({ path: "/detail", query: {
        name: product.name,
        price: product.price,
        imgUrl: product.imgUrl,
        des: product.des,
      } });
      console.log('clicked...'+ product);

    }
  }
  }
  
  
</script>
<style>
template{
  width: 100%;
  background-color: rgb(240, 139, 139);
  
}
.container{
  background-color: rgb(240, 139, 139);
}
.row{
  margin: 3px;
  width: 100%;
}



.head{
  height: 400px;
  width: 100%; 
  padding: 0px 10px 10px 10px;
}
.head img{
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
}
.feature{
  width: 100%;
  height: 100px;
  text-align: center;

  padding: 10px;
  background-color: rgb(82, 22, 223);
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



