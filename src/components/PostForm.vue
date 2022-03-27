<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <my-input v-model="post.title" type="text" placeholder="Название" />
    <my-input v-model="post.body" type="text" placeholder="Описание" />
    <div class="form__btns">
      <my-button @click="createPost">Создать</my-button>
      <my-button @click="closePost">Закрыть</my-button>
    </div>
  </form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      post: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
    closePost() {
      this.$emit("close", this.post);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.form__btns {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}
</style>
