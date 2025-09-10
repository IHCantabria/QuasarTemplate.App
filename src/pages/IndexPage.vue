<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const enterApp = () => {
  const promise = Notification.requestPermission()
  promise.then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
      new Notification('TSUSY', { body: 'This is a test notification.' })
    } else {
      console.log('Notification permission denied.')
    }
  }).finally(() => {
    // Navigate to events page after handling permission
    router.push('/events')
  })
};
</script>

<template>
  <q-page class="column flex flex-center bg-gradient">
    <img alt="IH-TSUSY logo" src="~assets/ihtsusy-logo.png" style="width: 120px; height: auto" />
    <h1 class="text-h5 text-center q-mt-md"> IH-Tsunami System </h1>
    <q-btn @click="enterApp" rounded color="secondary" label="Go to Events Page" class="q-mt-md text-capitalize" />
  </q-page>
</template>

<style lang="css" scoped>
.bg-gradient {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(17, 131, 255, 0.15) 50.84%, rgba(17, 131, 255, 0.25) 101.68%);
}
</style>
