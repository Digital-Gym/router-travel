<script setup>
import sourceData from "../../data.json" 

const destinations = sourceData.destinations

</script>

<template>
    <div id="nav">
        <AppLink id="logo" :to="{name: 'Home'}">AwesomeTravel</AppLink>
        <AppLink 
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id,  slug: destination.slug}}"
        >
            {{ destination.name }}
        </AppLink>
        <AppLink to="https://www.youtube.com/">External Link</AppLink>
    </div>
</template>