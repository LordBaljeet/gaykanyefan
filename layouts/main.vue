<template>
  <q-navbar>
    <q-toolbar>
      <q-btn flat dense round icon="menu" aria-label="Menu" />
      <q-toolbar-title>
        <p>Hello World</p>
      </q-toolbar-title>
      <q-space />
      <div class="flex q-gutter-sm">
        <ThemeSwitch/>
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