<script setup>
defineProps(["experience"])

</script>

<template>
    <div class="card">
        <img :src="`/images/${experience.image}`">
        <h3>{{ experience.name }}</h3>
    </div>
</template>