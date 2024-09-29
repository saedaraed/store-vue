<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="brand-logo">MyStore</router-link>

      <div class="navbar-links">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/cart" class="cart-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style scoped>
.navbar {
  background-color: #2c3e50;
  padding: 15px 0px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.brand-logo:hover {
  color: #42b983;
}

/* Navigation Links */
.navbar-links {
  display: flex;
  gap: 30px; 
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-links a:hover {
  color: #42b983;
}

.cart-link {
  position: relative;
  color: #fff;
}

.cart-link svg {
  width: 24px;
  height: 24px;
  stroke: #fff;
  transition: stroke 0.3s ease;
}

.cart-link:hover svg {
  stroke: #42b983;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
  }

  .navbar-links {
    gap: 15px;
    margin-top: 10px;
  }
}
</style>
