# 📱 앱 이름: **MiniMall (미니몰)**

- 간단한 쇼핑몰 SPA를 만드는 프로젝트입니다.

---

## 📌 문제 1: 기본 라우팅 + 메뉴 구성

### 🎯 과제 목표

`MiniMall` 프로젝트의 기본 라우팅 구조를 만들고,

화면 상단에 메뉴를 구성하는 Header 컴포넌트를 제작하세요.

---

### 📝 요구사항

### 1. **라우팅 구조 설정**

- `/`: Home 페이지
- `/products`: 상품 목록 페이지
- `/cart`: 장바구니 페이지

### 2. **각 경로에 대응하는 컴포넌트 생성**

- `Home.vue`, `Products.vue`, `Cart.vue` (모두 `pages/` 폴더에 생성)

### 3. **`Header.vue` 컴포넌트 구현**

- 상단 메뉴 구성: 홈 | 상품목록 | 장바구니
- 각 메뉴는 `<router-link>`로 연결
- 메뉴 클릭 시 해당 페이지로 이동

### 4. **레이아웃 구성**

- `App.vue`에 `Header` 컴포넌트를 상단에 배치
- 본문 영역에는 `<router-view />`를 통해 페이지가 렌더링

## 📁 폴더 구조 예시

```
src/
├── components/
│   └── Header.vue
├── pages/
│   ├── Home.vue
│   ├── Products.vue
│   └── Cart.vue
├── router/
│   └── index.js
├── App.vue
└── main.js
```
