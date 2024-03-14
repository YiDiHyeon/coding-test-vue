<template>
  <TDialog :visible="visible" title="찜목록 추가" :before-close="handleCloseDialog">
    <template #contents>
      <div>찜목록에 정상적으로 추가되었습니다.</div>
    </template>
    <template #footer>
      <t-button color="gray" name="닫기" @click="handleCloseDialog">닫기</t-button>
    </template>
  </TDialog>
</template>

<script>
import TDialog from '@/components/TDialog/index.vue'
import TButton from '@/components/TButton/index.vue'

export default {
  name: 'WishAddModal',
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
