<template>
    <Teleport to="body">
        <div v-if="isOpen" class="modal">
            <div class="modal-body">
                <h2>Crear un nuevo archivo</h2>

                <input placeholder="Titulo del documento" id="doc-title" type="text">
                <div style="display: flex; flex-direction: row; flex-grow: grow;">
                    <Button fill primary> <fai icon="check" /> Crear</Button>
                    <Button fill @click="emit('clickedClose')" > Cancelar</Button>
                </div>
            </div>
        </div>
    </Teleport>

</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{isOpen: boolean}>()

const emit = defineEmits<{
    (e: 'clickedClose'): void 
}>()

</script>

<style lang="scss" scoped>
.modal {
    background: #0008;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    overflow:hidden;
    box-sizing: border-box;

    &-body {
        width: 500px;
        background-color: white;
        border-radius: 10px;
        padding: 2rem;
        margin: 5rem auto;

        #doc-title {
            font-family: inherit;
            border: 1px solid #ccc;
            padding: 15px;
            border-radius: 10px;
            font-size: 1rem;
            width: 100%;
            box-sizing: border-box;
            outline: none;
            margin: 1rem 0;

            &:focus {
                border: 1px solid darkcyan;
                background-color: transparent;
                color: black;
            }
        }

        h2 {
            margin: 0;
        }
        

    }
}
</style>