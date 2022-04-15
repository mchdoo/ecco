<template>
    <div id="viewer">
        <div v-html="convertedmd" id="file">
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
    width: 210mm;
    overflow-x: hidden;
    height: 297mm;
    word-wrap: break-word;
    margin: 2rem auto;
    box-shadow: 0 0 15px rgba(black, 0.1);
    border-radius: 2mm;

}
#file {
    outline: none;
}
</style>