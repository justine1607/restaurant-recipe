<template>
    <div class="container">
        <h1> gallery</h1>
        <div class="images">
            <div class="card">
                <img :src="pic1" alt="gallery-pic" />
                
            </div>
            <div class="middle">
                <div class="card-1">
                    <img :src="pic2" alt="gallery-pic" />
            
                </div>
                <div class="card">
                    <img :src="pic3" alt="gallery-pic" />
                
                </div>
            </div>
            <div class="card">
                <img :src="pic4" alt="gallery-pic" />
               
            </div>
        </div>
    </div>
</template>
<script>
import pic1 from '@/assets/images/pic1.png'
import pic2 from '@/assets/images/pic2.png'
import pic3 from '@/assets/images/pic3.png'
import pic4 from '@/assets/images/pic4.png'
export default {    
    setup() { 
        return{
            pic1,
            pic2,
            pic3,
            pic4

        }
    },
}
</script>
<style scoped>
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1{
    color:white;
    margin-top:2%;
    text-transform: capitalize;
    font-size: 48px;
}
.images{
   display: flex;
   justify-content: center;
   align-items: center;
   gap:5%;
   margin-top:2%;
}
.middle{
    display: flex;
    flex-direction: column;
    margin-top: 2%;
}
.middle .card-1 {
        margin-bottom: 50px; /* Adjust this value to increase or decrease the space */
    }
</style>