<template>
    
  <div class="container ">
        <div class="profile ">
            <img src="../assets/image/logo pic.jpg " alt=" "> 
            
        </div> 
        <h1 class="name ">KMH Shop</h1>
        <div class="row ">
            <div class="col-lg-12 text-center ">
                <h2>Contact us</h2>
            </div>
        </div>
    </div>
    <div class="container ">
    <div class="contact spad ">
        <div class="container ">
            <div class="row ">
                <div class="col-lg-3 col-md-3 col-sm-3 text-center ">
                    <div class="contact_widget ">
                        
                        <a href=" ">
                            <i class="fa fa-phone " aria-hidden="true "></i>
                        </a>
                        <h4>Phone</h4>
                        <p>+85596343243</p>
                        
                    </div>
                   
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 text-center ">
                    <div class="contact_widget ">
                        
                        <a href=" ">
                            <i class="fab fa-telegram "></i>
                        </a>
                        <h4>Telegram</h4>
                        <p>+85596343243</p>
                        
                    </div>
                   
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 text-center ">
                    <div class="contact_widget ">
                        
                        <a href=" ">
                            <i class="fa fa-envelope " aria-hidden="true "></i>

                        </a>
                        <h4>Email</h4>
                        <p>khymenghuot@gmail.com</p>
                        
                    </div>
                   
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 text-center ">
                    <div class="contact_widget ">
                        
                        <a href=" ">
                            <i class="fab fa-facebook-f "></i>

                        </a>
                        <h4>facebook</h4>
                        <p>khymenghuot</p>
                        
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
    <form class="row g-3 ">
        
        <div class="col-12 ">
            <label for="inputFullname " class="form-label ">Full Name</label>
            <input type="text " class="form-control " id="inputFullname " placeholder="full name ">
        </div>
        <div class="col-md-12 ">
            <label for="inputEmail4 " class="form-label ">Email</label>
            <input type="email " class="form-control " id="inputEmail4 ">
        </div>
        <div class="col-md-12 ">
            <label for="input " class="form-label ">phone number</label>
            <input type="text " class="form-control " id="phone number ">
        </div>
        <div class="col-12 ">
            <label for="inputAddress " class="form-label ">Address</label>
            <input type="text " class="form-control " id="inputAddress " placeholder="1234 Main St ">
        </div>

        <div class="col-md-6 ">
            <label for="inputCity " class="form-label ">City</label>
            <input type="text " class="form-control " id="inputCity ">
        </div>
        <div class="col-md-4 ">
            <label for="inputState " class="form-label ">State</label>
            <select id="inputState " class="form-select ">
            <option selected>Choose...</option>
            <option>Asus</option>
            <option>Acer</option>
            <option>Lenovo</option>
            <option>Dell</option>
            <option>Php</option>
            <option>mac</option>
            <option>Desktop</option>
            
            
          </select>
        </div>
        <div class="col-md-2 ">
            <label for="inputZip " class="form-label ">Zip</label>
            <input type="text " class="form-control " id="inputZip ">
        </div>
        <div class="col-12 ">
            <div class="form-check ">
                <input class="form-check-input " type="checkbox " id="gridCheck ">
                <label class="form-check-label " for="gridCheck ">
              Check me out
            </label>
            </div>
        </div>
        <div class="col-12 ">
            <button type="submit " class="btn btn-primary ">submit</button>
        </div>
    </form>
  </div>

<div class="map ">
    <center>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5528.112316891454!2d104.84246352078887!3d11.554310396534014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951ff37cee895%3A0x18437893c138eb5a!2sN.%20C.%20X.%20CO.%2C%20LTD.!5e0!3m2!1sen!2skh!4v1660873720994!5m2!1sen!2skh "
            width="600 " height="450 " allowfullscreen=" " loading="lazy " referrerpolicy="no-referrer-when-downgrade "></iframe>
    </center>
</div>
<div class="footer">
    <RouterLink to="/Footer">Product</RouterLink>
</div>
</template>
<!-- style -->
<style scoped>

.profile,
.profile img {
    width: 300px;
    height: 300px;
    border-radius: 300px;
    margin: auto;
}

h1 {
    text-align: center;
}
</style>