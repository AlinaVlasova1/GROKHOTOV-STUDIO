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
    const currentProductNumber = reactive({index: 1});
    return {
      onSwiper,
      onSlideChange,
      currentProductNumber,
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
        <div class="swiper-button-prev slider__button-navigation-style"
             @click="currentProductNumber.index = currentProductNumber.index - 1"></div>
        <div class="slider__text-style">
          <span class="slider__text-product-current">{{currentProductNumber.index}}&nbsp;</span>
          <span class="slider__text-count-total-product"> / {{products().length}}</span>
        </div>
        <div class="swiper-button-next slider__button-navigation-style"
             @click="currentProductNumber.index = currentProductNumber.index + 1"></div>
      </div>
    </div>

    <swiper-slide
        class="slider__slide-style"
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
   height: 660px;
  }

  .slider__slide-style {
    background-color: #F6F8FA;
    width: 100%;
    padding: 25px;
    max-width: 21%;
    height: 500px;
    margin-top: 110px;
  }

  .slider__button-navigation-style {
    width: 50px;
    height: 50px;
    background-color: #90A2B5;
    border-radius: 50%;
    position: static;
    margin-top: 0;
  }

  .slider__button-navigation-style:after {
    font-size: 18px;
    color: #FFFFFF;
  }

  .slider__navigation-style {
    position: relative;
    top: -660px;
    z-index: 100;
    width: 100%;
    display: flex;
  }

  .slider__navigation-title-style {
    display: inline-block;
    margin: 0;
    color: #1F2432;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }

  .slider__buttons-navigation {
    margin-right: 15px;
    margin-left: auto;
    display: flex;
  }

  .slider__text-product-current {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 50px;
    color: #212121;
    margin-left: 20px;
    display: inline;
    vertical-align: center;
  }

  .slider__text-count-total-product {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: #797a85;
    vertical-align: baseline;
    margin-right: 15px;
  }

  .slider__text-style {
    vertical-align: center;
    display: inline-block;
  }
</style>