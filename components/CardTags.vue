<template>
  <div>
    <q-select 
      ref="tagSelector" 
      v-model="selectedTags" 
      :options="options" 
      label="Tags" 
      outlined 
      multiple 
      use-chips
      use-input 
      @new-value="newValueAdded" 
      new-value-mode="add-unique" 
    >
      <template v-slot:prepend>
        <q-icon name="fa-solid fa-tag" />
      </template>
    </q-select>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  modelValue: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const selectedTags = ref<string[]>(props.modelValue);
const options = ref<string[]>([]);
const tagSelector = ref();

function newValueAdded(newVal: string, done: any) {
  console.log('option added');
  addTagToOptions(newVal);
  done(newVal);
}

function addTagToOptions(tag: string) {
  if (!options.value.includes(tag)) {
    options.value.push(tag);
  }
}

watch(selectedTags, (newVal) => {
  emit('update:modelValue', newVal);
}, {
  deep: true,
});

watch(props.modelValue, (newVal) => {
  selectedTags.value = newVal;
}, {
  deep: true,
});

</script>

<style scoped></style>