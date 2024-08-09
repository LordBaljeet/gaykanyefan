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
        <q-btn color="negative" icon="logout" @click="signOut" round flat dense/>
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
const { logout } = useAuth();
const $q = useQuasar();

const user = useCurrentUser()
const auth = useFirebaseAuth()!;
function signOut() {
  try {
    const { message } = logout(auth);
    $q.notify({
      message,
      color: 'positive',
      position: 'bottom-right',
      timeout: 2000,
    });
  } catch (error) {
    console.error(error);
  }
}

</script>