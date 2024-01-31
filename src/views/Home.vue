<script setup>
import sourceData from "../../data.json"

const destinations = sourceData.destinations

</script>

<template>
    <div class="home">
        <h1>Welcome Son!</h1>
        <div class="destinations">
            <router-link 
                v-for="destination in destinations"
                :key="destination.id"
                :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
            >
                <h2>{{ destination.name }}</h2>
                <img class="card-image" :src="`/images/${destination.image}`" :alt="destination.name" />
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.card-image:hover{
    transform: scale(1.1);
    transition: transform .5s ease;
}
</style>