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
        name: 'Contact',
        url: '/contact'
    },
    {
        name: 'Gallery',
        url: '/gallery'
    }

])
</script>
<template>
      <footer
        class="pt-20 pb-8 overflow-hidden bg-slate-900 sm:pt-24 sm:pb-12 lg:pt-20"
      >
        <div class="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
          <div
            class="grid items-center max-w-xl gap-5 mx-auto lg:mx-0 lg:max-w-none lg:grid-cols-12 lg:gap-12 xl:gap-20"
          >
            <div class="lg:col-span-7">
              <h3
                class="text-4xl font-semibold text-center text-white font-display sm:text-5xl lg:max-w-xl lg:text-left"
              >
                Lets make something great together
              </h3>
              <div class="hidden lg:block">
                <nuxt-link
                  to="/contact"
                  class="mt-12 bg-white hover:bg-sky-50 text-slate-700 inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-md font-semibold leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none"
                >
                  Contact
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
            <div
              class="flex flex-col items-center lg:col-span-5 lg:items-start"
            >
              <p
                class="text-lg text-center text-slate-50 lg:max-w-sm lg:text-left"
              >
                Iced pumpkin ristretto irish trifecta robusta trade froth
                affogato barista con barista cappuccino filter roast.
              </p>

              <!-- Call to action button for small screens -->
              <nuxt-link
                to="/contact"
                class="font-gothic mt-10 inline-flex items-center justify-center gap-x-2.5 rounded-full bg-white py-3 px-7 text-xl font-semibold leading-none text-slate-700 duration-200 ease-in-out hover:bg-sky-50 lg:hidden"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </nuxt-link>

              <div
                class="mt-16 grid w-full max-w-sm grid-cols-2 gap-3.5 sm:max-w-none sm:grid-cols-3 lg:mt-8 lg:gap-2.5 xl:gap-3.5"
              >

                <nuxt-link
                  to="/contact"
                  class="flex items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-4 h-4 duration-200 ease-in-out shrink-0 text-slate-200 group-hover:fill-slate-100"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Email us
                </nuxt-link>

                <a
                  href="#"
                  class="flex items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
                >
                  <nuxt-icon
                      name="whatsapp"
                      class="icon icon-fill text-2xl relative"
                  />
                  Whatsapp
                </a>

                <a
                  href="#"
                  class="flex items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
                >
                  <nuxt-icon
                      name="instagram"
                      class="icon icon-fill text-2xl relative"
                  />

                  Instagram
                </a>
                <a
                  href="#"
                  class="flex items-center justify-center gap-2.5 rounded-full border border-slate-600/90 py-2.5 text-sm text-slate-50 duration-200 ease-in-out hover:bg-slate-800 hover:text-white lg:gap-2 xl:gap-2.5"
                >
                  <nuxt-icon
                        name="facebook"
                        class="icon icon-fill text-2xl relative"
                    />

                    facebook
                </a>

              </div>
            </div>
          </div>

          <hr
            class="w-full h-px mt-12 mb-6 border-slate-600/90 sm:mt-16 sm:mb-10"
          />

          <div class="flex flex-col items-center justify-between md:flex-row">
            <div class="flex items-center gap-6">
              <nuxt-link
                v-for="item in navbar"
                :key="item.name"
                :to="item.url"
                class="text-base font-medium duration-200 ease-in-out text-slate-100 hover:text-white"
              >
                {{ item.name }}
              </nuxt-link>
            </div>
            <p class="mt-8 text-base text-slate-400/90 md:mt-0">
              © 2023 iraklitbz
            </p>
          </div>
        </div>
      </footer>
</template>

<style lang="scss" scoped>
   .font-gothic {
        font-family: "ferryman", sans-serif;
        font-weight: 500;
        font-style: normal;
   }
</style>