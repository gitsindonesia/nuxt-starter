<script setup lang="ts">
//
</script>

<template>
  <AppPageTitle title="Alert" subtitle="Alert Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Default
      </AppCardTitle>

      <div class="space-y-2">
        <VAlert> Lorem ipsum dolor sit amet consectetur adipisicing elit. </VAlert>
        <VAlert color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert color="dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Solid
      </AppCardTitle>

      <div class="space-y-2">
        <VAlert solid>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert solid color="dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
      </div>
    </AppCard>
  </div>
</template>

