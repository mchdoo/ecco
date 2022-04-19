<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Viewer from '@/components/Viewer.vue'
import { onMounted, ref } from 'vue';
import {EditorView, EditorState, basicSetup} from '@codemirror/basic-setup'
import {markdown, markdownLanguage} from '@codemirror/lang-markdown'
import {keymap} from '@codemirror/view'
import {defaultHighlightStyle} from '@codemirror/highlight'
import { indentWithTab } from '@codemirror/commands'
import { pedrito, highlighter } from '../assets/codemirror'
import { Transaction, Annotation } from '@codemirror/state';
// import CodeMirror from 'codemirror'

const editor = ref()
const props = defineProps<{doc: string}>()

let doctitle = props.doc.toString().split('_').join(' ')
doctitle = doctitle[0].toUpperCase() + doctitle.slice(1) 

let header = ref()
let md = ref('# lol')

const codeState = EditorState.create({
    doc: 'lco',
    extensions: [
        markdown({
            base: markdownLanguage,
            addKeymap: true,
        }),
        pedrito,
        highlighter,
        keymap.of([indentWithTab]),
        basicSetup,
        defaultHighlightStyle.fallback,
    ],
})
console.log(md.value)

onMounted(() => {

    const code = new EditorView({
        state: codeState,
        parent: editor.value,
    })

    document.title = `ECCO - ${props.doc}`
})
</script>

<template>
    <Navbar :title="doc"/>
    <div class="editor">
        <!-- <textarea ref="editor" @keydown.tab.prevent v-model="md" id="editor"></textarea> -->
        <div ref="editor" id="editor" />
        <Viewer :markdown="md"/>
    </div>
</template>

<style lang="scss" scoped>
.editor {
    margin-top: 60px;
    height: 100vh;
    display: flex;
    flex-direction: row;
}


#editor {
    box-sizing: border-box;
    min-width: 40vw;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
}
</style>