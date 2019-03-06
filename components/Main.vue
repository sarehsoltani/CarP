<template>
  <div>
    <header1></header1>
    <div class="body">
      <div class="container" style="">
        <div>
        <!--Slider-->
        <slick ref="slick" :options="slickOptions" style=" position: relative">
          <img class="img-responsive" src="../assets/header1.jpg">
          <img class="img-responsive"  src="../assets/header2.jpg">
          <img class="img-responsive"  src="../assets/header3.jpg">
        </slick>
        <!--Slider-control-->
        <a class="left control" id="gallery-prev" href="#home" role="button" data-slide="prev" style="top:50%;">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </a>
        <a class="right control" id="gallery-next" href="#home" role="button" data-slide="next" style="left: 70vw; top:50%;">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </a></div>
        <!--Values-->
        <div class="" style="background-color: white">
          <div class="row justify-content-center values">
            <img class="p-1" style="" src="../assets/c.jpg">
            <img class="p-1" style="" src="../assets/a.jpg">
            <img class="p-1" style="" src="../assets/b.jpg">
          </div>
        </div>
        <!--Route-->
        <div>
          <div class="row route" style="background-color: #ca265e">
            <img class="img-responsive col-md-12 col-sm-12 col-lg-12" src='../assets/route.jpg'>
          </div>
        </div>
        <!--Download-->
        <div>
          <div class="download" style="background-color: white;">
            <!--<div class="download d-flex flex-row justify-content-end" style="background-color: white; height: 75vh">-->
            <img class="row col-md-5 col-sm-5 col-lg-5 mt-5 img-responsive" id="dlPic" src="../assets/mobile.png">
            <div class="row col-md-7 col-sm-7 col-lg-7 mt-5 d-flex flex-column justify-content-center dlContent">
              <div class="d-flex flex-row justify-content-end m-3" style="text-align: center">
                <h5 style="font-family: iranyekan; text-align: center; font-size: 20px">دانلود اپلیکیشن مسافر</h5>
              </div>
              <div class="mt-5">
                <div class="row dlBtn">
                  <a href="https://www.cafebazaar.ir/app/com.radnik.carpino.passenger/?l=fa" class="m-4">
                    <img class="img-responsive"  src="../assets/button-0۴_3.png">
                  </a>
                  <a href="https://carpino.ir/statics/passenger.apk" class="m-4">
                    <img class="img-responsive " src="../assets/button-0۷_6.png">
                  </a>
                </div>
                <div class="row dlBtn">
                  <a href="https://www.iranapps.ir/app/com.radnik.carpino.passenger" class="m-4">
                    <img class="img-responsive" src="../assets/button-0۵_4.png">
                  </a>
                  <a href="https://www.myket.ir/app/com.radnik.carpino.passenger?lang=fa" class="m-4">
                    <img class="img-responsive" src="../assets/button-0۳_2.png">
                  </a>
                </div>
                <div class="row dlBtn">
                  <a v-on:click.prevent="navigate()" class="m-4" href="#">
                    <img class="img-responsive" src="../assets/button-0۶_5.png">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--about-->
        <div>
          <div class="row about d-flex flex-column justify-content-center" style="background-color: white; align-items: center">
              <h1 class="mb-5 mt-5 pt-5 about-title" style="">درباره ما</h1>
              <p class="mb-5 mt-2 pr-5 pl-5 ml-5 mr-5 about-info">{{Info}}</p>
          </div>
        </div>
        <!--team-->
         <div class="pb-5 pt-5" style="background-color: white">
          <div class="row team">
            <img class="img-responsive" src='../assets/team.jpg'>
          </div>
        </div>
    </div>
  </div>
    <footer1></footer1>

  </div>
</template>

<script>
  import Slick from 'vue-slick'
  import header1 from './header'
  import router from '../router'
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
         Info: 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. \n' +
          'همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانوادهٔ‌تان رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. \n' +
          'ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
        slickOptions: {
          arrows: true,
          dots: false,
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
      next(){
        this.$refs.slick.next();
      },
      prev(){
        this.$refs.slick.prev();
      },
      navigate() {
        router.push({ name: "IOS" });
      },
    },

}
</script>

<style>
  @import "../../node_modules/slick-carousel/slick/slick.css";
  @import "../assets/font/Farsi_numerals/WebFonts/css/fontiran.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.css";
  /*@import "../assets/font/font-awesome-4.7.0/fonts/B Nazanin_p30download.com.ttf";*/
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.body {
  font-family: iranyekan;
  background-color: #E2E2E2;
}

/*Slider*/
.control {
  position: absolute;
  width: 15%;
  font-size: 2.4em;
  color: gainsboro;
  text-align: center;
  opacity: 1;
}

.control:hover{
  color: whitesmoke;
}

/*Download*/

@media (max-width: 600px) {
  #dlPic {
    visibility: hidden;
    /*display: none;*/
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    /*width: 28%;*/
    display: none;
  }
}

/*about*/
.about-title {
  color: dimgray;
    font-size: 25px;
}

.about-info {
  text-align: center;
  line-height: 2;
  font-size: 15px;
}

/*Download*/
.dlBtn{
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

.dlBtn img{
  width: 200px;
}

@media (min-width: 240px) and (max-width: 768px) {
  .control{
    display: none;
    visibility: hidden;
  }
  .about-title {
    text-align: center !important;
    font-size: 15px;
  }
  .about-info {
    text-align: justify !important;
    direction: rtl;
    font-size: 12px;
  }
  .team img{
    width: 100%;
    height: 50%;
  }
  .route img{
    width: 100%;
    height: 150px;
  }
  .values{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .values img{
    width: 150px;
    height: 220px;
  }
  .dlContent{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    text-align: center;
    /*width: vw;*/
  }
  .dlBtn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dlBtn img{
    width: 180px;
  }
}

</style>
