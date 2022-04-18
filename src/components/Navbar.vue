<template>
    <nav class="navbar">
        <Button @click="handleHome" icon>
            <fai icon="arrow-left" />
        </Button>
        <div class="doc-title" >{{title}}</div>
        
        <div>
            <Button @click="downloadPDF" icon>
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
    import {useRouter} from 'vue-router';

    const router = useRouter()


    interface Props {
        title: string
    }
    const props = defineProps<Props>()

    const handleHome = () => {
        window.confirm('Seguro que querés volver? Los cambios no se han guardado.') && router.replace({path: '/', replace: true})
    }

    const downloadPDF = () =>  {
        
    }
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
        width: fit-content;
        user-select: none;
        color: rgba(black, 0.5);
        font-weight: 600;
        display: grid;
        place-items: center;
    }
}
</style>