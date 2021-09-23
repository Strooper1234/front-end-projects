<script setup>
import emailjs from "emailjs-com";
</script>

<template>
  <div class="contact-form-container">
    <form @submit.prevent="sendEmail">
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" placeholder="Your Name" />

      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Your Email"
      />

      <label for="message">Message</label>
      <textarea
        type="text"
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_7yxw3wk",
          "template_ofcv2du",
          e.target,
          "user_d8QLS81QDQjInr2b3pgiB",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact-form-container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background: rgba(var(--accent-color-rgb), 0.95);
  padding: 20px;
  width: 50%;
}
label {
  float: left;
  color: var(--accent-color-dark);
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  color: rgba(var(--accent-color-dark-rgb), 1);
}
input[type="submit"] {
  background-color: var(--accent-color-dark);
  color: var(--accent-color);
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background: var(--background-color);
  color: var(--accent-color);
}
</style>
