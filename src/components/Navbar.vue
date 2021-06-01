<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
     <router-link to="/"> <a
        class="text-white text-sm uppercase lg:inline-block font-semibold"
        href="http://localhost:8080/landing"
        >Clube do livro</a>  </router-link>
      >
      <!-- User -->
      <ul
        class="flex-col md:flex-row list-none items-center md:flex"
      >
        <user-dropdown-component></user-dropdown-component>
      </ul>
    </div>
  </nav>

  <!-- End Navbar -->
</template>
<script>
import UserDropdownComponent from "./UserDropdown.vue";
export default {
  components: {
    UserDropdownComponent
  }
};
</script>
