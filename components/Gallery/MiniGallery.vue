<script setup>
    const showLightBox = ref(false)
    const imagenURL = ref('')
    const props = defineProps({
        galleries: {
            type: Array,
            default: () => []
        }
    })
    const handleOpenLightBox = (url) => {
        showLightBox.value = true
        imagenURL.value = url
        document.body.classList.add('overflow-hidden')
    }
    const handleCloseLightBox = () => {
        showLightBox.value = false
        imagenURL.value = ''
        document.body.classList.remove('overflow-hidden')
    }
</script>
<template>
    <div>
        <h2
            class="text-xl font-semibold text-slate-600 font-display mb-5 italic"
        >
            Galería de fotos:
        </h2>
        <div
            class="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
            <figure
                v-for="(imagen, index) in props.galleries"
                :key="index"
                class="relative block w-full overflow-hidden shadow-lg aspect-w-16 aspect-h-9 rounded-3xl shadow-sky-100/50 md:aspect-w-3 md:aspect-h-2 cursor-pointer group"
                @click="handleOpenLightBox(imagen.url)"
            >
                <img
                    :src="imagen.url"
                    alt=""
                    class="object-cover w-full h-full rounded-3xl bg-slate-100 hover:scale-110 transition-all ease-in-out duration-300"
                />
            </figure>
        </div>
        <div
            v-if="showLightBox"
            class="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
            <div
                class="relative w-full max-w-4xl mx-auto"
            >
                <button
                    class="absolute top-5 right-5 z-50 flex items-center justify-center w-10 h-10 text-2xl font-bold text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all ease-in-out duration-300"
                    @click="handleCloseLightBox"
                >
                    <nuxt-icon
                      name="cross"
                      class="icon icon-fill text-4xl relative"
                    />
                </button>
                <figure
                    class="relative block w-full overflow-hidden shadow-lg aspect-w-16 aspect-h-9 rounded-3xl md:aspect-w-3 md:aspect-h-2"
                >
                    <img
                        :src="imagenURL"
                        alt=""
                        class="object-cover w-full h-full rounded-3xl bg-slate-100"
                    />
                </figure>
            </div>
        </div>
    </div>
</template>