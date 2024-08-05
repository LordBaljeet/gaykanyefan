<template>
  <div class="q-gutter-md">
    <q-tabs v-model="activeTab" class="flex flex-row">
      <div v-for="tab in tabs" :key="tab.name">
        <q-tab :name="tab.name" :label="tab.name" />
      </div>
    </q-tabs>
    <div class="row q-gutter-md items-center q-px-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Home" icon="home" />
        <q-breadcrumbs-el label="Components" icon="widgets" />
        <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />
      </q-breadcrumbs>
      <q-input v-model="activeTab" type="text" label="Search" class="col-grow" outlined dense>
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
      <CardCreationForm @created="(card) => memoryCards.push(card)"/>
    </div>
    <q-tab-panels v-model="activeTab" animated class="bg-transparent">
      <q-tab-panel v-for="tab in tabs" :key="tab.name" :name="tab.name">
        <div class="row q-gutter-md">
          <div v-for="card in memoryCards" :key="card.title" class="col-2">
            <MemoryCard :card="card"/>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <!-- <CardTags/> -->
  </div>
</template>

<script setup lang="ts">
import type { Card } from '~/model/MemoryCard';


type tab = {
  name: string
  isActive: boolean
  url: string
}

const tabs = ref<tab[]>([
  {
    name: "Materials",
    isActive: true,
    url: "/materials"
  },
  {
    name: "Technics",
    isActive: false,
    url: "/technics"
  }
]);

const memoryCards = ref<Card[]>([
  {
    title: "Memory Card 1",
    description: "Description 1",
    images: [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    ],
    tags: [],
    relations: []
  },
  {
    title: "Memory Card 2",
    description: "Description 2",
    images: [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    ],
    tags: [],
    relations: []
  },
  {
    title: "Memory Card 3",
    description: "Description 3",
    images: [
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    ],
    tags: [],
    relations: []
  }
]);

const activeTab = ref("Materials")

</script>

<style scoped>

</style>