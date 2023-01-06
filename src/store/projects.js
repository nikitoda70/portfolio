export default {
  state: {
    projects: [
      { id: 1, name: 'Красноярский Экономический Форум 2022', date: '2021-12', img: require("@/assets/img/projects/1/og.jpg") },
      { id: 2, name: 'Smartland', date: '2022-01', img: require("@/assets/img/projects/2/og.jpg") },
      { id: 3, name: 'Avialook', date: '2022-02', img: require("@/assets/img/projects/3/og.jpg") },
      { id: 4, name: 'Watwell', date: '2022-03', img: require("@/assets/img/projects/4/og.jpg") },
      { id: 5, name: 'JustDeco', date: '2022-05', img: require("@/assets/img/projects/5/og.jpg") },
      { id: 6, name: 'Красноярский Центр Занятости Населения', date: '2022-08', img: require("@/assets/img/projects/6/og.jpg") },
      { id: 7, name: 'Ориентир-М', date: '2022-09', img: require("@/assets/img/projects/7/og.jpg") },
    ],
    searchQuery: '',
    selectedSort: ''
  },
  getters: {
    projectById: state => id => state.projects.find(p => p.id === id),
    sortedProjects(state) {
      if (state.selectedSort === '') {
        return state.projects
      } else if (state.selectedSort === 'name') {
        return [...state.projects].sort((post1, post2) =>
          post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
        )
      } else if (state.selectedSort === 'oldest') {
        return [...state.projects].sort((p1, p2) => (new Date(p1.date)) - (new Date(p2.date)))
      } else if (state.selectedSort === 'newest') {
        return [...state.projects].sort((p1, p2) => (new Date(p1.date)) - (new Date(p2.date))).reverse()
      }
    },
    sortedAndSearchedProjects(state, getters) {
      return getters.sortedProjects.filter((project) =>
        project.name.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    }
  }
}