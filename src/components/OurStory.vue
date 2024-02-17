<template>
    <div class="container">
        <div class="story">
            <div class="image">
                <img :src="story" alt="food pic" />
            </div>
            <div class="text">
                <h1> OUR STORY</h1>
                <hr>
                <p>Lorem ipsum dolor sit,<br>amet consectetur adipisicing<br> elit. Vitae eveniet<br> debitis inventore<br> deserunt, hic sit <br>dolorum quo quis animi<br> consequatur? Cumque quae,<br> itaque enim perferendis<br> in quos tenetur incidunt non.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import story from "@/assets/images/ourstory.png";
export default {
    setup() {
        
        return{
            story
        }
    },
}
</script>
<style scoped>
.story{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
}
img{
    margin: 5% 0 0 2%;
}
.text{
    color: white;
    line-height: 1.5;
    font-family: MONOSPACE;
    margin-top: -2% 0 0 5%;
    margin-top: 10%;
}
h1{
    margin: -44% 0 0 20%;
}
hr {
    border: none;
    margin: 0 0 15% 20%;   
    max-width: 100vh;
    width: 77%;
    box-shadow: 0 0 0 3px #D89756;
}

p{
    color: white;
    margin: -2% 0 0 20%;
    font-size: 24px;
    line-height: 1.5;
    letter-spacing: 1px;
    z-index: 1;
}
</style>