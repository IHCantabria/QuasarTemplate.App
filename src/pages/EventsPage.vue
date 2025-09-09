<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const events = ref([
  {
    id: 1,
    title: 'Event 1',
    time: '5 min ago',
    type: 'Tsunami',
    color: 'red-5'
  },
  {
    id: 2,
    title: 'Event 2',
    time: '4 hours ago',
    type: 'Tsunami',
    color: 'red-5'
  },
  {
    id: 3,
    title: 'Event 3',
    time: '1 day ago',
    type: 'Not Tsunami',
    color: 'grey-5'
  }
])

const onRight = (id) => {
  router.push(`/events/${id}`)
}
</script>

<template>
  <div style="max-width: 400px">
    <q-list separator>
      <q-item-label header> Last Events </q-item-label>

      <q-slide-item v-for="event in events" :key="event.id" @right="onRight(event.id)">
        <template v-slot:right>
          View Details
        </template>

        <q-item>
          <q-item-section>
            <q-item-label class="text-bold text-grey-9">
              {{ event.title }}
            </q-item-label>
            <q-item-label caption>{{ event.time }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-badge :color="event.color" :label="event.type" class="q-pa-xs" />
          </q-item-section>
        </q-item>
      </q-slide-item>
    </q-list>
  </div>
</template>
<style scoped></style>
