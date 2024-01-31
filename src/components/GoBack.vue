<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>

<template>
    <span class="go-back">
        <button @click="router.back()">
            <img src="/images/back.png" alt="back_img"/>
            Go back
        </button>
    </span>
</template>

<style scoped>
button{
    border: solid 1px transparent   ;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
img{
    width: 30px;
}

img:hover{
    transform: scale(1.2);
    transition: transform .5s ease;
}
</style>