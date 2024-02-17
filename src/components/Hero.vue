<template>
  <div class="hero">
    <!-- Use the imported image -->
    <img :src="heroImage" alt="Heropic" />
  </div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Menu</a></li>
    <li><a href="#">Recipe</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
  <div class="border">
    <h1>Healthy <br> Living</h1>
  </div>
  <button class="btn" type="submit">Book a Table </button>
</template>

<script>
// Import the image
import heroImage from "@/assets/images/first_back.jpg";

export default {
  setup() {
    return {
      // Return the imported image
      heroImage
    };
  },
}
</script>

<style scoped>
.hero {
  /* Set the height to 100vh to occupy the full viewport height */
  height: 100vh;
}

.hero img {
  /* Ensure the image fills the entire container */
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover; /* Preserve aspect ratio while covering the viewport */
}

/* Other styles as needed */
ul {
    display: flex;
    justify-content: start;
    margin-top: -45%;
    margin-left: 24%;
    color: white;
    list-style-type: none;
}
li{
    list-style-type: none;
    padding: 1%;
    color:white;
    text-decoration: none;
}
a {
  list-style-type: none;
  text-decoration: none;
  color: #ebf1f1;
}

.border {
    border: 5px solid white;
    z-index: 1;
    width: 22%;
    height: 68%;
    display: flex;
    justify-content: center;
    margin: 2% 0 0 16%;
    position: absolute;
}
h1{
    color: white;
    line-height: 1.5;
    font-size: 96px;
    font-family: MONOSPACE;
    top: 40%;
    margin-top: 45%;

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
    top: 72%;
    left: 34%;
    margin: 29% 0 0 23%;

}
</style>
