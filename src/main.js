import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
// views

import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Singin from './views/Singin.vue'
import Profile from './views/Profile.vue'
import Findbook from './views/FindBook.vue'
import Editarbook from './views/EditarLivro.vue'
import CadastroBook from './views/Cadastrolivro.vue'
// styles

import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app

import App from "@/App.vue";

function guardMyroute(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('LoggedUser'))
  isAuthenticated = true;
 else
  isAuthenticated= false; if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/login'); // go to '/login';
 }
}
// routes

const routes = [
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/singin",
    component: Singin,
  },
  {
    path: "/profile",
    beforeEnter : guardMyroute,
    component: Profile,
  },
  {
    path: "/livros",
    beforeEnter : guardMyroute,
    component: Findbook,
  },
  {
    path: "/livrocadastro",
    beforeEnter : guardMyroute,
    component: CadastroBook,
  },
  {
    path: "/livroeditar",
    beforeEnter : guardMyroute,
    component: Editarbook,
  },
  { path: "/:pathMatch(.*)*", redirect: "/landing" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
