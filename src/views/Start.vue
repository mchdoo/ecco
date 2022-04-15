<script setup lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue';
</script>


<template>
  <div class="start">
    <h1>Proyectos</h1>
    <p class="dimmed">O podés crear uno nuevo...</p>
    <router-link to="/editor"><Button primary style="margin-right: 20px;">+ Nuevo proyecto</Button></router-link>
    <Button>Abrir existente</Button>
    <div class="proyectos">
    </div>
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