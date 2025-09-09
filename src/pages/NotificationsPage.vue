<script setup>
import { ref, computed } from 'vue'

const notifications = ref([
  {
    id: 1,
    title: 'Notification 1',
    body: 'This is the body of notification 1.',
    timestamp: '2025-06-10 10:00 AM',
    days: 1,
  },
  {
    id: 2,
    title: 'Notification 2',
    body: 'This is the body of notification 2.',
    timestamp: '2025-06-10 09:00 AM',
    days: 1,
  },
  {
    id: 3,
    title: 'Notification 3',
    body: 'This is the body of notification 3.',
    timestamp: '2025-06-07 08:00 AM',
    days: 3,
  },
  {
    id: 4,
    title: 'Notification 4',
    body: 'This is the body of notification 4.',
    timestamp: '2025-06-03 10:00 AM',
    days: 7,
  },
  {
    id: 5,
    title: 'Notification 5',
    body: 'This is the body of notification 5.',
    timestamp: '2025-05-27 10:00 AM',
    days: 8,
  },
  {
    id: 6,
    title: 'Notification 6',
    body: 'This is the body of notification 6.',
    timestamp: '2025-05-20 10:00 AM',
    days: 15,
  },
  {
    id: 7,
    title: 'Notification 7',
    body: 'This is the body of notification 7.',
    timestamp: '2025-05-15 10:00 AM',
    days: 20,
  },
  {
    id: 8,
    title: 'Notification 8',
    body: 'This is the body of notification 8.',
    timestamp: '2025-05-10 10:00 AM',
    days: 25,
  }
])

const todayNotifications = computed(() =>
  // If more than 1 day ago, do not show
  notifications.value.filter(notification => notification.days <= 1)
)

const lastWeekNotifications = computed(() =>
  // If more than 1 day ago and less than or equal to 7 days ago, show
  notifications.value.filter(notification => notification.days > 1 && notification.days <= 7)
)

const olderNotifications = computed(() =>
  // If more than 7 days ago, show
  notifications.value.filter(notification => notification.days > 7)
)

</script>

<template>
  <div class="q-pa-md q-gutter-md">
    <!-- list only today's notifications based on timestamp -->
    <q-list style="max-width: 350px">
      <q-item-label class="text-subtitle2 text-bold text-uppercase text-grey-7 q-py-md"> Today </q-item-label>
      <q-item v-for="notification in todayNotifications" :key="notification.id" clickable v-ripple
        class="notification-card q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold text-grey-9">{{ notification.title }}</q-item-label>
          <q-item-label lines>{{ notification.body }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{ notification.timestamp }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <!-- Last week notifications -->
    <q-list style="max-width: 350px" class="q-mt-lg">
      <q-item-label class="text-subtitle2 text-bold text-uppercase text-grey-7 q-py-md"> Last Week </q-item-label>
      <q-item v-for="notification in lastWeekNotifications" :key="notification.id" clickable v-ripple
        class="notification-card q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold text-grey-9">{{ notification.title }}</q-item-label>
          <q-item-label lines>{{ notification.body }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{ notification.timestamp }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <!-- Older than a week notifications -->
    <q-list style="max-width: 350px" class="q-mt-lg">
      <q-item-label class="text-subtitle2 text-bold text-uppercase text-grey-7 q-py-md"> Older </q-item-label>
      <q-item v-for="notification in olderNotifications" :key="notification.id" clickable v-ripple
        class="notification-card q-pa-md q-mb-sm">
        <q-item-section>
          <q-item-label class="text-bold text-grey-9">{{ notification.title }}</q-item-label>
          <q-item-label lines>{{ notification.body }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{ notification.timestamp }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style lang="scss" scoped>
.notification-card {
  background-color: #eee;
  border-radius: 8px;
}
</style>
