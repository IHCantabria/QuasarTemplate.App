<script setup>
import { ref } from 'vue';
const notificationsEnabled = ref(true);
const logout = () => {
  console.log('Logging out...');
};


</script>
<template>
  <div class="q-pa-md q-gutter-md">
    <!-- Logo & User Info -->
    <div class="brand q-my-xl">
      <img src="src/assets/ihtsusy-logo.png" alt="Logo" class="logo" />
      <q-card-section class="q-pa-none">
        <p class="text-h6 text-center">John Doe</p>
        <p class="text-subtitle2 text-grey text-center">john.doe@example.com</p>
      </q-card-section>
    </div>

    <!-- Supporters club membership -->
    <div class="membership-container q-mt-md q-mb-lg">
      <div class="membership-container__icon">
        <img src="icons/medal-star.svg" alt="Medal Star" class="medal-icon" />
      </div>
      <div class="membership-container__text">
        <p class="title">Suporters’ Club Membership</p>
        <p class="subtitle">As a Suporter´Club member, you have access to the extended IH-Tsusy service, which
          provides immediate visualization of simulations right after they are executed.</p>
      </div>
    </div>

    <!-- Options menu -->
    <div class="profile-menu q-my-md">
      <q-toggle class="profile-menu__item profile-menu__item--toggle" label="Notifications" left-label
        v-model="notificationsEnabled" />
      <q-separator />
      <q-btn flat class="profile-menu__item profile-menu__item--link" to="profile/about" label="About">
        <q-icon name="sym_arrow_forward_ios" class="item__icon" />
      </q-btn>
      <q-separator />
      <q-btn flat class="profile-menu__item profile-menu__item--link" to="profile/disclaimer" label="Disclaimer">
        <q-icon name="sym_arrow_forward_ios" class="item__icon" />
      </q-btn>
      <q-btn class="profile-menu__item profile-menu__item--button q-mt-md" color="primary" icon="sym_r_logout"
        label="Logout" @click="logout"></q-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo {
    width: 120px;
    height: auto;
    display: block;
  }
}

.membership-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  // padding: 16px;
  // background-color: $grey-1;

  &__icon {
    height: 52px;
    width: auto;
    padding: 4px;

    .medal-icon {
      height: 40px;
      width: auto;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .title {
      margin: 0;
      font-size: 1em;
      font-weight: 600;
    }

    .subtitle {
      margin: 0;
      font-size: 0.8em;
      color: $grey-7;
    }
  }
}

.profile-menu {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__item {
    text-transform: none;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: $grey-9;

    &--toggle {
      justify-content: space-between;
      padding: 4px 16px;
    }

    &--link {
      justify-content: flex-start;
      align-items: flex-start;

      .item__icon {
        font-size: 16px;
        color: $grey-6;
      }

    }

    &--button {
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

  }
}
</style>
