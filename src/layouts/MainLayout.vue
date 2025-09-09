<script setup>
import { useRouter, useRoute } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue'

const router = useRouter();
const route = useRoute();
const goBack = () => {
  router.go(-1);
}
</script>
<template>
  <q-layout view="hHr LpR fFr">
    <!-- HEADER -->
    <q-header reveal bordered class="bg-white text-dark" height-hint="56">
      <q-toolbar>
        <!-- Menu button visible on desktop only -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="q-mx-sm desktop-only" />
        <q-btn v-if="route.path !== '/'" flat dense round icon="arrow_back" aria-label="Back" @click="goBack" />
        <!-- Pass the current title page -->
        <q-toolbar-title>{{ route.meta.title }}</q-toolbar-title>
        <div class="my-font">v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <!-- Vertical Menu -->
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="desktop" elevated>
      <q-list>
        <q-item-label header> Menu </q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>
    <!-- BODY -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- FOOTER -->
    <q-footer reveal class="mobile-only bg-dark glossy text-white">
      <q-btn-group class="full-width q-pa-xs flex justify-around">
        <q-btn to="/" stack class="button">
          <q-icon name="sym_r_home" class="button__icon" />
          <span class="button__text">Home</span>
        </q-btn>
        <q-btn to="/" stack class="button">
          <q-icon name="sym_r_notifications" class="button__icon" />
          <span class="button__text">Notifications</span>
        </q-btn>
        <q-btn to="/profile" stack class="button">
          <q-icon name="sym_r_person" class="button__icon" />
          <span class="button__text">Profile</span>
        </q-btn>
      </q-btn-group>
    </q-footer>
  </q-layout>
</template>

<style lang="scss" scoped>
.button {
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 300;

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__text {
    font-size: 12px;
    letter-spacing: 1px;
  }
}
</style>
