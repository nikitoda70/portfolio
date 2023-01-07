export default {
  state: {
    projects: [
      { id: 1, name: 'Красноярский Экономический Форум 2022', date: '2021-12', img: require("@/assets/img/projects/1/og.jpg"), gallery: [ require("@/assets/img/projects/1/1.jpg"), require("@/assets/img/projects/1/2.jpg"), require("@/assets/img/projects/1/3.jpg"), require("@/assets/img/projects/1/4.jpg") ] },
      { id: 2, name: 'Smartland', date: '2022-01', img: require("@/assets/img/projects/2/og.jpg"), gallery: [ require("@/assets/img/projects/2/1.jpg"), require("@/assets/img/projects/2/2.jpg"), require("@/assets/img/projects/2/3.jpg"), require("@/assets/img/projects/2/4.jpg"), require("@/assets/img/projects/2/5.jpg") ] },
      { id: 3, name: 'Avialook', date: '2022-02', img: require("@/assets/img/projects/3/og.jpg"), link: "https://avialook.aero/", clearLink: "avialook.aero", gallery: [ require("@/assets/img/projects/3/1.jpg"), require("@/assets/img/projects/3/2.jpg"), require("@/assets/img/projects/3/3.jpg"), require("@/assets/img/projects/3/4.jpg") ] },
      { id: 4, name: 'Watwell', date: '2022-03', img: require("@/assets/img/projects/4/og.jpg"), link: "https://watwell.ru/", clearLink: "watwell.ru", gallery: [ require("@/assets/img/projects/4/1.jpg"), require("@/assets/img/projects/4/2.jpg"), require("@/assets/img/projects/4/3.jpg"), require("@/assets/img/projects/4/4.jpg") ] },
      { id: 5, name: 'JustDeco', date: '2022-05', img: require("@/assets/img/projects/5/og.jpg"), gallery: [ require("@/assets/img/projects/5/1.jpg"), require("@/assets/img/projects/5/2.jpg"), require("@/assets/img/projects/5/3.jpg"), require("@/assets/img/projects/5/4.jpg"), require("@/assets/img/projects/5/5.jpg"), require("@/assets/img/projects/5/6.jpg"), require("@/assets/img/projects/5/7.jpg"), require("@/assets/img/projects/5/8.jpg"), require("@/assets/img/projects/5/9.jpg"), require("@/assets/img/projects/5/10.jpg") ] },
      { id: 6, name: 'Красноярский Центр Занятости Населения', date: '2022-08', img: require("@/assets/img/projects/6/og.jpg"), link: "https://krasczn.ru/", clearLink: "krasczn.ru", gallery: [ require("@/assets/img/projects/6/1.jpg"), require("@/assets/img/projects/6/2.jpg"), require("@/assets/img/projects/6/3.jpg"), require("@/assets/img/projects/6/4.jpg"), require("@/assets/img/projects/6/5.jpg") ] },
      { id: 7, name: 'Ориентир-М', date: '2022-09', img: require("@/assets/img/projects/7/og.jpg"), gallery: [ require("@/assets/img/projects/7/1.jpg"), require("@/assets/img/projects/7/2.jpg"), require("@/assets/img/projects/7/3.jpg"), require("@/assets/img/projects/7/4.jpg"), require("@/assets/img/projects/7/5.jpg") ] },
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
        return [...state.projects].sort((p1, p2) =>
          p1.name?.localeCompare(p2.name)
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