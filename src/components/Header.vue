<template>
  <div class="header">
    <div class="nav">
      <router-link to="/" class="nav-link">홈</router-link>
      <router-link to="/products" class="nav-link">상품목록</router-link>
      <router-link to="/cart" class="nav-link">장바구니</router-link>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 40px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
}

.router-link-active {
  color: #007bff;
  font-weight: bold;
}
</style>
