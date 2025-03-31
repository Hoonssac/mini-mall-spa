<template>
  <div v-if="product" class="product-detail">
    <h2>{{ product.name }}</h2>
    <img :src="product.image" alt="" class="product-image" />
    <p class="price">가격: {{ product.price.toLocaleString() }}원</p>
    <button class="add-btn" @click="handleAddToCart">장바구니 담기</button>

    <!-- 탭 메뉴 -->
    <nav class="tab">
      <router-link
        :to="`/products/${product.id}`"
        exact-active-class="active-tab"
      >
        상세정보
      </router-link>
      <router-link
        :to="`/products/${product.id}/review`"
        exact-active-class="active-tab"
      >
        리뷰
      </router-link>
    </nav>

    <!-- 중첩 라우트 뷰 -->
    <router-view />
  </div>

  <div v-else>
    <p>존재하지 않는 상품입니다.</p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, inject } from 'vue';
import products from '@/data/products.json';

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const product = computed(() => products.find((p) => p.id === id));

const addToCart = inject('addToCart');

function handleAddToCart() {
  if (product.value) {
    addToCart(product.value);
    router.push({ name: 'cart' });
  }
}
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

.add-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 16px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;
}

.add-btn:hover {
  background-color: #0056b3;
}

.tab {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.tab a {
  text-decoration: none;
  color: #555;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.tab a.active-tab {
  background-color: #007bff;
  color: white;
}
</style>
