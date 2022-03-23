<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button style="margin: 15px 0" @click="showDialog"
      >Создать пост</my-button
    >
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list v-if="!isPostLoading" :posts="posts" @removePost="removePost" />
    <div v-else><post-loading /></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PostLoading from "@/components/PostLoading.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
    PostLoading,
  },
  data() {
    return {
      posts: [],
      dialogVisible: null,
      isPostLoading: false,
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
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          this.isPostLoading = false;
        }, 2000);
      } catch (error) {
        alert("error api");
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
