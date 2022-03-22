<template>
  <form @submit.prevent>
    <h2>Создание поста</h2>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название"
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Создать</my-button
    >
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
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid #64766a;
  padding: 10px 15px;
  margin-top: 15px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
