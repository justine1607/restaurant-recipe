<template>
  <div class="carousel-block">
    <div class="container">
      <div class="carousel-grid">
        <div class="slider-text slide-trans">
          <h2 class="house">5 Vegetarian Recipe </h2>
          <h2>Everyone will Enjoy</h2>
        </div>
        <div class="slide-container card">
          <div class="slides">
            <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: index === counter }" alt="food-pic" />
          </div>
          <div class="carousel-btn">
            <span class="prev" @click="prevBtn">&#10094;</span>
            <span class="next" @click="nextBtn">&#10095;</span>
          </div>
          <div class="dotsContainer">
            <div v-for="(dot, index) in images" :key="index" :class="{ dot: true, active: index === counter }" @click="setSlide(index)"></div>
          </div>
        </div>
        <div class="pic-content description-trans">
          <h6>Lentil Frittata</h6>
          <p>
            Perfect for a hearty breakfast, lunch or dinner, this lentil frittata is an absolute <br> favorite.
            The lentils add a nice nuttiness balanced by the potatoes and feta.<br>To bring it all
            together, we top the frittata with chopped kalamata and green olives plus<br> a good
            drizzle of olive oil. You can make this dish ahead of time and enjoy<br>it for a few days
            since it keeps well in the fridge and reheats nicely, too.
          </p>
        </div>
        <div class="description-trans slide-btn">
          <button class="btn" type="submit">See Recipe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import Image1 from "@/assets/images/image4.png";
import Image2 from "@/assets/images/Rectangle 70.png";
import Image3 from "@/assets/images/Rectangle 71.png";
import Image4 from "@/assets/images/Rectangle 72.png";
import Image5 from "@/assets/images/Rectangle 73.png";
export default {
  setup(){
    const counter = ref(0);
    const images = [Image1, Image2, Image3, Image4, Image5];

    onMounted(() => {
      const elements = document.querySelectorAll(".card, .slide-trans, .description-trans");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      });

      elements.forEach((element) => {
        observer.observe(element);
      });
    });

    const nextBtn = () => {
      if (counter.value >= images.length - 1) {
        counter.value = 0;
      } else {
        counter.value++;
      }
    };

    const prevBtn = () => {
      if (counter.value <= 0) {
        counter.value = images.length - 1;
      } else {
        counter.value--;
      }
    };

    const setSlide = (index) => {
      counter.value = index;
    };

    return {
      counter,
      images,
      nextBtn,
      prevBtn,
      setSlide,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  margin-top: 90px;
}
.carousel-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
.slider-text {
  grid-column: 3 / span 3;
  display: flex;
  flex-direction: column;
  color: white;
}
h2 {
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;
}
.slide-trans {
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.slide-trans.animate {
  opacity: 1;
  transform: translateX(0);
}
.card.animate {
  opacity: 1;
  transform: translateY(0);
}

.card {
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.description-trans {
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-10%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.description-trans.animate {
  opacity: 1;
  transform: translateX(0);
}
.slide-container {
  grid-column: 2 / span 4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 3px solid #ede6d6;
  overflow: hidden;
  grid-row: span 10;
}
.slides {
  position: relative;
  width: 100%;
  height: 100%;
}
.slides img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  animation: fade 0.5s ease-in forwards;
}
.slides img:not(.active) {
  display: none;
}
.next, .prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 14px;
  color: #eeee;
  font-size: 24px;
  font-weight: bold;
  transition: 0.5s;
  border-radius: 3px;
  user-select: none;
  cursor: pointer;
  z-index: 1;
}
.next {
  right: 20px;
}
.prev {
  left: 20px;
}
.next:hover, .prev:hover {
  background-color: #ede6d6;
  opacity: 0.8;
  color: #222;
}
.dotsContainer {
  position: absolute;
  bottom: 5px;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
}
.dot {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 2px;
  border: 3px solid #bbb;
  display: inline-block;
  transition: background-color 0.6s ease;
  cursor: pointer;
}
.dot.active {
  background-color: #00ff00;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
h1 {
  color: white;
  margin: -10% 0 0 0;
  padding: 2%;
  font-size: 24px;
  font-weight: bold;
}
.pic-content {
  grid-column: 2 / span 4;
}
h6 {
  color: white;
  line-height: 1.5;
  font-size: 24px;
  letter-spacing: 7px;
}
p {
  color: white;
  margin-top: 2%;
  font-size: 24px;
  line-height: 1.5;
}
.slide-btn {
  grid-column: 2 / span 2;
}
.btn {
  color: aliceblue;
  font-size: 16px;
  font-family: 'Arial Blacl';
  background-color: #D89756;
  border-radius: 8px;
  width: 150px;
  height: 41px;
  border: none;
  padding: 4px;
}
</style>
