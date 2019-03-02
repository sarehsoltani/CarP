<template>
  <div class="body">
      <header1></header1>
      <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to Page1</a>

      <div class="mr-5 mt-5 d-flex flex-column " style="align-items: flex-end">
        <p class="mb-5" style="margin-top: 3vh"> :میتوانید از راه های زیر برنامه کارپینو را دانلود کنید</p>
        <div class="container d-flex flex-column " style="align-items: flex-end">
        <p class="mb-5" style="margin-top: 2vh"> دانلود اپلیکیشن کارپینو - نسخه مسافر</p>
        <div class="d-flex flex-row-reverse">
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۱.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۳_2.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۴_3.png"></a>
        </div>
        <div class="d-flex flex-row-reverse mt-5">
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۵_4.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۶_5.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۷_6.png"></a>
        </div>
        <p class="mb-5" style="margin-top: 10vh"> دانلود اپلیکیشن کارپینو - نسخه راننده</p>
        <div class="d-flex flex-row-reverse">
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۲_1.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۳_2.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۴_3.png"></a>
        </div>
        <div class="d-flex flex-row-reverse mt-5">
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۵_4.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۶_5.png"></a>
        <a href="" class="col-4"><img style="width: 8vw" src="../assets/button-0۷_6.png"></a>
        </div>
        </div>
      </div>
      <footer1></footer1>
    </div>

</template>

<script>
  import header1 from './header'
  import footer1 from './footer'
  import router from '../router'

  export default {
    name: 'Download',
    components: {
      header1,
      footer1,
    },
    props: {
    },
    data () {
      return {
        };
    },
    methods: {
      navigate() {
                router.push({ name: "Main" });
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

div {
  overflow: hidden;
}

body{
  background-image: url("../assets/PicApp1.png");
  background-repeat: no-repeat;
  background-position: center left;
  margin-left: 200px;
  height: 100vh;
  font-family: "B Nazanin";
}

body p{
  color: black;
  font-family: "B Nazanin";
  font-size: 1.3em;
  font-weight: bold;
}

</style>
