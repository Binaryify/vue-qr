<template>
  <div v-if="bindElement">
    <img v-bind="{id:uuid}">
  </div>
</template>

<script src="./vue-qr.js">
</script>