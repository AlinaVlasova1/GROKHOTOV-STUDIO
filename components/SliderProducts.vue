<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import {products} from "~/mocks/products";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default defineComponent({
  name: "SliderProducts",
  methods: {
    Navigation,
    products() {
      return products
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Scrollbar, A11y, Navigation],
    };
  }
})
</script>

<template>
  <swiper class="slider-style"
          :modules="[Navigation]"
          :slides-per-view="4"
          :space-between="20"
          :pagination="{ clickable: true }"
          :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
          @swiper="onSwiper"
          @slideChange="onSlideChange">
    <div class="slider__navigation-style">
      <h1 class="slider__navigation-title-style">Просмотренные товары</h1>
      <div class="slider__buttons-navigation">
        <div class="swiper-button-prev swiper__button-navigation-style"></div>
        <span>1 / 6</span>
        <div class="swiper-button-next swiper__button-navigation-style"></div>
      </div>
    </div>

    <swiper-slide
        class="swiper__slide-style"
        v-for="(slideContent, index) in products()"
        :key="index"
    >
      <ProductsSlideCard :slideContent="slideContent"></ProductsSlideCard>
    </swiper-slide
    >
  </swiper>
</template>

<style scoped>

  .slider-style {
   height: 500px;
  }

  .swiper__slide-style {
    background-color: #F6F8FA;
    width: 100%;
    padding: 25px;
    max-width: 21%;
  }

  .swiper__button-navigation-style {
    width: 50px;
    height: 50px;
    background-color: #90A2B5;
    border-radius: 50%;
    position: static;
    margin-top: 0;
  }

  .swiper__button-navigation-style:after {
    font-size: 18px;
    color: #FFFFFF;
  }

  .slider__navigation-style {
    position: relative;
    top: -150px;
    z-index: 1;
    width: 100%;
    display: flex;
  }

  .slider__navigation-title-style {
    display: inline-block;
    margin: 0;
  }

  .slider__buttons-navigation {
    margin-right: 0;
    margin-left: auto;
    display: flex;
  }
</style>