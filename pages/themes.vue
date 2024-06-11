<script setup lang="ts">
const themes = [
  'morpheme',
  'purplish',
  'greenish',
  'pink',
  'blue',
]

const colors = [
  'default',
  'primary',
  'secondary',
  'info',
  'warning',
  'error',
]

const currentTheme = ref('morpheme')

onMounted(() => {
  currentTheme.value = document.body.getAttribute('data-theme') || 'morpheme'
})

function changeTheme(theme: string) {
  currentTheme.value = theme
  document.body.setAttribute('data-theme', theme)
}
</script>

<template>
  <VAppBar>
    <VContainer centered>
      <VButton to="/" color="primary" prefix-icon="ph:arrow-left" text>
        Back to Home
      </VButton>
    </VContainer>
  </VAppBar>
  <div class="container mx-auto p-6 space-y-6">
    <div>
      <h1 class="text-2xl font-bold">
        Theming
      </h1>
      <p class="text-gray-500 mb-4">
        This page is for demonstration only. You can customize the theme by changing the values in <code>/assets/css/app.css</code>
      </p>
    </div>

    <div>
      <h2 class="mb-2 font-semibold">
        Choose theme:
      </h2>
      <div class="flex flex-wrap gap-2 items-center">
        <VButton
          v-for="theme in themes"
          :key="theme"
          :color="theme === currentTheme ? 'primary' : 'default'"
          @click="changeTheme(theme)"
        >
          {{ theme }}
        </VButton>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <VCard bordered color="primary" title="Alert" body-class="space-y-6">
        <div class="space-y-2">
          <VAlert
            v-for="color in colors"
            :key="color"
            :color="color"
            solid
          >
            This is an alert
          </VAlert>
        </div>
      </VCard>

      <VCard bordered color="primary" title="Buttons" body-class="space-y-6">
        <div class="space-y-2 space-x-2">
          <VButton
            v-for="color in colors"
            :key="color"
            :color="color"
          >
            Button
          </VButton>
        </div>
        <div class="space-y-2 space-x-2">
          <VButton
            v-for="color in colors"
            :key="color"
            :color="color"
            outlined
          >
            Button
          </VButton>
        </div>
        <div class="space-y-2 space-x-2">
          <VButton
            v-for="color in colors"
            :key="color"
            :color="color"
            text
          >
            Button
          </VButton>
        </div>
      </VCard>

      <VCard bordered color="primary" title="Progress Bar" body-class="space-y-6">
        <VProgressBar
          v-for="color in colors"
          :key="color"
          :color="color"
          :model-value="70"
        />
      </VCard>

      <VCard bordered color="primary" title="Forms" body-class="space-y-6">
        <VInput label="Name" placeholder="Enter your name" />
        <VInput label="Email" placeholder="Enter your email" />
        <VInput label="Password" placeholder="Enter your password" type="password" />
        <div class="space-y-2 space-x-2">
          <VButton color="primary">
            Submit
          </VButton>
          <VButton>
            Reset
          </VButton>
        </div>
      </VCard>

      <VCard bordered color="primary" title="Pagination" body-class="space-y-6">
        <VPagination
          :model-value="1"
          :total-items="100"
          :items-per-page="10"
        />
      </VCard>

      <VCard bordered color="primary" title="Badge" body-class="space-y-6">
        <div class="space-y-2 space-x-2">
          <VBadge
            v-for="color in colors"
            :key="color"
            :color="color"
          >
            Badge
          </VBadge>
          <VBadge
            v-for="color in colors"
            :key="color"
            :color="color"
            outlined
          >
            Badge
          </VBadge>
        </div>
      </VCard>

      <VCard bordered color="primary" title="Tabs" body-class="space-y-6">
        <VTabs
          :items="[{
            text: 'Tab 1',
          }, {
            text: 'Tab 2',
          }, {
            text: 'Tab 3',
          }]"
        />
      </VCard>
      <VCard bordered color="primary" title="Switch" body-class="space-y-6">
        <div class="flex">
          <VSwitch
            color="primary"
            :model-value="true"
          />
        </div>
      </VCard>
    </div>
  </div>
</template>
