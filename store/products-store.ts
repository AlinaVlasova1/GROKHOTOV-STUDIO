import {products} from "~/mocks/products";
import type {IProduct} from "~/models/product-models";

export const useProductsStore = defineStore('productsStore', {
    state: () => {
        return {
            products: structuredClone(products),
        };
    },
    getters: {
        totalCost: (state) => {
            return state.products.reduce((acc: number, cur: IProduct) => {
                acc = acc + cur.count * cur.price;
                return acc;
            }, 0)
        },
        totalCount: (state) => {
            return state.products.reduce((acc: number, cur: IProduct) => {
                acc = acc + cur.count;
                return acc;
            }, 0)
        },
        calcCostProduct: (state) => {
            return (id: number) => {
               const findedProduct =  state.products.find((product) => product.id === id);
               return findedProduct ? (findedProduct.price * findedProduct.count) : null;
            }
        }
    },
    actions: {
        increaseCountProduct(id: number) {
            const findedProduct = this.products.find((product) => product.id === id);
            if (findedProduct) {
                findedProduct.count = findedProduct.count + 1;
            }
        },
        decreaseCountProduct(id: number) {
            const findedProduct = this.products.find((product) => product.id === id);
            if (findedProduct) {
                findedProduct.count = findedProduct.count - 1;

                if (findedProduct.count === 0) {
                    this.deleteProductById(id);
                }
            }
        },
        deleteProductById(id: number) {
            this.products = [...this.products.filter((product) => product.id !== id)];
        }
    }
})