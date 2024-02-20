<template>
    <div class="container">
        <div class="footer">
            <h1>stay connected</h1>
            <div class="btn">
                <div class="input-container">
                <input type="email" id="email" placeholder="email">
                </div>
                
                    <button type="submit">sign up</button>
                
            </div>
            <ul>
                <li>
                    <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                    <FontAwesomeIcon :icon="faSkype" :style="{ color: 'gray', fontSize: '24px' }" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                   <FontAwesomeIcon :icon="faFacebook" :style="{ color: 'gray', fontSize: '24px' }" />
                    </a>
                </li>
                 <li>
                    <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                   <FontAwesomeIcon :icon="faInstagram" :style="{ color: 'gray', fontSize: '24px'  }" />
                    </a>
                </li>
            </ul>
             
        </div>
    </div>
</template>
<script>
import account from '@/assets/images/account.png'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';

export default {
    components: {
        FontAwesomeIcon,
    },
    setup() {

        return {
            account,
            faSkype,
            faFacebook,
            faInstagram
        };
    },
};
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.footer{
    margin: 5% 0 0;
    background:#000000;
    width: 100%;
    height: 100%;
    /* max-width: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    color: white;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 5%;
}
.input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
  }
input{
    background: #595656;
    border: none;
    width: 216px;
    max-width: 100vh;
    height: 43px;
    border-radius: 100px;
    padding: 10%;
}
.btn{
    padding: 2%;
    width: 50%;
    max-width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    text-transform: uppercase;
    color: white;
    border-radius: 8%;
    width: 88.3px;
    height: 43px;
    max-width: 100vh;
    border: 1px solid white;
    background: none;
    margin-left: 2%;
}
img{
    max-width: 100vh;
    width: 20%;
}
ul,li{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
}
li{
    margin-right: 30%;
}
</style>