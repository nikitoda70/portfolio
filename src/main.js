import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from '@/directives/scroll-animation'
import { languages, defaultLocale } from './i18n'
import { createI18n, useI18n } from 'vue-i18n'
import '@/assets/styles/_.scss';

const localStorageLang = localStorage.getItem('lang')

const messages = Object.assign(languages)

const i18n = createI18n({
  legacy: false,
  locale: localStorageLang || defaultLocale,
  fallbackLocale: 'ru',
  messages
})

const app = createApp(App, {
  setup() {
    const {t} = useI18n()
    return {t}
  }
})

app.use(store).use(i18n).use(router).directive('scroll-animation', ScrollAnimation).mount('#app')
