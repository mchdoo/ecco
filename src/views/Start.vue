<script setup lang="ts">
import { ref } from 'vue'
import NewFileModal from '@/components/NewFileModal.vue'

const modalOpen = ref(false);
</script>

<template>

  <NewFileModal @clickedClose="modalOpen = false" :isOpen="modalOpen"/>

  <div class="start">
    <h1>Proyectos</h1>
    <p class="dimmed">O podés crear uno nuevo...</p>
    <Button @click="modalOpen = true" primary><fai icon="plus"/> Nuevo proyecto</Button>
    <Button><fai icon="folder-open"/> Abrir existente</Button>
    <div class="proyectos"></div>
  </div>
</template>

<style lang="scss" scoped>
.start {
  margin-top: 60px;
  padding: 0 10%;
  .proyectos {
    box-sizing: border-box;
    padding: 30px;
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    min-height: 500px;
    background-color: #eee;
    border-radius: 10px;
  }
}
</style>