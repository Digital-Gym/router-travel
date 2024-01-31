<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function logout(){
    window.user = null
    router.push({name: 'Home'})
}
</script>

<template>
    <div>
        <h1>Really protected!</h1>
        <button @click="logout">Log-out</button>
    </div>
</template>