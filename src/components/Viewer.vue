<template>
    <div id="viewer">
        <div v-html="convertedmd" id="markdown">
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from 'vue'

    import {unified} from 'unified'

    import remarkParse from 'remark-parse'
    import remarkRehype from 'remark-rehype'
    import remarkMath from 'remark-math'
    import remarkGfm from 'remark-gfm'

    import rehypeStringify from 'rehype-stringify'
    import rehypeMathjax from 'rehype-mathjax'
    
    const props = defineProps<{
        markdown: any
    }>()

    const convertedmd = computed(() => {
        return unified()
            .use(remarkParse)
            .use(remarkMath)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeMathjax)
            .use(rehypeStringify)
            .processSync(props.markdown)
    })
</script>

<style scoped lang="scss">
#viewer {
    padding: 1in;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    word-wrap: break-word;
    box-shadow: 0 0 15px rgba(black, 0.1);

}
</style>