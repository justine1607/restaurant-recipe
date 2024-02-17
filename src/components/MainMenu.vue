<template>
    <div class="container background">
        <!-- <img :src="miniature" alt="food-pic" /> -->
        <h1> Main Menu</h1>
            <div class="images">
                <div class="card-1">
                    <img :src="Eggplant" alt="talong" />
                    <div class="card-text">
                        <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
                        <p>P 210</p>
                    </div>
                </div>
                <div class="card-2">
                    <img :src="pizza" alt="food-pic" />
                    <div class="card-text">
                        <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
                        <p>P   210</p>
                    </div>
                </div>
                <div class="card-3">
                    <img :src="blueberry" alt="food-pic" /> 
                    <div class="card-text">
                        <h3>Roasted Miniature<br> Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
                        <p>P   210</p>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import miniature from '@/assets/images/back2.png'
import Eggplant from '@/assets/images/image5.png'
import pizza from '@/assets/images/image6.png'
import blueberry from '@/assets/images/image7.png'
export default {
    setup() {
        return{
            miniature,
            Eggplant,
            pizza,
            blueberry
        }
    },
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
}
h1{
    color: white;
    margin-top: 2%;
    font-size: 48px;
}
img{
    margin-top: -21%;
    position: relative;
    z-index: -3;
}
h3{
    color: #787878;
}
.images{
    margin-top: 2%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.card-1{
    margin-left: -8%;
}
.card-2{
    margin-top: 10%;
    margin-left: 8%;
}
.card-3{
    margin-left: 8%;
}
.card-text{
    display: flex;
}
p{
    color: white;
    font-size: 25px;
    margin-left: 5%;
}
</style>