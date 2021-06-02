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
                  <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 class="text-3xl font-semibold">
              Deletar livro
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
              deseja deletar esse livro?
            </p>
           
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              não
            </button>
            <button v-on:click="toggleModal(), deleteBook()" class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              sim
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  
                </div>
                <div
                  class="w-full flex flex-row lg:w-4/12 px-4 lg:order-2 lg:text-right lg:self-center"
                >
                  <div class="flex flex-row justify-center py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <router-link to="/livros"><a href="">Encontre livros</a></router-link>
                    </button>
                  </div>
                  <div class="flex flex-row justify-center py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <router-link to="/livrocadastro"><a href="">Adicione seus livros</a></router-link>
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >{{book.length}}</span
                      ><span class="text-sm text-gray-500">Livros cadastrados</span>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
             
              <div class="text-center mt-12" >
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2"
                >
                 {{user.name}}
                </h3>
               
                <div class="mb-2 text-gray-700 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-gray-500"></i
                  >{{user.email}}
                </div>
            
                
                  <div class="flex flex-col">
                    
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
                  Numero de dias da reserva
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  id
                </th>
                <th scope="col" class="relative px-6 py-3">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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
                  <div class="text-sm text-gray-900">{{ person.title }}</div>
                  <div class="text-sm text-gray-500">{{ person.conteudo }}</div>
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
                   <button :key="person.id" :id="person.id" type="button" v-on:click="toggleModal(), getDeleteid($event)"> <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
import axios from 'axios';
/*const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]*/

export default {
  name: "profile-page",
  components: {
    NavbarComponent,
    FooterComponent
  },
   data () {
    return {
      user:{
        id:1,
        name: 'Jane Cooper',
        books: '[]',
        reserva: 'Optimization',
        email: 'jane.cooper@example.com',
    },
    book:[],
    showModal: false,
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getUser()
    this.UpdateUser()
    this.getUser()
    console.log(this.user)
  },
  
   methods: {
     getUser() {
        axios.get("https://laravel-api-php.herokuapp.com/api/user/"+localStorage.getItem('IdUser'),{}).then(function(response){
         if(localStorage.getItem('User') == response.data.data){
           console.log(response.data.data)
          localStorage.removeItem('User');
          localStorage.setItem('User', JSON.stringify(response.data.data))
          localStorage.setItem('error', false)
         }
       }).catch(function(error){
         console.log(error)
       })
    },
     toggleModal: function(){
      this.showModal = !this.showModal;
    },
    UpdateUser(){
      let user = JSON.parse(localStorage.getItem('User'))
      console.log("user= "+user);
      //user.books = user.books.split(",");
      console.log(user)
      this.user=user;
    },
    getDeleteid(event){
    let bookid = event.explicitOriginalTarget.parentNode.id
    localStorage.removeItem('idLivro');
      localStorage.setItem('idLivro', bookid)
    },
    deleteBook(){
        let bookid = localStorage.getItem('idLivro')
        axios.get("https://laravel-api-php.herokuapp.com/api/books/"+bookid,{}).then(response =>{
              console.log(JSON.parse(response.data.data.reserva).dias)
              if(JSON.parse(response.data.data.reserva).dias > 0){
                alert("livro em reserva não pode ser deletado")
              }else{
              axios.delete("https://laravel-api-php.herokuapp.com/api/books/"+bookid,{}).then(response =>{
              console.log(response.data.data)
              alert("livro deletado com sucesso")
          
            
              //return(response.data.data)
            }).catch(function(error){
              console.log(error)
              alert("Um erro ocorreu: "+ error)
            })
              }
          
            }).catch(function(error){
              console.log(error)
            })
        
    }
  },
  mounted() {
          axios.get("https://laravel-api-php.herokuapp.com/api/books",{}).then(response =>{
              console.log(response.data.data)

          
              for (var i = 0, l = response.data.data.length; i < l; i++) {
                  console.log(response.data.data[i])
                  if(response.data.data[i].id_cadastro == localStorage.getItem('IdUser')){
                    let books = this.book
                    books.push(response.data.data[i])
                    this.book = books
                  }
                }
              this.book = response.data.data
              //return(response.data.data)
            }).catch(function(error){
              console.log(error)
            })
        }
}
</script>
