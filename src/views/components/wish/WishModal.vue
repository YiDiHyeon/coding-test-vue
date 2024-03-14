<template>
  <TDialog :visible="visible" title="찜목록" :before-close="handleCloseDialog">
    <template #contents>
      <template v-if="wishItems && wishItems.length > 0">
        <div class="cart-container">
          <ul>
            <li v-for="item in wishItems" :key="item.id" class="cart__items">
              <div class="cart__items--area">
                <div class="cart__items--thumbnail">
                  <img :src="item.image" :alt="item.label" />
                </div>
                <div class="cart__items--info">
                  <div>
                    <b class="cart__items--title">{{ item.label }}</b>
                    <p class="cart__items--price">{{ Number(item.price).toLocaleString() }}원</p>
                  </div>
                  <div class="cart__items--buttons">
                    <div class="box">
                      <t-button type="radius" icon-left="cart"> 장바구니 추가</t-button>
                    </div>
                  </div>
                </div>
                <WishButton :id="item.id" class="btn-wish" @update="handleUpdateWish(item)" />
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else> 찜목록이 없습니다.</template>
    </template>
    <template #footer>
      <t-button color="gray" name="닫기" @click="handleCloseDialog"> 닫기</t-button>
    </template>
  </TDialog>
</template>

<script>
import TDialog from '@/components/TDialog/index.vue'
import TButton from '@/components/TButton/index.vue'
import { mapState } from 'vuex'
import WishButton from '@/components/WishButton/index.vue'

export default {
  name: 'WishModal',
  components: { WishButton, TButton, TDialog },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('wish', {
      wishItems: (state) => state.items,
    }),
  },

  methods: {
    handleCloseDialog() {
      this.$emit('handleCloseDialog')
    },
    handleUpdateWish(item) {
      item.is_wish = !item.is_wish
      if (!item.is_wish) {
        this.$store.dispatch('wish/delItem', item)
        this.$forceUpdate()
      }
      this.$forceUpdate()
    },
  },
}
</script>
