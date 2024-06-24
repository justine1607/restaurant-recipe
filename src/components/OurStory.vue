<template>
  <div class="story-container">
    <div class="container">
        <div class="story-grid">
            <div class="image">
                <img :src="story" alt="food pic" />
            </div>
            <div class="text description-trans">
                <h1> OUR STORY</h1>
                <hr>
                <p>Lorem ipsum dolor sit,<br>amet consectetur adipisicing<br> elit. Vitae eveniet<br> debitis inventore<br> deserunt, hic sit <br>dolorum quo quis animi<br> consequatur? Cumque quae,<br> itaque enim perferendis<br> in quos tenetur incidunt non.
                </p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import story from "@/assets/images/ourstory.png";
import {onMounted} from "vue";
export default {
    setup() {
        onMounted(() =>{
          const elements = document.querySelectorAll('.image , .description-trans');
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
            story
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
.story-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
.image{
  grid-column: 2 / span 2;
}
.description-trans{
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(10%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.description-trans.animate{
  opacity: 1;
  transform: translateX(0);
}
.image {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.image.animate {
  opacity: 1;
  transform: translateY(0);
}
img{
    margin: 15% 0 0 2%;
}
.text{
  grid-column: 4 / span 3;
  color: white;
  line-height: 1.5;
  font-family: MONOSPACE;
  margin-top: -2% 0 0 5%;
  margin-top: 10%;

}
h1{
  margin-top: 10%;margin-left: 20%;
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
}
hr {
    border: none;
    margin-left:  20%;
    max-width: 100vh;
    box-shadow: 0 0 0 3px #D89756;
}

p{
  color: white;
  /* margin: 0 0 -3%; */
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 1px;
  z-index: 1;
  margin-left: 20%;
  margin-top: 15%;
}
</style>