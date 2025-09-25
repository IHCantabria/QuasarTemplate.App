<script setup>
import { useLayoutsStore } from 'src/stores/layouts-store'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const toggleButtons = ref('one')
const toggleTsunamis = ref(true)

const selected = ref('arrival-time')

const route = useRoute()
const layoutsStore = useLayoutsStore()
</script>

<template>
  <!-- HEADER -->
  <div class="header-container q-gutter q-pa-xs">
    <!-- show only on events page -->
    <div v-if="route.meta.title == 'Events'" class="header flex row justify-center items-center">
      <div class="toggle-button-container">
        <q-btn-toggle
          v-model="toggleButtons"
          color="transparent"
          text-color="white-6"
          toggle-color="blue-grey-1"
          toggle-text-color="primary"
          spread
          class="my-custom-toggle"
          no-caps
          unelevated
          :options="[
            { label: 'Recent', value: 'one' },
            { label: 'Magnitude', value: 'two' },
          ]"
        />
      </div>
      <div class="toggle-container">
        <q-toggle
          v-model="toggleTsunamis"
          :label="toggleTsunamis ? 'Tsunamis' : 'All events'"
          class="q-mx-md toggle-label"
        />
      </div>
    </div>
    <!-- show only on event detail page -->
    <div v-else class="header flex row justify-center items-center">
      <div class="simulation-layers">
        <!-- <q-option-group :options="options" type="radio" v-model="selected" inline class="my-custom-radio" /> -->
        <q-radio
          v-model="selected"
          val="arrival-time"
          label="Arrival Time"
          class="my-custom-radio"
        />
        <q-radio v-model="selected" val="max-height" label="Max. Height" class="my-custom-radio" />
      </div>
    </div>
  </div>

  <!-- MAP -->
  <div class="map" :class="layoutsStore.isEventsListExpanded ? 'map--hidden' : ''">Map</div>

  <!-- CONTENT -->
  <div class="content" :class="layoutsStore.isEventsListExpanded ? 'content--full-height' : ''">
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
  transition:
    height 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

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
    height: calc(100% - 100px - 67px);
  }
}
</style>
