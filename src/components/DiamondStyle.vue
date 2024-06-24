<template>


    <div class="text">
      <h2 class="house">HOUSE</h2>
      <h2>SPECIALTIES</h2>
    </div>

</template>
<script setup>
</script>
<style scoped>

.diamond1{
  background: #000000;
  /* width: 187px; */
  /* height: 192px; */
  transform: rotate(45deg) skew(-3deg);
  z-index: 1;
  /* position: absolute; */
  border: 1px solid greenyellow;
  grid-column: 1 / span 4;
}
.diamond2{
  background: #000000;
  /* width: 187px; */
  /* height: 192px; */
  transform: rotate(45deg) skew(-3deg);
  z-index: 1;
  /* position: absolute; */
  border: 1px solid greenyellow;
  grid-column: 4 / span 3;
}

.text{
  display: flex;
  flex-direction: column;
  top: 30%;
  left: 17%;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: absolute;
  color: white;
}
h2{
  font-family: 'cursive';
  font-size: 24px;
  color: white;
  font-weight: 600;

}
</style>