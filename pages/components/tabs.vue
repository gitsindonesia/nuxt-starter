<script setup lang="ts">
const items = ref([
  {
    text: 'Tab 1',
  },
  {
    text: 'Tab 2',
  },
  {
    text: 'Tab 3',
  },
])

const selected = ref(0)
</script>

<template>
  <AppPageTitle title="Tabs" subtitle="Tabs Component" />

  <div class="space-y-5">
    <AppCard>
      <AppCardTitle>
        Tabs
      </AppCardTitle>

      <VTabs v-model="selected" :items="items" />

      <TransitionGroup
        name="tabs"
      >
        <template v-for="(item, idx) in items" :key="item.text">
          <div v-if="(idx === selected)">
            {{ item.text }}
          </div>
        </template>
      </TransitionGroup>

      <pre class="mt-5">Selected: {{ selected }}</pre>
    </AppCard>
  </div>
</template>

<style scoped>
.tabs-move, /* apply transition to moving elements */
.tabs-enter-active,
.tabs-leave-active {
  transition: all 0.5s ease;
}

.tabs-enter-from,
.tabs-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.tabs-leave-active {
  position: absolute;
  display: none;
}
</style>
