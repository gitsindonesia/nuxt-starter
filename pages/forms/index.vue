<script setup lang="ts">
import { object } from 'yup'
import { useForm } from 'vee-validate'

const schema = object({})

const { values } = useForm({
  validationSchema: schema,
})

// use any for now until fixed in next version
const items = ref<any[]>([
  {
    text: 'Choose',
    value: '',
    disabled: true,
  },
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
])
</script>

<template>
  <AppPageTitle title="Forms" subtitle="All Fields" />

  <AppCard>
    <AppCardTitle>
      All Fields
    </AppCardTitle>

    <VInput wrapper-class="mb-4" name="text" label="Text" placeholder="Text" />
    <VInput
      wrapper-class="mb-4"
      type="email"
      name="email"
      label="Email"
      placeholder="Email"
    />
    <VInput
      wrapper-class="mb-4"
      type="password"
      name="password"
      label="Password"
      placeholder="Password"
    />
    <VInput
      wrapper-class="mb-4"
      type="number"
      name="number"
      label="Number"
      placeholder="Number"
    />
    <VInput
      wrapper-class="mb-4"
      type="tel"
      name="tel"
      label="Tel"
      placeholder="Tel"
    />
    <VInput
      wrapper-class="mb-4"
      type="url"
      name="url"
      label="Url"
      placeholder="Url"
    />
    <VInput
      wrapper-class="mb-4"
      type="search"
      name="search"
      label="Search"
      placeholder="Search"
    />
    <VInput
      wrapper-class="mb-4"
      type="color"
      name="color"
      label="Color"
      placeholder="Color"
    />
    <VInput
      wrapper-class="mb-4"
      type="date"
      name="date"
      label="Date"
      placeholder="Date"
    />
    <VInput
      wrapper-class="mb-4"
      type="datetime-local"
      name="datetime-local"
      label="Datetime Local"
      placeholder="Datetime Local"
    />
    <VInput
      wrapper-class="mb-4"
      type="month"
      name="month"
      label="Month"
      placeholder="Month"
    />
    <VInput
      wrapper-class="mb-4"
      type="week"
      name="week"
      label="Week"
      placeholder="Week"
    />
    <VInput
      wrapper-class="mb-4"
      type="time"
      name="time"
      label="Time"
      placeholder="Time"
    />
    <VInput
      wrapper-class="mb-4"
      type="file"
      name="file"
      label="File"
      placeholder="File"
    />
    <VInput
      wrapper-class="mb-4"
      type="range"
      name="range"
      label="Range"
      placeholder="Range"
    />
  </AppCard>

  <AppCard class="mt-5">
    <AppCardTitle>
      Textarea
    </AppCardTitle>

    <VTextarea name="textarea" label="Textarea" placeholder="Textarea" />
  </AppCard>

  <AppCard class="mt-5">
    <AppCardTitle>
      Select
    </AppCardTitle>

    <VFormSelect name="select" label="Select" placeholder="Select" :items="items" />
  </AppCard>

  <AppCard class="mt-5">
    <AppCardTitle>
      Checkbox
    </AppCardTitle>

    <VCheckbox name="checkbox" label="Label" />
  </AppCard>

  <AppCard class="mt-5">
    <AppCardTitle>
      Radio
    </AppCardTitle>

    <VRadio id="label-1" name="radio" value="1" label="Label 1" />
    <VRadio id="label-2" name="radio" value="2" label="Label 2" />
  </AppCard>

  <AppCard class="mt-5">
    <AppCardTitle>
      Values
    </AppCardTitle>

    <pre>{{ values }}</pre>
  </AppCard>
</template>
