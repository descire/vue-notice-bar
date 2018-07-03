# vue-notice-bar

<a href="https://www.npmjs.com/package/vue-notice-bar"><img src="https://img.shields.io/npm/v/vue-notice-bar.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-notice-bar"><img src="https://img.shields.io/npm/l/vue-notice-bar.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vue-notice-bar"><img src="https://img.shields.io/npm/dm/vue-notice-bar.svg" alt="Downloads"></a>

>  a notice-bar component Vue.js

## Install

  use npm:

```
  npm i -S vue-notice-bar
```

## Usage

  Like most of the Vue-Plugin:

```JavaScript
  import Vue from 'vue'
  import NoticeBar from './lib'
  Vue.use(NoticeBar)
```

  Then, use in your component:

```HTML
  <notice-bar
    text="德国、葡萄牙、阿根廷、西班牙相继出局"
    icon="http://o8sux93eg.bkt.clouddn.com/notice.png"
    :speed="30"
    :callback="handleAnimationEnd">
  </notice-bar>
```

```JavaScript
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
        // update autoscroll content at the right time
        this.msg = this.list[++this.index]
        if (this.index === this.list.length - 1) {
          this.index = -1
        }
      }
    }
  }
```

  ![效果部分截图](http://o8sux93eg.bkt.clouddn.com/some.gif)

## API

| propName | Type | Required | Default |
| :---: | :---: | :---: | :---:|
| color | String | false | #FFF |
| backgroundColor | String | false | #F60 |
| icon | String | false | '' |
| text | String | true | -- |
| speed | Number | false | 40 |
| delay | Number | false | 1 (s) |
| callback | Function | false | -- |


## Development

```
  # for dev
  npm run dev
```