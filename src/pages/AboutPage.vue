<script setup>


</script>
<template>
  <div class="about-page full-width q-py-md q-px-lg q-gutter-md">
    <q-card-section class="app-info q-ma-none q-pa-none">
      <!-- App information -->
      <h6 class="text-h6 text-accent text-weight-medium q-mt-sm q-mb-xs">IH Tsunami System</h6>
      <!-- TODO: Add App version -->
      <p class="text-subtitle2 text-accent q-mb-md">v {{ $q.version }}</p>
    </q-card-section>

    <!-- App description -->
    <q-card-section class="app-description q-ma-none q-pa-none text-body1 text-justify">
      <p class="text-weight-bold">
        IH-Tsunamis System (IH-Tsusy) is an online operational system that supports tsunami analysis through two main
        components:
      </p>
      <!-- Ordered list -->
      <ol class="text-weight-regular q-pl-md">
        <li>Tsunami Propagation Simulation [Restricted Access]. Following an earthquake happening anywhere in the world,
          seismic data from the USGS is gathered and processed. Afterwards, an artificial neural network (ANN),
          specifically trained to assess the tsunamigenic potential of seismic events, analyses the seismic source
          parameters. If the model classifies the event as potentially tsunamigenic, a numerical simulation is then
          executed using the GPU-based Tsunami-HySEA code. The system estimates tsunami travel times and wave amplitude
          and displays the results in a geospatial viewer. IH-Tsusy produces results approximately 10 minutes after
          receiving the focal mechanism data.</li>
        <li>Historical Simulation Database [Open Access]. The system features a continuously updated global database of
          earthquake assessments and tsunami numerical simulations, based on seismic data from the USGS and tsunami
          event data from NOAA. This database, which includes simulation results for tsunami wave heights and tsunami
          arrival times, covers events from 1976 up to approximately six hours before the time of access to the tool.
        </li>
        <li> The continuously updated global database is openly accessible to all users, offering tsunami simulation
          data results for past events within the covered time frame.</li>
      </ol>
    </q-card-section>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;

  .app-description {

    ol {

      li {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
