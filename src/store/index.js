import { createStore } from 'vuex'
import skills from './skills'
import projects from './projects'

export default createStore({
  modules: {
    skills: skills,
    projects: projects
  }
})
