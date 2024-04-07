<script setup>
import { posts } from '~/store/posts'
const { locale } = useI18n()
const props = defineProps({
    image: {
        type: Object,
        default: () => {}
    }
})
const variables = { ID: props.image.target.sys.id, locale: locale.value }
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