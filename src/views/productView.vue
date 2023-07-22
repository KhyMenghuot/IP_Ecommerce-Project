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
              <img :src="pro.imgUrl">
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
              <img :src="pro.imgUrl">
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
    "imgUrl": "https://m.media-amazon.com/images/I/719tCHXNiXL._AC_UL320_.jpg"
  },
  {
    "id": 2,
    "name": "Apple 13 inch MacBook Air",
    "price": 799,
    "imgUrl": "https://m.media-amazon.com/images/I/51-oeeCf1zL._AC_UY218_.jpg"
  },
  {
    "id": 3,
    "name": "Lenovo IdeaPad 3",
    "price": 450,
    "imgUrl": "https://m.media-amazon.com/images/I/71MFkYd8TTL._AC_UY218_.jpg"
  },
  {
    "id": 4,
    "name": "Acer Spin 3 Convertible Laptop",
    "price": 176,
    "imgUrl": "https://m.media-amazon.com/images/I/81H9y1pPW6L._AC_UY218_.jpg"
  },
  {
    "id": 5,
    "title": "CHUWI HeroBook Pro 14.1 inch",
    "price": 269,
    "imgUrl": "https://m.media-amazon.com/images/I/71jDooDQHpL._AC_UY218_.jpg"
  },
  {
    "id": 6,
    "name": "Lenovo Ideapad L340",
    "price": 868,
    "imgUrl": "https://m.media-amazon.com/images/I/81XvT+ahkoL._AC_UY218_.jpg"
  },
  {
    "id": 7,
    "name": "HP 2020 Newest 17.3 Inch",
    "price": 699,
    "imgUrl": "https://m.media-amazon.com/images/I/61b7mU3bKbL._AC_UY218_.jpg"
  },
  {
    "id": 8,
    "name": "ASUS ROG Zephyrus Duo",
    "price": 3699,
    "imgUrl": "https://m.media-amazon.com/images/I/81e1pXhTE2L._AC_UY218_.jpg"
  },
  {
    "id": 9,
    "name": "Acer Aspire 5 Slim Laptop",
    "price": 579,
    "imgUrl": "https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg"
  },
  {
    "id": 10,
    "name": "Alienware New M15",
    "price": 1799,
    "imgUrl": "https://m.media-amazon.com/images/I/7159o5Y0GIL._AC_UL320_.jpg"
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



