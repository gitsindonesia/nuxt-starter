<script setup lang="ts">
const count = ref(0);

const { loggedIn, logout } = useAuth();
</script>

<template>
  <div class="space-y-6 text-center">
    <h1 class="text-4xl font-semibold">Hello World</h1>
    <p class="text-gray-800">You clicked the button {{ count }} times</p>
    <v-btn color="primary" @click="count++">Click Me</v-btn>
    <div>
      Go to:
      <template v-if="loggedIn">
        <v-btn color="primary" to="/dashboard" text> Dashboard </v-btn>
        <v-btn color="primary" to="/dashboard" text @click="logout">
          Logout
        </v-btn>
      </template>
      <v-btn v-else color="primary" to="/auth/login" text> Login </v-btn>
    </div>
  </div>
</template>
