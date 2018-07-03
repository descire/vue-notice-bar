<template>
  <div class="notice-bar" :style="barStyle">
    <div class="notice-bar__icon" v-if="icon">
      <img :src="icon" alt="" height="100%">
    </div>
    <div class="notice-bar__wrapper" ref="wrap">
      <div
        class="notice-bar__content"
        :class="animationClass"
        ref="content"
        :style="contentStyle"
        @aniamtionend="onAnimationEnd"
        @webkitAnimationEnd="onAnimationEnd"
        @webkitAnimationIteration="onAnimationIteration"
        @animationiteration="onAnimationIteration">
        <slot>{{text}}</slot>
      </div>
    </div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'NoticeBar'
export default {
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  props: {
    color: String,
    backgroundColor: String,
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 40
    },
    delay: {
      type: Number,
      default: 1
    },
    callback: Function
  },
  watch: {
    text: {
      handler () {
        this.$nextTick(_ => {
          const { wrap, content } = this.$refs
          if (!this.text) {
            return
          }
          const wrapWidth = wrap.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width

          if (!this.wrapWidth) {
            this.wrapWidth = wrapWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            this.animationClass = 'notice-bar__play'
          }
        })
      },
      immediate: true
    }
  },
  computed: {
    barStyle () {
      return {
        color: this.color,
        backgroundColor: this.backgroundColor
      }
    },
    contentStyle () {
      return {
        paddingLeft: this.first ? 0 : this.wrapWidth + 'px',
        animationDelay: (this.first ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },
  data () {
    return {
      animationClass: '',
      wrapWidth: 0,
      offsetWidth: 0,
      duration: 0,
      first: true
    }
  },
  methods: {
    onAnimationEnd () {
      this.first = false
      this.callback && this.callback()
      this.$nextTick(_ => {
        this.duration = (this.wrapWidth + this.offsetWidth) / this.speed
        this.animationClass = 'notice-bar__play--infinite'
      })
    },
    onAnimationIteration () {
      this.callback && this.callback()
    }
  }
}
</script>
<style lang="scss">
  .notice-bar {
    display: flex;
    position: relative;
    padding: 9px 15px;
    font-size: 12px;
    line-height: 1.5;
    background: #F60;
    color: #FFF;
  }

  .notice-bar__icon {
    height: 18px;
    min-width: 20px;
    box-sizing: border-box;
  }
  .notice-bar__wrapper {
    flex: 1;
    margin-left: 10px;
    height: 18px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
  }

  .notice-bar__content {
    padding-top: 1px;
    position: absolute;
    white-space: nowrap;
  }

  .notice-bar__play {
    animation: notice-bar-play linear both;
  }

  .notice-bar__play--infinite {
    animation: notice-bar-play-infinite linear infinite both;
  }

  @keyframes notice-bar-play {
    100% {
      transform: translate3d(-100%,0,0)
    }
  }
  @keyframes notice-bar-play-infinite {
    100% {
      transform: translate3d(-100%,0,0)
    }
  }
</style>
