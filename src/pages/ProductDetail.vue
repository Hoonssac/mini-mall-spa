<template>
  <div v-if="product" class="product-detail">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="" class="product-image" />
    <p class="price">가격: {{ product.price.toLocaleString() }}원</p>
  </div>
  <div v-else>
    <p>존재하지 않는 상품입니다.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import products from '@/data/products.json';
import { computed } from 'vue';

const route = useRoute();
const id = Number(route.params.id);

const product = computed(() => products.find((p) => p.id === id));
</script>

<style scoped>
.product-detail {
  text-align: center;
  padding: 40px 20px;
}

.product-image {
  max-width: 300px;
  width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.price {
  font-size: 20px;
  color: #444;
  margin-top: 10px;
}
</style>
