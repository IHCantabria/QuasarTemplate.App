<script setup>
import { ref } from 'vue';

const notificationsEnabled = ref(true);

// TODO: implement login and logout logic
const userLoggedIn = ref(false);
const login = () => {
  // Implement login logic here
  userLoggedIn.value = true;
  if (process.env.DEBUGGING) console.log('User logged in');
}
const logout = () => {
  // Implement logout logic here
  userLoggedIn.value = false;
  if (process.env.DEBUGGING) console.log('User logged out');
}

const isOpen = ref(false);

const openDialog = () => {
  isOpen.value = true;
};
const closeDialog = () => {
  isOpen.value = false;
};

</script>
<template>
  <!-- MOBILE ONLY -->
  <div class="mobile-only q-pa-md q-gutter-md">
    <!-- Logo & User Info -->
    <div class="brand  q-my-xl">
      <img src="src/assets/quasar-logo-vertical.svg" alt="Logo" class="logo q-mb-md" />
      <q-card-section class="q-pa-none">
        <p class="text-h6 text-center">John Doe</p>
        <p class="text-subtitle2 text-grey text-center">john.doe@example.com</p>
      </q-card-section>
    </div>

    <!-- Supporters club membership -->
    <div class="membership-container q-mt-md q-mb-lg">
      <div class="membership-container__icon">
        <img src="public/icons/medal-star.svg" alt="Medal Star" class="medal-icon" style="height: 56px; width: auto;" />
      </div>
      <div class="membership-container__text">
        <p class="title">Suporters’ Club Membership</p>
        <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.</p>
      </div>
    </div>

    <!-- Options menu -->
    <div class="profile-menu q-my-md">
      <q-toggle
        class="profile-menu__item profile-menu__item--toggle"
        label="Notifications"
        left-label
        v-model="notificationsEnabled"
      />
      <q-separator />
      <q-btn
        flat
        class="profile-menu__item profile-menu__item--link"
        to="profile/about"
        label="About"
      >
        <q-icon name="sym_arrow_forward_ios" class="item__icon" />
      </q-btn>
      <q-separator />
      <q-btn
        flat
        class="profile-menu__item profile-menu__item--link"
        to="profile/disclaimer"
        label="Disclaimer"
      >
        <q-icon name="sym_arrow_forward_ios" class="item__icon" />
      </q-btn>

      <!-- Login/Logout Button -->
      <q-btn v-if="userLoggedIn" rounded class="profile-menu__item profile-menu__item--button q-mt-md"
        icon="sym_r_logout" label="Log Out" @click="logout"></q-btn>
      <q-btn v-else rounded class="profile-menu__item profile-menu__item--button q-mt-md" icon="sym_r_login"
        label="Log In" @click="openDialog"></q-btn>
    </div>
  </div>

  <!-- DESKTOP ONLY -->
  <div class="desktop-only q-pa-xl" style="max-width: 90vw; margin: auto;">
    <div class="column">
      <q-card class="col card q-pa-lg">
        <!-- Supporters club membership -->
        <div class="membership-container">
          <div class="membership-container__icon">
            <img src="public/icons/medal-star.svg" alt="Medal Star" class="medal-icon q-mr-md"
              style="height: 125px; width: auto;" />
          </div>
          <div class="membership-container__text" style="max-width: 500px;">
            <h4 class="text-h4 text-weight-bold q-mb-sm q-mt-none">Suporters’ Club Membership</h4>
            <p class="text-body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
              ut
              labore et dolore magna aliqua.</p>
          </div>
        </div>

        <!-- Login/Logout Button -->
        <q-btn v-if="userLoggedIn" rounded class="profile-menu__item profile-menu__item--button q-mt-md"
          icon="sym_r_logout" label="Log Out" @click="logout"></q-btn>
        <q-btn v-else rounded class="profile-menu__item profile-menu__item--button q-mt-md" icon="sym_r_login"
          label="Log In" @click="openDialog">
        </q-btn>
        <!-- Login Dialog -->
        <q-dialog v-model="isOpen" persistent>
          <q-card class="q-pa-lg" style="min-width: 300px; max-width: 500px;">
            <q-card-section class="q-pa-none">
              <!-- Logo -->
              <div class="brand q-mb-md">
                <img src="src/assets/quasar-logo-vertical.svg" alt="Logo" class="logo"
                  style="width: 100px; height: auto;" />
              </div>
              <!-- Title -->
              <div class="text-h6 q-my-md text-bold">Welcome!</div>
            </q-card-section>

            <q-card-section class="q-pa-none">
              <q-input filled v-model="username" label="Username" />
              <q-input filled v-model="password" label="Password" type="password" class="q-mt-md" />
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" @click="closeDialog" />
              <q-btn flat label="Login" color="primary" @click="login" />
            </q-card-actions>
          </q-card>
        </q-dialog>

      </q-card>
      <div class="flex row q-gutter-md">
        <!-- COL 1 -->
        <div class="col q-gutter-md">
          <!-- User Information -->
          <q-card class="bg-grey-1 q-mb-md q-pa-lg q-gutter-md">
            <h6 class="text-h6 text-weight-bold q-mb-md q-mt-none">User Information</h6>
            <q-card-section class="flex q-pa-none">
              <div class="q-mr-xl">
                <p class="text-subtitle1 text-grey">Full Name</p>
                <p class="text-subtitle1">john Doe</p>
              </div>
              <div>
                <p class="text-subtitle1 text-grey">Email</p>
                <p class="text-subtitle1">john.doe@example.com</p>
              </div>
            </q-card-section>
          </q-card>
          <!-- Notifications -->
          <q-card class="bg-grey-1 q-mb-md q-pa-lg q-gutter-md">
            <h6 class="text-h6 text-weight-bold q-mb-md q-mt-none">Notifications</h6>
            <q-card-section class="flex q-pa-none">
              <q-toggle class="profile-menu__item profile-menu__item--toggle" label="Enable Notifications" left-label
                v-model="notificationsEnabled" />
            </q-card-section>
          </q-card>

          <!-- Disclaimer -->
          <q-card class="bg-grey-1 q-pa-lg ">
            <h6 class="text-h6 text-weight-bold q-mb-md q-mt-none">Disclaimer</h6>
            <q-card-section class="disclaimer-content q-ma-none q-pa-none text-body1 text-justify">
              <p class="text-weight-medium">
                Disclaimer: This application is provided "as is" without any warranties of any kind, either express or
                implied.
                The developers and distributors of this application shall not be held liable for any damages arising
                from the
                use or inability to use this application, including but not limited to direct, indirect, incidental,
                punitive,
                and consequential damages.
              </p>
              <p class="text-weight-regular">
                By using this application, you acknowledge and agree to the terms of this disclaimer. If you do not
                agree to
                these terms, please do not use this application.
              </p>
            </q-card-section>
            <q-separator />
            <q-card-section class="disclaimer">
              <p class="text-caption text-italic">
                Last updated: June 2024
              </p>
            </q-card-section>
          </q-card>
        </div>
        <!-- COL 2 -->
        <div class="col q-gutter-md">
          <!-- About -->
          <q-card class="bg-grey-1 q-mb-md q-pa-lg q-gutter-md">
            <h6 class="text-h6 text-weight-bold q-mb-md q-mt-none">About</h6>
            <q-card-section class="flex q-pa-none">
              <!-- TODO: pass AboutPage content here dynamically -->
              <p class="text-weight-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua.
              </p>
              <ol class="text-weight-regular q-pl-md">
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam
                  rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo.
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni
                  dolores eos qui ratione voluptatem sequi nesciunt.
                </li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                  quia
                  non
                  numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima
                  veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                  consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</li>
              </ol>
            </q-card-section>
          </q-card>
        </div>
      </div>
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

  &__icon {
    height: auto;
    width: auto;
    padding: 4px;
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
      text-transform: capitalize;
      font-size: 16px;
      letter-spacing: 1px;
      padding: 8px 16px;
      max-height: 40px;

      background: $primary-gradient;
      color: white;
    }
  }
}

.desktop-only {
  .card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: none;
  }

  .membership-container {
    &__icon {
      padding: 0;
    }
  }


}
</style>
