<script setup>
const props = defineProps({
    parrafs: {
        type: Array,
        default: () => []
    }
});
const formatContent = (parrafs) => {
    let formattedContent = '';
    parrafs.forEach(parraf => {
        if (parraf.nodeType === 'text') {
            let textContent = parraf.value;
            if (parraf.marks) {
                parraf.marks.forEach(mark => {
                    switch (mark.type) {
                        case 'bold':
                            textContent = `<b>${textContent}</b>`;
                            break;
                        case 'italic':
                            textContent = `<i>${textContent}</i>`;
                            break;
                        case 'underline':
                            textContent = `<u>${textContent}</u>`;
                            break;
                    }
                });
            }
            formattedContent += textContent;
        }
        if (parraf.nodeType === 'hyperlink') {
            formattedContent += `<a href="${parraf.data.uri}" target="_blank" class="font-normal text-sky-700 hover:text-sky-600">${parraf.content[0].value}</a>`;
        }
    });
    return formattedContent;
};
</script>

<template>
    <div>
        <p
            class="text-left text-slate-600 font-normal text-lg mb-5"
            v-html="formatContent(props.parrafs)"
        >
        </p>
    </div>
</template>