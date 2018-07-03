import VueNoticeBar from './NoticeBar.vue'

const NoticeBar = {
  install (Vue, options) {
    Vue.component(VueNoticeBar.componentName, VueNoticeBar)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(paykeyboard);
}

export default NoticeBar