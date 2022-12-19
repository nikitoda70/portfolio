<template>
  <main>
    <div class="hero">
      <div class="container">
        <div class="hero__wrapper">
          <h1 class="hero__title">
            Никита Лобанов <br />
            Frontend-разработчик <br />
            из Томска
          </h1>
          <div class="hero__img">
            <img src="@/assets/img/hero.png" alt="Me" />
          </div>
        </div>
      </div>
    </div>
    <div class="skills">
      <div class="container">
        <h2 class="block-title">Мои навыки</h2>
        <div class="skills__wrapper">
          <div class="skills__item skills__item-1" v-scroll-animation>
            <img src="@/assets/img/skills/html.png" alt="HTML" />
            <div class="skills__name">HTML</div>
          </div>
          <div class="skills__item skills__item-2" v-scroll-animation>
            <img src="@/assets/img/skills/nunjucks.png" alt="Nunjucks" />
            <div class="skills__name">Nunjucks</div>
          </div>
          <div class="skills__item skills__item-3" v-scroll-animation>
            <img src="@/assets/img/skills/css.png" alt="CSS" />
            <div class="skills__name">CSS</div>
          </div>
          <div class="skills__item skills__item-4" v-scroll-animation>
            <img src="@/assets/img/skills/sass.png" alt="SASS" />
            <div class="skills__name">SASS</div>
          </div>
          <div class="skills__item skills__item-5" v-scroll-animation>
            <img src="@/assets/img/skills/bootstrap.png" alt="Bootstrap" />
            <div class="skills__name">Bootstrap</div>
          </div>
          <div class="skills__item skills__item-6" v-scroll-animation>
            <img src="@/assets/img/skills/js.png" alt="JavaScript" />
            <div class="skills__name">JavaScript</div>
          </div>
          <div class="skills__item skills__item-7" v-scroll-animation>
            <img src="@/assets/img/skills/vue.png" alt="Vue" />
            <div class="skills__name">Vue</div>
          </div>
          <div class="skills__item skills__item-8" v-scroll-animation>
            <img src="@/assets/img/skills/vuex.png" alt="Vuex" />
            <div class="skills__name">Vuex</div>
          </div>
          <div class="skills__item skills__item-9" v-scroll-animation>
            <img src="@/assets/img/skills/vue-router.png" alt="Vue-router" />
            <div class="skills__name">Vue-router</div>
          </div>
          <div class="skills__item skills__item-10" v-scroll-animation>
            <img src="@/assets/img/skills/nuxt.png" alt="Nuxt" />
            <div class="skills__name">Nuxt</div>
          </div>
          <div class="skills__item skills__item-11" v-scroll-animation>
            <img src="@/assets/img/skills/webpack.png" alt="JavaScWebpackript" />
            <div class="skills__name">Webpack</div>
          </div>
          <div class="skills__item skills__item-12" v-scroll-animation>
            <img src="@/assets/img/skills/git.png" alt="Git" />
            <div class="skills__name">Git</div>
          </div>
          <div class="skills__item skills__item-13" v-scroll-animation>
            <img src="@/assets/img/skills/figma.png" alt="Figma" />
            <div class="skills__name">Figma</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>