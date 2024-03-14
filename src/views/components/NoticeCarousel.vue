<template>
  <section class="notice-carousel-container">
    <transition tag="div">
      <template v-for="(item, idx) in items">
        <div v-if="currentCarouselIndex === idx" :key="idx" class="carousel__items">
          <div class="carousel__items--area">
            <div class="category">[{{ item.category }}]</div>
            <div class="label">{{ item.label }}</div>
            <div class="date">{{ item.date.toString() | dateFilter('YYYY-MM-DD') }}</div>
          </div>
        </div>
      </template>
    </transition>
  </section>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'NoticeCarousel',
  filters: {
    dateFilter: function (long_time, format) {
      return !long_time ? dayjs().format(format) : dayjs(long_time).format(format)
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentCarouselIndex: 0,
      timer: 0,
    }
  },
  computed: {
    isLastCarousel() {
      return this.currentCarouselIndex + 1 === this.items.length
    },
  },
  mounted() {
    this.autoPlay()
  },
  methods: {
    autoPlay() {
      this.timer = setInterval(() => {
        this.change()
      }, 4000)
    },
    resetPlay() {
      clearInterval(this.timer)
      this.autoPlay()
    },
    change() {
      if (this.currentCarouselIndex + 1 >= this.items.length) {
        this.currentCarouselIndex = 0
        return
      }
      if (!this.isLastCarousel) {
        this.currentCarouselIndex++
      }
      this.resetPlay()
    },
  },
}
</script>
