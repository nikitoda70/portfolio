<template>
  <main>
    <div class="hero">
      <div class="container">
        <div class="hero__wrapper">
          <h1 class="hero__title" v-html="$t('titles.hero')"></h1>
          <div class="hero__img">
            <img src="@/assets/img/hero.png" alt="Me" />
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <div class="container">
        <h2 class="block-title">{{ $t("titles.skills") }}</h2>
        <div class="skills__wrapper">
          <div
            v-for="(skill, idx) in skills"
            :key="skill.id"
            class="skills__item"
            :class="`skills__item-${idx + 1}`"
            v-scroll-animation
          >
            <img :src="skill.img" :alt="skill.name" />
            <div class="skills__name">{{ skill.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <ContactsComponent />
  </main>
</template>

<script>
import ContactsComponent from "@/components/ContactsComponent";
import { mapState } from "vuex";

export default {
  components: {
    ContactsComponent,
  },
  computed: {
    ...mapState({
      skills: state => state.skills.skills
    }),
  }
};
</script>