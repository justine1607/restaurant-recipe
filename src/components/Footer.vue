<template>
  <div class="footer-block">
    <div class="container">
          <div class="footer-grid">

            <div class="soc-med">
              <div class="follow">follow</div>
              <div class="icons">
              <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                <img :src="skype" alt="phone-pic" />
              </a>
              <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                <FontAwesomeIcon :icon="faFacebook" class="font-icon" />
                <img :src="facebook" alt="phone-pic" />
              </a>
              <a target='_blank' rel='nonereffer' href='https://secure.skype.com/portal/profile/'>
                <FontAwesomeIcon :icon="faInstagram" class="font-icon"  />
                <img :src="instagram" alt="phone-pic" />
              </a></div>
            </div>
            <div class="restaurant-hours">
              <div class="hours">Opening Hours</div>
              <div class="opening">
                <div class="monday">
                  <h4>Monday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Tuesday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Wednesday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Thursday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Friday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Saturday</h4>
                  <p>11:00 - 18:00</p>
                </div>
                <div class="monday">
                  <h4>Sunday</h4>
                  <p>closed</p>
                </div>
              </div>
            </div>
              <div class="contact">
              <div class="footer-img">
                <div class="info">Address </div>
                <div class="address">
                  <p>123,HeroSt.<br>city,AA 9999</p>
                </div>
                <div class="info">contacts</div>
                <div class="card">
                  <h3>Email: </h3>
                  <p>info@gmail.com</p>
                </div>
                <div class="card">
                  <h3>Phone: </h3>
                  <p>+3695451066</p>
                </div>
                <div class="card">
                  <h3>Fax: </h3>
                  <p>+3695451066</p>
                </div>
              </div>
          </div>
            <div class="contact-us">
              <div class="contact-form">contact us</div>
              <form>
              <div class="input-wrap">
                <input type="text" id="name" placeholder="Name" required>
              </div>
              <div class="input-wrap">
                <input type="email" id="email"  placeholder="Email" required>
              </div>
              <div class="input-wrap">
                <input type="number" id="person"  placeholder="Number of Persons" required>
              </div>
              <div class="form-group">
                <textarea id="message"  placeholder="Message"></textarea>
              </div>
              <div class="btn-row">
                <span class="input-group-button">
                  <button href="#" type="submit" class="btn-form">Send</button>
                </span>
              </div>
              </form>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import account from '@/assets/images/account.png'
import location from '@/assets/images/location.png'
import email from '@/assets/images/email.png'
import call from '@/assets/images/phone.png'
import skype from '@/assets/images/skype.png'
import facebook from '@/assets/images/facebook.png'
import instagram from '@/assets/images/instagram.png'
import ContactForm from "@/components/ContactForm.vue";

export default {
    components: {
      ContactForm

    },
    setup() {

        return {
          account,
          location,
          email,
          call,
          skype,
          facebook,
          instagram
        };
    },
};
</script>
<style scoped>
.footer-block {
  position: relative;
  width: 100%;
  height: 600px;
  max-height: 1390px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("src/assets/images/wave.svg");
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;

}
.container {
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  margin-top: 230px;
}
.footer-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 51px;row-gap: 0;
  max-width: 1390px;
  margin-inline: auto;
}

.info{
  grid-column: 2 / span 1;
  color: white;
  text-transform: capitalize;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  grid-row: 1;
  display: flex;align-items: center;justify-content: center;
  padding-bottom: .5rem;
}
.hours,.follow{
  grid-column: 2 / span 1;
  color: white;
  text-transform: capitalize;
  font-family: 'Cormorant Upright', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  grid-row: 1;
  display: flex;align-items: center;justify-content: center;
}
input{
  width: 100%;
  background: #595656;
  border: none;
  padding: .8rem;
}
input[type=text],
input[type=email],
input[type=number],
input[type=textarea]{
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
}
button {
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-family: "LXGW WenKai Mono TC", monospace;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  margin: 0 10px;
  width: 190px;
  padding: 10px 0;
  transition: 0.4s;
}
button:hover{
  background: #ffffff;
  color: #171717;
}
.contact{
  display: flex;flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 2;grid-row: 1;
}
.contact-form{
  display: flex;flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 2;grid-row: span 2;
  font-family: 'Cormorant Upright', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  color: white;
  padding-bottom: 10px;
  text-transform: capitalize;
}
.footer-img{
  grid-column: 3 / span 2;
  display: flex;flex-direction: column;
  gap: 5%;
}
.address{
  display: flex;flex-direction: column;
  justify-content: center;align-items: center;
  line-height: 1.2;
  margin-bottom: 15px;
}
.card{
  display: flex;
  line-height: 1.5;
}
.card h3{
  font-size: 16px;
  font-family: 'Cormorant Upright', serif;
  font-weight: 400;
  font-style: normal;
  color: white;
}
.soc-med a {
  text-decoration: none;
  margin-bottom: 10px;
}
.soc-med h3{
  color: white;
  font-size: 24px;
  font-family: 'Cormorant Upright', serif;
  text-transform: uppercase;
}
.soc-med{
  display: flex;flex-direction: column;
  justify-content: center;align-items: center;
  grid-column: 1 / span 2;grid-row: 2;
}
.icons{
  display: flex;
  gap: 10%;
}
.restaurant-hours{
  grid-column: 3 / span 1;
  grid-row: span 2;
}
.opening{
  line-height: 2;
}
.monday{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
p{
  font-family: "Cormorant Upright", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3rem;
}
.font-icon{
color: black;
font-size: 24px;
margin-bottom: 10px;
}
.contact-us{
  grid-column: 4 / span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.input-wrap{
  padding-bottom: 1rem;
}
.form-group{
  padding-bottom: .5rem;
  margin-bottom: 1rem;
}
textarea{
  width: 100%;
  padding: .5rem;

}
.btn-row{
  text-align: center;
}
.btn-form{
  border: 1px solid #00ff00;
}
</style>