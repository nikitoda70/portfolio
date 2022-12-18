<template>
  <header
    class="header"
    :class="{ loading: this.loading }"
  >
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
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
      this.loading = false;
    }, 0);
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_";

.header {
  background-color: $black;
  color: $white;
  padding: 40px 0;
  display: flex;
  height: 108px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  transition: 1.5s height ease-in-out 1.5s;

  &.loading {
    height: 100vh;

    .header__logo {
      transform: scale(4);
    }
  }

  &__logo {
    position: relative;
    width: 100%;
    text-align: center;
    transition: 1.5s transform ease-in-out 1.5s, .5s opacity ease-in-out .5s;
    opacity: 0;

    &.loaded {
      opacity: 1;

      &::after {
        width: 100%;
      }
    }

    &-name {
      z-index: 2;
      position: relative;
      background-color: $black;
      padding: 2px;
      color: $white;
      font-size: 20px;
      text-decoration: none;
    }

    &::after {
      position: absolute;
      width: 0;
      height: 1px;
      content: "";
      background-color: $white;
      bottom: 50%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      transition: 1.25s width ease-in-out 3s;
    }
  }
}
</style>