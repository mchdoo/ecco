<template>
    <div @mouseup="handleStop" @mousedown="handleResize" id="viewer">
        <div v-html="convertedmd" id="markdown">
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { computed, ref } from 'vue'

    import { unified } from 'unified'

    import remarkParse from 'remark-parse'
    import remarkRehype from 'remark-rehype'
    import remarkMath from 'remark-math'
    import remarkGfm from 'remark-gfm'
    import emoji from 'remark-emoji'

    import rehypeStringify from 'rehype-stringify'
    import rehypeMathjax from 'rehype-mathjax'
    import rehypeHighlight from 'rehype-highlight'

    const convertedmd = computed(() => {
        return unified()
            .use(remarkParse)
            .use(emoji)
            .use(remarkMath)
            .use(remarkGfm)
            .use(remarkRehype)
            .use(rehypeMathjax)
            .use(rehypeHighlight)
            .use(rehypeStringify)
            .processSync(props.markdown)
    })

    const handleResize = (e: MouseEvent) => {
        window.addEventListener('mousemove', doDrag, false)
    }

    const doDrag = (e: MouseEvent) => {
        const x = e.clientX
    }

    const handleStop = () => {
        window.removeEventListener('mousemove', doDrag, false)
    }

    const props = defineProps<{
        markdown: any
    }>()
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