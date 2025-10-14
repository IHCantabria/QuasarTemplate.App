<script setup>
//
</script>

<template>
  <div class="q-pa-md">
    <div class="flex justify-between items-top">
      <q-item-section>
        <q-item-label class="text-h6 text-bold text-grey-9"> Item {{ $route.params.id }} </q-item-label>
        <q-item-label lines> 2025-06-10 10:00 AM </q-item-label>
      </q-item-section>
      <q-item-section side top>
        <q-badge color="red-2" label="Status 1" class="q-px-sm q-py-xs text-red" />
      </q-item-section>
    </div>
    <q-item-section>
      <div class="custom-card custom-card--horizontal bg-orange text-white">
        <p class="text-h7 text-weight-medium q-mb-xs"> Item Data </p>
        <div class="custom-card__content">
          <div class="item">
            <p class="label">Value</p>
            <p class="value">0.0</p>
          </div>

          <div class="separator"></div>

          <div class="item">
            <p class="label">Value</p>
            <p class="value">0.0</p>
          </div>
        </div>
      </div>
    </q-item-section>
    <q-item-section>
      <div class="custom-card custom-card--vertical text-grey-9">
        <p class="text-h7 text-weight-bold q-mb-xs"> Location Data </p>
        <div class="custom-card__content">
          <div class="item">
            <p class="label">Latitude:</p>
            <p class="value">0.0000</p>
          </div>
          <div class="item">
            <p class="label">Longitude:</p>
            <p class="value">0.0000</p>
          </div>
          <div class="item">
            <p class="label">Location:</p>
            <p class="value">Loren ipsun dolor sit ament</p>
          </div>
        </div>
      </div>
    </q-item-section>
  </div>
</template>
<style lang="scss" scoped>
.custom-card {
  border-radius: 8px;
  padding: 1rem;
  margin-top: 0.75rem;

  &--vertical {
    flex-direction: column;
    padding: 0.75rem 0;

    .custom-card__content {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .item {
        display: flex;
        justify-content: row;
        gap: 0.25rem;

        .label {
          font-weight: 400;
        }

        .value {
          font-weight: 600;
        }
      }
    }
  }

  &--horizontal {
    flex-direction: row;

    .custom-card__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.25rem;

        .label {
          font-size: 14px;
        }

        .value {
          font-size: 24px;
          font-weight: bold;
        }
      }

      .separator {
        width: 1px;
        background-color: rgba(255, 254, 254, 0.5);
        margin: 0 1rem;
      }
    }
  }
}
</style>
