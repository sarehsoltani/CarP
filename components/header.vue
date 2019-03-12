<template>
   <div class="headerLine">
      <div class="container">
        <div class="row d-flex flex-row-reverse header">
          <div class="col-md-6 col-sm-6 col-lg-6 d-flex flex-row-reverse">
            <a href="https://www.carpino.ir" class="logo"><img class="img-responsive" src="../assets/CarpinoLogo.png"></a>
            <!--<router-link v-on:click.prevent="navigate()" to="/#download">-->
              <!--<button type="button" class="btn4 mt-4 mr-3">دریافت اپلیکیشن</button>-->
            <!--</router-link>-->
            <button v-on:click.prevent="navigate()" v-scroll-to="'.download'" type="button" class="btn4 mt-4">دریافت اپلیکیشن</button>
            <button v-on:click.prevent="Register()" type="button" class="btn3 mt-4 mr-2 ">ثبت نام پنل سازمانی</button>
            <button v-on:click.prevent="Login()" type="button" class="btn3 mt-4 mr-3">ورود  به  پنل سازمانی</button>
          </div>
          <div class="col-md-6 col-md-6 col-sm-6 col-lg-6">
            <!--v-scroll-to="'.download'" -->
            <router-link v-on:click.prevent="navigate()" to="/#download" id="routing">
              <button type="button" class="btn1 mt-4" v-scroll-to="'.download'">دریافت اپلیکیشن</button>
            </router-link>
            <!--<button v-on:click.prevent="navigate()" v-scroll-to="'.download'" type="button" class="btn1 mt-4 mr-3">دریافت اپلیکیشن</button>-->
            <button v-on:click.prevent="navigate3()" type="button" class=" btn2 mt-4 mr-3">قوانین</button>
            <button v-on:click.prevent="navigate4()" type="button" class=" btn2 mt-4 mr-3">شکایات</button>
            <button v-on:click.prevent="navigate1()" type="button" class=" btn2 mt-4 mr-3">درباره ما</button>
            <button v-on:click.prevent="navigate2()" type="button" class=" btn2 mt-4 mr-3">تماس با ما</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import router from '../router'
  export default {
    name: 'header1',
    props: {
      images: Array,
    },
    data () {
      return {

      };
    },
    methods: {
      next(){
        this.$refs.slick.next();
      },
      prev(){
        this.$refs.slick.prev();
      },
      Register(){
        window.location.href = 'http://www.carpino.ir/login';
      },
      Login(){
        window.location.href = 'http://corporate.carpino.ir/#!/login';
      },
      navigate() {
        router.push({ name: "Main" });
      },
      navigate1() {
        router.push({ name: "about" });
      },
      navigate2() {
        router.push({ name: "contact" });
      },
      navigate3() {
        router.push({ name: "Rules" });
      },
      navigate4() {
        router.push({ name: "Complaint" });
      }
    },
}
</script>

<style>
  @import "../../node_modules/slick-carousel/slick/slick.css";
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

.btn1,.btn4{
  -webkit-appearance: button;
  max-width: 120px!important;
  height: 45px;
  border-radius: 5px;
  background-color: #ca265e;
  border: 1px solid #11111f;
  color: whitesmoke!important;
  font-family: iranyekan;
  font-size: 0.6em;
}

.btn2{
  -webkit-appearance: button;
  width: 90px!important;
  height: 45px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ca265e;
  color: #ca265e;
  font-family: iranyekan;
  font-weight: 500;
  font-size: 0.8em;
}

.btn3{
  -webkit-appearance: button;
  max-width: 120px!important;
  height: 45px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #ca265e;
  color: #ca265e;
  font-family: iranyekan;
  font-weight: 500;
  font-size: 0.8em;
}

button:active {
  outline:none;
  border: none;
}

button:focus {
  outline:none;
  border: none;
}

div {
  overflow: hidden;
}

@media (min-width: 1100px){
  .btn4{
    display: none;
    visibility: hidden;
  }
}

@media (min-width: 750px) and (max-width: 1024px) {
  .btn4 {
    min-width: 90px !important;
    font-size: 0.8em;
    height: 43px;
    margin-right: 1em;
  }
}

@media (min-width: 400px) and (max-width: 750px) {
  .btn4 {
    min-width: 90px !important;
    font-size: 0.7em;
    height: 40px;
    margin-right: 11em;
  }
}

@media (min-width: 370px) and (max-width: 400px) {
  .btn4 {
    min-width: 90px !important;
    font-size: 0.71em;
    height: 40px;
    margin-right: 9em;
  }
}

@media (min-width: 350px) and (max-width: 370px){
  .btn4 {
    min-width: 90px !important;
    font-size: 0.71em;
    height: 40px;
    margin-right: 6em;
  }
}

@media (min-width: 320px) and (max-width: 355px){
  .btn4 {
    min-width: 87px !important;
    font-size: 0.7em;
    height: 40px;
    margin-right: 4em;
  }
}

@media (min-width: 240px) and (max-width: 1024px) {
  .btn2 {
    display: none;
    visibility: hidden;
  }
  .btn1{
    display: none;
    visibility: hidden;
  }
  .btn3{
    display: none;
    visibility: hidden;
  }
  #routing{
    display: none;
    visibility: hidden;
  }
}

</style>
