<template>
  <div>
    <Navbar />
    <Hero />
    <Section1 />
    <Slider v-if="showComponentA" />
    <OurStory v-if="showComponentB" />
    <MainMenu v-if="showComponentC" />
    <Review v-if="showComponentD" />
    <Chefs v-if="showComponentE" />
    <Gallery v-if="showComponentF" />
    <ContactForm v-if="showComponentG" />
    <Footer v-if="showComponentH" />
    <!-- Uncomment the components you want to render -->
    <!-- <ComponentB v-if="showComponentB" />
    <ComponentC v-if="showComponentC" /> -->
    <!-- Add more components as needed -->
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from './Hero.vue'
import OurStoryVue from './OurStory.vue';
import Section1 from './Section1.vue'
import Slider from './Slider.vue'
import OurStory from './OurStory.vue'
import MainMenu from './MainMenu.vue';
import Review from './Review.vue'
import Chefs from './Chefs.vue';
import Gallery from './Gallery.vue';
import ContactForm from './ContactForm.vue'
import Footer from './Footer.vue'
// Import other components as needed

const showComponentA = true; // Set to true to display Slider
const showComponentB = true; // Set to true to display ComponentB
const showComponentC = true;
const showComponentD = true;
const showComponentE = true;
const showComponentF = true;
const showComponentG = true;
const showComponentH = true;
// const showComponentD = true; // Set to true to display ComponentC
// Add more variables as needed for conditional rendering
</script>
