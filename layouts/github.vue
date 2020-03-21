<template>
  <default-layout>
    <nuxt />
  </default-layout>
</template>

<script>
export default {
  middleware: ['github/login-handle', 'github/auth'],
  data () {
    return {
    };
  }
};
</script>
