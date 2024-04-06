<script setup>
const navbar = ref([
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'About us',
        url: '/about-us'
    },
    {
        name: 'Blog',
        url: '/blog/1'
    },
    {
        name: 'Gallery',
        url: '/gallery'
    }

])
</script>
<template>
     <nav class="relative z-50 flex items-center justify-between w-full">
          <!-- Logo -->
          <div class="flex items-center shrink-0">
            <nuxt-link
              to="/"
              aria-label="ir a la pagina de inicio"
              class="font-gothic relative flex flex-col items-center text-3xl font-semibold leading-none text-slate-900"
            >
              Lorem Ipsum
              <span class="handwriting text-2xl">
                wine!
              </span>
            </nuxt-link>
          </div>

          <!-- Desktop navigation links -->
          <div class="items-center hidden md:flex md:space-x-6 lg:space-x-8">
            <nuxt-link
                v-for="item in navbar"
                :key="item.name"
                :to="item.url"
                class="font-gothic relative duration-200 after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 text-xl after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[&quot;&quot;] font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25"
            >
                {{ item.name }}
            </nuxt-link>
          </div>

          <div class="flex items-center">
            <!-- Call to action -->
            <nuxt-link
              class="text-slate-900 font-gothic registraionButton shadow-sm shadow-sky-100/50 ring-1 ring-slate-100 hover:bg-slate-200/60 hover:shadow-sky-100/50 bg-slate-100/80 inline-flex items-center rounded-full gap-2.5 justify-center px-4 md:px-7 py-3 text-lg md:text-xl font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none"
              to="/contact"
            >
              Contact
            </nuxt-link>

            <!-- Mobile menu button -->
            <MobileMenu 
                :navbar="navbar"
            />
          </div>
        </nav>
</template>

<style lang="scss" scoped>
   .router-link-exact-active {
        @apply after:opacity-100;
   }
   .registraionButton.router-link-exact-active {
        @apply bg-blue-100;
        &::after {
            display: none;
        }
   }
   .font-gothic {
        font-family: "ferryman", sans-serif;
        font-weight: 500;
        font-style: normal;
   }
</style>