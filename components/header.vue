<template>
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
            <button v-on:click.prevent="navigate1()" type="button" class=" btn2 mt-4 mr-3">درباره ما</button>
            <button v-on:click.prevent="navigate2()" type="button" class=" btn2 mt-4 mr-3">تماس با ما</button>
            <button v-on:click.prevent="navigate3()" type="button" class=" btn2 mt-4 mr-3">قوانین</button>
            <button v-on:click.prevent="navigate4()" type="button" class=" btn2 mt-4 mr-3">شکایات</button>
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
      About(){
        // window.alert("salam");
        window.location.href = './App'
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

@media (min-width: 240px) and (max-width: 768px) {
  .btn2 {
    display: none;
    visibility: hidden;
  }
  .btn1{
    display: none;
    visibility: hidden;
  }
}

</style>
