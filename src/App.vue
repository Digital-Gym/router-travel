<script setup>
import TheNavBar from './components/TheNavBar.vue';
import {useRoute} from 'vue-router'

const route = useRoute()
</script>

<template>

    <TheNavBar />

    <div class="container">
        <router-view v-slot="{Component}">
            <transition name="slide" mode="out-in">
                <component :is="Component" :key="route.path"></component>
            </transition>
        </router-view>
    </div>
    
</template>

<style scoped>
    .slide-enter-active,
    .slide-leave-active{
        transition: opacity .5s, transform .5s;
    }

    .slide-enter-from,
    .slide-leave-to{
        opacity: 0;
        transform: translateY(-5%);
    }

</style>
