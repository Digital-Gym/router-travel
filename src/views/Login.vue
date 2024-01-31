<script setup>
import {ref} from 'vue'
import { useRouter, useRoute} from 'vue-router';

const username = ref(null)
const password = ref(null)
const router = useRouter()
const route = useRoute()

function login(){
    // auth must be communicated here with the backend
    window.user = username.value
    const queryPath = route.query.queryPath || '/protected'
    router.push(queryPath)
}

</script>

<template>
    <div class="login" @submit.prevent="login">
        <form class="form">
            <h1>Login</h1>
            <label for="username">Username</label>
            <input v-model="username" name="username" type="text" class="input">

            <label for="password">Password</label>
            <input v-model="password" name="password" type="password" class="input">

            <button class="btn">Login</button>
        </form>
    </div>
</template>