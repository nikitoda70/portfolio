<template>
  <HeaderComponent @loaded="changeLoaded" />
  <nav class="nav">
    <NavComponent />
  </nav>
  <div class="loading-wrapper" :class="{ loaded: loaded }">
    <router-view v-slot="{ Component }">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <Component :is="Component" />
      </transition>
    </router-view>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import NavComponent from "@/components/NavComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent,
  },
  data() {
    return {
      prevHeight: 0,
      loaded: false,
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    changeLoaded(status) {
      this.loaded = status;
    },
  },
};
</script>
