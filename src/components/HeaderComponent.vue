<template>
  <header class="header" :class="{ loading: !this.loaded }">
    <div class="header__logo" :class="{ loaded: this.loaded }">
      <router-link to="/" class="header__logo-name"
        >&lt;Lobanov Nikita/&gt;</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 0);
  },
  methods: {
    emitLoaded() {
      this.$emit("loaded", this.loaded);
    },
  },
  watch: {
    loaded(value) {
      if (value === true) {
        this.emitLoaded()
      }
    }
  }
};
</script>