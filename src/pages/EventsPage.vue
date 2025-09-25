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
    title: 'Event 1',
    time: '5 min ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 2,
    title: 'Event 2',
    time: '4 hours ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 3,
    title: 'Event 3',
    time: '1 day ago',
    type: 'Not Tsunami',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 4,
    title: 'Event 4',
    time: '2 days ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 5,
    title: 'Event 5',
    time: '1 week ago',
    type: 'Not Tsunami',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 6,
    title: 'Event 6',
    time: '2 weeks ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 7,
    title: 'Event 7',
    time: '1 month ago',
    type: 'Not Tsunami',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 8,
    title: 'Event 8',
    time: '2 months ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
  {
    id: 9,
    title: 'Event 9',
    time: '3 months ago',
    type: 'Not Tsunami',
    color: 'grey-4',
    textColor: 'grey',
  },
  {
    id: 10,
    title: 'Event 10',
    time: '6 months ago',
    type: 'Tsunami',
    color: 'red-2',
    textColor: 'red',
  },
])

const toggleList = () => {
  layoutsStore.toggleEventsList()
}

const handleSwipe = () => {
  layoutsStore.toggleEventsList()
}
</script>

<template>
  <div
    v-touch-swipe.mouse.up.down="handleSwipe"
    class="q-pa-md events-container"
    :class="layoutsStore.isEventsListExpanded ? 'full-height' : ''"
  >
    <!-- add expand event on swipe top -->
    <button @click="toggleList" class="my-button q-mb-sm">
      <q-icon
        :name="layoutsStore.isEventsListExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'"
      />
    </button>
    <q-list style="width: 100%; max-width: 350px">
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
</template>
<style lang="scss" scoped>
.full-height {
  height: 100%;
  overflow-y: auto;
}

.events-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.my-button {
  border: none;
  border-radius: 100%;
  background: none;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: $blue-grey-4;

  &:hover {
    color: $blue-grey-6;
    background-color: $blue-grey-2;
    transform: scale(1.05);
    transition: transform 0.2s;
  }
}

.event-card {
  background-color: $grey-2;
  border-radius: 8px;
  width: 100%;
}
</style>
