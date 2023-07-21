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
              <img :src="pro.image">
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
              <img :src="pro.image">
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
          name: 'Acer',
          price: 700,
          image: '/src/assets/image/pro_detail31.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
        },
        {
          name: 'Asus',
          price: 700,
          image: '/src/assets/image/pro_detail32.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
       
        },
        {
          name: 'Acer',
          price: 700,
          image: '/src/assets/image/pro_detail33.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
       
        },
        {
          name: 'Asus',
          price: 700,
          image: '/src/assets/image/pro_detail34.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei'

        }
        ,
       
        {
          name: 'Acer',
          price: 700,
          image: '/src/assets/image/pro_detail31.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
        },
        {
          name: 'Asus',
          price: 700,
          image: '/src/assets/image/pro_detail32.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
       
        },
        {
          name: 'Acer',
          price: 700,
          image: '/src/assets/image/pro_detail33.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei, '
       
        },
        {
          name: 'Asus',
          price: 700,
          image: '/src/assets/image/pro_detail34.jpg',
          des: 'ASUSTek Computer Inc. is a Taiwanese multinational computer, phone hardware and electronics manufacturer headquartered in Beitou District, Taipei'
       

        }
       
       
      ],

    }
    
  },
  methods: {
    onDetail(product) {
      // const data = JSON.stringify(product);
      this.$router.push({ path: "/detail", query: {
        name: product.name,
        price: product.price,
        image: product.image,
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



