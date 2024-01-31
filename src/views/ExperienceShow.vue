<script setup>
import {computed} from "vue"
import sourceData from '../../data.json'

const a = defineProps(['id','experienceSlug'])

const destination = computed(()=>sourceData.destinations.find(dest => dest.id === parseInt(a.id)))
const experience = computed(()=>destination.value.experiences.find(exp => exp.slug == a.experienceSlug))

</script>

<template>
    <section v-if="experience" class="destination">
        <h1>{{ experience.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${experience.image}`" :alt="experience.name"/>
            <p>{{ experience.description }}</p>
        </div>
    </section>
</template>

