<template>
  <div class="gallery-block">
    <div class="container">
      <div class="gallery-grid">
        <h2 class="description-trans"> gallery</h2>
        <div class="images ">
            <div class="card card-left">
                <img :src="pic1" alt="gallery-pic" />

            </div>
            <div class="middle card-center">
                <div class="card-1">
                    <img :src="pic2" alt="gallery-pic" />

                </div>
                <div class="card">
                    <img :src="pic3" alt="gallery-pic" />

                </div>
            </div>
            <div class="card card-right">
                <img :src="pic4" alt="gallery-pic" />

            </div>
        </div>
    </div></div></div>
</template>
<script>
import pic1 from '@/assets/images/pic1.png'
import pic2 from '@/assets/images/pic2.png'
import pic3 from '@/assets/images/pic3.png'
import pic4 from '@/assets/images/pic4.png'
import {onMounted} from "vue";
export default {
    setup() {
      onMounted(() =>{
        const elements = document.querySelectorAll('.description-trans, .card-center , .card-right, .card-left');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            } else {
              entry.target.classList.remove('animate');
            }
          });
        },);

        elements.forEach((element)  => {
          observer.observe(element);
        });
      });
        return{
            pic1,
            pic2,
            pic3,
            pic4

        }
    },
}
</script>
<style scoped>
.container{
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  margin-top: 90px;
}
.gallery-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
h2{
  grid-column: 3 / span 2;
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;
  text-transform: capitalize;
}
.description-trans{
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-10%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.description-trans.animate{
  opacity: 1;
  transform: translateX(0);
}
.card-center {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.card-center.animate {
  opacity: 1;
  transform: translateY(0%);
}
.card-right {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.card-right.animate {
  opacity: 1;
  transform: translateX(-50%);
}
.card-left {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.card-left.animate {
  opacity: 1;
  transform: translateX(50%);
}
.images{
  grid-column: 1 / span 6;
   display: flex;
   justify-content: center;
   align-items: center;
   gap:5%;

}
.middle{
    display: flex;
    flex-direction: column;
    margin-top: 2%;
}
.middle .card-1 {
        margin-bottom: 50px; /* Adjust this value to increase or decrease the space */
    }
</style>