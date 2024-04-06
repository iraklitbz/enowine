<script setup>
      import { galleries } from '~/store/gallery'
      await galleries().fetchGalleries()
      const handleDate = (date) => {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('es-ES', options)
      }
</script>
<template>
 <section class="py-16 overflow-hidden bg-white sm:pt-24 lg:pt-20">
      <div class="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <div
            class="flex flex-col items-center"
          >
            <h2
              class="text-5xl font-semibold font-display text-slate-900 sm:text-6xl lg:leading-none"
            >
              gallery de imágenes
            </h2>

            <p class="text-lg text-slate-700  lg:max-w-lg mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, nunc nec vehicula fermentum, nisl dolor ultrices
            </p>
          </div>

          <div
            class="grid max-w-xl gap-12 mx-auto mt-12 sm:mt-16 lg:mx-0 lg:mt-24 lg:max-w-none lg:grid-cols-3 lg:gap-10 lg:pb-32"
          >
            <div
                v-for="(gallery, index) in galleries().galleries.items"
                :key="index"
                class="flex flex-col gap-6 bg-slate-50 rounded-3xl p-10"
                :class="{
                    'transform md:translate-y-14': index % 3 === 1,
                    'transform md:translate-y-24': index % 3 === 2,
                }"
            >
              <nuxt-link
                :to="`/gallery/${gallery.sys.id}`"
                class="relative order-1 block w-full overflow-hidden group aspect-w-16 aspect-h-9 rounded-xl md:aspect-w-3 md:aspect-h-2"
              >
                <img
                  :src="gallery.imagesCollection.items[0].url"
                  :alt="gallery.title"
                  class="object-cover object-top w-full transition duration-300 rounded-xl bg-slate-100 group-hover:scale-105"
                />
                <div
                  class="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5"
                ></div>
              </nuxt-link>
              <div class="flex flex-col items-center order-2">
                <h3
                  class="text-center font-display text-2xl font-medium text-slate-900 mb-2"
                >
                    {{ gallery.title }}
                </h3>
                <time :datetime="gallery.sys.publishedAt">
                        {{
                            handleDate(gallery.sys.publishedAt)
                        }}
                </time>
                <nuxt-link
                  :to="`/gallery/${gallery.sys.id}`"
                  class="inline-flex items-center justify-center gap-2 py-3 mt-6 font-medium transition duration-300 bg-white rounded-full shadow-sm group px-9 text-md text-sky-900 shadow-sky-100/50 ring-1 ring-slate-100/90 hover:bg-white/60 hover:text-sky-700 hover:shadow-md hover:shadow-sky-100"
                >
                  See the gallery
                    <nuxt-icon
                        name="arrow-diagonal"
                        class="icon icon-fill text-lg relative"
                    />
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>