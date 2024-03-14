<template>
  <nav v-show="visible" class="side-bar" :style="{ overflow: visible ? 'hidden' : 'auto' }">
    <div class="side-bar__area">
      <ul>
        <li v-for="item in nav" :key="item.id">
          <div @click="handleClick(item)">
            <span>{{ item.title }}</span
            ><svg-icon icon-class="arrow-right" />
          </div>
        </li>
      </ul>
    </div>
    <CartModal :visible.sync="cart_dialog.visible" @handleCloseDialog="handleCloseCartDialog" />
    <WishModal :visible.sync="wish_dialog.visible" @handleCloseDialog="handleCloseFWishDialog" />
  </nav>
</template>

<script>
import CartModal from '@/views/components/cart/CartModal.vue'
import WishModal from '@/views/components/wish/WishModal.vue'

export default {
  name: 'SideBar',
  components: { WishModal, CartModal },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    nav: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      cart_dialog: {
        visible: false,
      },
      wish_dialog: {
        visible: false,
      },
    }
  },
  methods: {
    handleClick(item) {
      item.title === '장바구니' ? this.handleOpenCartDialog() : this.handleOpenWishDialog()
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
    handleCloseFWishDialog() {
      this.wish_dialog.visible = false
    },
  },
}
</script>
