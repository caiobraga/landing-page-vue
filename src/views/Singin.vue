<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <section class="absolute w-full h-full">
        <div
          class="absolute top-0 w-full h-full bg-gray-900"
          style="background-size: 100%; background-repeat: no-repeat;"
          :style="{'background-image': 'url(' + require('../assets/img/register_bg_2.png').default + ')'}"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
              >

                         <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
                  <span class="text-xl inline-block mr-5 align-middle">
                    <i class="fas fa-bell"></i>
                  </span>
                  <span class="inline-block align-middle mr-8">
                    {{error}}
                  </span>
                  <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" v-on:click="closeAlert()">
                    <span>×</span>
                  </button>
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div class="text-gray-500 text-center mb-3 font-bold">
                    <small>Cadastro com credenciais</small>
                  </div>
                  <form>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >nome</label                                                                                                
                      ><input
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="digite seu nome"
                        style="transition: all 0.15s ease 0s;"
                        v-model="nome"
                      />                                                                            
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s;"
                        v-model="email"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label                                                                                                
                      ><input
                        type="password"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                        v-model="senha"
                      />                                                                            
                    </div>
                    <div>
                      <label class="inline-flex items-center cursor-pointer"
                        ><input
                          id="customCheckLogin"
                          type="checkbox"
                          class="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                          style="transition: all 0.15s ease 0s;"
                        /><span class="ml-2 text-sm font-semibold text-gray-700"
                          >Remember me</span
                        ></label
                      >
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                        @click="singin(), veridicaErro()"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Forgot password?</small></a
                  >
                </div>
                <div class="w-1/2 text-right">
                  <a href="#pablo" class="text-gray-300"
                    ><small>Create new account</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer-component></footer-component>
      </section>
    </main>
  </div>
</template>
<script>
import axios from 'axios';
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "Cadastro",
  components: {
    NavbarComponent,
    FooterComponent
  },
  data(){
    return{
      nome:'',
      email:'',
      senha:'',
      error:'',
      alertOpen: false
    }
  },
  methods:{
    singin(){
      axios.post("https://laravel-api-php.herokuapp.com/api/user",{
        name:this.nome,
        email:this.email,
        password:this.senha,
        books:'[]',
        reserva:'{}'
      }).then(function(response){
        if(response.status == 201){
          localStorage.setItem('error', false)
          localStorage.removeItem('error');
          localStorage.removeItem('errorMessage');
          localStorage.setItem('errorMessage', "Cadastro realizado com sucesso!")
          localStorage.setItem('error', true)
          window.location.href = "http://localhost:8080/login";
        }
      }).catch(function (error){
        console.log(error)
        localStorage.removeItem('error');
        localStorage.removeItem('errorMessage');
          localStorage.setItem('errorMessage', "Um erro ocorreu: "+ error)
          localStorage.setItem('error', true)
      })
    },
     closeAlert: function(){
      this.alertOpen = false;
    },
    veridicaErro(){
      let erroExiste = localStorage.getItem('error')
      let errorMessage = localStorage.getItem('errorMessage')
      this.error = errorMessage
      this.alertOpen = erroExiste
      console.log(errorMessage)
    }
  }
  
}
</script>
