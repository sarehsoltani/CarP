<template>
  <div class="body">
    <div class="wrapper">
      <header1></header1>
      <div class="content" >
      <div class="container contact p-5 ">
        <div class="d-flex flex-row-reverse justify-content-between p-5 mt-5">
          <div class="col-md-6 contact-info d-flex flex-column p-4">
            <h3 class="contact-title pt-5 pr-5  mb-3 mt-5">تماس با ما</h3>
            <p class="pr-5 pt-5 p-3 pb-3 address" style="line-height: 2">آدرس دفتر مرکزی: تهران، خیابان آزادی، نرسیده به میدان انقلاب، ابتدای خیابان بهزاد، جنب سازمان تاکسیرانی، طبقه ۸ پارکینگ کاوه</p>
            <div class="d-flex p-5 flex-column information">
              <div class="info address mb-3">
                <div class="title" style="float: right;">شماره تلفن ثابت:</div>
                <div class="value english">+98 (21) 53850111</div>
              </div>
              <div class="info address  mb-3">
                <div class="title" style="float: right;">شماره پشتیبانی:</div>
                <div class="value english">+98 (21) 1800</div>
              </div>
              <div class="info address mb-3">
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
          <div class="col-md-6 mt-5 p-5">
            <img class="img-responsive" src="../assets/PicApp1.png">
          </div>
        </div>
      </div>
    </div>
    </div>
    <footer1 class="footer"></footer1>
  </div>
</template>
<script>
import footer1 from './footer'
import header1 from './header'
export default {
    name: 'contact',
    components: {
      header1,
      footer1,
    },
    props: {
      images: Array,
    },
    data () {
      return {
           };
    },
    methods: {
    },
}


</script>
<style scoped>
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
.body {
  /*height: 100%;*/
  margin: 0;
}
.wrapper {
  min-height: calc(100vh - 180px);
}

.footer{
  height: 180px;
}

.content{
  font-family: iranyekan;
  background-color: #E2E2E2;
  /*background-repeat: repeat-y;*/
  background-size: cover;
}

.contact{
  background-image: url("../assets/about_background.jpg");
  background-size: cover;
  min-height: calc(100vh - 200px);
}

.contact-info{
  font-family: iranyekan;
  direction: rtl;
}

.contact-title {
  font-family: iranyekan;
  text-align: right;
  font-size: 1.7em;
  color: #ca265e;
}

.address{
  font-size: 1.1em;
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
