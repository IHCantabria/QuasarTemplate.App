<script setup>
import { useLayoutsStore } from 'src/stores/layouts-store';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const toggleButtons = ref('one');
const toggleFilter = ref(true);

const selected = ref('layer-1');

const route = useRoute();
const layoutsStore = useLayoutsStore();

const router = useRouter();
const goBack = () => {
  router.go(-1);
}

const filters = ref(false);
const filter1 = ref(false);
const filter2 = ref(false);
const filter3 = ref(false);
// const openFilters = () => {
//   filters.value = true;
// }

</script>
<template>
  <!-- HEADER -->
  <div class="header-container q-gutter q-pa-xs">
    <!-- Quick Filters: show only on events page -->
    <div v-if="route.meta.title == 'Events'" class="mobile-only header flex row justify-center items-center">
      <div class="toggle-button-container">
        <q-btn-toggle v-model="toggleButtons" color="grey-2" text-color="white-6" toggle-color="blue-grey-1"
          toggle-text-color="primary" spread class="my-custom-toggle" no-caps unelevated :options="[
            { label: 'Tab-1', value: 'one' },
            { label: 'Tab-2', value: 'two' }
          ]" />
      </div>
      <div class="toggle-container">
        <q-toggle v-model="toggleFilter" :label="toggleFilter ? 'Show only' : 'show all'"
          class="q-mx-md toggle-label" />
      </div>
    </div>
    <!-- show only on event detail page -->
    <div v-else class="header flex row justify-center items-center">
      <div class="simulation-layers">
        <!-- <q-option-group :options="options" type="radio" v-model="selected" inline class="my-custom-radio" /> -->
        <q-radio v-model="selected" val="layer-1" label="Layer 1" class="my-custom-radio" />
        <q-radio v-model="selected" val="layer-2" label="Layer 2" class="my-custom-radio" />
      </div>
    </div>
  </div>

  <!-- MAP -->
  <div class="map" :class="layoutsStore.isEventsListExpanded ? 'map--hidden' : ''">
    Map here
  </div>

  <!-- CONTENT -->
  <!-- MOBILE ONLY -->
  <div class="mobile-only content" :class="layoutsStore.isEventsListExpanded ? 'content--full-height' : ''">
    <router-view />
  </div>

  <!-- DESKTOP ONLY -->
  <div class="desktop-only content content--full-height">
    <q-toolbar class="navbar">
      <!-- Back button: show only if not on home page -->
      <q-btn v-if="route?.path !== '/events'" flat dense round icon="arrow_back" aria-label="Back" @click="goBack" />
      <!-- Current page title -->
      <q-toolbar-title class="app-title">{{ route.meta.title ?? "" }}</q-toolbar-title>
      <!-- Filters button -->
      <q-btn flat dense round icon="filter_list" aria-label="Filters" class="filters-icon">
        <!-- Filters menu -->
        <q-menu anchor="top right" self="bottom right" v-model="filters" fit>
          <q-toolbar>
            <q-toolbar-title>Filters</q-toolbar-title>
            <q-btn flat dense round icon="close" aria-label="Close" @click="filters = false" />
          </q-toolbar>
          <q-separator />
          <q-list style="min-width: 300px">
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Filter 1</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="filter1" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Filter 2</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="filter2" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Filter 3</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox v-model="filter3" />
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator />
          <div class="row justify-end q-pa-sm">
            <q-btn flat label="Reset" color="primary" @click="filter1 = false; filter2 = false; filter3 = false" />
            <q-btn flat label="Apply" color="primary" @click="filters = false" />
          </div>
        </q-menu>
      </q-btn>
    </q-toolbar>

    <!-- Quick Filters -->
    <div v-if="route.meta.title == 'Events'" class="header q-pa-md">
      <div class="toggle-button-container full-width">
        <q-btn-toggle v-model="toggleButtons" color="grey-2" text-color="white-6" toggle-color="blue-grey-1"
          toggle-text-color="primary" spread class="my-custom-toggle" no-caps unelevated :options="[
            { label: 'Show Only', value: 'one' },
            { label: 'Show All', value: 'two' }
          ]" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 50px;
  width: 100%;
  gap: 8px;
  font-size: 1em;
  font-weight: 400;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.toggle-button-container,
.toggle-container,
.my-custom-radio {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: $blue-grey-9;
  border-radius: 16px;
  max-height: 40px;
  overflow: hidden;
}

.toggle-label,
.my-custom-toggle,
.q-button {
  font-weight: 500;
  font-size: 14px;
}

.simulation-layers {
  display: flex;
  gap: 8px;
}

.my-custom-radio {
  display: flex;
  padding: 0 16px;
  justify-content: flex-start;
}

.map {
  position: absolute;
  top: 50px;
  height: calc(100% - 50px);
  width: 100%;
  background-color: $blue-grey-3;
  z-index: -5;
  transition: height 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &--hidden {
    height: 0;
    visibility: hidden;
  }
}

.content {
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: auto;
  border-radius: 16px 16px 0 0;
  background-color: white;
  height: 40vh;
  transition: height 0.3s ease-in-out;

  &--full-height {
    bottom: 0;
    border-radius: 0;
    height: calc(100% - 70px);
    width: 350px;
  }
}
</style>
