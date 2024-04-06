<script setup>
  import { posts } from '~/store/posts'
  const route = useRoute()
  const variables = { ID: route.params.id }
  await posts().fetchPost(variables)
  const handleDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('es-ES', options)
  }
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }
</script>
<template>
    <section>
        <article
          class="pb-10"
          
        >
          <header class="relative bg-slate-50 py-10 sm:pt-16">
            <div class="absolute inset-x-0 bottom-0 bg-white h-1/4"></div>
            <div
              class="relative max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8"
            >
              <h1
                class="mt-6 text-4xl font-semibold leading-tight text-center font-display text-slate-900 sm:text-5xl sm:leading-tight"
              >
                {{
                  posts().post.title
                }}
              </h1>
              <p
                class="max-w-2xl mx-auto mt-6 text-lg leading-8 text-center text-slate-700"
              >
                {{
                  posts().post.description
                }}
              </p>
              <div
                class="flex items-center justify-center gap-4 mt-8 text-md text-slate-500"
              >
                <span class="flex items-center gap-2">
                    <nuxt-icon
                        name="calender"
                        class="icon icon-stroke text-lg relative"
                    />
                    <time :datetime="posts().post.sys.publishedAt">
                        {{
                            handleDate(posts().post.sys.publishedAt)
                        }}
                    </time>
                </span>
              </div>
              <div class="w-full max-w-4xl mx-auto mt-16">
                <div
                  class="relative block w-full overflow-hidden shadow-lg aspect-w-16 aspect-h-9 rounded-3xl shadow-sky-100/50 md:aspect-w-3 md:aspect-h-2"
                >
                  <figure>
                      <img
                          :src="posts().post.feature.url"
                          alt=""
                          class="object-cover w-full rounded-3xl bg-slate-100"
                      />
                  </figure>
                </div>
              </div>
            </div>
          </header>

          <div class="px-4 bg-white sm:px-6 lg:px-8">
            <article
              class="max-w-2xl mx-auto prose prose-lg"
            >
              <ArticleBody 
                  :post="posts().post.content.json.content"
              />
              <Video 
                v-if="posts().post.videourl"
                :video="posts().post.videourl"
              />
              <MiniGallery 
                  v-if="posts().post.galleryCollection.items.length > 0"
                  class="mt-10"
                  :galleries="posts().post.galleryCollection.items"
                />
            </article>

            <footer class="max-w-2xl mx-auto">
              <hr class="w-full h-px pb-6 mt-14 text-slate-300/75 sm:pb-4" />
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <p
                  class="pl-0.5 text-lg font-semibold tracking-wide text-slate-900 sm:pl-0"
                >
                 Compartir artículo
                </p>


                <div class="mt-2.5 flex gap-3 sm:mt-0 sm:gap-4">
                  <button
                    class="flex items-center justify-center h-10 gap-3 px-6 text-sm font-medium duration-200 ease-in-out border rounded-full group border-slate-200 text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-50 focus:ring-offset-opacity-50 hover:text-slate-700"
                    @click="handleCopyLink"
                  >
                    <nuxt-icon
                      name="copy"
                      class="icon icon-stroke text-md relative"
                    />
                    Copy link
                  </button>
                </div>
              </div>
            </footer>
          </div>
      </article>
    </section>
</template>