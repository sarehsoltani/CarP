<template>
  <div>
    <header1></header1>
    <div class="content">
      <div class="container Complaint pr-5 pt-5 pl-5">
        <h4 class="p-5" style="font-size: 30px; text-align: center; font-weight: bold">نظرات و شکایات</h4>
        <p class="mt-5 p-2 mr-5 ml-5" style="font-size: 24px; text-align: center; text-align: center">{{content}}</p>
        <div class="d-flex justify-content-center" style="">
          <img class="" src="../assets/pic2.png" style="height: 500px; width: 500px;">
        </div>
        <!--<div class="pic"></div>-->
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
     header1,
     footer1,
    },
    data() {
     return{
       content: '  تمامی خدمات کارپینو دارای مجوزهای لازم از مراجع قانونی است و فعالیت های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است .\n' +
         'در صورت بروز هر نوع مشکل در ارایه ی خدمات از طریق اپلیکشین می توانید شکایت خود را ثبت نمایید',
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
  font-family: "B Nazanin";
  background-color: #E2E2E2;
  background-repeat: no-repeat;
}

.Complaint{
  background-color: white;
  background-image: url("../assets/about_background.jpg");
}

@media (min-width: 240px) and (max-width: 768px) {

}
</style>
