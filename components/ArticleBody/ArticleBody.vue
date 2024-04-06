<script setup>
const props = defineProps({
    post: {
        type: Array,
        default: () => []
    }
})
</script>
<template>
    <div
        v-for="(item, index) in props.post"
    >
        <Parraf 
            v-if="item.nodeType === 'paragraph'"
            :parrafs="item.content"
        />
        <List 
            v-if="item.nodeType === 'unordered-list'"
            :list-type="'unordered'"
            :lists="item.content"
        />
        <List 
            v-if="item.nodeType === 'ordered-list'"
            :list-type="'ordered'"
            :lists="item.content"
        />
        <Headline
            v-if="item.nodeType.startsWith('heading-')"
            :headline-type="item.nodeType"
            :headlines="item.content"
        />
        <Image
            v-if="item.nodeType === 'embedded-asset-block'"
            :image="item.data"
        />
    </div>
</template>