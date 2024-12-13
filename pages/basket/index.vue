<script lang="ts">

import BasketComponent from "~/components/BasketComponent.vue";
import RouteComponent from "~/components/RouteComponent.vue";
import {useProductsStore} from "~/store/products-store";
export default defineComponent({
  components: {
    BasketComponent,
    RouteComponent
  },
  setup() {
    const productsStore = useProductsStore();
    return {
      productsStore
    }
  }
})

</script>

<template>
  <BasketComponent></BasketComponent>
  <RouteComponent></RouteComponent>
  <div class="main-block">
    <div class="main-block__left-block">
      <div class="main-block__left-block-upper-style">
        <h1 class="main-block__title-style">Ваша корзина</h1>
        <span class="main-block__count-style">{{productsStore.totalCount}} товара</span>
        <button class="main-block__button-clear-style">Очистить корзину</button>
      </div>
      <div class="main-block__cards-products">
          <ProductInBasketCard class="productInBasketCard-style" v-for="(product) in productsStore.products" :key="product.id" :product="product" />
      </div>
    </div>
    <div class="main-block__right-block">

    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .main-block {
    padding-left: 80px;
    padding-right: 80px;
  }

  .main-block__left-block {
    max-width: 800px;
    width: 100%;
  }

  .main-block__left-block-upper-style {
    width: 100%;
    display: flex;
    align-items: baseline;
    padding-bottom: 50px;
  }

  .main-block__title-style {
    display: inline-block;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 44px;
    line-height: 53px;
    color: #1F2432;
    margin: 0 22px 0 0;
  }

  .main-block__count-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #797B86;
  }


  .main-block__button-clear-style {
    border: none;
    background-color: white;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #797B86;
    text-decoration-line: underline;
    margin-left: auto;
    margin-right: 0;
  }

  .productInBasketCard-style {
    margin-bottom: 25px;
  }

</style>