<template>
    <div>
        <q-card class="my-card text-center cursor-pointer">
            <div class="p-2">
                <q-img
                    :src="card.images[0]"
                    :ratio="3/4"
                    spinner-color="primary"
                    spinner-size="82px"
                    fit="cover"
                />
            </div>
            <q-card-section>
                <div class="text-h6 text-accent">{{ card.title }}</div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script setup lang="ts">
import { Card } from '~/model/MemoryCard';

const props = defineProps({
    card: {
        type: Object as PropType<Card>,
        required: true
    }
});

</script>

<style scoped>

</style>