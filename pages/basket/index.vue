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
    const neededInstallationObj = reactive({isNeededInstallation: false as boolean});
    return {
      productsStore,
      neededInstallationObj
    }
  },
  computed: {
    transformValueInstallation() {
      return this.neededInstallationObj.isNeededInstallation ? "Да" : "Нет"
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
      <div class="main-block__installation-block">
        <input class="main-block__checkbox-style" type="checkbox" v-model="neededInstallationObj.isNeededInstallation">
        <img class="main-block__installation-icon-style" src="public/icon/tools.svg" alt="tools">
        <div class="main-block__description-tools">
          <span class="main-block__text">Установка</span>
          <span class="main-block__description-text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</span>
        </div>
      </div>
    </div>
    <div class="main-block__right-block-style">
      <div class="main-block__final-info-style">
       <div class="main-block__description-final-info">
         <h1 class="main-block__final-info-title">Итого</h1>
         <div class="main-block__row-style">
           <span class="main-block__name-property">Сумма заказа</span>
           <span class="main-block__value-property">{{productsStore.totalCost}} &#8381;</span>
         </div>
         <div class="main-block__row-style">
           <span class="main-block__name-property">Количество</span>
           <span class="main-block__value-property">{{productsStore.totalCount}} шт</span>
         </div>
         <div class="main-block__row-style">
           <span  class="main-block__name-property">Установка</span>
           <span  class="main-block__value-property">{{transformValueInstallation}}</span>
         </div>
       </div>
        <div class="main-block__row-style">
          <span class="main-block__total-name-property">Стоимость товаров</span>
          <span  class="main-block__total-value-property">{{productsStore.totalCost}} &#8381;</span>
        </div>
        <button class="main-block__button-placing-an-order">Оформить заказ</button>
        <button class="main-block__button-buy-click">Купить в 1 клик</button>
      </div>
    </div>
  </div>
  <div class="slider-block-style">
    <SliderProducts></SliderProducts>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .main-block {
    padding-left: 80px;
    padding-right: 80px;
    display: flex;
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

  .main-block__installation-block {
    background-color: #F6F8FA;
    width: 100%;
    display: flex;
    height: 102px;
    align-items: center;
    border-radius: 5px;
    margin-top: 44px;
  }

  .main-block__installation-icon-style {
    height: 50px;
    width: 50px;
  }

  .main-block__checkbox-style {
    height: 20px;
    width: 20px;
    border: 1px solid #797B86;
    box-sizing: border-box;
    box-shadow: 2px 2px 1px 0 #00000014 inset;
    accent-color: white;
    margin: 0 20px 0 25px;
  }

  .main-block__installation-icon-style {
    margin-right: 20px;
  }

  .main-block__text {
    display: block;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #1F2432;
  }

  .main-block__description-text {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #797B86;
  }

  .main-block__right-block-style {
    width: 100%;
  }

  .main-block__final-info-style {
    background-color: #F6F8FA;
    padding: 30px 35px;
    width: 365px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 103px;
  }

  .main-block__final-info-title {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #1F2432;
    margin: 0 0 31px;
  }

  .main-block__row-style {
    width: 100%;
    display: flex;
    margin-bottom: 17px;
  }

  .main-block__row-style:last-child {
    margin-bottom: 29px;
  }

  .main-block__description-final-info {
    border-bottom: 1px solid #AEB0B6;
    margin-bottom: 10px;
  }

  .main-block__name-property {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #1F2432;
  }

  .main-block__value-property {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #1F2432;
    margin-right: 0;
    margin-left: auto;
  }

  .main-block__total-name-property {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #1F2432;
  }

  .main-block__total-value-property {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 33px;
    color: #1F2432;
    margin-right: 0;
    margin-left: auto;
  }

  .main-block__button-placing-an-order {
    width: 100%;
    background-color: #0069B4;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
    border: none;
    height: 54px;
    margin-top: 30px;
    margin-bottom: 12px;
    border-radius: 4px;
  }

  .main-block__button-buy-click {
    width: 100%;
    border: 1px solid #0069B4;
    box-sizing: border-box;
    background: #FFFFFF;
    height: 54px;
    color: #0069B4;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 26px;
    border-radius: 4px;
  }

  .slider-block-style {
    padding-right: 80px;
    padding-left: 80px;
  }

</style>