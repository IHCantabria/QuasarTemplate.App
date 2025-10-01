<script setup>


</script>
<template>
  <div class="about-page full-width q-py-md q-px-lg q-gutter-md">
    <q-card-section class="app-info q-ma-none q-pa-none">
      <!-- App information -->
      <h6 class="text-h6 text-accent text-weight-medium q-mt-sm q-mb-xs">App Name</h6>
      <!-- TODO: Add App version -->
      <p class="text-subtitle2 text-accent q-mb-md">v {{ $q.version }}</p>
    </q-card-section>

    <!-- App description -->
    <q-card-section class="app-description q-ma-none q-pa-none text-body1 text-justify">
      <p class="text-weight-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <!-- Ordered list -->
      <ol class="text-weight-regular q-pl-md">
        <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </li>
        <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt.
        </li>
        <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
          veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
          consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</li>
      </ol>
    </q-card-section>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}
</style>
