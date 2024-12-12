<script lang="ts">
export default defineComponent({
  name: "ProductInBasketCard",
  props: ['product'],
})
</script>

<template>
  <div class="card-style">
    <img class="card__img-style" v-bind:src='product.img' alt='img' />
    <div class="card__text-style">
      <span class="card__name-style">{{product.name}}</span>
      <span class="card__description-style">{{product.description}}</span>
      <span class="card__article-number-style">{{product.article_number}}</span>
    </div>
    <div class="card__info-count-style">
      <div class="card__buttons-change-count-style">
        <button class="card__button-left-style card__button">
          <img class="card__img-minus" src="public/icon/minus.svg" alt="plus">
        </button>
        <span class="card__button-text-style">1</span>
        <button class="card__button-right-style card__button">
          <img class="card__img-plus" src="public/icon/plus.svg" alt="plus">
        </button>
      </div>
      <span v-if="true" class="card__text-price">{{product.price}} &#8381;/шт.</span>
    </div>
    <span class="card__price-style">{{product.price}} &#8381;</span>
    <button class="card__button-delete-style">
      <img class="card__icon-cross" src="public/icon/cross.svg" alt="cross">
    </button>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  .card-style {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #C4C4C4;
  }

  .card__img-style {
    height: 100px;
    width: 100px;
    margin-left: 15px;
  }

  .card__text-style {
    width: 263px;
    align-items: flex-start;
    margin-right: 79px;
  }

  .card__name-style {
    font-weight: 600;
    font-size: 16px;
    color: #1F2432;
    display: block;
    font-family: "Lato", sans-serif;
    line-height: 23px;
  }

  .card__description-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #2C3242;
    display: block;
    line-height: 17px;
    margin-top: 6px;
    margin-bottom: 7px;
  }

  .card__article-number-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #797B86;
    line-height: 21px;
  }

  .card__buttons-change-count-style {
    width: 102px;
    display: flex;
  }

  .card__button-left-style {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .card__button {
    width: 32px;
    height: 34px;
    background-color: #F6F8FA;
    font-size: 8px;
    line-height: 1px;
    border: none;
  }

  .card__button-text-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #1F2432;
    line-height: 34px;
    width: 34px;
    background-color: #F6F8FA;
    height: 34px;
    display: block;
    text-align: center;
    margin-left: 2px;
    margin-right: 2px;
  }

  .card__text-price {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #1F2432;
    text-align: center;
    display: block;
    width: 100%;
    margin-top: 8px;
  }

  .card__info-count-style {
    margin-right: 84px;
  }

  .card__price-style {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
  }

  .card__button-delete-style {
    background-color: white;
    border: none;
    margin-right: 0;
    margin-left: auto;
    margin-top: -10px;
  }

  .card__icon-cross {
    height: 12px;
    width: 12px;
  }

</style>