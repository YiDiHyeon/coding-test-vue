<template>
  <header class="header">
    <div class="header-container">
      <div class="nav-container">
        <t-button
          v-if="!modal.visible"
          icon-only="hamburger"
          type="icon"
          color="transparent"
          name="메뉴열기"
          @click="handleClickModalOpen()"
        />
        <t-button
          v-else
          icon-only="close"
          type="icon"
          color="transparent"
          name="메뉴닫기"
          @click="handleClickModalClose"
        />
      </div>
      <SideBar :visible="modal.visible" :nav="nav" @handleClose="handleClickModalClose" />
      <h1><svg-icon icon-class="logo" /></h1>
      <div class="header-btn__area">
        <t-button
          icon-only="cart"
          type="icon"
          color="transparent"
          name="장바구니"
          @click="handleOpenCartDialog"
        />
        <t-button
          icon-only="heart"
          type="icon"
          color="transparent"
          name="찜목록"
          @click="handleOpenWishDialog"
        />
      </div>
    </div>
    <CartModal :visible.sync="cart_dialog.visible" @handleCloseDialog="handleCloseCartDialog" />
    <WishModal :visible.sync="wish_dialog.visible" @handleCloseDialog="handleCloseWishDialog" />
  </header>
</template>

<script>
import TButton from '@/components/TButton/index.vue'
import SideBar from '@/views/components/SideBar.vue'
import CartModal from '@/views/components/cart/CartModal.vue'
import WishModal from '@/views/components/wish/WishModal.vue'

export default {
  name: 'MainHeader',
  components: { WishModal, CartModal, SideBar, TButton },
  data() {
    return {
      is_open: false,
      modal: {
        visible: false,
      },
      cart_dialog: {
        visible: false,
      },
      wish_dialog: {
        visible: false,
      },
      nav: [
        { id: 1, title: '장바구니' },
        { id: 2, title: '찜목록' },
      ],
    }
  },
  methods: {
    handleClickModalOpen() {
      this.modal.visible = true
      if (this.modal.visible) {
        document.body.style.overflow = 'hidden'
      }
    },
    handleClickModalClose() {
      this.modal.visible = false
      if (!this.modal.visible) {
        document.body.style.overflow = 'auto'
      }
    },
    handleOpenCartDialog() {
      this.cart_dialog.visible = true
    },
    handleCloseCartDialog() {
      this.cart_dialog.visible = false
    },

    handleOpenWishDialog() {
      this.wish_dialog.visible = true
    },
    handleCloseWishDialog() {
      this.wish_dialog.visible = false
    },
  },
}
</script>
