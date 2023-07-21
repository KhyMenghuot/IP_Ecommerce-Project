<template>
   <div class="container ">
        
        <div class="profile ">
            <!-- <img src="../assets/image/logo pic.jpg" alt=" ">  -->
            
        </div> 
        <h1 class="name "> KMH Smart shop</h1>
        
        <div class="container descript ">
            <div class="container ">
                <h2>Video review</h2>
                <p>New model function is the best</p>
                <div class="embed-responsive embed-responsive-16by9 ">
                    <iframe width="100%" height="600px" src="https://www.youtube.com/embed/rzfZ7kNm_uc" title="Best Desktop Computer of 2022 | The 5 Best Desktop PCs Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
            
            </div>
        </div>  
   </div> 
        <div class="container ">
            <div class="row ">
                <!-- <div class="col-xl-6 col-md-6 col-12 box1 " v-for=" pro in products" key="product.name>
                   
                  <img :src="pro.image">
                  
                </div> -->
                <div class="col-xl-6 col-md-6 col-12 box1 ">
                    <div class="detail ">
                        <p>Apple iPhone 14 Pro ; Size, 6.1 inches, 91.7 cm2 (~87.0% screen-to-body ratio) ; Resolution, 1179 x 2556 pixels, 19.5:9 ratio (~460 ppi density) ; Protection ...
                            Internal: 128GB 6GB RAM, 256GB 6GB RAM, ...
                            Battery: Type
                            GPS: Yes, with dual-band A-GPS, GLONASS, ...
                            Battery life: Endurance rating 86h
                        </p>
                    </div>
                </div>
            </div>
                
            </div> 
        <hr style="font: size 30px; ">

        <div class="container ">
            <div class="row ">
                <div class="col-xl-12 col-md-12 col-12 ">
                    <h2>2007 – Eee PC – An Ultra-Portable Laptop</h2>
                    <p style="font-size: 25px; ">
                    
                    The Eee PC was launched in 2007 and was one of the most popular ultraportable laptops ever made. 
                    It was granted numerous awards for its efficient design and was one of the company’s best-selling 
                    products for a short period of time. Unfortunately, the growing popularity
                    of tablets spelled the death of the Eee PC in 2013.
                    2012 – Google Nexus – An Asus Tablet


                    </p>
                    <h2>2012 – Google Nexus – An Asus Tablet</h2>
                    <p>With the growing popularity of tablets, Asus was quick to kill off underperforming products to
                        tap into new markets. They released the Nexus 7 tablet, branded as a Google device. While not the first company to produce tablets, the popularity of the Nexus 7 is a tribute to its price to performance offerings.

                        The innovative tablet was immensely popular from its initial launch in 2012, with many retailers running out of stock quickly. Additionally, magazines like Engadget and PC World pointed out the competitive 
                        pricing and unique benefits of the Nexus 7 tablet.</p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-xl-12 col-md-12 col-12 ">
                        <h2> History</h2>
                        <p style="font-size: 25px; ">
                            The end of the 1990s was a time of rapid growth for Asus. The company prioritized talent acquisition and research into new technologies. Because of this, they were able to bring radical new technology to market before their competitors. 

                            Asus began trading as a public company in 1996, with an official listing on the Taiwan Stock Exchange. Thanks to Asus, Taiwan became a hub for technology with a reputation for quality components and new development. The company branched out into the mobile computing market with the release of the Asus P6300 laptop in 1997.

                            By 2000, the company opened customer service centers in China, the Netherlands, the United States, Australia, and Japan. With such extensive marketing efforts, the company soon became a household name, especially with further advances in the laptop market. 

                            The early 2000s saw Asus release an array of experimental technologies. It started with the launch of the world’s first ever PDA, or personal digital assistant. An early precursor to the modern smartphone, the PDA was designed to take notes, hold dates in a calendar, and offer functions like a calculator and clock. While not a smashing commercial success, the Asus PDA ran on the Intel PXA250 CPU and was officially named the Asus MyPal. 
                        </p>
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
  
</template>
<!-- <script>
   export default{
    data(){
      return{
        [
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
        ]
      }
    }
   }
</script> -->
<style>
  .container{
  width: 100%;
  background-color: rgb(240, 139, 139);
  margin: auto;

}
.profile,
.profile img {
    width: 300px;
    height: 300px;
    background-color: brown;
    border-radius: 300px;
    margin: auto;
}

h1 {
    text-align: center;
}

.detail p {
    padding-top: 60px;
    font-size: 30px;
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