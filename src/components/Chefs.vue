<template>
    <div class="container">
        <h1> our chefs</h1>
        <div class="images">
            <div class="card">
                <img :src="chef1" alt="chefs-pic" />
                <div class="name">
                    <h2> Miyoko Schinner</h2>
                    <p> Head chief </p>
                </div>
            </div>
            <div class="card">
                <img :src="chef2" alt="chefs-pic" />
                <div class="name">
                    <h2> Miyoko Schinner</h2>
                    <p> Head chief </p>
                </div>
            </div>
            <div class="card">
                <img :src="chef3" alt="chefs-pic" />
                <div class="name">
                    <h2> Miyoko Schinner</h2>
                    <p> Head chief </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import chef1 from '@/assets/images/chef1.png'
import chef2 from '@/assets/images/chef2.png'
import chef3 from '@/assets/images/chef3.png'
export default {
    setup() {
        return{
            chef1,
            chef2,
            chef3
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
    color: white;
    margin-top: 2%;
    font-size: 48px;
    text-transform: capitalize;
}
.images{
   display: flex;
   justify-content: center;
   align-items: center;
   gap:5%;
   margin-top:2%;
}
.card{
    max-width: 100vh;
}
.name{
    gap: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h2,p{
    color: white;
}
</style>