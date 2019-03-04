<template>
  <div>
    <header1></header1>
    <div class="content">
      <div class="container contact p-5">
        <div class="row flex-row-reverse justify-content-between">
          <div class="col-md-6 contact-info d-flex flex-column">
            <h3 class="contact-title p-4 mb-3 mt-5">تماس با ما</h3>
            <p class="p-4 address">آدرس دفتر مرکزی: تهران، خیابان آزادی، نرسیده به میدان انقلاب، ابتدای خیابان بهزاد، جنب سازمان تاکسیرانی، طبقه ۸ پارکینگ کاوه</p>
            <div class="row p-4 flex-column information">
              <div class="info address col-md-9 mb-3">
                <div class="title" style="float: right;">شماره تلفن ثابت:</div>
                <div class="value english">+98 (21) 96993333</div>
              </div>
              <div class="info address col-md-9 mb-3">
                <div class="title" style="float: right;">شماره پشتیبانی:</div>
                <div class="value english">+98 (21) 1800</div>
              </div>
              <div class="info address col-md-9 mb-3">
                <div class="title" style="float: right;">پست الکترونیکی:</div>
                <div class="value">
                  <a href="mailto:info@carpino.ir"><span itemprop="email">info@carpino.ir</span></a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center SocialNetworks m-4" style="">
              <a href="https://t.me/carpino" class="col-md-1"><img src="../assets/telegram.png" style="width: 1.6em"></a>
              <a href="https://www.instagram.com/carpino_app/" class="col-md-1"><img src="../assets/instagram.png" style="width: 1.6em"></a>
              <a href="https://www.linkedin.com/company/carpino/?trk=top_nav_home" class="col-md-1"><img src="../assets/linkedin.png" style="width: 1.6em"></a>
              <a href="https://twitter.com/carpino_app/" class="col-md-1"><img src="../assets/Tweeter.png" style="width: 1.6em"></a>
            </div>
          </div>
          <img class="col-md-4 mt-5 img-responsive" src="../assets/PicApp1.png">
        </div>
      </div>
    </div>
  <footer1></footer1>
  </div>

</template>

<script>
  import footer1 from './footer'
  import header1 from "./header";
export default {
   components: {
     footer1,
     header1,
    },
    data() {
     return{
     }
    },
    methods: {
    }
}
</script>


<style>
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

div {
  overflow: hidden;
}

.content{
  font-family: IRYekan;
  background-color: #E2E2E2;
  background-repeat: no-repeat;
  background-size: cover;
}

.contact{
  background-color: white;
  background-image: url("../assets/about_background.jpg");
}

.contact-info{
  font-family: "B Nazanin";
  direction: rtl;
}

.contact-title {
  text-align: right;
  font-weight: bold;
  font-size: 2.4em;
  color: #ca265e;
}

.address{
  font-size: 1.4em;
  text-align: right;
  font-weight: 500;
}

.information{
  border-bottom: 1.2px solid #dfe0e1;
}

.value{
  float: left;
  direction: ltr;
}

@media (min-width: 240px) and (max-width: 768px) {
  .contact h5{
     font-size: 12px;
     padding: 0px;
     margin: 0px;
  }
  .content img{
    display: flex;
    visibility: hidden;
  }
  .contact-title{
    font-size: 18px;
  }
  .title{
    font-size: 15px;
  }
  .address{
    font-size: 15px;
  }
}
</style>
