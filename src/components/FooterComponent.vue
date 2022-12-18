<template>
  <footer class="footer">
    <router-link to="/" class="footer__logo">&lt;Lobanov Nikita/&gt;</router-link>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles/_";

.footer {
  padding: 20px 60px;
  background-color: $black;
  color: $white;

  &__logo {
    color: $white;
    text-decoration: none;
    font-size: 20px;
  }
}
</style>