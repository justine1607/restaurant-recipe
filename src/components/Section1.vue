
<template>
    <div class="container">
        <div class="diamond">
        </div>
        <div class="text">
            <h2 class="house">HOUSE</h2>
            <h2>SPECIALTIES</h2>
        </div>
        <div class="images">
            <div class="card">
                <img :src="talongfood" alt="talong" />
                <div class="card-content">
                    <h3>Roasted Miniature Eggplant with Creamy <br> Tahini and Plum Salsa</h3>
                    <p>P210</p>
                    
                </div>
                <div class="green">
                   <img :src="greenstar" alt="rating-star" />
                    </div>
                
            </div>
            <div class="card">
                <img :src="beef" alt="food pics" />
                <div class="card-content">
                    <h3>Warm Lentlis with Wilted Chard, Roasted <br> Beefs and Goat Cheese</h3>
                    <p>P210</p>
                </div>
                <div class="green">
                   <img :src="greenstar" alt="rating-star" />
                    </div>
            </div>
            <div class="card">
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

</template>
<script>
import talongfood from "@/assets/images/image1.jpeg";
import beef from "@/assets/images/image2.jpeg";
import chopsuey from "@/assets/images/images3.jpeg";
import greenstar from "@/assets/images/svg-stars.png";


export default {
    setup() {
        
        return{
            talongfood,
            beef,
            chopsuey,
            greenstar
        }
    },
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.diamond{
    background: #D89756;
    width: 187px;
    height: 192px;
    transform: rotate(45deg) skew(-3deg);
    top: 80%;
    left: 57%;
    z-index: 1;
    border-radius: 100%;
    position: absolute;
}
.text{
    display: flex;
    flex-direction: column;
    top: 85%;
    left: 1470px;
    justify-content: center;
    align-items: center;
    z-index: 2;
    position: absolute;
    

}
h2{
    font-family: 'cursive';
    font-size: 24px;
    color: white;
    font-weight: 600;
    
}
.images {
    display: flex;
    flex-wrap: wrap;
    gap: 0px;
    justify-content: center;
    align-items: center;
    max-width: 100vh;
    margin-top: 7%;
}

.card {
    padding: 1%;
    border-radius: 10px;
    text-align: center;
    flex: 1 0 calc(33.33% - 20px); /* Adjust width as needed */
}

.card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.card-content {
    margin-top: 15px;
    display: flex;
    color: white;
    width: 85%;
    max-width: 100vh 
}
.green{
    width: 50%;
    padding: 2%;
}
.card h3 {
    font-size: 18px;
    margin: 20px 0 0 10%;
}

.card p {
    font-size: 24px;
    color: white;
    margin: 10px 0 0 10%;
}

</style>