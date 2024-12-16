<script lang="ts">

export default defineComponent({
  name: "ProductsSlideCard",
  props: ['slideContent'],
})
</script>

<template>
<div class="card-style">
  <img class="card__img-style" v-bind:src='slideContent.img' alt="img">
  <h1 class="card__title-style">{{slideContent.short_name}}</h1>
  <span class="card__description-style">{{slideContent.full_name}}</span>
  <span class="card__price-ru-style">{{slideContent.price_ru[0]}} &#8381; - {{slideContent.price_ru[1]}} &#8381;</span>
  <span class="card__price-eur-style">{{slideContent.price_eur[0]}} &#8364; - {{slideContent.price_eur[1]}} &#8364;</span>
  <button class="card__button-style">Подробнее</button>
</div>
</template>

<style scoped>

  .card-style {

  }

  .card__img-style {
    height: 245px;
    width: 245px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .card__title-style {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #1F2432;
  }

  .card__description-style {
    display: block;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    height: 60px;
    color: #1F2432;
  }

  .card__price-ru-style {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    color: #1F2432;
    display: block;
  }

  .card__price-eur-style {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    height: 60px;
    color: #797B86;
    display: block;
  }

  .card__button-style {
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #FFFFFF;
    width: 100%;
    height: 52px;
    background-color: #0069B4;
    border-radius: 4px;
    border: none;
  }
</style>