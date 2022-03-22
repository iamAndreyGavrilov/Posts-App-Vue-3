<template>
  <div class="app">
    <form @submit.prevent>
      <h2>Создание поста</h2>
      <input v-model="title" class="input" type="text" placeholder="Название" />
      <input v-model="body" class="input" type="text" placeholder="Описание" />
      <button class="btn" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts" :key="post.id">
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      body: "",
      posts: [
        { id: 1, title: "Пост про котиков 1", body: "Они очень миленькие" },
        { id: 2, title: "Пост про котиков 2", body: "Они очень миленькие" },
        { id: 3, title: "Пост про котиков 3", body: "Они очень миленькие" },
      ],
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f2f3;
}
.app {
  padding: 20px;
}
.post {
  padding: 15px;
  border: 2px solid #64766a;
  margin-top: 15px;
}
.input {
  width: 100%;
  border: 1px solid #64766a;
  padding: 10px 15px;
  margin-top: 15px;
}
form {
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  /* background: none; */
  color: #64766a;
  border: 1px solid #64766a;
  cursor: pointer;
}
</style>
