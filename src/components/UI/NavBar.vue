<template>
  <div class="navbar">
    <div>Навигация сайта</div>
    <div class="navbar__btns">
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
  padding: 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
