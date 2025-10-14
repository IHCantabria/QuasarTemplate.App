<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const requestNotificationPermission = async () => {
  // Verify if browser supports notifications
  if (!('Notification' in window)) {
    if (process.env.DEBUGGING) console.log('Notifications not supported.')
    return
  }

  const promise = Notification.requestPermission()
  await promise.then((permission) => {
    if (permission === 'granted') {
      if (process.env.DEBUGGING) console.log('Notification permission granted.')
      new Notification('QUASAR', { body: 'This is a test notification.' })
    } else {
      if (process.env.DEBUGGING) console.log('Notification permission denied.')
    }
  })
};

onMounted(async () => {
  await requestNotificationPermission()
  // TODO: request here data needed for the app before entering

  router.push('/events')

})
</script>

<template>
  <q-page class="column flex flex-center bg-gradient">
    <img alt="App logo" src="~assets/quasar-logo-vertical.svg" style="width: 120px; height: auto" />
    <h1 class="text-h5 text-center q-mt-md"> App Name </h1>
  </q-page>
</template>

<style lang="css" scoped>
.bg-gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(17, 131, 255, 0.15) 50.84%, rgba(17, 131, 255, 0.25) 101.68%);
}
</style>
