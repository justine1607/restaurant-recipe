<template>
  <div class="chefs-block">
    <div class="container">
      <div class="chefs-grid">
        <h2 class="description-trans"> our chefs</h2>
        <div class="images cards">
            <div class="card">
                <img :src="chef1" alt="chefs-pic" />
                <div class="name">
                    <h1> Miyoko Schinner</h1>
                    <p> Head chief </p>
                </div>
            </div>
            <div class="card">
                <img :src="chef2" alt="chefs-pic" />
                <div class="name">
                    <h1> Miyoko Schinner</h1>
                    <p> Head chief </p>
                </div>
            </div>
            <div class="card">
                <img :src="chef3" alt="chefs-pic" />
                <div class="name">
                    <h1> Miyoko Schinner</h1>
                    <p> Head chief </p>
                </div>
            </div>
        </div></div>
    </div></div>
</template>
<script>
import chef1 from '@/assets/images/chef1.png'
import chef2 from '@/assets/images/chef2.png'
import chef3 from '@/assets/images/chef3.png'
import {onMounted} from "vue";
export default {
    setup() {
      onMounted(() =>{
        const elements = document.querySelectorAll('.cards , .description-trans');
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
            chef1,
            chef2,
            chef3
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
.chefs-grid{
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
.cards {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.cards.animate {
  opacity: 1;
  transform: translateY(0);
}
.images{
  grid-column: 1 / span 6;
   display: flex;
   justify-content: center;
   align-items: center;
   gap:5%;
   margin-top:2%;
}
.card{
    max-width: 100vh;
}
.name{
    gap: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1 {
  margin-top: 20px;
    color: white;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
}
p{
  color: white;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
}
</style>