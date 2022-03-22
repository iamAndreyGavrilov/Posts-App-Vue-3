<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  color: #64766a;
  border: 2px solid #64766a;
  cursor: pointer;
}
</style>
