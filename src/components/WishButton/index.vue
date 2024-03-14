<template>
  <t-button
    icon-only="heart"
    type="icon"
    color="transparent"
    :class="{ active: isClick }"
    @click.stop="handleClick"
  />
</template>

<script>
import TButton from '@/components/TButton/index.vue'

export default {
  name: 'WishButton',
  components: { TButton },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      isClick: false,
    }
  },
  methods: {
    handleUpdate() {
      this.$nextTick(() => {
        this.$emit('update')
      })
    },
    handleClick() {
      if (!this.isClick) {
        this.handleUpdate()
        this.isClick = true
      } else {
        this.handleUpdate()
        this.isClick = false
        this.$store.dispatch('wish/delItem', this.id)
      }
    },
  },
}
</script>
<style scoped lang="scss">
.t-button {
  color: var(--color-light-gray);
  &.active {
    color: var(--color-red);
  }
  &:hover::before {
    opacity: 0;
  }

  &:active::before {
    opacity: 0;
  }
}
</style>
