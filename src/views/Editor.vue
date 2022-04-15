<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Viewer from '@/components/Viewer.vue'

import { EditorView, EditorState } from '@codemirror/basic-setup'
import { ref } from 'vue';


let editor = new EditorView({
    state: EditorState.create({doc: "SI DASJDHASDkjh"}),
    parent: document.body
})

let markdown = ref(`# Titulo del documento`);

</script>

<template>
    <Navbar/>
    
    <div ref="editorView" class="editor">
        <textarea @keydown.tab.prevent v-model="markdown" id="editor"></textarea>
        <Viewer :markdown="markdown"/>
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
    resize: none;
    padding: 3rem;
    box-sizing: border-box;
    min-width: 40vw;
    height: 100%;
    background-color: #e5e5e5;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;

}
</style>