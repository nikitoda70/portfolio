<template>
  <div class="nav__header">
    <router-link class="nav-item" to="/">{{ $t("nav.main") }}</router-link>
    <router-link class="nav-item" to="/projects">{{
      $t("nav.projects")
    }}</router-link>
    <a class="nav-item" target="_blank" href="https://github.com/nikitoda70"
      >Github</a
    >
    <a class="nav-item" target="_blank" href="https://t.me/stfuchump"
      >Telegram</a
    >
    <a class="nav-item" href="mailto:nikitoda70@gmail.com"
      >nikitoda70@gmail.com</a
    >
  </div>
  <button class="nav__button">
    <div class="nav__button-top"></div>
    <div class="nav__button-bottom"></div>
  </button>
</template>