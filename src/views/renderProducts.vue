
<template>
<div>

</div>
</template>


<script>
import { reactive } from 'vue';
const productsData = async () => {
    const prod = await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        // .then(console.log("..render data"))
    return prod.products
}
export const productsStore = reactive({
    productsList : productsData()
})

</script>