
import { defineStore } from 'pinia';

export const productsStore = defineStore("products", {
  state: () => ({
    products:[]
  }),
  actions: {
    fetchProductsFromDB() {
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
        .then(json=>
        this.products = json.products
      )
    }
  }
})
export const categoriesStore = defineStore("categories", {
  state: () => ({
    categories:[]
  }),
  actions: {
    fetchCategoriesAsTree() {
      fetch('http://localhost:3000/categoriesTree/')
      .then(res => res.json())
        .then(json =>
        {
          return json
        }
      )
    }
  }
})
