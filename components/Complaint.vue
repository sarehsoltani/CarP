<template>
  <div class="body">
    <div class="wrapper">
      <header1></header1>
      <div class="content">
        <div class="container Complaint pr-5 pt-5 pl-5">
          <h4 class="p-5 ComplaintTitle">نظرات و انتقادات</h4>
          <p class="mt-5 p-4 mr-5 ml-5 ComplaintContent">{{content}}</p>
          <div class="col-md-12 ComplaintPic mb-5">
            <img class="" src="../assets/pic2.png" style="height: 450px; width: 500px;">
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
    name: 'Complaint',
    components: {
      header1,
      footer1,
    },
    props: {
      images: Array,
    },
    data () {
      return {
        content: '  تمامی خدمات کارپینو دارای مجوزهای لازم از مراجع قانونی است و فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است .\n' +
         'در صورت بروز هر نوع مشکل در ارایه ی خدمات از طریق اپلیکشین می توانید شکایت خود را ثبت نمایید',
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
}

.footer{
  height: 200px;
}

.content{
  font-family: iranyekan;
  background-color: #E2E2E2;
  background-size: cover;
}

.Complaint{
  background-image: url("../assets/about_background.jpg");
  background-size: cover;
  min-height: calc(100vh - 200px);
}

.ComplaintTitle{
  font-size: 2em;
  text-align: center;
}

.ComplaintContent{
  font-size: 1.1em;
  text-align: center;
  line-height: 2;
}

.ComplaintPic{
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (min-width: 240px) and (max-width: 768px) {
  .ComplaintContent{
  font-size: 1em;
  text-align: center;
  line-height: 2;
  }
  .ComplaintTitle{
  font-size: 1.5em;
  text-align: center;
  line-height: 2
  }
  .ComplaintPic{
    display: none;
    visibility: hidden;
}
}

</style>
