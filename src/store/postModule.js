import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    selectedSort: "",
    searchQuery: "",
    page: 1,
    totalPages: 0,

    limit: 10,
    sortOptions: [
      { value: "title", name: "По названию" },
      { value: "body", name: "По содержанию" },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    searchAndSortPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsPostLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setIsPostLoading", true);
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: state.page,
                _limit: state.limit,
              },
            }
          );
          commit(
            "setTotalPages",
            Math.ceil(response.headers["x-total-count"] / state.limit)
          );
          commit("setPosts", response.data);
          commit("setIsPostLoading", false);
        }, 1000);
      } catch (error) {
        alert("error api");
      }
    },
  },
  namespaced: true,
};
