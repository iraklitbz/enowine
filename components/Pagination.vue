<script setup>
const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    }
})
</script>
<template>
    <div class="flex items-center justify-center gap-2 mt-20">
        <nuxt-link
            :to="currentPage <= 1 ? null : `/blog/${currentPage - 1}`"
            class="inline-flex items-center justify-center w-20 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 shadow-sky-100/50 ring-1 ring-slate-900/5"
            :class="currentPage <= 1 ? 'text-slate-500/60 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700'"
          >
            Anterior
        </nuxt-link>
        <nuxt-link
            v-for="page in totalPages"
            :key="page"
            class="items-center justify-center hidden w-10 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm text-slate-700 shadow-sky-100/50 ring-1 ring-slate-900/5 hover:text-sky-700 sm:inline-flex"
            :class="currentPage === page ? 'bg-primary text-white hover:bg-sky-700 hover:text-white cursor-default' : 'bg-slate-50 hover:bg-slate-100'"
            :to="currentPage === page ? null : `/blog/${page}`"
        >
            {{
                page
            }}
        </nuxt-link>
        <nuxt-link
            :to="currentPage === totalPages ? null : `/blog/${currentPage + 1}`"
            class="inline-flex items-center justify-center w-20 h-10 text-sm font-medium transition duration-200 ease-in-out rounded-full shadow-sm bg-slate-50 shadow-sky-100/50 ring-1 ring-slate-900/5"
            :class="currentPage === totalPages ? 'text-slate-500/60 cursor-not-allowed' : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700'"
          >
            Siguiente
        </nuxt-link>
     </div>
</template>