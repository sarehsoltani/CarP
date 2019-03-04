<template>
  <div>
    <header1></header1>
    <div class="content">
      <div class="container about">
        <h5  class="p-5 m-3">کارپینو، اولین اپلیکیشن درخواست تاکسی های رسمی شهر</h5>
        <div class="row flex-row-reverse justify-content-between">
          <p   class="col-md-5 description p-5 m-3">{{about}}</p>
          <img class="col-md-5  img-responsive" src="../assets/AboutPic.png">
        </div>
      </div>
    </div>
  <footer1 ></footer1>

  </div>
</template>

<script>
  import footer1 from './footer'
  import header1 from "./header";
export default {
   components: {
      header1,
      footer1,
    },
    data() {
     return{
       about : 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانوادهٔ‌تان رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
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

.about{
  background-color: white;
  background-image: url("../assets/about_background.jpg");
}

.about h5{
  font-family: "B Nazanin";
  font-weight: bold;
  text-align: center;
  font-size: 2em;
}

.description{
  line-height: 2;
  font-size: 14px;
  text-align: center;
  color: #353535;
  font-weight: 100;
}
@media (min-width: 240px) and (max-width: 768px) {
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
