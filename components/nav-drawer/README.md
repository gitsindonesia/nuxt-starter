# NavDrawer

Navigation Drawer Component.

## Usage

Import `NavDrawer` from `@wartek-id/belajar-id-components`:

```vue
<script setup lang="ts">
import { NavDrawer } from '@wartek-id/belajar-id-components';
</script>
```

### Variants

Available variants: `default`, `ultimate`, `primary`, `secondary`, `quiet`, `destructive`.

```vue
<script setup lang="ts">
import { NavDrawer } from '@wartek-id/belajar-id-components';
</script>

<template>
  <NavDrawer variant="default">
    <p>content</p>
  </NavDrawer>
  <NavDrawer variant="ultimate">
    <p>content</p>
  </NavDrawer>
  <NavDrawer variant="primary">
    <p>content</p>
  </NavDrawer>
  <NavDrawer variant="secondary">
    <p>content</p>
  </NavDrawer>
  <NavDrawer variant="quiet">
    <p>content</p>
  </NavDrawer>
  <NavDrawer variant="destructive">
    <p>content</p>
  </NavDrawer>
</template>
```

### Shadow

```vue
<template>
  <NavDrawer shadow>
    <p>content</p>
  </NavDrawer>
</template>
```

### Bordered

```vue
<template>
  <NavDrawer bordered>
    <p>content</p>
  </NavDrawer>
</template>
```

### Dense

```vue
<template>
  <NavDrawer dense>
    <p>content</p>
  </NavDrawer>
</template>
```

### Sticky

```vue
<template>
  <NavDrawer sticky>
    <p>content</p>
  </NavDrawer>
</template>
```

### Fixed

```vue
<template>
  <NavDrawer fixed>
    <p>content</p>
  </NavDrawer>
</template>
```

### Right

```vue
<template>
  <NavDrawer right>
    <p>content</p>
  </NavDrawer>
</template>
```

### Overlay

```vue
<template>
  <NavDrawer overlay>
    <p>content</p>
  </NavDrawer>
</template>
```

### Transition

```vue
<template>
  <NavDrawer transition="slide-in-left" overlay-transition="fade">
    <p>content</p>
  </NavDrawer>
</template>
```

### Toggle (v-model)

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { NavDrawer } from '@wartek-id/belajar-id-components';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer v-model="isOpen" variant="ultimate" shadow="lg">
      <p class="font-semibold">Toggle (v-model)</p>
    </NavDrawer>
    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }}
      </Button>
    </main>
  </div>
</template>
```
