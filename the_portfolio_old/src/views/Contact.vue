<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
<div class="contact-container">

    <h2>Contact Me</h2>
    <p>Or don't, your choice!</p>
    <br>
    <br>
    <ContactForm/>
    
</div>
</template>

<style scoped>
.contact-container {
    min-height: 20vh;
    /* background: cyan; */
    padding: 100px;
    /* margin-bottom: 20px; */
}
.contact-container h2 {
    text-transform: capitalize;
}
.contact-container p {
    color: var(--primary-color-text);
}
</style>