<script setup>
const props = defineProps({
  headlines: {
    type: Array,
    default: () => [],
  },
  headlineType: {
    type: String,
    default: 'heading-2',
  },
});

function getHeadingTag(level) {
    switch (level) {
        case 'heading-1':
            return 'h1';
        case 'heading-2':
            return 'h2';
        case 'heading-3':
            return 'h3';
        case 'heading-4':
            return 'h4';
        case 'heading-5':
            return 'h5';
        case 'heading-6':
            return 'h6';
    }
}
const processNode = (node) => {
  if (node.nodeType === 'text') {
    return processText(node.value, node.marks);
  } else if (node.nodeType === 'hyperlink') {
    return `<a href="${node.data.url}">${node.value}</a>`;
  }
  return node.value;
};

const processText = (text, marks) => {
  let formattedText = text;
  marks.forEach((mark) => {
    switch (mark.type) {
      case 'bold':
        formattedText = `<b>${formattedText}</b>`;
        break;
      case 'italic':
        formattedText = `<em>${formattedText}</em>`;
        break;
      case 'underline':
        formattedText = `<u>${formattedText}</u>`;
        break;
    }
  });
  return formattedText;
};
</script>

<template>
    <component :is="getHeadingTag(props.headlineType)" v-html="headlines.map(processNode).join('')"></component>
</template>