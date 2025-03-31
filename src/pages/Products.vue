<template>
  <div class="product-list">
    <h2>상품 목록</h2>
    <div class="grid">
      <div v-for="product in products" :key="product.id" class="card">
        <img :src="product.image" alt="" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price.toLocaleString() }}원</p>
        <router-link
          :to="{ name: 'productDetail', params: { id: product.id } }"
          class="detail-text"
          >상세 보기</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import products from '@/data/products.json';
</script>

<style>
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  background-color: white;
  width: 200px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

.card img {
  width: 100%;
}

.detail-text {
  text-decoration: none;
  color: rgb(0, 132, 255);
}
</style>
