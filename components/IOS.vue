<template>
<div>
  <header1></header1>
  <div class="content">
      <div class="container description">
        <h3 class="col-md-12 mt-5 title">مراحل دانلود و نصب اپلیکیشن کارپینو نسخه IOS </h3>
        <h5 class="mr-2 pl-4 pr-5 mt-1 mb-3">۱- قبل از نصب نسخه‌ی جدید مطمئن شوید موارد زیر را رعایت کرده‌اید:</h5>
        <p class="mr-3 ml-5 pl-5 pr-5">{{Rule2}}</p>
        <p class="mr-3 ml-5 pl-5 pr-5">{{Rule3}}</p>
        <p class="mr-3 ml-5 pl-5 pr-5">{{Rule4}}</p>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">۲- برای دانلود از دکمه «دریافت نسخه iOS » در پایین استفاده کنید: </h5>
        <div class="download_link d-flex flex-row justify-content-center mb-5">
          <a v-on:click.prevent="download()" class="m-4" href="#">
            <img class="img-responsive" src="../assets/button-0۶_5.jpg">
          </a>
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3"> 3-	در پنجره باز شده دکمه «Open» را انتخاب کنید و در پنجره بعدی دکمه «Install» را لمس کنید. </h5>
        <div class="sec2 row d-flex flex-row justify-content-center mb-5 p-5">
          <img class="col-md-3 m-1 Section1 mb-4" src="../assets/1.png">
          <img class="col-md-3 m-1 Section1 mb-4" src="../assets/2.png">
          <img class="col-md-3 m-1 Section1" src="../assets/3.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">4-	پس از نصب اپلیکیشن اگر پیام «Untrusted Enterprise Developer» را مشاهده کردید دکمه «Cancel» را بزنید.</h5>
        <div class="d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/4.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">5-	سپس به تنظیمات (Setting) دستگاه بروید و گزینه «General» را انتخاب کنید. </h5>
        <div class=" d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/5.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">6-	در صفحه جدید گزینه «Device Management» را انتخاب کنید. (در برخی نسخه‌های iOS این گزینه به شکل «Profile & Device Management» نمایش داده می‌شود.)</h5>
        <div class="d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/6.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">7-	گزینه «SCATON LTD» را انتخاب کنید.</h5>
        <div class="d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/7.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">8-	عبارت «Trust SCATON LTD» را انتخاب کنید.</h5>
        <div class="d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/8.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">9-	در انتها گزینه «Trust» را لمس کنید.</h5>
        <div class="row d-flex flex-row justify-content-center  mb-5 p-5">
          <img class="col-md-3 m-1 Section1 mb-4" src="../assets/9.png">
          <img class="col-md-3 m-1 Section1" src="../assets/10.png">
        </div>
        <h5 class="mr-2 pl-4 pr-5 mt-5 mb-3">10-	اکنون می‌توانید از اپلیکیشن «کارپینو» لذت ببرید.</h5>
        <div class="d-flex justify-content-center mb-5 p-5">
          <img class="col-md-3 Section1" src="../assets/11.png">
        </div>
      </div>
  </div>
  <footer1></footer1>
</div>
</template>
<script>
  import footer1 from './footer'
  import header1 from './header'
export default {
   components: {
     header1,
     footer1,
    },
    data() {
     return {
       Rule2: '•\tاگر نسخه قبلی اپلیکیشن کارپینو را روی دستگاه خود دارید حتما آن را پاک کنید.',
       Rule3: '•\tترجیحاً از مرورگرSafari بر روی دستگاه خود استفاده کنید.',
       Rule4: '•\tدرصورت استفاده از اپلیکیشن فیلترشکن (VPN) آن را خاموش کنید.',
       }
    },
    methods: {
    download(){
        window.location = 'itms-services://?action=download-manifest&url=https://carpino.ir/carpino.plist';
      },
    }
}
</script>
<style scoped>
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.css";
  @import "../assets/font/font-awesome-4.7.0/css/font-awesome.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.content{
  font-family: iranyekan;
  background-color: #E2E2E2;
  background-repeat: no-repeat;
  background-size: cover;
  direction: rtl;
}

.description{
  background-color: white;
  text-align: right;
  background-image: url("../assets/about_background.jpg");
  background-size: auto;
  background-repeat: space;
}

.description .title{
  font-size: 1.8em;
}

.description p{
  font-size: 0.9em;
}

.description h5{
  font-size: 1.1em;
  line-height: 2;
}
.Section1{
  height: 450px;
}

.download_link img{
    width: 180px;
  }

@media (min-width: 240px) and (max-width: 768px) {
 .description .title{
  font-size: 0.9em;
}
  .description p{
    font-size: 0.67em;
    text-align: justify;
  }
  .description h5{
    font-size: 0.75em;
    line-height: 2;
  }
  .description .Section1{
    width: 180px;
    height: 280px;
  }
  .download_link img{
    width: 180px;
  }

}
</style>
