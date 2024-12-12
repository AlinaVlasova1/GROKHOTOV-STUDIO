import {products} from "~/mocks/products";

export const useProductsStore = defineStore('productsStore', {
    state: () => {
        return {
            products: structuredClone(products),
        };
    },
})