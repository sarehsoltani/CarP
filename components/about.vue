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
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container about">
        <h5  class="p-5 m-3">کارپینو، اولین اپلیکیشن درخواست تاکسی های رسمی شهر</h5>
        <div class="row flex-row-reverse justify-content-between">
          <p   class="col-md-5 description p-5 m-3">{{about}}</p>
          <img class="col-md-6  img-responsive" src="../assets/AboutPic.png">
        </div>
      </div>
    </div>
  <footer1 ></footer1>

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
       about : 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانوادهٔ‌تان رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
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
      }
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

.about{
  background-color: white;
  background-image: url("../assets/about_background.jpg");
}

.about h5{
  text-align: center;
  font-size: 1.35em;
}

.description{
  line-height: 2;
  font-size: 14px;
  text-align: center;
  color: #353535;
  font-weight: 100;
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
  .description {
    font-size: 9px;
  }
  .about h5{
     font-size: 12px;
     padding: 0px;
     margin: 0px;
  }

}

</style>
