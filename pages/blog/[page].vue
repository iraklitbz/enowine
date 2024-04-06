<script setup>
  import { posts } from '~/store/posts'
  const route = useRoute()
  const articlesPerPage = 3
  const currentPage = ref(parseInt(route.params.page) || 1)
  const skipData = computed(() => {
    if (currentPage.value === 1) {
      return 0
    }
    return (currentPage.value - 1) * articlesPerPage
  })
  const variables = { skip: skipData.value, limit: 3 }
  await posts().fetchPosts(variables)
  const totalPages = computed(() => {
    return Math.ceil(posts().posts.total / articlesPerPage)
  })
</script>
<template>
    <section
   id="articles"
   class="py-16 overflow-hidden bg-white sm:py-24 lg:py-28"
 >
   <!-- Container -->
   <div class="max-w-screen-xl px-5 mx-auto sm:px-6 lg:px-8">
     <h2
       class="text-4xl font-semibold text-center font-display text-slate-900 sm:text-5xl"
     >
       Últimas noticias
     </h2>

     <div
       class="grid max-w-lg gap-8 mx-auto mt-14 sm:mt-16 md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-3 lg:gap-y-6 lg:gap-x-5 xl:gap-x-6 xl:gap-y-8"
     >
          <Article 
            v-for="(post, index) in posts().posts.items"
            :key="index"
            :post
          />
     </div>
      <Pagination
        v-if="totalPages > 1"
        :totalPages="totalPages"
        :currentPage="currentPage"
      />
    </div>
 </section>
</template>