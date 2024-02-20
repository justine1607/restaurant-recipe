<template>
  <div class="container">
    <div class="form">
        <h1>Online Reservation</h1>
        <form @submit.prevent="onlineReservation">
          <div>
            <input type="text" id="name" v-model="reservation.name" placeholder="Name" required>
            <input type="email" id="email" v-model="reservation.email" placeholder="Email" required>
          </div>
          <div class="second">
            <input type="number" id="person" v-model="reservation.person" placeholder="Number of Persons" required>
            <input type="date" id="date" v-model="reservation.date" required>
            <input type="time" id="time" v-model="reservation.time" required>
          </div>
          <div>
            <textarea id="message" v-model="reservation.message" placeholder="Message"></textarea>
          </div>
          
          <button type="submit">Book a Table</button>
        </form>
        <div v-if="showMessage" class="message">
          Reservation submitted successfully!
        </div>
    </div>
      <div class="contact">
          <h1 class="h1">contact us</h1>
          <div class="images">
            <div class="card">
                <img :src="location" alt="loaction-pic" />
                <div class="text">
                  <h3>123,HeroSt.</h3>
                </div>
            </div>
            <div class="card">
                <img :src="email" alt="email-pic" />
                <div class="text">
                  <h3>info@gmail.com</h3>
                </div>
            </div>
            <div class="card">
                <img :src="call" alt="phone-pic" />
                <div class="text">
                  <h3>+3695451066</h3>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import location from '@/assets/images/location.png'
import email from '@/assets/images/email.png'
import call from '@/assets/images/phone.png'
import { ref } from 'vue';

export default {
  setup() {
    const reservation = ref({
      name: '',
      email:'',
      person:'',
      date:'',
      time:'',
      message:''
    });
    
    const showMessage = ref(false);

    const onlineReservation = () => {
      // Simulate a successful form submission (without sending data to a server)
      console.log('Reservation submitted:', reservation.value);
      
      showMessage.value = true;

      // Hide the success message after 3 seconds
      setTimeout(() => {
        showMessage.value = false;
      }, 3000);
    };

    return {
      reservation,
      onlineReservation,
      showMessage,
      location,
      email,
      call
      
    };
  }
};
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  background: #000000;
  margin-top: 2%;
  max-width: 100vh;
  width: 45%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
form{
  margin-left: 5%;
  width: 850px;
  height: 517px;
  max-width: 100vh;
}
img{
  margin-bottom: 25%;
}
div{
  display: flex;
  
  
}
h1{
  color:white;
  margin-top:2%;
  margin-left: 15%;
  text-transform: capitalize;
  font-size: 48px;
  width: 100%;
  max-width: 100vh;
}

h3{
  color: white;
}
input,textarea,button{
  padding: 2%;
  margin: 2% 2% 5% 0;
  max-width: 100vh;
  width: 50%;
  background: #595656;
  color: white;
  border: none;
}
textarea,button{
  max-width: 100vh;
  width: 100%;
}
button{
  background: #D89756;
  border-radius: 8px;
  border: none;
}
.contact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: -10%;
}
.h1{
  color:white;
  margin-top:-55%;
  margin-left: 15%;
  text-transform: capitalize;
  font-size: 48px;
  width: 100%;
  max-width: 100vh;
}
.images{
  display: flex;
  flex-direction: column;
  max-width: 100vh;
  width: 20%;
  margin-bottom: 2%;
  margin-top: 10%;
}
.card{
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  margin-top: 25%;
}
.text{
  max-width: 100vh;
  width: 20%;
}
.message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
