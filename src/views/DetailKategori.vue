<template>
    <div v-if="data.length == 0">
        <h1>Kategori {{ NamaKategori }} Tidak Ada</h1>
    </div>
    <div v-else>
        <h1>Kategori {{ NamaKategori }}</h1>
            <div class="flex-container">
                <div v-for="produk in data" :key="produk.id" class="card">
                     <img :src="getImgSrc(produk.img)" alt="Category Image"/>
                    <router-link class="container" :to="{ name : 'Detail', params:{id_produk : produk.id}}">
                    <h4>{{produk.nama }}</h4>
                </router-link>
                </div>
            </div>
    </div>
  </template>
<script>
import { computed } from 'vue';
import { produk } from '../assets/Produk';
import { kategori } from '@/assets/Kategori';
export default {
    props: [
        "id_kategori",
    ],
    setup(props){
        const detail = kategori["kategori"].find(function(item) {
            return item.id == props.id_kategori
            
        });
        const data = produk["produk"].filter(function(a){
            return detail.id == a.id_kategori
            
        });

        const NamaKategori = computed(() => {
            const cari = kategori.kategori.find((b) => b.id == props.id_kategori)
            return cari ? cari.namakategori : ''
        })
        
        const getImgSrc = (imgFileName) =>{
        return '../src/assets/img/' + imgFileName + '';
        }
      
        return{
            detail,
            data,
            NamaKategori,
            getImgSrc
            
        }
    }
}
</script>

<style scoped>
h1{
  text-align: center;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 300px;
    cursor: pointer;
    text-align: center;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0, 0, 0.2);
}
.container {
    padding: 2px 16px;
}
img{
  width: 150px;
  height: 150px;
}
</style>