<template>
  <label class="t-checkbox" :class="[{ 'is-checked': is_checked }, { 'is-disabled': is_disabled }]">
    <span
      class="t-checkbox__input"
      :class="[{ 'is-checked': is_checked }, { 'is-disabled': is_disabled }]"
    >
      <span class="t-checkbox__inner"></span>
      <input
        v-if="true_label !== undefined && false_label !== undefined"
        ref="checkbox"
        v-model="check_value"
        type="checkbox"
        :disabled="is_disabled"
        :true-value="true_label"
        :false-value="false_label"
        v-bind="$attrs"
        class="t-checkbox__original"
        @change="handleChange"
      />
      <input
        v-else
        ref="checkbox"
        v-model="check_value"
        v-bind="$attrs"
        :value="label"
        :disabled="is_disabled"
        type="checkbox"
        class="t-checkbox__original"
        @change="handleChange"
      />
    </span>
    <span class="t-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'TCheckbox',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: [String, Number, Boolean, Array],
    },
    label: {
      type: [String, Number, Object],
      default: undefined,
    },
    disabled: Boolean,
    true_label: {
      type: [String, Number],
      default: undefined,
    },
    false_label: {
      type: [String, Number],
      default: undefined,
    },
  },
  data() {
    return {
      self_model: false,
    }
  },
  computed: {
    check_value: {
      get() {
        return this.value !== undefined ? this.value : this.self_model
      },
      set(val) {
        this.$emit('input', val)
        this.self_model = val
      },
    },
    // eslint-disable-next-line vue/return-in-computed-property
    is_checked() {
      if ({}.toString.call(this.check_value) === '[object Boolean]') {
        return this.check_value
      } else if (Array.isArray(this.check_value)) {
        return this.check_value.includes(this.label)
      } else if (this.check_value !== null && this.check_value !== undefined) {
        return this.check_value === this.true_label
      }
    },
    is_disabled() {
      return this.disabled
    },
  },
  watch: {},
  created() {
    this.checked && this.addToStore()
  },

  methods: {
    addToStore() {
      if (Array.isArray(this.check_value) && !this.check_value.includes(this.label)) {
        this.check_value.push(this.label)
      } else {
        this.check_value = this.true_label || true
      }
    },
    handleChange(event) {
      // 포커스 Out 시 변경 여부
      this.$emit('change', event.target.checked, event)
    },
  },
}
</script>
