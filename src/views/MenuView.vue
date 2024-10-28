<template>
    <div class="block-menu-view">
        <div class="theme-container">
          <div class="grid">
            <div class="appetizer" v-for="item in menus.menus" :key="item.id">
              <h3 class="theme-h2 menus-headline">{{item.headline}}</h3>
              <img :src=item.image class="menu_view_img" alt="appeite">
            </div>
          </div>

        </div>
    </div>
</template>
<script>
import appetite from '@/assets/images/menus-images/1.png'
import maindishes from '@/assets/images/menus-images/4.png'
import desserts from '@/assets/images/menus-images/2.png'
import drink from '@/assets/images/menus-images/3.png'
import {onMounted, ref} from "vue";
export default {
  setup(){
    const menus = ref({});
    onMounted(() => {
      fetch('http://localhost:3000/menus')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            menus.value = data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    });
    return{
      menus,
      appetite,
      maindishes,
      desserts,
      drink
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/styles/blocks/menuview";
</style>
