<template>
  <h2>🛒 장바구니</h2>
  <div v-if="cart.length > 0">
    <ul class="cart-list">
      <li v-for="(item, index) in cart" :key="index" class="cart-item">
        <img :src="item.image" alt="" />
        <div class="info">
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price.toLocaleString() }}원</p>
        </div>
      </li>
    </ul>
    <p class="total">
      총합: <strong>{{ total.toLocaleString() }}원</strong>
    </p>
  </div>
  <div v-else>
    <p>장바구니가 비어 있습니다.</p>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue';

// App.vue에서 제공한 cart 상태 주입
const cart = inject('cart');

// 총합 계산
const total = computed(() => cart.reduce((sum, item) => sum + item.price, 0));
</script>

<style scoped>
.cart {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin: 0 100px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}

.info {
  text-align: left;
}

.name {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.price {
  color: #666;
  margin: 4px 0 0;
}
.total {
  font-size: 20px;
  margin-top: 30px;
}
</style>
