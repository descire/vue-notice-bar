<template>
  <div id="app">
    <notice-bar
      :text="msg"
      icon="http://o8sux93eg.bkt.clouddn.com/notice.png"
      :speed="30"
      :callback="handleAnimationEnd" />
  </div>
</template>

<script>
import NoticeBar from './lib/NoticeBar'
export default {
  name: 'app',
  components: {
    NoticeBar
  },
  data () {
    return {
      list: [
        '世界杯就要开始啦！',
        '德国、葡萄牙、阿根廷、西班牙相继出局',
        '巴西2:0淘汰墨西哥，日本竟然破了两次比利时的球门，虽败犹荣。',
        '这次到底谁才能成功捧起大力神杯呢？'
      ],
      msg: ''
    }
  },
  created () {
    this.index = 0
    this.msg = this.list[0]
  },
  methods: {
    handleAnimationEnd () {
      this.msg = this.list[++this.index]
      if (this.index === this.list.length - 1) {
        this.index = -1
      }
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
