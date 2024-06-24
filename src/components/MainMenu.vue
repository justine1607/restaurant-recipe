<template>
  <div class="main-menu-block">
    <div class="container">
      <div class="menu-grid">
        <div class="menu-text description-trans">
        <h2> Main Menu</h2>
        </div>
        <div class="images card">
          <div class="card-1">
            <img :src="Eggplant" alt="talong" />
            <div class="card-text">
              <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
              <p>P 210</p>
            </div>
          </div>
          <div class="card-2">
            <img :src="pizza" alt="food-pic" />
            <div class="card-text">
              <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
              <p>P   210</p>
            </div>
          </div>
          <div class="card-3">
            <img :src="blueberry" alt="food-pic" />
            <div class="card-text">
              <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
              <p>P   210</p>
            </div>
          </div>
        </div>
    </div></div></div>
</template>
<script>
import miniature from '@/assets/images/back2.png'
import Eggplant from '@/assets/images/image5.png'
import pizza from '@/assets/images/image6.png'
import blueberry from '@/assets/images/image7.png'
import {onMounted} from "vue";
export default {
    setup() {
      onMounted(() =>{
        const elements = document.querySelectorAll('.card , .description-trans');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            } else {
              entry.target.classList.remove('animate');
            }
          });
        }, );

        elements.forEach((element)  => {
          observer.observe(element);
        });
      });
        return{
            miniature,
            Eggplant,
            pizza,
            blueberry
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
.menu-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
.menu-text{
  grid-column: 3 / span 2;
}
.slide-trans{
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.slide-trans.animate{
  opacity: 1;
  transform: translateX(0);
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
.card {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.card.animate {
  opacity: 1;
  transform: translateY(0);
}
h2{
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;

}
h3{
    color: #ffffff;
  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;letter-spacing: 1.5px;line-height: 20px;
}
.images{
  grid-column: 2 / span 3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2%;
}
.card-1{
  grid-column: 2 / span 1;

}
.card-2{
  grid-column: 3 / span 1;
  margin-top: 10%;
}
.card-3{
  grid-column: 4 / span 1;
}
.card-text{
    display: flex;
}
p{
    color: white;
    font-size: 25px;
    margin-left: 5%;
}
</style>