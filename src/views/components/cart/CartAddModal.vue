<template>
  <TDialog :visible="visible" title="장바구니 추가" :before-close="handleCloseDialog">
    <template #contents>
      <div>장바구니에 정상적으로 추가되었습니다.</div>
    </template>
    <template #footer>
      <t-button color="gray" name="닫기" @click="handleCloseDialog">장바구니 더보기</t-button>
      <t-button name="결제하기" style="margin-left: 8px" @click="handleCloseDialog"
        >쇼핑 더하기</t-button
      >
    </template>
  </TDialog>
</template>

<script>
import TDialog from '@/components/TDialog/index.vue'
import TButton from '@/components/TButton/index.vue'

export default {
  name: 'CartAddModal',
  components: { TButton, TDialog },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit('handleCloseDialog')
    },
  },
}
</script>

<style scoped></style>
