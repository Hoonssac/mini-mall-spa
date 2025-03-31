<template>
  <div class="app">
    <Header />
    <div class="layout">
      <!-- 명명된 뷰 : 좌측 필터 -->
      <aside class="sidebar">
        <router-view name="left" />
      </aside>
      <!-- 기본 뷰 -->
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import { reactive, provide } from 'vue';

// 장바구니 상태 생성
const cart = reactive([]);

// 장바구니에 상품 추가 함수
function addToCart(product) {
  cart.push(product);
}

provide('cart', cart);
provide('addToCart', addToCart);
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}

.app {
  min-height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  font-family: sans-serif;
}

/* 좌우 레이아웃 (명명된 뷰 + 기본 뷰) */
.layout {
  display: flex;
  gap: 20px;
  margin-top: 80px; /* Header 아래로 공간 확보 */
  padding: 0 20px;
}

/* 사이드바 (좌측 필터) */
.sidebar {
  width: 200px;
  flex-shrink: 0;
}

/* 메인 컨텐츠 (기본 뷰) */
.main {
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  color: #444;
  text-align: center;
}
</style>
