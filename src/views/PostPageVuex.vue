<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Поиск по названию"
    />
    <div class="app__btns">
      <my-button style="flex: 1; margin-right: 5px" @click="showDialog"
        >Создать пост</my-button
      >
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" @close="closePost" />
    </my-dialog>

    <post-list
      v-if="!isPostLoading"
      :posts="searchAndSortPosts"
      @removePost="removePost"
    />
    <div v-else><post-loading /></div>
    <page-list :page="page" @changePage="changePage" :totalPages="totalPages" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import PostLoading from "@/components/PostLoading.vue";
import PageList from "@/components/PageList.vue";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    PostForm,
    PostList,
    PostLoading,
    PageList,
  },
  data() {
    return {
      dialogVisible: null,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
    }),

    createPost(post) {
      this.posts.unshift(post);
      this.dialogVisible = false;
    },
    closePost() {
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    page() {
      this.fetchPosts();
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      totalPages: (state) => state.post.totalPages,
      limit: (state) => state.post.limit,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchAndSortPosts: "post/searchAndSortPosts",
    }),
  },
};
</script>

<style scoped>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
