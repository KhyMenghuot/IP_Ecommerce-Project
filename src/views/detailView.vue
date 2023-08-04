<template>
   
   <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h1>{{ name }}</h1>
          <p>{{ des }}</p>
        </div>
        <div class="col-md-6 col-12">
          <div class="col-12">
            <img :src="imgUrl" alt="">
            
            <h2> Price:{{ price }}</h2>
            <button @click="cart(pro)" bnt-peimary  class="btn btn-primary" >Buy New</button>
          </div>
        </div>
          
      </div>
       
        
    </div>

  
    

</template>
<script>
 export default {
    data() {
        return {
          name: '',
          price: 0,
          imgUrl: '',
          des: '',
        }
    },
    created() {
        this.des = this.$route.query.des;
        console.log('created called...');
        const params = this.$route.query.des;
        console.log(params);
        this.name = this.$route.query.name;
        this.price = this.$route.query.price;
        this.imgUrl = this.$route.query.imgUrl;
    },
    methods: {
    cart(product) {
      // const data = JSON.stringify(product);
      this.$router.push({ path: "/Cart", query: {
        
      } });
      console.log('clicked...'+ product);

    }
  }

 }
</script>
<style>
  .container{
    width: 100%;
    background-color: gray;
  }
</style>

