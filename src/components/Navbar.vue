<template>
  <header>
    <div class="block-navbar">
      <div class="container">
        <div class="navbar-grid">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Recipe</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header{
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;

}
.block-navbar{
  position: relative;
  height: 60px;
}
.container{
  max-width: 1900px;
  margin-inline: auto;
}
.navbar-grid{
  display: grid;grid-template-columns: repeat(6, 1fr);grid-gap: 51px;
  margin-inline: auto;
}
ul {
  display: flex;
  grid-column: 3 / span 3;
  grid-row: 1;
  position: relative;
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
  color: black;
  font-size: 24px;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
  margin-left: 50px;
}
a:hover{
  color: coral;
}

</style>
<script setup>




</script>