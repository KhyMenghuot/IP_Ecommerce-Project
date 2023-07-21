<template>
 
  <!-- <div class="home">
    <h1>This is an HOme page</h1>
  </div> -->
  <div class="container">
    
    <div class="head">
      
      <a-carousel arrows>
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div><h3><img src="./img/home_slide1.jpg" alt=""></h3></div>
        <div><h3><img src="./img/home_slide2.jpg" alt=""></h3></div>
        <div><h3></h3> <img src="./img/home_slide3.jpg" alt=""></div>
        <div><h3></h3><img src="./img/home_slide4.jpg" alt=""></div>
      </a-carousel>

    </div>
    
    
      <div class="product_container">
            <div class="product_row">
                <div class="figure">
                    <img src="./img/product_feature1.jpg" alt="">
                </div>
                <div class="figure">
                    <img src="./img/product_feature2.jpg" alt="">
                </div>
            </div>
            <div class="product_row">
                <div class="figure">
                    <img src="./img/product_feature3.jpg" alt="">
                </div>
                <div class="figure">
                    <img src="./img/product_feature4.jpg" alt="">
                </div>
            </div>
            <div class="product_row">
                <div class="figure">
                    <img src="./img/product_feature5.jpg" alt="">
                </div>
                <div class="figure">
                    <img src="./img/product_feature6.jpg" alt="">
                </div>
            </div>
      </div>
        <!--event slideshow-->
        
        <!--second product feature-->
        <div class="se_pro_feature">
            <div class="se_pro_row">
                <div class="se_feature">
                    <div class="con_img">
                        <img src="./img/second_pro_feature1.jpg" alt="">
                    </div>
                    <div class="con_desc">
                        <p>Resign supreme With ROG and ROG Strix Z790 gaming motherboards</p>
                        <p>The ROG Maximus and ROG Strix Z790 motherboards families are ready for action</p>
                    </div>
                </div>
                <div class="se_feature">
                    <div class="con_img">
                        <img src="./img/second_pro_feature2.jpg" alt="">
                    </div>
                    <div class="con_desc">
                        <p>AM5 kicks off in style with ROG Crosshair and ROG Strix X670 motherboards</p>
                        <p>ROG Crosshair and ROG Strix X670E motherboards stand ready to power your next AMD Ryzen build
                        </p>
                    </div>
                </div>
            </div>
            <div class="se_pro_row">
                <div class="se_feature">
                    <div class="con_img">
                        <img src="./img/second_pro_feature3.jpg" alt="">
                    </div>
                    <div class="con_desc">
                        <p>Behind the scenes with PC modder Derek Wilson, builder of our epic new</p>
                        <p>Briging OMNI to life as a 4-foot tall gaming PC was no small task-but Derek was up to the
                            challange.</p>
                    </div>
                </div>
                <div class="se_feature">
                    <div class="con_img">
                        <img src="./img/second_pro_feature4.jpg" alt="">
                    </div>
                    <div class="con_desc">
                        <p>Ascend to new heights with the new GeForce RTX 4090 and RTX 4080 cards</p>
                        <p>We're offering ROG Strix and TUF Gaming variants of the GeForce RTX 4090 and RTX 4080 cards
                        </p>
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
<!-- style antd slidso -->
<script lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>

<style scoped>

.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 40px;
  
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 40px;
  color: red;
  /* background-color: rgba(31, 45, 61, 0.11); */
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.container{
  width: 100%;
  height: 100%;
  background-color:rgb(240, 139, 139);
  margin: auto;
  
}
.head{
  height: 500px;
  width: 100%;
  margin: 10px;
  padding: 10px;
}
.head img{
  width: 100%;
  height: 100%;
  align-items: center;
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
/*product feature*/
.product_container {
  width: 100%;
  padding: 0.5rem;
}
.product_container .product_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.product_container .product_row .figure {
  flex: 50%;
  padding: 0.5rem;
  margin: 0;
}
.product_container .product_row .figure img {
  width: 100%;
  height: auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  transform: scale(1);
  transition: 0.3s ease-in-out;
}
.product_container .product_row .figure:hover img {
  transform: scale(1.02);
  transition: 0.3s ease-in-out;
  opacity: 1;
  animation: flash 1.5s;
}
@keyframes flash {
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

/*event slideshow*/
.slide_container {
  width: 100%;
  padding-inline: 8rem;
  padding-top: 5rem;
  padding-bottom: 8rem;
}
.slide_container .slide_header {
  font-weight: bolder;
  text-align: center;
  padding: 1.5rem;
}
.slide_container .owl-carousel .slide_label .slide_img {
  width: 100%;
  height: auto;
  overflow: hidden;
}
.slide_container .owl-carousel .slide_label .slide_img img {
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
.slide_container .owl-carousel .slide_label .slide_img:hover img {
  transform: scale(1.15);
  transition: all 0.3s ease-in-out;
}

/*second product feature*/
.se_pro_feature {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 8rem;
}
.se_pro_feature .se_pro_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.se_pro_feature .se_pro_row .se_feature {
  flex: 50%;
  padding: 0.5rem;
  position: relative;
}
.se_pro_feature .se_pro_row .se_feature .con_img {
  width: 100%;
  height: auto;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  overflow: hidden;
}
.se_pro_feature .se_pro_row .se_feature .con_img img {
  width: 100%;
  height: auto;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}
.se_pro_feature .se_pro_row .se_feature:hover .con_img img {
  transform: scale(1.2);
  transition: all 0.3s ease-in-out;
}
.se_pro_feature .se_pro_row .se_feature .con_desc {
  background-color: rgba(0, 0, 0, 0.482);
  width: 97.5%;
  padding: 1rem;
  position: absolute;
  top: 2%;
}
.se_pro_feature .se_pro_row .se_feature .con_desc p {
  color: #fff;
}
.se_pro_feature .se_pro_row .se_feature .con_desc p:nth-of-type(1) {
  font-size: 1.3rem;
}
.se_pro_feature .se_pro_row .se_feature .con_desc p:nth-of-type(2) {
  opacity: 70%;
  margin: 0;
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
