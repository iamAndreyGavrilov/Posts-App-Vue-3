<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog">Создать пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="posts" @removePost="removePost" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Пост про котиков 1", body: "Они очень миленькие" },
        { id: 2, title: "Пост про котиков 2", body: "Они очень миленькие" },
        { id: 3, title: "Пост про котиков 3", body: "Они очень миленькие" },
      ],
      dialogVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
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
</style>
