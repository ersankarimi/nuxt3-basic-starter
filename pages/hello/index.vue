<script lang="ts" setup>
import Example from "./partials/Example.vue";

useHead({
  title: "Hello World!",
  meta: [
    {
      name: "description",
      content: "This is a hello world page",
    },
  ],
});
</script>

<template>
  <div>
    <h1>
      Hello World!
    </h1>
    <Example />
    <NuxtLink to="/">
      Go back home
    </NuxtLink>
  </div>
</template>
