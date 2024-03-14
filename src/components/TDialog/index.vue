<template>
  <transition>
    <div v-show="visible" class="modal">
      <div class="modal-container" @click.self="handleClose">
        <div class="model-wrap" :style="style">
          <div class="modal-header">
            <h3>{{ title }}</h3>
            <t-button
              icon-only="close"
              type="icon"
              color="transparent"
              name="닫기"
              size="small"
              @click="handleClose"
            />
          </div>
          <div class="modal-contents">
            <slot name="contents"></slot>
          </div>
          <div v-if="footer" class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <div class="dimmed"></div>
      </div>
    </div>
  </transition>
</template>

<script>
import TButton from '@/components/TButton/index.vue'

export default {
  name: 'TDialog',
  components: { TButton },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '다이얼로그',
    },
    position: {
      type: String,
      default: 'relative',
    },
    width: {
      type: String,
      default: '80%',
    },
    footer: {
      type: Boolean,
      default: true,
    },
    // eslint-disable-next-line vue/require-default-prop
    beforeClose: Function,
  },
  data() {
    return {
      closed: false,
      key: 0,
    }
  },
  computed: {
    style() {
      const style = {}
      style.width = this.width
      style.position = this.position
      return style
    },
  },
  methods: {
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.closed = true
      }
    },
  },
}
</script>
