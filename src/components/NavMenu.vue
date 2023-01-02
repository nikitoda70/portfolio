<template>
  <div class="nav-menu" @click="$emit('close', false)" @wheel.prevent @scroll.prevent>
    <div class="nav-menu__content">
      <div class="container">
        <div class="nav-menu__wrapper">
          <router-link class="nav-item" to="/">{{
            $t("nav.main")
          }}</router-link>
          <router-link class="nav-item" to="/projects">{{
            $t("nav.projects")
          }}</router-link>
          <a
            class="nav-item"
            target="_blank"
            href="https://github.com/nikitoda70"
            >Github</a
          >
          <a class="nav-item" target="_blank" href="https://t.me/stfuchump"
            >Telegram</a
          >
          <a class="nav-item" href="mailto:nikitoda70@gmail.com"
            >nikitoda70@gmail.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>