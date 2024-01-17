<template>
    <Toast/>
    <div class="card flex justify-content-center">
        <Button label="Show" icon="pi pi-external-link" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="Add Product" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <form action="addProduct" class="flex forForm">
                        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select category" class="md:w-20rem w-full" />
                        <div class="flex forInputs">
                    <span class="p-float-label">
                        <InputText id="value" v-model="namevalue" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                        <label for="value">product name</label>
                    </span>
                    <span class="p-float-label">
                        <InputText id="value" v-model="categoryIdvalue" type="number" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                        <label for="value">category id</label>
                    </span>
                        </div>
                        <div class="lastInput">
                            <label for="picture" class="label">product picture</label>
                            <InputText id="picture" v-model="picturevalue" type="file" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" />
                        </div>
                
                        <Button type="submit" @click="showSuccess" label="Add Product"/>
                        <div class="test" v-for="category in categoryStore.categories"
                        :key="category.id">
                            <p>{{ category.name }}</p>
                        </div>
                    </form>
                </Dialog>
                
            </div>
</template>

<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import TreeSelect from 'primevue/treeselect';
import { useToast } from "primevue/usetoast";
import { onMounted, ref } from 'vue';
import { categoriesStore } from '../stores/stores';
const toast = useToast();


const showSuccess = () => {
    toast.add({ severity: 'success', detail: 'added successfully', life: 3000 });
};
const visible = ref(false);
const namevalue = ref(null);
const categoryIdvalue = ref(null);
const picturevalue = ref(null);
const nodes = ref(null);
const selectedValue = ref(null);
const categoryStore = categoriesStore()
onMounted(async ()  => {
    const data = await categoryStore.fetchCategoriesAsTree();
    console.log(categoryStore)
        this.nodes = data
    console.log("mounted ....")
});
</script>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'MyModalComponent'
})

</script>

<style>
.test{
    background-color: red;
}
.forInputs{
    display: flex;

    padding-top: 0.5rem;
}
.lastInput{
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
}
.label{
    padding-bottom: 0.5rem;
}

</style>