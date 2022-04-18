<template>
    <Teleport to="body">
        <div v-if="isOpen" class="modal">
            <div class="modal-body">
                <h2>Crear un nuevo archivo</h2>

                <input autocomplete="off" v-model="doctitle" placeholder="Titulo del documento" id="doc-title" type="text">
                <div style="display: flex; flex-direction: row; flex-grow: grow;">
                    <Button fill @click="handleCrear" primary> <fai icon="check" /> Crear</Button>
                    <Button fill @click="() => {
                        emit('clickedClose')
                        doctitle = ''
                    }" > Cancelar</Button>
                </div>
            </div>
        </div>
    </Teleport>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import slugify from 'slugify'

const router = useRouter()

defineProps<{isOpen: boolean}>()

const doctitle = ref('')

const handleCrear = ()=> {
    router.replace({path: `/editor/${slugify(doctitle.value, {
        replacement: '_',
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
    })}`, replace: true})
}

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
        box-shadow: 0 5px 40px #0005;

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

            transition: 200ms ease;

            &:hover{
                border: 1px solid #668ac5;

            }

            &:focus {
                border: 1px solid #668ac5;
                background-color: transparent;
                color: black;
                // outline: 3px solid rgba(#668ac5, 0.5);
                transform: scale(1.02);
                box-shadow: 0 5px 20px #0002;
            }
        }

        h2 {
            margin: 0;
        }
        

    }
}
</style>