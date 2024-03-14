<template>
  <div class="wrap">
    <MainHeader />
    <div class="container">
      <MainCarousel :items="carouselList" />
      <NoticeCarousel :items="noticeList" />
      <ProductList :product-list="productList" />
    </div>
    <MainFooter />
  </div>
</template>
<script>
import dbData from '@/assets/data.json'
import MainHeader from '@/views/components/Header.vue'
import MainCarousel from '@/views/components/MainCarousel.vue'
import NoticeCarousel from '@/views/components/NoticeCarousel.vue'
import ProductList from '@/views/components/ProductList.vue'
import MainFooter from '@/views/components/Footer.vue'

export default {
  name: 'CodingTestIndex',
  components: {
    MainFooter,
    ProductList,
    NoticeCarousel,
    MainCarousel,
    MainHeader,
  },

  data() {
    return {
      data: dbData,
      carouselList: [],
      noticeList: [],
      productList: [],
      isModalViewed: false,
    }
  },
  created() {
    this.getList()
  },
  mounted() {},
  methods: {
    getList() {
      this.carouselList = this.data.slideList
      this.noticeList = this.data.noticeList
      this.productList = this.data.productList.map((item) => {
        item.is_hover = false
        item.is_wish = false
        return item
      })
    },
  },
}
</script>
