<script setup>
    import MasonryWall from '@yeger/vue-masonry-wall'
    import { galleries } from '~/store/gallery'
    const route = useRoute()
    const variables = { ID: route.params.id }
    const gallery = await galleries().fetchGallery(variables)
    const handleDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('es-ES', options)
    }
</script>
<template>
    <section class="py-16 overflow-hidden bg-slate-50 sm:py-24 lg:py-28 xl:py-32">
        <div
            class="mb-14 flex flex-col items-center justify-center gap-4"
        >
            <h2
            class="text-4xl font-semibold text-center font-display text-slate-900 md:text-5xl"
            >
            {{ gallery.title }}
            </h2>
            <time 
                :datetime="gallery.sys.publishedAt"
                class="text-center w-full"
            >
                    {{
                        handleDate(gallery.sys.publishedAt)
                    }}
            </time>
        </div>
        <div class="mx-auto sm:max-w-2xl sm:px-6 lg:max-w-6xl lg:grid-cols-10 lg:px-8 xl:px-12">
            <MasonryWall :items="gallery.imagesCollection.items" :ssr-columns="1" :column-width="400" :gap="16">
                <template #default="{ item, index }">
                        <div 
                            :key="index"
                            class="w-full overflow-hidden aspect-w-3 aspect-h-2 sm:aspect-w-4 sm:aspect-h-3"
                        >
                        <img 
                            :src="item.url"
                            class="object-cover object-center w-full rounded-3xl bg-slate-100"
                        >
                    </div>
                </template>
            </MasonryWall>
        </div>
    </section>
</template>