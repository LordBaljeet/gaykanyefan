<template>
  <q-card class="w-1/2">
    <q-card-section>
      <div class="text-h4 text-center">{{ title }}</div>
    </q-card-section>
    <q-card-section>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
        ref="form"
      >
        <div class="providers row justify-center q-gutter-x-md">
          <q-btn
            v-for="provider of providers"
            :key="provider.label"
            :icon="provider.icon"
            :label="provider.label"
            rounded
            no-caps
            @click="emits('provider', provider.name)"
          />
        </div>
        <div
          class="separator row items-center gap-2"
          v-if="providers"
        >
          <q-separator
            size="2px"
            class="flex-grow"
          />
          <span>or</span>
          <q-separator
            size="2px"
            class="flex-grow"
          />
        </div>
        <div class="manual column q-gutter-y-md">
          <q-input
            v-for="field in modelValue"
            :key="field.label"
            v-model="field.model"
            :type="field.type"
            :label="field.label"
            :rules="field.rules"
            hide-bottom-space
            outlined
          >
            <template
              v-slot:prepend
              v-if="field.prependIcon"
            >
              <q-icon :name="field.prependIcon" />
            </template>
            <template
              v-slot:append
              v-if="field.password"
            >
              <q-icon
                :name="
                  field.type === 'password' ? 'visibility_off' : 'visibility'
                "
                flat
                dense
                @click="
                  field.type = field.type === 'password' ? 'text' : 'password'
                "
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>

        <div>
          <q-btn
            :label="action == 'register' ? 'Sign Up' : 'Login'"
            type="submit"
            color="primary"
            no-caps
            class="w-full"
            push
            :loading="loading"
          >
            <template v-slot:loading>
              <q-spinner-dots />
            </template>
          </q-btn>
        </div>
        <div v-if="action == 'register'">
          <span>Already have an account? </span>
          <NuxtLink
            to="/login"
            class="underline"
            >login</NuxtLink
          >
        </div>
        <div v-else>
          <span>Don't have an account yet? </span>
          <NuxtLink
            to="/register"
            class="underline"
            >sign up</NuxtLink
          >
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { FormField, Provider } from '~/utils/types';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  providers: {
    type: Array as PropType<Provider[]>,
    required: false,
  },
  modelValue: {
    type: Array as PropType<FormField[]>,
    required: true,
  },
  action: {
    type: String,
    required: true,
    validator: (value: string) => ['login', 'register'].includes(value),
  },
  loading: {
    type: Boolean,
    required: false,
    default: true,
  },
});

const emits = defineEmits<{
  (e: 'submit'): void;
  (e: 'update:modelValue', value: FormField[]): void;
  (e: 'provider', value: string): void;
}>();

function onSubmit() {
  emits('submit');
}
</script>

<style scoped>
.q-card {
  /* From https://css.glass */
  background: rgba(114, 114, 114, 0.5);
  border-radius: 16px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.226);
}
</style>
