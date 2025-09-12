<script setup>
import { useLayoutsStore } from 'src/stores/layouts-store';
import { ref } from 'vue';
const toggleButtons = ref('one');
const toggleTsunamis = ref(true);

const layoutsStore = useLayoutsStore();

</script>

<template>
  <div class="header flex row justify-center items-center">
    <div class="toggle-button-container">
      <q-btn-toggle v-model="toggleButtons" color="transparent" text-color="white-6" toggle-color="blue-grey-1"
        toggle-text-color="primary" spread class="my-custom-toggle q-pa-xs" no-caps unelevated :options="[
          { label: 'Recent', value: 'one' },
          { label: 'Magnitude', value: 'two' }
        ]" />
    </div>
    <div class="toggle-container">
      <q-toggle v-model="toggleTsunamis" :label="toggleTsunamis ? 'Tsunamis' : 'All events'"
        class="q-mx-sm toggle-label" />
    </div>
  </div>

  <div class="map" :class="layoutsStore.isEventsListExpanded ? 'map--hidden' : ''">
    Map
  </div>

  <div class="content" :class="layoutsStore.isEventsListExpanded ? 'content--full-height' : ''">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 50px;
  width: 100%;
  background-color: transparent;
  color: $blue-grey-2;
  gap: 8px;
  font-size: 1em;
  font-weight: 400;
  z-index: 10;
  margin-top: 4px;
}

.toggle-button-container,
.toggle-container {
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: auto;
  padding: 4px;
  box-sizing: border-box;
  height: 100%;
}


.toggle-label,
.my-custom-toggle {
  font-weight: 400;
  font-size: 1em;
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
  height: 30%;
  transition: height 0.3s ease-in-out;

  &--full-height {
    height: calc(100% - 100px - 67px);
  }
}
</style>
