<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {createPopper} from '@popperjs/core'

interface Props {
    primary?: boolean,
    error?: boolean,
    simple?: boolean,
    icon?: boolean,
    tooltip?: string,
    onClick: any,
    fill?: boolean  
}

const props = defineProps<Props>()

const styles = {
    width: props.fill ? '100%' : 'auto',
}

</script>

<template>
    <button :style="styles" @click="onClick" class="btn" :class="{ prim: primary, simple: simple, icon: icon, error: error }"> <slot/> </button>
    <div v-if="tooltip != null" id="tooltip">{{ tooltip }}</div>
</template>

<style scoped lang="scss">
#tooltip {
    background-color: rgba(black, 0.5);
    font-size: 13px;
    color: white;
    height: fit-content;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 10px;
    position: absolute;
}
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

    &:first-of-type {
        margin-right: 1rem;
    }

    &:hover {
        color: #000;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(#000030, 0.1);
    }
    &.prim {
        background-color: #668ac5;
        border: 1px solid transparent;
        color: rgba(white, 0.8);

        &:hover {
            background-color: #79a3e7;
            color: white;
            border: 1px solid transparent;
            box-shadow: 0 5px 15px rgba(#79a3e7, 0.5);
        }
    }

    &.error {
        @extend .prim;
        background-color: #bb3333;

        &:hover {
            background-color: rgb(210, 38, 38);
            box-shadow: 0 5px 15px rgba(#f00, 0.3);
        }
    }

    &.icon {
        background-color: transparent;
        border: none;
        font-size: 20px;
        line-height: 20px;

        &:first-of-type{
            margin: 0;
        }

        &:hover {
            border: none;
            transform: none;
            box-shadow: none;
            background-color: #eee;
        }
    }

}
</style>