<template>
    <div class="container">
        <div class="footer">
            <h1>stay connected</h1>
            <div class="btn">
                <input type="email" id="email" placeholder="email">
            
                <button type="submit">sign up</button>
                <img :src="account" alt="account-pic" />
            </div>
        </div>
    </div>
</template>
<script>
import account from '@/assets/images/account.png'
export default {
    setup() {
        
        return{
            account
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
.footer{
    margin: 5%;
    background:maroon;
    width: 1437px;
    height: 192px;
    max-width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    color: white;
    text-transform: uppercase;
}
input{
    background: #595656;
    border: none;
}
.btn{
    display: flex;
    padding: 2%;
    width: 50%;
    max-width: 100vh;
}
button{
    text-transform: uppercase;
    color: white;
    border-radius: 100%;
    width: 88.3px;
    height: 43px;
    max-width: 100vh;
    border: 1px solid white;
    background: none;
}
img{
    max-width: 100vh;
    width: 20%;
}
</style>