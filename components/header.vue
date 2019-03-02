<template>
  <div class="container header">
    <a href="#https://www.carpino.ir" class="logo pull-right"><img src="../assets/CarpinoLogo.png"></a>
    <button v-on:click.prevent="Register()" type="button" class="pull-right btn2 mt-4 mr-2 ">ثبت نام پنل سازمانی</button>
    <button v-on:click.prevent="Login()" type="button" class="pull-right btn2 mt-4 mr-3">ورود  به  پنل سازمانی</button>
    <div class="header-left">
      <button type="button" class="btn1 mt-3 p-2"> دریافت  اپلیکیشن </button>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: {

    },
    data () {
      return {
        };
    },
    methods: {
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
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css";
  @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

  /** {box-sizing: border-box;}*/
  body {
  /*margin: 0;*/
  font-family: IRYekan;
}

.header {
  overflow: hidden;
  /*background-color: ghostwhite;*/
  /*background-color: purple;*/
  border-bottom: 1px solid #b4b4b4;
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

.header-left {
  float: left;
}

.btn1{
  -webkit-appearance: button;
  max-width: 120px!important;
  height: 45px;
  border-radius: 5px;
  /*box-shadow: 0 10px 0 0 rgba(17,17,31,.4);*/
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
  /*box-shadow: 0 10px 0 0 rgba(17,17,31,.4);*/
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

</style>
