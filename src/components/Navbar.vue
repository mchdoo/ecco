<template>
    <nav class="navbar">
        <router-link to="/">
            <Button icon>
                <fai icon="arrow-left" />
            </Button>
        </router-link>
        <input class="doc-title" v-model="title">
        
        <div>
            <Button icon>
                <fai icon="download"/>
            </Button>
            <Button icon>
                <fai icon="arrow-up-right-from-square"/>
            </Button>
            <Button icon>
                <fai icon="gear"/>
            </Button>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    import Button from '@/components/Button.vue';
    import {ref} from 'vue'

    const title = ref('nuevo_doc')
</script>

<style lang="scss" scoped>
.navbar {
    background-color: white;
    height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(#000, 0.1);
    border-bottom: 1px solid #ddd;

    .doc-title {
        outline: none;
        width: fit-content;
        border: none;
        text-align: center;
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