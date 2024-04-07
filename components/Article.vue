<script setup>
const localePath = useLocalePath()
const props = defineProps({
    post: {
        type: Object,
        required: true
    }
})
const handleTruncate = (word, length) => {
    if (word.length > length) {
        return word.substring(0, 70) + '...'
    }
    return word
}
const handleDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('es-ES', options)
}
</script>
<template>
     <article
         class="flex flex-col items-start justify-between shadow-sm rounded-2xl bg-slate-50 shadow-sky-100/50 ring-1 ring-slate-100"
       >
         <div class="w-full px-4 pt-4">
           <nuxt-link
            :to="localePath(`/blog/article/${props.post.sys.id}`)"
             class="relative block w-full overflow-hidden group aspect-w-16 aspect-h-9 rounded-xl md:aspect-w-3 md:aspect-h-2"
           >
             <figure
                v-if="props.post.feature"
                class="h-52"
             >
                <img
                    :src="props.post.feature.url"
                    alt=""
                    class="object-cover w-full transition duration-300 rounded-xl bg-slate-100 group-hover:scale-105"
                />
             </figure>
           </nuxt-link>
         </div>
         <div
           class="relative flex flex-col flex-1 px-5 pt-8 pb-10 group xl:px-7"
         >
            <ul
                v-if="props.post.categories"
                class="flex items-center gap-2.5"
            >
                <li
                    v-for="(category, index) in props.post.categories"
                    :key="index"
                    class="text-md bg-slate-200 hover:bg-slate-300 transition-colors ease-in-out delay-200 cursor-pointer text-primary px-4 py-1.5 rounded-full shadow-sky-100/50 ring-1 ring-slate-100"
                >
                  <nuxt-link
                    :to="localePath(`/blog/category/1?filter=${category}`)"
                  >
                    {{
                        category
                    }}
                  </nuxt-link>
                </li>
            </ul>
           <div class="flex-1">
             <h3
              v-if="props.post.title"
               class="mt-4 text-2xl font-medium leading-normal transition duration-200 ease-in-out font-display text-slate-900 decoration-slate-400 group-hover:text-sky-900"
             >
                <nuxt-link 
                    :to="localePath(`/blog/article/${props.post.sys.id}`)"
                >
                {{
                    props.post.title
                 }}
               </nuxt-link>
             </h3>
             <p v-if="props.post.description" class="mt-3.5 text-md leading-7 text-slate-700 line-clamp-3">
               {{
                    handleTruncate(props.post.description)
               }}
             </p>
           </div>
           <div class="flex items-center gap-3 mt-8 text-sm text-slate-500">
             <span class="flex items-center gap-1.5">
                <nuxt-icon
                    name="calender"
                    class="icon icon-stroke text-lg relative"
                />
               <time :datetime="props.post.sys.publishedAt">
                    {{
                        handleDate(props.post.sys.publishedAt)
                    }}
               </time>
             </span>
           </div>
         </div>
       </article>
</template>