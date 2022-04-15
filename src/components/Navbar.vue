<template>
    <nav class="navbar">
        <input class="doc-title" v-model="title">
    </nav>
</template>

<script lang="ts" setup>
    import {computed, ref} from 'vue'

    const title = ref('NuevoDocumento')
</script>

<style lang="scss" scoped>
.navbar {
    overflow: hidden;
    background-color: white;
    height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-content: center;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(#000, 0.1);
    border-bottom: 1px solid #ddd;

    .doc-title {
        outline: none;
        border: none;
        font-family: inherit;
        color: rgba(black, 0.5);
        font-weight: 600;
        font-size: 1rem;
        border-radius: 5px;
        padding: 0 10px;

        &:focus {
            background-color: #f5f5f5;
        }
    }
}
</style>