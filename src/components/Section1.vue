
<template>
  <div class="section1-block">
<div class="section1-container">
  <div class="section1-grid">
    <div class="section1-text section1-header">
    <h2 class="house">HOUSE SPECIALTIES</h2>
    </div>
    <div class="images">
      <div class="card-1 card">
        <img :src="talongfood" alt="talong" />
        <div class="card-content">
          <h3>Roasted Miniature Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
          <p>P210</p>
        </div>
        <div class="green">
          <img :src="greenstar" alt="rating-star" />
        </div>
      </div>
      <div class="card-2 card">
        <img :src="beef" alt="food pics" />
        <div class="card-content">
          <h3>Warm Lentlis with Wilted Chard, Roasted <br> Beefs and Goat Cheese</h3>
          <p>P210</p>
        </div>
        <div class="green">
          <img :src="greenstar" alt="rating-star" />
        </div>
      </div>
      <div class="card-3 card">
        <img :src="chopsuey" alt="food pics" />
        <div class="card-content">
          <h3>Chopsuey with Chicken  and Broccoli</h3>
          <p>P210</p>
        </div>
        <div class="green">
          <img :src="greenstar" alt="rating-star" />
        </div>
      </div>
    </div>

      </div>
</div>
  </div>
</template>
<script>
import { onMounted } from 'vue';
import talongfood from "@/assets/images/image1.png";
import beef from "@/assets/images/image2.png";
import chopsuey from "@/assets/images/image3.png";
import greenstar from "@/assets/images/svg-stars.png";

export default {
  components: {

  },
  setup() {
    onMounted(() => {
      const elements = document.querySelectorAll('.card , .section1-header');
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

    return {
      talongfood,
      beef,
      chopsuey,
      greenstar,
    };
  },
};
</script>

<style scoped>
.section1-container {
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  margin-top: 90px;
}

.section1-text {
  grid-column: 2 / span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.section1-header {
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-10%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.section1-header.animate {
  opacity: 1;
  transform: translateX(0);
}

h2 {
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;
}

.section1-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}

.images {
  grid-column: 2 / span 3;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2%;
}

.card.animate {
  opacity: 1;
  transform: translateY(0);
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

.card-content {
  display: flex;
}

.green {
  width: 50%;
  padding: 2%;
}

h3 {
  color: #ffffff;
  font-family: "Julius Sans One", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1.5px;
  line-height: 20px;
}

p {
  font-size: 25px;
  margin-left: 5%;
  color: white;
}
</style>