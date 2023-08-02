<template> 

  <center>
    <div v-if="detail == undefined">
    <p>Produk Tidak Ada Broww</p>
  </div>

  <div v-else>
    <div class="flex-container">
      <h1>Detail {{ detail.nama }}</h1>
      <img :src="getImgSrc(detail.img)" alt="Category Image"/> 
      <h3>Harga {{ detail.harga }}</h3>
      <h3>Spesifikasi : </h3>
      <p>{{ detail.dek }}</p>
    </div>
  </div>
  </center>
  
</template>
<script>
import { produk } from '@/assets/Produk';
export default {
  props: [
      "id_produk",
  ],
  setup(props){
      const detail = produk["produk"].find(function(item) {
          return item.id == props.id_produk
          
      });
      const getImgSrc = (imgFileName) =>{
        return '../src/assets/img/' + imgFileName + '';
      }
      
      return{
          detail,
          getImgSrc
          
      }
  }
}
</script>

<style>
img{
  width: 400px;
}
</style>