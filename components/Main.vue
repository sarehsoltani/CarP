<template>
  <div>
    <!--<header1></header1>-->
    <div class="container flex-row-reverse header">
      <a href="#https://www.carpino.ir" class="logo pull-rightc "><img src="../assets/CarpinoLogo.png"></a>
      <button v-on:click.prevent="Register()" type="button" class="pull-right btn2 mt-4 mr-2 ">ثبت نام پنل سازمانی</button>
      <button v-on:click.prevent="Login()" type="button" class="pull-right btn2 mt-4 mr-3">ورود  به  پنل سازمانی</button>
      <button v-scroll-to="'.download'" type="button" class="pull-left btn1 mt-4 mr-3">دریافت اپلیکیشن</button>
    </div>
    <div class="body">
      <div class="container" style="">
        <div>
        <!--Slider-->
        <slick ref="slick" :options="slickOptions" style=" position: relative">
          <img class="" src="../assets/header1.jpg">
          <img class=""  src="../assets/header2.jpg">
          <img class=""  src="../assets/header3.jpg">
        </slick>
        <!--Slider-control-->
        <a class="left control" id="gallery-prev" href="#home" role="button" data-slide="prev" style="left:12.5%; top:50%; bottom: 4%;">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="right control" id="gallery-next" href="#home" role="button" data-slide="next" style="right:12.5%; top:50%; bottom: 4%">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </a></div>
        <!--Values-->
        <div>
          <div class="row values" style="background-color: white">
            <img class="col-md-12 col-sm-12 col-lg-12" src='../assets/Values.jpg'>
          </div>
        </div>
        <!--Route-->
        <div>
          <div class="row route" style="background-color: #ca265e">
            <img class="col-md-12 col-sm-12 col-lg-12" src='../assets/route.jpg'>
          </div>
        </div>
        <!--Download-->
        <div>
          <div class="row download" style="background-color: white;">
            <!--<div class="download d-flex flex-row justify-content-end" style="background-color: white; height: 75vh">-->
            <img class="col-md-5 col-sm-5 col-lg-5" src="../assets/mobile.png" style="margin-top: 12vh">
            <div class="col-md-7 col-sm-7 col-lg-7 mt-5 d-flex flex-column justify-content-center" style="">
              <div class="mb-5 d-flex flex-row-reverse justify-content-around">
                <a href="https://www.cafebazaar.ir/app/com.radnik.carpino.passenger/?l=fa" class=""><img style="width: 11vw" src="../assets/button-0۴_3.png"></a>
                <a href="https://carpino.ir/statics/passenger.apk" class=""><img style="width: 11vw" src="../assets/button-0۷_6.png"></a>
              </div>
              <div class="mb-5 d-flex flex-row-reverse justify-content-around">
                <a href="https://www.iranapps.ir/app/com.radnik.carpino.passenger" class=""><img style="width: 11vw" src="../assets/button-0۵_4.png"></a>
                <a href="https://www.myket.ir/app/com.radnik.carpino.passenger?lang=fa" class=""><img style="width: 11vw" src="../assets/button-0۳_2.png"></a>
              </div>
              <div class="d-flex flex-row-reverse justify-content-around">
                <a href="https://new.sibapp.com/applications/carpino-dev-1" class=""><img style="width: 11vw" src="../assets/button-0۶_5.png"></a>
              </div>
            </div>
          </div>
        </div>
        <!--about-->
        <div>
          <div class="row about d-flex flex-column justify-content-center" style="background-color: white; align-items: center">
              <h1 class="mb-5 about-title" style="">درباره ما</h1>
              <p class="mb-5 about-info" style="text-align: center">{{Info}}</p>
          </div>
        </div>
        <!--team-->
        <div>
          <div class="row team"></div>
        </div>
    </div>
  </div>
    <footer1></footer1>

  </div>
</template>

<script>
  import Slick from 'vue-slick'
  import header1 from './header'
  import footer1 from './footer'
  export default {
    name: 'Main',
    components: {
      Slick,
      header1,
      footer1,
    },
    props: {
      images: Array,
    },
    data () {
      return {
        message: 'سفری با خیال راحت ',
        msg1: '. ما منحصرا با خطوط تاکسی های شهر شما کار می کنیم. با راننده هایی که تمام نقاط شهر را می شناسند',
        msg2: 'برای شروع ابتدا شماره موبایل خود را وارد کنید',
        Info: 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. \n' +
          'همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانوادهٔ‌تان رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. \n' +
          'ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
        footerInfo:'اپلیکیشن درخواست تاکسی های رسمی شهر',
        footerAddress:'خیابان آزادی، نرسیده به میدان انقلاب، ابتدای خیابان بهزاد، جنب سازمان تاکسیرانی، طبقه ۸ پارکینگ کاوه',
        footerPhone:'تلفن :  ۰۲۱۵۳۸۵۰۱۱۱ - پشتیبانی : ۱۸۰۰  ',
        footerEmail: ' info@carpino.ir : ایمیل ',
        slickOptions: {
          arrows: true,
          dots: false,
          // nextArrow: '<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" viewBox="0 0 64 64" class="_3xSnrg _1FDqhd" style="vertical-align:middle"><g><path d="M38.49 20.944l-2.06-2.18L22.234 32.19l14.023 13.3 2.065-2.176-11.725-11.121z"></path></g></svg>',
          // prevArrow: '<svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="2em" width="2em" viewBox="0 0 64 64" class="_1FDqhd" style="vertical-align:middle; "><g><path d="M38.49 20.944l-2.06-2.18L22.234 32.19l14.023 13.3 2.065-2.176-11.725-11.121z"></path></g></svg>',
	        prevArrow: '#gallery-prev',
        nextArrow: '#gallery-next',
          autoplay: true,
          autoplaySpeed: 3000,
          fade: true,
          fadeSpeed: 100,
          infinite: true,
        },
      };
    },
    methods: {
      next() {
        this.$refs.slick.next();
      },
      prev() {
        this.$refs.slick.prev();
      },
      Register() {
        window.location.href = 'http://www.carpino.ir/login';
      },
      Login() {
        // window.location.href = 'http://www.carpino.ir/login';
        window.location.href = 'http://corporate.carpino.ir/#!/login';
      }
    },

}
</script>

<style>
  @import "../../node_modules/slick-carousel/slick/slick.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.body {
  font-family: IRYekan;
  background-color: #E2E2E2;
}
/*header*/
  .header {
  overflow: hidden;
  /*background-color: ghostwhite;*/
  /*background-color: purple;*/
  /*border-bottom: 1px solid #b4b4b4;*/
}

.header a {
  float: right;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  /*font-size: 25px;*/
  /*font-weight: bold;*/
}

.header a:hover {
  /*background-color: #ddd;*/
  /*color: black;*/
}

.header a.active {
  /*background-color: dodgerblue;*/
  /*color: white;*/
}

/*.header-left {*/
  /*float: left;*/
/*}*/

.btn1{
  -webkit-appearance: button;
  max-width: 120px!important;
  height: 45px;
  border-radius: 5px;
  background-color: #ca265e;
  border: 1px solid #11111f;
  color: whitesmoke!important;
  font-family: IRYekan;
  font-weight: 500;
  font-size: 0.7em;
}

.btn2{
  -webkit-appearance: button;
  max-width: 120px!important;
  height: 45px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ca265e;
  color: #ca265e;
  font-family: IRYekan;
  font-weight: 500;
  font-size: 0.7em;
}

@media screen and (max-width: 500px) {
  .header button,a {
    float: none;
    display: block;
    text-align: right;
    margin-top: 5px;
  }

  .header-left {
    float: none;
  }
}
  /**/
div {
  overflow: hidden;
}

.logo img{
  width: 150px;
}


@media screen and (min-width: 768px){
.control .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right{
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;}
}
  /*Slider*/
  .control {
    position: absolute;
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    width: 15%;
    font-size: 2.4em;
    color: gainsboro;
    text-align: center;
    /*text-shadow: 0 1px 2px rgba(0,0,0,.6);*/
    /*background-color: rgba(0,0,0,0);*/
    /*filter: alpha(opacity=50);*/
    opacity: 1;
}
  .control:hover{
    color: whitesmoke;
  }


/*bg*/
.values{
  /*background-image: url("../assets/Values.jpg");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-color: white;*/
  /*background-size: 100%;*/
  height: 440px;
}

.route{
  /*background-image: url("../assets/route.jpg");*/
  /*background-position: center;*/
  /*background-repeat: no-repeat;*/
  /*background-color: white;*/
  /*background-size: 100%;*/
  height: 250px;
  /*width: 100vm;*/
}

/*about*/
.about{
  height: 450px;
}

.about-title {
    margin-top: 50px!important;
    text-align: center!important;
    padding-top: 10px!important;
    font-size: 20px;
}
@media screen and (max-width: 991px){
.about-title {
    margin-top: 25px!important;
    text-align: center!important;
    padding-top: 10px!important;
    font-size: 12px;}
}

@media screen and (max-width: 991px){
.about-info {
    text-align: center;
    padding: 5px 80px;
    line-height: 2;
    vertical-align: middle;
    display: inline-block;
    margin: 1em;
    font-size: 12px;}
}

.about-info {
  text-align: justify;
  padding: 0 14px;
  font-weight: 300;
  margin-left: 4em;
  margin-right: 4em;
  font-size: 1.5rem;
}
/*.about p {*/
  /*font-size: 1.4rem;*/
  /*font-weight: 300;*/
  /*color: #373a3c;*/
  /*text-align: justify;*/
/*}*/


.team{
  background-image: url("../assets/team.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: white;
  height: 650px;
}




.footer p{
  font-size: 2rem;
  font-weight: bold;
  color: #373a3c;
  font-family: Calibri;
}

/*footer*/
.footer p{
  color: #eeeeee;
  font-family: "B Nazanin";
  font-size: 0.78em;
}

.SocialNetworks img{
  width: 1.7em;
}
.Sponsers img{
  width: 5em;
}
</style>
