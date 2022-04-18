<template>
    <div v-html="document">

    </div>
</template>

<script setup lang="ts">

import {ref} from 'vue'

interface Props {
    document: string
}

const props = defineProps<Props>()
</script>