<template>
  <div class="form-block">
  <div class="container">
    <div class="form-grid">
      <h2 class="description-trans">Online Reservation</h2>
    <div class="form">
        <form @submit.prevent="onlineReservation">
          <div class="input-trans">
            <input class="field-name" type="text" id="name" v-model="reservation.name" placeholder="Name" required>
            <input type="email" id="email" v-model="reservation.email" placeholder="Email" required>
          </div>
          <div class="second input-trans">
            <input type="number" id="person" v-model="reservation.person" placeholder="Number of Persons" required>
            <input type="date" id="date" v-model="reservation.date" required>
            <input type="time" id="time" v-model="reservation.time" required>
          </div>
          <div class="input-trans">
            <textarea id="message" v-model="reservation.message" placeholder="Message"></textarea>
          </div>
          <div class="input-trans">
            <button class="contact-button input-trans" type="submit">Book a Table</button>
          </div>

        </form>
        <div v-if="showMessage" class="message">
          Reservation submitted successfully!
        </div>
    </div>
        </div>
  </div></div>
</template>

<script>
import location from '@/assets/images/location.png'
import email from '@/assets/images/email.png'
import call from '@/assets/images/phone.png'
import {onMounted, ref} from 'vue';

export default {
  setup() {
    onMounted(() =>{
      const elements = document.querySelectorAll('.input-trans , .description-trans');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },);

      elements.forEach((element)  => {
        observer.observe(element);
      });
    });
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
  margin: 0 auto;
  max-width: 1320px;
  width: 100%;
  margin-top: 90px;
}
.form-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;
  max-width: 1390px;
  margin-inline: auto;
}
.form{
  grid-column: 2/ span 4;
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
  max-width: 50px;
}
div{
  display: flex;
}
h2{
  grid-column: 3 / span 3;
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  font-size: 48px;
  color: white;

  text-transform: capitalize;
}
.description-trans{
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateX(-10%);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
.description-trans.animate{
  opacity: 1;
  transform: translateX(0);
}
.input-trans {
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  flex: 1 0 calc(33.33% - 20px);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;
}
.input-trans.animate {
  opacity: 1;
  transform: translateY(0);
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
input[type=text],
input[type=email],
input[type=number],
input[type=date],
input[type=time]{
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
}
button{
  background: #D89756;
  border-radius: 8px;
  border: none;
}
.contact-button{
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
}
.message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
