<template>
<div class="block-hero">
    <div class="container">
      <div class="hero-container">
        <div class="hero-grid">
<!--          <div class="hero-img">-->
            <img :src="heroImage" alt="Heropic" class="hero-image" />
<!--          </div>-->
            <div class="text-container">
                <div class="header">Healthy</div>
                <div class="header"> Living</div>
                <div class="hero-btn">
                  <button class="btn" type="submit">Book a Table </button></div>
              </div>


<!--        </div>-->
      </div></div>
    </div>
</div>
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

<style>
.block-hero {
  margin: 0 auto;
  max-width: 3000px;
  .container {
    max-width: 3000px;
    .hero-container {
      //margin-top: 2%;
      .hero-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 51px;

        .hero-image {
          grid-column: 1 / span 6;
          width: 100%;
          grid-row: 1;
          background-size: cover;
        }
        .text-container {
          grid-column: 4 / 2;
          grid-row: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          line-height: 2;
          .header {
            color: white;
            font-size: 70px;
            font-family: "LXGW WenKai Mono TC", monospace;
            font-weight: 800;
          }
          .hero-btn {
            display: flex;
            justify-content: center;
            align-items: center;

            .btn {
              color: aliceblue;
              font-size: 16px;
              font-family: 'Arial Black';
              background-color: #D89756;
              border-radius: 8px;
              width: 150px;
              height: 41px;
              border: none;
              margin: 20px 0 0 0%;
            }
          }
        }
      }
    }
  }
}
</style>
