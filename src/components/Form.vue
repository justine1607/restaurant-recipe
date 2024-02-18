<template>
  <div>
    <h2>Online Reservation</h2>
    <form @submit.prevent="onlineReservation">
      <div>
        <input type="text" id="name" v-model="reservation.name" placeholder="Name" required>
        <input type="email" id="email" v-model="reservation.email" placeholder="Email" required>
      </div>
      <div>
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
</template>

<script>
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
      showMessage
    };
  }
};
</script>

<style scoped>
.message {
  background-color: #d4edda;
  color: #155724;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
