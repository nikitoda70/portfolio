<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <router-link to="/" class="footer__logo"
          >&lt;Lobanov Nikita/&gt;</router-link
        >
        <div class="footer__nav">
          <router-link class="nav-item" to="/">{{$t('nav.main')}}</router-link>
          <router-link class="nav-item" to="/projects">{{$t('nav.projects')}}</router-link>
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
  </footer>
</template>