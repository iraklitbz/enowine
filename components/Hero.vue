<script setup>
import { capitalLetter } from '~/utils/capital-util'
</script>
<template>
    <section class="relative bg-slate-50/50">
      <!-- Background gradient -->
      <img
        src="/img/about-hero-bg.svg"
        alt=""
        class="absolute inset-0 object-cover object-left w-full h-full lg:w-2/3"
      />

      <!-- Content -->
      <div
        class="relative max-w-screen-xl px-5 py-16 mx-auto sm:py-24 lg:py-32 sm:px-6 lg:px-8"
      >
        <div
          class="max-w-3xl px-4 mx-auto sm:px-6 lg:mx-0 lg:w-2/3 lg:max-w-none lg:px-8 lg:pr-16"
        >
          <div
            class="mx-auto mb-8 sm:mb-12 lg:mb-16 lg:max-w-[350px]"
          >
            <img class="w-full" src="~/assets/logo.svg" />
          </div>
          <h1
            class="text-5xl font-semibold font-display text-slate-900 sm:text-6xl"
          >
            {{ $t('home.headline.strartword') }}
            <!-- Highlighted text -->
            <span class="relative whitespace-nowrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="249"
                height="22"
                viewBox="0 0 249 22"
                fill="currentColor"
                class="absolute top-2/3 left-0 h-[0.6em] w-full fill-pink-200/75"
              >
                <path
                  d="M247.564 18.5807C241.772 13.3568 232.473 12.7526 225.225 11.4427C217.124 9.97395 208.996 8.57031 200.846 7.46093C186.542 5.51302 172.169 4.08854 157.79 3.01562C126.033 0.645827 94.0929 0.0338481 62.3387 2.36979C42.1785 3.85416 22.008 5.90885 2.32917 10.8463C-0.0155171 11.4349 0.207047 14.6719 2.6889 14.7083C22.0261 14.9896 41.3866 12.6406 60.7109 11.8568C79.9471 11.0807 99.2274 10.6719 118.484 10.9557C142.604 11.3125 166.719 12.8333 190.722 15.5156C199.956 16.5469 209.195 17.6016 218.411 18.8255C227.864 20.0807 237.259 22 246.767 20.7422C247.709 20.6198 248.426 19.3568 247.564 18.5807Z"
                />
              </svg>
              <span class="relative">{{ $t('home.headline.underlineword') }}</span>
            </span>
            {{ $t('home.headline.finishword') }}
          </h1>
          <!-- <p 
            class="mt-8 text-lg leading-8 text-slate-700"
            v-html=" capitalLetter('Pumpkin seasonal rich froth decaffeinated trifecta organic blue panna doppio. Body a whipped lungo variety spice seasonal body press mountain con macchiato. Medium coffee single white to caramelization siphon con siphon id as con go single. So ristretto pumpkin affogato cinnamon breve turkish organic. Lait black kopi dripper spice lait cultivar robusta panna whipped and sit aromatic sugar.', CMS_URL)"
          >
          </p> -->
          <p class="mt-6 text-lg leading-8 text-slate-700">
            {{ $t('home.text1') }}

          </p>
          <p class="mt-6 text-lg leading-8 text-slate-700">
            {{ $t('home.text2') }}
          </p>
        </div>
      </div>

      <div
        class="relative h-96 w-full md:h-[600px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/3"
      >
        <image
          src="https://res.cloudinary.com/iraklitbz/image/upload/v1712410655/daria-volkova-f-Qe7dVATZk-unsplash_pagh36.jpg"
          alt=""
          class="absolute inset-0 object-cover object-top w-full h-full"
        />
        <svg
          width="229"
          height="40"
          viewBox="0 0 229 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="absolute left-0 w-auto h-8 -translate-x-1/2 bottom-16 mt-14 sm:mt-20 sm:h-10"
        >
          <g clip-path="url(#clip0_204_150)">
            <path
              d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
              stroke="#590829"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 19L29.4 39L57.7 19L86.1 39L114.5 19L142.8 39L171.2 19L199.6 39L228 19"
              stroke="black"
              stroke-opacity="0.2"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L29.4 21L57.7 1L86.1 21L114.5 1L142.8 21L171.2 1L199.6 21L228 1"
              stroke="#993b58"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_204_150">
              <rect width="229" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
</template>