<template>
    <h1>Produk</h1>
    <div ></div>
    <div class="flex-container">
        <div v-for="produk in state" :key="produk.id" class="card">
            <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id} }">
            <h4 style="text-align: center;">{{ produk.nama }}</h4>
        </router-link>
        </div>
    </div>
  </template>
  
  <script>
  import { computed, onMounted, reactive } from 'vue';
  import { produk } from '@/assets/Produk';
  
  export default {
    props:['kategoriId'],
        setup(props) {
            const filteredProduk = computed(() => {
                return produk["produk"].filter((item) => item.kategori_id == props.kategoriId)
            });
        }
    }
    setup(props, context)
    {
        const state = reactive(produk["produk"]);
  
        onMounted(() =>{
            context.emit("id-menu", 5);
        })
  
        return {
            state
        }
    }
  
  </script>
    <style scoped>
  .flex-container {
    display: flex;
  }
  .card {
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    border-radius: 10px;
    background-color: rgb(170, 170, 170);
  }
  
  .card:hover{
    box-shadow: 0 15px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
  .container{
    padding: 2px 16px;
  }
  </style>