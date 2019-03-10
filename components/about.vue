<template>
  <div class="body">
    <div class="wrapper">
      <header1></header1>
      <div class="content">
        <div class="container about">
          <h5  class="p-5 mt-5 mb-3">کارپینو، اولین اپلیکیشن درخواست تاکسی های رسمی شهر</h5>
          <div class="row flex-row-reverse justify-content-between" style="">
            <p class="col-md-10 description p-5">{{about}}</p>
          </div>
          <div class="p-3" style="align-items: center; justify-content: center;text-align: center;">
            <img class=""  src="../assets/AboutPic.png">
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
    name: 'about',
    components: {
      header1,
      footer1,
    },
    props: {
      images: Array,
    },
    data () {
      return {
        about : 'کارپینو با وجود تیمی توانمند و متخصص در حوزه‌های حمل و نقل شهری و عمومی، با بهره‌مندی از اپلیکیشن‌های موبایل در جهت تأکید بر نوآوری، اعتماد و نگاه انسان‌محور، به دنبال ارائه خدمات با کیفیتی فراتر از انتظار مشتریان، ایجاد حس امنیت و لذت در سفرهای درون‌شهری است. همچنین کارپینو به امید ارتقاء جایگاه شغلیِ رانندگانِ تاکسی‌، بالا بردن سطح اجتماعی آنها و نیز بهینه‌سازی پتانسیل‌های قدیمی به دنبال افقی سبزتر و شهری منظم‌تر است. سامانه هوشمند کارپینو، بهترین راه برای رسیدن به هر مقصدی است که مد نظر شماست. شما به راحتی می توانید با انتخاب مبدا و مقصد، درخواست سفر کنید و با نزدیک‌ترین تاکسی به سوی مقصدتان راهی شوید. با راننده‌های مجرب و متعهد کارپینو که دارای مجوزهای سازمان تاکسیرانی تهران هستند، می‌توانید سفری امن و آرام را برای خود و خانواده خویش رقم بزنید. همچنین می توانید در طول سفر، مسیر حرکت تاکسی را به صورت زنده ملاحظه فرمایید. ما برآنیم تا جهت تسهیل سفرهای شما، همیشه در دسترس‌تان باشیم',
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
  min-height: calc(100vh - 200px);
  font-family: iranyekan;
}

.footer{
  height: 200px;
}

.content{
  font-family: iranyekan;
  background-color: #E2E2E2;
  background-size: cover;
  /*direction: rtl;*/
}

.about{
  background-image: url("../assets/about_background.jpg");
  background-size: cover;
  min-height: calc(100vh - 200px);
}


.about h5{
  text-align: center;
  font-size: 1.7em;
}

.about p{
  font-family: iranyekan;
}
.description{
  line-height: 2;
  font-size: 1.1em;
  text-align: center;
  color: #353535;
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
