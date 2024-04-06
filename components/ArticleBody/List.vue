<script setup>
const props = defineProps({
  lists: {
    type: Array,
    default: () => [],
  },
  listType: {
    type: String,
    default: 'unordered',
  }
});

const formatContent = (content) => {
  const processNode = (node) => {
    switch (node.nodeType) {
      case 'paragraph':
        return `${processContent(node.content)}`;
      case 'heading-1':
      case 'heading-2':
      case 'heading-3':
      case 'heading-4':
      case 'heading-5':
      case 'heading-6':
        const headingLevel = node.nodeType.replace('heading-', '');
        return `<h${headingLevel} class="inline">${processContent(node.content)}</h${headingLevel}>`;
      case 'hyperlink':
        return `<a href="${node.data.url}">${processContent(node.content)}</a>`;
      case 'text':
        return applyMarks(node.value, node.marks);
      default:
        // Handle unexpected node types gracefully (optional: log a warning)
        console.warn(`Unknown node type: ${node.nodeType}`);
        return ''; // Returning empty string for unknown node types
    }
  };

  const processContent = (content) => {
    return content.map(node => processNode(node)).join('');
  };

  const applyMarks = (text, marks) => {
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
        default:
          // Handle unsupported marks gracefully (optional: log a warning)
          console.warn(`Unsupported mark type: ${mark.type}`);
      }
    });
    return formattedText;
  };

  return processContent(content);
};
</script>

<template>
    <ul
        v-if="listType === 'unordered'"
        class="list-disc list-inside text-left"
    >
        <li v-for="(list, index) in props.lists" :key="index" class="mb-2" v-html="formatContent(list.content)"></li>
  </ul>
    <ol
        v-else-if="listType === 'ordered'"
        class="list-decimal list-inside text-left"
    >
        <li v-for="(list, index) in props.lists" :key="index" class="mb-2" v-html="formatContent(list.content)"></li>
    </ol>
</template>
