<template>
  <nav class="nav">
    <router-link class="nav__item" to="/">Главная</router-link>
    <router-link class="nav__item" to="/projects">Мои проекты</router-link>
    <a class="nav__item" target="_blank" href="https://github.com/nikitoda70">Github</a>
    <a class="nav__item" target="_blank" href="https://t.me/stfuchump">Telegram</a>
  </nav>
</template>

<style lang="scss">
@import "@/assets/styles/_";

.nav {
  padding: 15px 100px;
  display: flex;
  justify-content: flex-end;
  background-color: $black;

  &__item {
    margin-right: 15px;
    text-transform: uppercase;
    color: $white;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>