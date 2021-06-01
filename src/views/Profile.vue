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
                      <a href="http://localhost:8080/livros">Encontre livros</a>
                    </button>
                  </div>
                  <div class="flex flex-row justify-center py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <a href="http://localhost:8080/livrocadastro">Adicione seus livros</a>
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >{{user.books.length}}</span
                      ><span class="text-sm text-gray-500">Livros cadastrados</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >0</span
                      ><span class="text-sm text-gray-500">Livros alugados</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-gray-700"
                        >0</span
                      ><span class="text-sm text-gray-500">Dias até a devolução</span>
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
                  Reserva
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  id
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <a href="http://localhost:8080/livroeditar"><span class="sr-only">Edit</span></a>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in user.books" :key="person.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" :src="person.image" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ person.title }}</div>
                  <div class="text-sm text-gray-500">{{ person.department }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ person.role }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
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
    }
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.getUser()
    this.UpdateUser()
    console.log(this.user)
  },
  
   methods: {
    async getUser() {
       await axios.get("https://laravel-api-php.herokuapp.com/api/user/"+localStorage.getItem('IdUser'),{}).then(function(response){
         if(localStorage.getItem('User') == response.data.data){
           console.log(response.data.data)
          localStorage.removeItem('User');
          localStorage.setItem('User', JSON.parse(JSON.stringify(response.data.data)))
          localStorage.setItem('error', false)
         }
       }).catch(function(error){
         console.log(error)
       })
    },
    UpdateUser(){
      let user = JSON.parse(localStorage.getItem('User'))
      user.books = user.books.split(",");
      console.log(user)
      this.user=user;
    }
  },
}
</script>
