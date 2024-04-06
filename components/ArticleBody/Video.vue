<script setup>
 const props = defineProps({
     video: {
        type: String,
        default: ''
     }
 })
</script>
<template>
       <div>
            <h2
                class="text-xl font-semibold text-slate-600 font-display mb-5 italic"
            >
                Vídeo:
            </h2>
            <iframe 
                :src="`https://www.youtube.com/embed/${props.video}`" 
                class="w-full aspect-video"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            >
            </iframe>
       </div>
</template>