<script setup lang="ts">
const isOpen = ref(true)
const alert2 = ref(true)
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

    <AppCard>
      <AppCardTitle>
        Outlined
      </AppCardTitle>

      <div class="space-y-2">
        <VAlert outlined>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert outlined color="dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Bordered
      </AppCardTitle>

      <div class="space-y-2">
        <VAlert bordered>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="error">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
        <VAlert bordered color="dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        v-model
      </AppCardTitle>

      <div class="space-y-2">
        <VBtn @click="isOpen = !isOpen">
          Toggle Alert
        </VBtn>
        <VAlert
          v-model="isOpen"
          color="primary"
          class="mt-4"
          solid
          dismissable
        >
          Alert text
        </VAlert>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Dismissable
      </AppCardTitle>

      <div class="space-y-2">
        <VAlert color="primary" dismissable>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </VAlert>
      </div>
    </AppCard>

    <AppCard>
      <AppCardTitle>
        Custom Transition
      </AppCardTitle>

      <div class="space-y-2">
        <VBtn @click="alert2 = !alert2">
          Toggle Alert
        </VBtn>
        <VAlert
          v-model="alert2"
          color="primary"
          class="mt-4"
          solid
          dismissable
          transition="slide-down"
        >
          Alert text
        </VAlert>
      </div>
    </AppCard>
  </div>
</template>

