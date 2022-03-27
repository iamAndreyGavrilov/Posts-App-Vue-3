<template>
  <div class="page__wrapper">
    <div
      class="page"
      :class="{
        'current-page': page === pageNumber,
      }"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid #64766a;
  color: #64766a;
  padding: 10px;
  cursor: pointer;
}
.current-page {
  border: 3px solid #64766a;
}
</style>
