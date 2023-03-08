<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl" :class="grid ? 'md:grid md:grid-cols-2 md:py-16 md:px-6' : ''">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: ['grid']
}
</script>
