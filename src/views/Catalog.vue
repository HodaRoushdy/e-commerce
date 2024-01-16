<template>
    <Toast />
        <MyModal/>
    <div class="products-list">
            <div
                class="product"
                v-for="product in productStore.products"
                :key="product.id"
                >
                <img :src="product.thumbnail">
                <div class="caption">
                    <h2>Brand : {{ product.brand }}</h2>
                    <p>Description : {{ product.description }}</p>
                    <span>Price : ${{ product.price }}</span>
                </div>
                <div class="forBtns">
                    <ConfirmDialog></ConfirmDialog>
                    <Button @click="confirmDel()" label="Delete" severity="danger"/>
                    <Button label="Update" severity="warning" @click="showWarn" />
                </div>
    </div>
    </div>
  
</template>


<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CatalogView'
})
</script>


<script setup>
import ConfirmDialog from 'primevue/confirmdialog';
import { onMounted } from 'vue';
import { productsStore } from '../stores/stores';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
import Button from 'primevue/button';
import { useConfirm } from "primevue/useconfirm";


import MyModal from '@/components/MyModal.vue';

const confirm = useConfirm();
const toast = useToast();


const confirmDel = () => {
    confirm.require({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        rejectClass: 'p-button-text p-button-text',
        acceptClass: 'p-button-danger p-button-text',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted', life: 3000 });
        },
        reject: () => {
            toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
// const showSuccess = () => {
//     toast.add({ severity: 'success', detail: 'added successfully', life: 3000 });
// };
const showWarn = () => {
    toast.add({ severity: 'warn', detail: 'updated successfully', life: 3000 });
};


const productStore = productsStore()

onMounted(() => {
    productStore.fetchProductsFromDB()
    console.log("mounted ....")
})


</script>

<style scoped>
.products-list{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
}

.product{
    flex-basis: 20%;
    margin: 8px;
    padding: 16px;
    box-shadow: 0px 0px 14px 1px #e6e6e6;
    cursor: pointer;
}

.product img{
    width: 70%;
    height: 30%;
}
.caption{
    height: 50%;
}
.forBtns{
display: flex; justify-content: center;
align-items: end;
gap: 2px;
}
</style>