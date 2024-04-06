<script setup>
import { posts } from '~/store/posts'
const props = defineProps({
    image: {
        type: Object,
        default: () => {}
    }
})
const variables = { ID: props.image.target.sys.id }
const imageURL = await posts().fetchAssets(variables)
</script>
<template>
    <figure
        class="my-10 w-full"
    >
        <img
            :src="imageURL"
            class="w-full object-fill"
        />
    </figure>
</template>