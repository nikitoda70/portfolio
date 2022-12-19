import { createApp, VueElement, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ScrollAnimation from '@/directives/scroll-animation'
import '@/assets/styles/_.scss';

const app = createApp(App)

app.directive('scroll-animation', ScrollAnimation)

app.use(store).use(router).mount('#app')
