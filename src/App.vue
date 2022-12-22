<template>
  <HeaderComponent @loaded="changeLoaded" />
  <nav class="nav">
    <div class="switch">
      <button class="switch__btn active" @click="langRu">RU</button>
      <button class="switch__btn" @click="langEn">EN</button>
    </div>
    <NavComponent :t="$t" />
  </nav>
  <div class="loading-wrapper" :class="{ loaded: loaded }">
    <router-view v-slot="{ Component }" :t="$t">
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
  <FooterComponent :t="$t" />
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n({ useScope: "global" });

const langRu = () => {
  locale.value = "ru";
  localStorage.setItem("lang", locale.value);
};

const langEn = () => {
  locale.value = "en";
  localStorage.setItem("lang", locale.value);
};
</script>

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
