<template>
  <section v-if="list" class="product-container">
    <h3>PRODUCT LIST</h3>
    <div class="product__area">
      <div v-for="item in list" :key="item.id" class="product__items">
        <div
          class="product__items--thumbnail"
          :class="`${item.is_hover ? 'active' : ''}`"
          :style="`background-image: url(${item.image})`"
          @mouseenter="handleOver(item)"
          @mouseleave="handleLeave(item)"
        >
          <div v-if="item.is_hover" class="product__items--buttons">
            <t-button icon-only="cart" type="icon" @click="handleOpenCartDialog(item)" />
            <t-button icon-only="heart" type="icon" @click="handleOpenWishDialog(item)" />
          </div>
        </div>
        <div class="product__items--name">{{ item.label }}</div>
        <div class="product__items--price">{{ Number(item.price).toLocaleString() }}원</div>
      </div>
    </div>
    <CartAddModal :visible.sync="cart_dialog.visible" @handleCloseDialog="handleCloseCartDialog" />
    <WishAddModal :visible.sync="wish_dialog.visible" @handleCloseDialog="handleCloseWishDialog" />
  </section>
</template>

<script>
import TButton from '@/components/TButton/index.vue'
import dbData from '@/assets/data.json'
import CartAddModal from '@/views/components/cart/CartAddModal.vue'
import WishAddModal from '@/views/components/wish/WishAddModal.vue'

export default {
  name: 'ProductList',
  components: { WishAddModal, CartAddModal, TButton },
  props: {
    productList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      data: dbData,
      list: null,
      cart_dialog: {
        visible: false,
        cart_data: null,
      },
      wish_dialog: {
        visible: false,
      },
    }
  },
  computed: {},
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    getList() {
      this.list = this.data.productList.map((item) => {
        item.is_hover = false
        item.is_wish = false
        return item
      })
    },
    handleOver(item) {
      item.is_hover = true
      this.$forceUpdate()
    },
    handleLeave(item) {
      item.is_hover = false
      this.$forceUpdate()
    },

    handleOpenCartDialog(data) {
      this.$store.dispatch('cart/addItem', data)
      if (data) {
        this.cart_dialog.visible = true
      }
    },
    handleCloseCartDialog() {
      this.cart_dialog.visible = false
    },
    handleCloseWishDialog() {
      this.wish_dialog.visible = false
    },
    handleOpenWishDialog(data) {
      data.is_wish = true
      this.$store.dispatch('wish/addItem', data)
      this.wish_dialog.visible = true
    },
  },
}
</script>

<style scoped></style>
