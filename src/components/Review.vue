<template>
    <div class="container">
        <h1>What Our Costumer says<br>About Our Dish</h1>
        <div class="images">
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                </div>
                    <div class="circle">
                        <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
                
            </div>
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                </div>
                <div class="circle">
                    <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
               
            </div>
            <div class="card">
                <img :src="star" alt="rating-star" />
                <img :src="colon" alt="colon" />
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Aenean nec mattis quam. Morbi<br> non suscipit justo. Nam eu<br> consectetur dolor. Quisque ut<br> eleifend nibh. Donec ut massa<br> elit. Sed quis.
                    </p>
                    <hr>
                 </div>
                    <div class="circle">
                        <div class="avatar">
                        </div>
                        <h3>Costumer<br>Name</h3>
                    </div>
               
            </div>
        </div>
    </div>
</template>
<script>
import star from '@/assets/images/svg-stars.png'
import colon from '@/assets/images/svg-colon.png'
export default {
    setup() {
        return{
            star,
            colon
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
}
h1{
    color: white;
    margin: 2% 0 2% -23%;
    font-weight: bold;

}
.images{
    display: flex;
    justify-content: center;
    justify-content: center;
    align-items: center;
    gap: 2%;
}
img{
    margin-top: 10%;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
}
.card-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5% 0 0 0 ;
}
.card{
    background: white;
    max-width: 100vh;
    width: 300px;
    height: 350px;
}
hr{
    border: none;
    margin: 5% 0 10%;   
    max-width: 100vh;
    width: 77%;
    box-shadow: 0 0 0 1px #D89756;
}
p{
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.circle{
    display: flex;
    gap: 20%;
    margin: 0 0 0 18%;
}
.avatar{
    max-width: 100vh;
    max-width: 100vh;
    border-radius: 100%;
    background: gray;
    width: 20%;
}
h3{
    color: black;
}
</style>