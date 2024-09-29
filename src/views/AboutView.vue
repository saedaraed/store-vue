<template>
  <section class="about-container">
    <div class="about-content">
      <h1>About Us</h1>
      <p>
        Welcome to MyStore, where our passion for high-quality products and excellent customer service comes first. Our journey started with a simple idea: to provide top-tier products at affordable prices. Since our inception, we’ve grown into a thriving business that prioritizes quality, customer satisfaction, and innovation.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower our customers by offering products that improve their daily lives. We are dedicated to sourcing and delivering the best items with unbeatable value. We believe in transparency, integrity, and a customer-first approach, and we continuously strive to exceed expectations.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>High-quality products sourced globally</li>
        <li>Dedicated customer support available 24/7</li>
        <li>Fast and reliable shipping worldwide</li>
        <li>Secure payment methods for a safe shopping experience</li>
      </ul>

      <p>
        At MyStore, our customers are at the heart of everything we do. Whether you're a first-time shopper or a loyal customer, we want your experience with us to be seamless, enjoyable, and rewarding.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Have any questions? We’d love to hear from you! Feel free to reach out via our <router-link to="/contact">Contact Page</router-link>, or follow us on social media for the latest updates and offers.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-container {
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
}

.about-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h1, h2 {
  color: #2c3e50;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
}

p {
  font-size: 1.1em;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
  font-size: 1.1em;
  color: #555;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  p, li {
    font-size: 1em;
  }
}
</style>
