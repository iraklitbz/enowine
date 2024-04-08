<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
const navbar = ref([
    {
        name: 'navmenu.home',
        url: '/'
    },
    {
        name: 'navmenu.about',
        url: '/about-us'
    },
    {
        name: 'navmenu.blog',
        url: '/blog/1'
    },
    {
        name: 'navmenu.gallery',
        url: '/gallery'
    },
    {
        name: 'navmenu.contact',
        url: '/contact'
    }
])
const availableLocales = computed(() => {
      return (locales.value).map((item) => {
          return {
              value: item.code,
              label: item.label,
              name: item.name
          }
      })
  })
function handleLanguage (value) {
    navigateTo(switchLocalePath(value))
}
</script>
<template>
     <nav class="relative z-50 flex items-center justify-between w-full">
          <div class="flex items-center shrink-0">
            <nuxt-link
              :to="localePath('/')"
              aria-label="ir a la pagina de inicio"
              class="font-primary relative flex flex-col items-center text-3xl font-semibold leading-none text-slate-900"
            >
              Lorem Ipsum
              <span class="handwriting text-2xl">
                wine!
              </span>
            </nuxt-link>
          </div>

          <div class="items-center hidden md:flex md:space-x-6 lg:space-x-8">
            <nuxt-link
                v-for="item in navbar"
                :key="item.name"
                :to="localePath(item.url)"
                class="font-primary relative duration-200 after:absolute after:left-1/2 after:-bottom-2.5 after:h-0.5 after:w-4 text-xl after:-translate-x-1/2 after:rounded-full after:bg-slate-900 after:opacity-0 after:content-[&quot;&quot;] font-medium text-slate-700 hover:text-slate-900 hover:after:opacity-25"
            >
                {{ $t(item.name) }}
            </nuxt-link>
          </div>

          <div class="flex items-center">
            <ul
                class="items-center justify-center md:justify-end gap-2 ml-7 mt-5 md:mt-0 hidden md:flex"
            >
                <li
                    v-for="(localeItem, index) in availableLocales"
                    :key="index"
                >
                    <button
                        type="button"
                        @click="() => handleLanguage(localeItem.value)"
                        class="p-1 rounded-md"
                        :class="{
                            'bg-black text-white font-bold': localeItem.value === locale,
                            'text-gray-500': localeItem.value !== locale
                        }"
                    >
                        {{ localeItem.label }}
                    </button>
                </li>
            </ul>
            <MobileMenu 
                :navbar="navbar"
                :available-locales="availableLocales"
            />
          </div>
        </nav>
</template>

<style lang="scss" scoped>
    .font-primary {
        font-family: var(--font-primary);
        font-weight: 700;
    }
   .router-link-exact-active {
        @apply after:opacity-100;
   }
   .registraionButton.router-link-exact-active {
        @apply bg-blue-100;
        &::after {
            display: none;
        }
   }
</style>