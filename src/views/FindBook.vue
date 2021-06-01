<template>
  <div>
    <navbar-component></navbar-component>
    <main class="profile-page">
      <section class="relative block" style="height: 500px;">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
          <div class="px-6">
               <div >
                <label for="price" class="block text-sm font-medium text-gray-700">Pesquisar livro:</label>
                <div class="flex flex-row mt-1 relative rounded-md shadow-sm">
                <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="clube do livro" />
                 <div class="flex flex-row justify-center py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class=" bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                       <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
            </div>
                <div class="flex flex-wrap justify-center">
                  <div class="flex flex-col ">
                    
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titulo
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dias reservados
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  id
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in book" :key="person.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.titulo }}
                      </div>
                      
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ person.conteudo }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{JSON.parse(person.reserva).dias}}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.id }}
                </td>
               
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                 <button  type="button" v-on:click="toggleModal()"> <a href="#" class="text-indigo-600 hover:text-indigo-900">reservar</a></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Reservar livro
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <p class="my-4 text-blueGray-500 text-lg leading-relaxed">
              Escolha quantos dias voce deseja fazer a reserva
            </p>
            <label class="font-semibold text-gray-600 py-2">Dias<abbr title="required">*</abbr></label>
										<select v-model="dias" class="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " required="required" name="integration[city_id]" id="integration_city_id">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Close
            </button>
            <button v-for="person in book" :key="person.id" v-on:click="reservarLivro($event), toggleModal()" :id="person.id" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  </div>
  
              </div>
            </div>
        </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>
<script>
import axios from 'axios';
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";

export default {
  name: "profile-page",
  components: {
    NavbarComponent,
    FooterComponent
  },
   data () {
    return {
      book:[{
        id:1,
        titulo: 'Jane Cooper',
        descricao: '[]',
        id_cadastro: 'Optimization',
        reserva: '{}',
    },
    
    ],
    showModal: false,
    dias: 1,
    }
  },
   async created () {
    // fetch the data when the view is created and the data is
    // already being observed

    console.log(this.user)
  },
  
   methods: {
      toggleModal: function(){
      this.showModal = !this.showModal;
    },
     reservarLivro(event){
    // console.log(event.explicitOriginalTarget)
      let idlivro = event.explicitOriginalTarget.id
       axios.get("https://laravel-api-php.herokuapp.com/api/books/"+idlivro,{}).then(response =>{
              console.log(response.data.data)
              console.log(JSON.parse(response.data.data.reserva).dias)
              if(JSON.parse(response.data.data.reserva).dias > 0){
                  alert("O livro já está em reserva")
              }else{
                //console.log(this.dias)
                //console.log('{"id": '+localStorage.getItem('IdUser')+', "dias":'+this.dias+'}')
                //console.log(typeof('{"id": '+localStorage.getItem('IdUser')+', "dias":'+this.dias+'}'))
                localStorage.removeItem('dadoLivroEditar');
                localStorage.setItem('dadoLivroEditar', JSON.stringify(response.data.data))
              }
              
            }).catch(function(error){
              console.log(error)
            })

             let response = localStorage.getItem('dadoLivroEditar')
             let responserefac = JSON.parse(response);
           
             axios.put("https://laravel-api-php.herokuapp.com/api/books/"+idlivro,{
                  titulo:responserefac.titulo,
                  conteudo:responserefac.conteudo,
                  reserva:'{"id": '+localStorage.getItem('IdUser')+', "dias":'+this.dias+'}',
                  id_cadastro:responserefac.id_cadastro,
                },
                { headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        }}
        ).then(response =>{
                        console.log(response.data.data)
                        //return(response.data.data)
                      }).catch(function(error){
                        console.log(error)
                      })
    }
   },
  mounted() {
          axios.get("https://laravel-api-php.herokuapp.com/api/books",{}).then(response =>{
              console.log(response.data.data)
              this.book = response.data.data
              //return(response.data.data)
            }).catch(function(error){
              console.log(error)
            })
        }
}
</script>
