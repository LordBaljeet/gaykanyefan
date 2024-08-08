<template>
  <q-navbar>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" />
      <q-toolbar-title>
        <p>Kanye</p>
      </q-toolbar-title>
      <q-space />
      <div class="flex q-gutter-sm">
        <ThemeSwitch/>
        <q-btn color="negative" icon="logout" @click="logout" round flat dense/>
        <q-avatar>
          <q-img
            src="/Gumball.jpg"
          />
        </q-avatar>
      </div>
    </q-toolbar>
  </q-navbar>
  <slot/>
</template>

<script setup lang="ts">
const router = useRouter();
async function logout() {
  await useFetch('/api/auth/logout', {
    method: 'POST'
  });
  router.push('/login');
}

</script>