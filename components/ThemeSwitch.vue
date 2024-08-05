<template>
    <div>
        <q-btn 
            color="primary" 
            :icon="darkMode ? 'dark_mode' : 'light_mode'" 
            @click="darkMode = !darkMode" 
            round 
            outline
            dense
        />
    </div>
</template>

<script setup lang="ts">
const $q = useQuasar();
const darkMode = ref($q.dark.isActive);

watch(
    darkMode,
    (value) => {
        $q.dark.set(value);
    }
);
</script>

<style scoped>

</style>