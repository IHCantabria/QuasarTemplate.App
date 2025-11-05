<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useLayoutsStore } from '../stores/layouts-store'

const layoutsStore = useLayoutsStore()
const router = useRouter()
const onEventClick = (eventId) => {
  router.push(`/events/${eventId}`)
}

const events = ref([
  {
    id: 1,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 2,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 3,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 4,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 5,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 6,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 7,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 8,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 9,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 10,
    title: 'Item Title',
    time: 'Item description',
    type: 'Status',
    color: 'red-2',
    textColor: 'red',
  },
])

const setEventsListBigger = () => {
  if (layoutsStore.isEventsListMinimized) {
    layoutsStore.setEventsListState('full-height')
  } else if (layoutsStore.isEventsListHidden) {
    layoutsStore.setEventsListState('minimized')
  }
}

const setEventsListSmaller = () => {
  if (layoutsStore.isEventsListFullHeight) {
    layoutsStore.setEventsListState('minimized')
  } else if (layoutsStore.isEventsListMinimized) {
    layoutsStore.setEventsListState('hidden')
  }
}
</script>

<template>
  <!-- add expand event on swipe top -->
  <button
    v-touch-swipe.mouse.up="setEventsListBigger"
    v-touch-swipe.mouse.down="setEventsListSmaller"
    class="my-button q-mb-sm mobile-only"
    aria-label="Expand/Collapse events list"
  >
    <q-icon name="maximize" />
  </button>
  <div class="events-container max-height q-mx-md">
    <div v-if="!layoutsStore.isEventsListHidden">
      <q-list style="width: 100%">
        <q-item
          v-for="event in events"
          :key="event.id"
          clickable
          v-ripple
          @click="onEventClick(event.id)"
          class="event-card q-pa-md q-mb-sm"
        >
          <q-item-section>
            <q-item-label class="text-bold text-grey-9">
              {{ event.title }}
            </q-item-label>
            <q-item-label caption>{{ event.time }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-badge
              :color="event.color"
              :text-color="event.textColor"
              :label="event.type"
              class="q-px-sm q-py-xs"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <p v-else style="text-align: center">Swipe up to view events</p>
  </div>
</template>
<style lang="scss" scoped>
.panel-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.max-height {
  flex: 1;
  min-height: 0;
}

.events-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  overflow-y: auto;
}

.my-button {
  border: none;
  background: none;
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: $blue-grey-4;
}

.event-card {
  background-color: $grey-2;
  border-radius: 8px;
  width: 100%;

  &--selected {
    background-color: $grey-5;
  }
}
</style>
