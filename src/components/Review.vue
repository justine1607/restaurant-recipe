<template>
  <div class="review-block">
    <div class=" container">
      <div class="review-grid">
        <h2 class="description-trans">What Our Costumer says<br>About Our Dish</h2>
        <div class="images cards">
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                </div>
                    <div class="circle">
                        <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
            </div>
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                </div>
                <div class="circle">
                    <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
               
            </div>
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                 </div>
                    <div class="circle">
                        <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
               
            </div></div></div>
        </div>
    </div>
</template>
<script>
import star from '@/assets/images/svg-stars.png'
import colon from '@/assets/images/svg-colon.png'
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
            star,
            colon
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
.review-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
h2{
  grid-column: 3 / span 3;
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;
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
  justify-content: center;
  align-items: center;
  gap: 2%;
}
img{
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
}
.card-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 0 0 0 ;
}
.card{
    background: white;
    max-width: 100vh;
    width: 300px;
    height: 350px;
}
hr{
    border: none;
    margin: 5% 0 10%;   
    max-width: 100vh;
    width: 77%;
    box-shadow: 0 0 0 1px #D89756;
}
p{
    color: black;

}
.circle{
    display: flex;
    gap: 20%;
    margin: 0 0 0 18%;
}
.avatar{
    max-width: 100vh;
    max-width: 100vh;
    border-radius: 100%;
    background: gray;
    width: 20%;
}
h3{
    color: black;
}
</style>