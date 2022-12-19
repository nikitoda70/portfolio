<template>
  <footer class="footer">
    <div class="container">
      <router-link to="/" class="footer__logo">&lt;Lobanov Nikita/&gt;</router-link>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles/_";

.footer {
  padding: 20px 0;
  background-color: $black;
  color: $white;

  &__logo {
    color: $white;
    text-decoration: none;
    font-size: 20px;
  }
}
</style>