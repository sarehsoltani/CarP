<template>
  <div>
    <div class="headerLine">
     <div class="container">
       <div class="row d-flex flex-row-reverse header">
         <div class="col-md-6 col-sm-6 col-lg-6 d-flex flex-row-reverse">
           <a href="#https://www.carpino.ir" class="logo "><img class="img-responsive" src="../assets/CarpinoLogo.png"></a>
           <button v-on:click.prevent="Register()" type="button" class="btn2 mt-4 mr-2 ">ثبت نام پنل سازمانی</button>
           <button v-on:click.prevent="Login()" type="button" class="btn2 mt-4 mr-3">ورود  به  پنل سازمانی</button>
         </div>
         <div class="col-md-6 col-md-6 col-sm-6 col-lg-6">
           <button v-scroll-to="'.download'" type="button" class=" btn1 mt-4 mr-3">دریافت اپلیکیشن</button>
           <button v-scroll-to="'.download'" type="button" class=" btn2 mt-4 mr-3">درباره ما</button>
           <button v-scroll-to="'.download'" type="button" class=" btn2 mt-4 mr-3">تماس با ما</button>
         </div>
       </div>
     </div>
    </div>
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
export default {
   components: {
      footer1,
    },
    data() {
     return{
       // about : 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانوادهٔ‌تان رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
     }
    },
    methods: {
      Register() {
        window.location.href = 'http://www.carpino.ir/login';
      },
      Login() {
        window.location.href = 'http://corporate.carpino.ir/#!/login';
      },
      About() {
        // window.alert("salam");
        window.location.href = './App'
      },
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

.headerLine{
  background-color: white;
  border-bottom: 1px solid dimgray;
}
.header a {
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}


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
  height: 45px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ca265e;
  color: #ca265e;
  font-family: IRYekan;
  font-weight: 500;
  font-size: 0.7em;
}

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
  .btn2 {
    display: none;
    visibility: hidden;
  }
  .btn1{
    display: none;
    visibility: hidden;
  }
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
