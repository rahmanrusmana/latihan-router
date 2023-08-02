<template>
  <h1>kategori</h1>
  <div class="flex-container">
      <div v-for="kategori in cek" :key="kategori.id" class="card">
        <img :src="getImgSrc(kategori.img)" alt="Category Image"/>
      <router-link class="container" :to="{ name : 'DetailKategori', params:{id_kategori : kategori.id}}">
          <h4>{{ kategori.namakategori }}</h4>
      </router-link>
  </div>
  </div>
</template>
<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '@/assets/Kategori';
export default{
  setup(props,context){
      const cek = reactive(kategori["kategori"]);
      onMounted(() => {
          context.emit("id-menu",5)
      });

      const getImgSrc = (imgFileName) =>{
        return '../src/assets/img/' + imgFileName + '';
      }
      return{
          cek,
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
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
  transition: 0.3s;
  margin: 10px;
  min-width: 170px;
  cursor: pointer;
  text-align: center
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