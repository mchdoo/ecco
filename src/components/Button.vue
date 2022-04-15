<script setup lang="ts">
import Vue from 'vue'

const props = defineProps<{
    primary?: boolean     
}>()

</script>

<template>
    <button class="btn" :class="{ prim: primary }"> <slot/> </button>
</template>

<style scoped lang="scss">
.btn {
    background-color:#eee;
    color: #777;
    font-family: inherit;
    font-weight: 500;
    font-size: 15px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 200ms ease;

    &.prim {
        background-color: #668ac5;
        border: 1px solid transparent;
        color: #eeeeff;

        &:hover {
            background-color: #79a3e7;
            color: white;
            border: 1px solid transparent;
            box-shadow: 0 5px 15px rgba(#88b6ff, 0.5);
        }
    }

    &:hover {
        color: #000;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(#000030, 0.1);
    }
}
</style>