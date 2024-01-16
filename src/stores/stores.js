
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
      console.log("fetching")
      fetch('http://localhost:3000/categoriesTree/1')
      .then(res => res.json())
        .then(json=>
        this.categories = json.categories
      )
    }
  }
})
