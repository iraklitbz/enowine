<script setup>
    import { teams } from '~/store/teams'
    const { locale } = useI18n()
    const localePath = useLocalePath()
    const variables = { locale: locale.value }
    await teams().fetchTeam(variables)
</script>
<template>
    <section class="pb-16 overflow-hidden bg-white sm:pb-20 lg:pb-28">
      <div class="relative block w-full overflow-hidden aspect-w-16 aspect-h-9 md:aspect-w-5 md:aspect-h-2 mb-10 md:mb-20 h-[300px] md:h-auto">
        <img 
            src="https://res.cloudinary.com/iraklitbz/image/upload/v1712411016/lorem_taftcj.jpg" 
            alt="georgian wine" 
            class="object-cover h-full w-full bg-slate-100"
        >
      </div>
      <div class="grid max-w-lg px-5 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-6xl lg:grid-cols-10 lg:px-8 xl:px-12">
        <div class="order-2 pt-8 mt-8 border-t border-slate-200 lg:order-1 lg:col-span-3 lg:mt-0 lg:border-0 lg:pt-0 lg:pr-8">
          <ul class="space-y-8">
            <li
                v-for="team in teams().team.items"
            >
              <h6 class="text-xl font-display text-slate-800">
                {{ team.name }}
              </h6>
                <span class="block mt-1 text-base text-slate-600">
                    {{ team.ocupation }}
                </span>
                <span v-if="team.email" class="block mt-2 text-base text-slate-600">
                    Contact: 
                </span>
                <a :href="'mailto:' + team.email" class="text-blue-500 block">
                    {{ team.email }}
                </a>
                <ul
                    class="flex gap-2"
                >
                    <li v-if="team.instagram" class="block mt-3 text-base text-instagram opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="team.instagram" target="_blank">
                            <nuxt-icon
                                name="instagram"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                    <li v-if="team.facebook" class="block mt-3 text-base text-facebook opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="team.facebook" target="_blank">
                            <nuxt-icon
                                name="facebook"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                    <li v-if="team.whatsapp" class="block mt-3 text-base text-whatsapp opacity-80 hover:opacity-100 transition-opacity ease-in-out delay-200">
                        <a :href="`https://wa.me/${team.whatsapp}`" target="_blank">
                            <nuxt-icon
                                name="whatsapp"
                                class="icon icon-fill text-4xl relative"
                            />
                        </a>
                    </li>
                </ul>
            </li>
          </ul>
          <nuxt-link :to="localePath('/contact')" class="font-gothic bg-slate-900 text-white hover:bg-primary inline-flex items-center rounded-full gap-2.5 justify-center px-7 py-3 text-xl leading-none outline-offset-2 transition-all duration-200 ease-in-out active:transition-none mt-14">
            {{ $t('navmenu.contact') }}
          </nuxt-link>
        </div>

        <div class="order-1 lg:order-2 lg:col-span-7 lg:pl-16">
          <h3 class="text-xl leading-8 font-display text-slate-900 sm:text-2xl sm:leading-10">
            {{ $t('about.titletext') }}
          </h3>

          <div class="mt-6 prose sm:prose-lg sm:mt-8">
            <!-- <p
              v-html="capitalLetter('I collaborated with Horizons in Perspective, a prestigious bi-annual journal focused on the frontiers of innovation and creativity, to elevate their brand and digital presence. My involvement encompassed crafting a fresh and modern branding identity, designing an immersive and user-friendly website experience, and developing a visually appealing product design for their bi-annual journal publication.', CMS_URL)"
            >
            </p> -->
            <p
                class="mt-3"
            >
              {{ $t('about.titletext') }}
            </p>

            <p
                class="mt-3"
            >
              {{ $t('about.text1') }}
            </p>

            <p>
                {{ $t('about.text2') }}
            </p>
          </div>
        </div>
      </div>
    </section>
</template>


<style lang="scss" scoped>
   .font-gothic {
        font-family: "ferryman", sans-serif;
        font-weight: 500;
        font-style: normal;
   }
</style>