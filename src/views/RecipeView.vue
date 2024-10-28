<template>
  <div class="block-recipe">
    <div class="container">
        <div class="card-1 card">
          <h3 class="title theme-h2">{{recipe.title}}</h3>
            <div class="text-wrapper" v-for="item in recipe.recipe" :key="item.id" >
              <div class="image-container">
                <img :src=item.image alt="">
              </div>
              <div class="text-container">
                <div>
                  <p class="count">{{item.count}}</p>
                </div>
                <h3 class="headline">{{ item.headline }}</h3>
                <div class="recipe-method">
                  <div class="ingredients">
                    <h4>Ingredients:</h4>
                    <ul>
                      <li v-for="(ingredient, index) in item.ingredients" :key="index">
                        {{ ingredient }}
                      </li>
                    </ul>
                  </div>
                  <div class="directions">
                    <h4>directions</h4>
                      <div v-for="(step, index) in item.steps" :key="index">
                        <h3>{{ step.step }}</h3>
                        <p>{{ step.description }}</p>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "src/assets/styles/blocks/recipe";
</style>
<script>
// import Modal from "@/components/Modal.vue";
import {onMounted, ref} from "vue";
// import Form from "@/components/Form.vue";
export default {
  components: {},
  props: {
    heroData: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const recipe = ref({}, []);
    onMounted(() => {
      fetch('http://localhost:3000/recipe')
          .then(response => response.json())
          .then(data => {
            recipe.value = data;
          })
          .catch(error => console.error('Error fetching recipe data:', error));

    });
    return {
      recipe
    }
  }
}

// import Hero from "@/components/AppHeader.vue";
// import {onMounted, ref} from "vue";
// import Footer from "@/components/Footer.vue";
//
// export default {
//   components: {Hero, Footer, Modal},
//   setup() {
//     const home = ref([])
//     const header = ref({
//       title: 'Reserve Table',
//       text: 'Please fill the form below to enable us serve you better!'
//     });
//     const firstname = ref('')
//     const lastname = ref('')
//     const email = ref('')
//     const phone = ref('')
//
//     const showModal = ref(false)
//     const toggleModal = () => {
//       console.log('modal button clicked')
//       showModal.value = !showModal.value
//     }
//     const openModal = () => {
//       console.log('modal wrkinf')
//       showModal.value = !showModal.value
//     }
//     onMounted(() =>{
//
//       fetch("http://localhost:3000/home")
//           .then( res => res.json())
//           .then (data => home.value = data)
//           .catch( err => console.log(err.message))
//
//     })
//     return {
//       home,
//       showModal,
//       header,
//       toggleModal,
//       openModal,
//       firstname, lastname, email, phone,
//     };
//   }
// }
</script>