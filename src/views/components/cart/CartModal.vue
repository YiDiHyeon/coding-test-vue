<template>
  <TDialog :visible="visible" title="장바구니" :before-close="handleCloseDialog">
    <template #contents>
      <template v-if="cartItems && cartItems.length > 0">
        <div class="cart-container">
          <ul>
            <li v-for="item in cartItems" :key="item.id" class="cart__items">
              <t-checkbox ref="checkbox" v-model="item.checked" @change="handleChange(item)" />
              <div class="cart__items--area">
                <div class="cart__items--thumbnail">
                  <img :src="item.image" :alt="item.label" />
                </div>
                <div class="cart__items--info">
                  <div>
                    <b class="cart__items--title">{{ item.label }}</b>
                    <p class="cart__items--price">
                      {{ Number(item.price * item.qty).toLocaleString() }}원
                    </p>
                  </div>

                  <div class="cart__items--buttons">
                    <div class="box">
                      <div class="decrease">
                        <button @click="handleClickDecrease(item)">
                          <svg-icon icon-class="minus" />
                        </button>
                      </div>

                      <div class="count">
                        <input type="number" name="num-product1" :value="item.qty" />
                      </div>
                      <div class="decrease">
                        <button @click="handleClickIncrease(item)">
                          <svg-icon icon-class="plus" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <WishButton :id="item.id" class="btn-wish" @update="handleUpdateWish(item)" />
              </div>
            </li>
          </ul>
        </div>
        <div class="payment-container">
          <b class="title">결제 예정금액</b>
          <ul>
            <li>
              <span>주문금액</span
              ><span>{{ Number(totalCartPrice - sale).toLocaleString() }}원</span>
            </li>
            <li>
              <span>할인</span><span>{{ Number(sale).toLocaleString() }}원</span>
            </li>
            <li>
              <span>배송비</span><span>{{ Number(delivery_fee).toLocaleString() }}원</span>
            </li>
          </ul>
          <div class="total-price__area">
            <b>총 결제금액</b>
            <strong>{{ Number(totalCartPrice).toLocaleString() }}원</strong>
          </div>
        </div>
      </template>
      <template v-else> 장바구니가 없습니다. </template>
    </template>

    <template #footer>
      <t-button color="gray" name="닫기" @click="handleCloseDialog"> 닫기</t-button>
      <t-button v-if="cartItems && cartItems.length" name="결제하기" style="margin-left: 8px"
        >결제하기</t-button
      >
    </template>
  </TDialog>
</template>

<script>
import TDialog from '@/components/TDialog/index.vue'
import TButton from '@/components/TButton/index.vue'
import { mapState, mapGetters } from 'vuex'
import TCheckbox from '@/components/TCheckbox/index.vue'
import WishButton from '@/components/WishButton/index.vue'

export default {
  name: 'CartModal',
  components: { WishButton, TCheckbox, TButton, TDialog },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      total: 0,
      sale: 0,
      delivery_fee: 3000,
    }
  },
  computed: {
    ...mapState('cart', {
      cartItems: (state) => state.items,
    }),
    ...mapState('wish', {
      wishItems: (state) => state.items,
    }),
    ...mapGetters('cart', {
      totalCartPrice: 'totalPrice',
    }),
  },
  methods: {
    handleChange(item) {
      console.log(item)
    },
    handleCloseDialog() {
      this.$emit('handleCloseDialog')
    },
    handleClickIncrease(item) {
      this.$store.dispatch('cart/increaseQty', item.id)
    },
    handleClickDecrease(item) {
      this.$store.dispatch('cart/decreaseQty', item.id)
    },
    handleUpdateWish(item) {
      item.is_wish = !item.is_wish
      item.is_wish
        ? this.$store.dispatch('wish/addItem', item)
        : this.$store.dispatch('wish/delItem', item)

      this.$forceUpdate()
    },
  },
}
</script>
<style scoped lang="scss">
.cart__items--buttons {
  .box {
    display: table;
    border-collapse: collapse;
    div {
      display: table-cell;
      border: 1px solid var(--color-light-gray);
      width: 45px;
      height: 45px;
    }
  }

  button {
    width: 45px;
    height: 45px;
    background: var(--color-primary);
    color: var(--color-white);
    outline: none;
    border: none;
    .svg-icon {
      color: var(--color-white);
    }
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  .count {
    width: 45px;
    height: 45px;
    border: 1px solid var(--color-light-gray);
    input {
      display: block;
      width: 100%;
      outline: transparent;
      box-sizing: border-box;
      height: 100%;
      text-align: center;
      border: transparent;
    }
  }
}
</style>
