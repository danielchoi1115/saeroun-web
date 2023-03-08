<template>
  <p class="mb-4" :class="centered ? 'text-center' : ''">
    <slot></slot>
  </p>
</template>

<script lang="ts">
export default {
  props: ['centered']
}
</script>
