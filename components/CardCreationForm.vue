<template>
    <div>
        <q-dialog v-model="showModal" persistent>
            <q-card class="w-full">
                <q-form @submit="createMemoryCard">
                    <q-card-section>
                        <q-input v-model="title" type="text" label="Title*" outlined lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']">
                            <template v-slot:prepend>
                                <q-icon name="title" />
                            </template>
                        </q-input>
                        <q-input v-model="description" type="textarea" label="Description*" outlined autogrow :rules="[ val => val && val.length > 0 || 'Please type something']">
                            <template v-slot:prepend>
                                <q-icon name="description" />
                            </template>
                        </q-input>
                        <CardTags v-model="tags" />
                    </q-card-section>
                    <q-card-actions align="right">
                        <q-btn flat label="Cancel" color="primary" v-close-popup />
                        <q-btn flat label="Create" color="primary" type="submit" />
                    </q-card-actions>
                </q-form>
            </q-card>
        </q-dialog>
        <q-btn color="primary" icon="add" label="New" @click="showModal = true" no-caps />
    </div>
</template>

<script setup lang="ts">
import { Card } from '~/model/MemoryCard';

const emit = defineEmits<{
    (e: 'created', card: Card): void;
}>();


const showModal = ref(false);

const title = ref('');
const description = ref('');
const tags = ref<string[]>(['hel']);
const images = ref<string[]>([]);
const relations = ref<string[]>([]);

function createMemoryCard() {
    const memoryCard = new Card(title.value, description.value, tags.value);
    console.log('createMemoryCard', memoryCard);
    emit('created', memoryCard);
    showModal.value = false;
}

</script>

<style scoped></style>