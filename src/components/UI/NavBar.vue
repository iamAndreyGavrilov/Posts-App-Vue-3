<template>
  <div class="navbar">
    <div>
      <my-button @click="$router.push('/')">Главная страница</my-button>
      <my-button
        @click="$router.push('/posts')"
        style="margin: 0px 20px 0px 20px"
        >Страница с постами</my-button
      >
      <my-button @click="$router.push('/about')">О сайте</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  box-shadow: inset 0px -1px 0px 0px #64766f;
}
</style>
