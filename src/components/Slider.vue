<template>
<div class="container">
    <div class="back1">
        <!-- <img :src="background" alt="Heropic" /> -->
    </div>
    <div class="slide">
        <h1>5 Vegetarian Recipe Everyone will Enjoy</h1>
            <img :src='sliderImage' alt="food-pic" />
        <div class="pic-content">
            <h6>Lentil Frittata</h6>
            <p>Perfect for a hearty breakfast, lunch or dinner, this lentil frittata is an absolute <br> favorite.  
            The lentils add a nice nuttiness balanced by the potatoes and feta.<br>To bring it all 
            together, we top the frittata with chopped kalamata and green olives plus<br> a good 
            drizzle of olive oil. You can make this dish ahead of time and enjoy<br>it for a few days 
            since it keeps well in the fridge and reheats nicely, too.
            </p>
        </div>
            <button class="btn" type="submit">See Recipe</button>
    </div>
</div>
</template>
<script>
import background from "@/assets/images/back1.png"
import sliderImage from "@/assets/images/image4.png"
export default {
    setup() {
        
        return{

            sliderImage,
            background
        
        }
    },
}
</script>
<style scoped>

.back1{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.slide{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10%;

}
img{
    border: none;
    margin-left: -8%;
}
h1{
    color: white;
    margin: -10% 0 0 0;
    padding: 2%;
}
.pic-content{
    margin: 2% 0 0 -7%;
}
h6{
    color: white;
    margin-top: 2%;
    margin-left: 7%;
    line-height: 1.5;
    font-size: 24px;
    letter-spacing: 7px;

}
p{
    color: white;
    margin-top: 2%;
    margin-left: 7%;
    line-height: 1.5;
    letter-spacing: 4px;
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
    margin: 2% 0 0 -32%;
    padding: 4px;

}
</style>