import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";

import ElementPlus from "element-plus"
import { TroisJSVuePlugin } from 'troisjs';
// import "element-plus/dist/index.css"
import 'element-plus/theme-chalk/index.css'

import './index.css'
import 'virtual:windi.css'
import "./assets/css/global.css"
import "./assets/css/setting.css"

import { i18n } from './i18n';

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus, { size: "mini" });
app.use(i18n);
app.use(TroisJSVuePlugin);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')

export default app;
