<template>
  <HeaderComponent />
  <NavComponent />
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
    FooterComponent
  },
  data() {
    return {
      prevHeight: 0,
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
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fade-enter-active {
  transition: background-color .5s ease-in-out .25s, height .5s ease-in-out;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  background-color: $black;
}
</style>
