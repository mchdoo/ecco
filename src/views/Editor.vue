<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Viewer from '@/components/Viewer.vue'
import { ref } from 'vue';


let markdown = ref(`# Titulo del documento`);

</script>

<template>
    <Navbar/>
    
    <div class="editor">
        <textarea @keydown.tab.prevent v-model="markdown" id="editor"></textarea>
        <Viewer :markdown="markdown"/>
    </div>

</template>

<style lang="scss" scoped>
.editor {
    margin-top: 60px;
    height: 100%;
    display: flex;
    flex-direction: row;
}


#editor {
    resize: none;
    padding: 1rem;
    box-sizing: border-box;
    min-width: 30vw;
    height: calc(100vh - 60px);
    background-color: #e5e5e5;
    border: none;
    outline: none;
    font-size: 1rem;
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;

}
</style>