<template>
  <section class="main-carousel-container">
    <transition tag="div" name="fade">
      <template v-for="item in items">
        <div
          v-if="currentCarouselIndex + 1 === item.id"
          :key="item.id"
          class="carousel__items"
          :style="`background-image: url(${item.image})`"
        >
          <div class="carousel__items--area">
            <div>
              <h2 class="carousel__items--title" v-html="item.title"></h2>
              <p class="carousel__items--content" v-html="item.content"></p>
              <t-button type="radius" class="carousel__items--button" @click="handleClickMove(item)"
                >{{ item.buttonLabel }}
              </t-button>
            </div>
          </div>
        </div>
      </template>
    </transition>
    <div v-if="navigation" class="carousel__navigation">
      <t-button
        icon-only="arrow-left"
        type="icon"
        color="transparent"
        class="btn-prev"
        @click="handleClickPrev"
      />
      <t-button
        icon-only="arrow-right"
        type="icon"
        color="transparent"
        class="btn-next"
        @click="handleClickNext"
      />
    </div>

    <div v-if="pagination" class="carousel__pagination">
      <span
        v-for="(item, index) in items.length"
        :key="index"
        :class="`${currentCarouselIndex === index ? 'active' : ''}`"
        @click="handleClick(item)"
      ></span>
    </div>
  </section>
</template>

<script>
import TButton from '@/components/TButton/index.vue'

export default {
  name: 'MainCarousel',
  components: { TButton },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    navigation: {
      type: Boolean,
      default: true,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      currentCarouselIndex: 0,
      timer: 0,
    }
  },
  computed: {
    isFirstCarousel() {
      return this.currentCarouselIndex === 0
    },
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
        this.handleClickNext()
      }, 5000)
    },
    resetPlay() {
      clearInterval(this.timer)
      this.autoPlay()
    },
    handleClickPrev() {
      if (!this.isFirstCarousel) {
        this.currentCarouselIndex--
      }
      this.resetPlay()
    },
    handleClickNext() {
      if (this.currentCarouselIndex + 1 >= this.items.length) {
        this.currentCarouselIndex = 0
        return
      }
      if (!this.isLastCarousel) {
        this.currentCarouselIndex++
      }
      this.resetPlay()
    },
    handleClick(item) {
      this.currentCarouselIndex = item - 1
    },
    handleClickMove(item) {
      window.open(item.url, '_blank')
    },
  },
}
</script>

<style scoped lang="scss">
.carousel__pagination {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;
  span {
    width: 16px;
    height: 16px;
    display: inline-block;
    border-radius: 50px;
    background: #ffffff;
    transition: width 0.3s;
    &.active {
      width: 43px;
      background: #fcc419;
    }
  }
}

.carousel__navigation {
  max-width: 1200px;
  height: 100%;
  position: relative;
  margin: 0 auto;

  button {
    color: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
  }
  .btn-prev {
    left: -40px;
  }

  .btn-next {
    right: -40px;
  }
}
</style>
