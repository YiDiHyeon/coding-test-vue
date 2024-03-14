<template>
  <button
    class="t-button"
    :type="nativeType"
    :class="[
      type ? 't-button__' + type : '',
      size ? 't-button__' + size : '',
      color ? 't-button__' + color : '',
      iconLeft ? 'is-left-icon' : '',
      iconRight ? 'is-right-icon' : '',
      iconOnly ? 'is-only-icon' : '',
      { 'is-disabled': disabled },
    ]"
    :disabled="disabled"
    :name="name"
    @click="handleClick"
  >
    <span>
      <svg-icon v-if="iconLeft" :icon-class="iconLeft" />
      <svg-icon v-if="iconOnly" :icon-class="iconOnly" />
      <slot></slot>
      <svg-icon v-if="iconRight" :icon-class="iconRight" />
    </span>
  </button>
</template>
<script>
export default {
  name: 'TButton',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'bg',
    },
    size: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'primary',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    name: {
      type: String,
      default: '',
    },
    iconLeft: {
      type: String,
      default: '',
    },
    iconOnly: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
  },
}
</script>
