<template>
  <main>
    <div class="project">
      <div class="container">
        <div v-if="project">
          <h2 class="block-title">{{ $t(`projects.${project.id}.name`) }}</h2>
          <div class="project__wrapper">
            <div class="project__slider" ref="slider">
              <Splide :options="options" @splide:destroy="onDestroy">
                <SplideSlide v-for="img in project.gallery" :key="img">
                  <div class="project__slider-wrapper">
                    <img :src="img" :alt="$t(`projects.${project.id}.name`)" class="project__slider-img">
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div class="project__block">
              <span class="project__title"
                >{{ $t(`projects.role`) }}&nbsp;</span
              >
              {{ $t(`projects.${project.id}.role`) }}
            </div>
            <div class="project__block">
              <span class="project__title"
                >{{ $t(`projects.about`) }}&nbsp;</span
              >
              {{ $t(`projects.${project.id}.about`) }}
            </div>
            <div class="project__block" v-if="project.link">
              <span class="project__title"
                >{{ $t(`projects.link`) }}&nbsp;</span
              >
              <a :href="project.link">{{ project.clearLink }}</a>
            </div>
            <span v-else></span>
            <div class="project__block">
              <span class="project__title"
                >{{ $t(`projects.date`) }}&nbsp;</span
              >
              {{ $t(`projects.${project.id}.dateString`) }}
            </div>
          </div>
        </div>
        <h2 class="block-title" v-else>{{ $t(`projects.error`) }}</h2>
      </div>
    </div>
    <ContactsComponent />
  </main>
</template>

<script>
import ContactsComponent from "@/components/ContactsComponent";

export default {
  components: { ContactsComponent },
  computed: {
    project() {
      return this.$store.getters.projectById(+this.$route.params.id);
    },
  },
  data() {
    return {
      options: {
        type: "loop",
        arrows: false,
        drag: true,
        autoplay: true,
        interval: 5000,
        classes: {
          pagination: "splide__pagination project__pagination",
          page: "splide__pagination__page project__pagination-item",
        },
      },
    };
  },
  methods: {
    onDestroy() {
      this.$refs.slider.classList.add('destroyed')
    },
  },
};
</script>