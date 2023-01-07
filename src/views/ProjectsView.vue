<template>
  <main>
    <div class="projects">
      <div class="container">
        <h2 class="block-title">
          {{ $t("titles.projects") }}
        </h2>
        <div class="projects__control">
          <div class="projects__search">
            <input
              type="text"
              :placeholder="$t(`placeholders.projects`)"
              class="custom-input"
              :value="searchQuery"
              @input="setSearchQuery($event.target.value)"
            />
          </div>
          <div class="projects__filter">
            <select class="custom-select" :value="selectedSort" @change="setSelectedSort($event.target.value)">
              <option selected disabled value="">{{ $t(`placeholders.filter`) }}</option>
              <option value="name">{{ $t(`projectsSelect.name`) }}</option>
              <option value="newest">{{ $t(`projectsSelect.newest`) }}</option>
              <option value="oldest">{{ $t(`projectsSelect.oldest`) }}</option>
            </select>
          </div>
        </div>
        <TransitionGroup class="projects__wrapper" name="projects" tag="div">
          <div
            class="projects__item"
            v-for="project in sortedAndSearchedProjects"
            :key="project.id"
            @click="$router.push(`/projects/${project.id}`)"
          >
            <div class="projects__img-wrapper">
              <img
                :src="project.img"
                :alt="$t(`projects.${project.id}.name`)"
                class="projects__img"
              />
            </div>
            <div class="projects__inner">
              <div class="projects__name">
                {{ $t(`projects.${project.id}.name`) }}
              </div>
              <div class="projects__date">
                {{ $t(`projects.${project.id}.dateString`) }}
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
    <ContactsComponent />
  </main>
</template>

<script>
import ContactsComponent from "@/components/ContactsComponent";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    ContactsComponent,
  },
  computed: {
    ...mapState({
      searchQuery: (state) => state.projects.searchQuery,
      selectedSort: (state) => state.projects.selectedSort
    }),
    ...mapGetters(['sortedAndSearchedProjects'])
  },
  methods: {
    ...mapMutations(['setSearchQuery', 'setSelectedSort'])
  },
  unmounted() {
    this.setSearchQuery('')
  }
};
</script>