# 🛒 앱 이름 : **MiniMall (미니몰)**

![image](https://github.com/user-attachments/assets/47f76a9a-ca31-4f68-99aa-a7ca45020533)




## 🎯 과제 목표
### 기본 라우팅 + 메뉴 구성
- `MiniMall` 프로젝트의 기본 라우팅 구조 만들기
- 화면 상단에 메뉴를 구성하는 Header 컴포넌트 제작

### 상품 목록 페이지 구현 + 상세 페이지 연결
- 상품 목록을 JSON 파일로 구성
- `/products` 페이지에 상품 카드 형태로 출력
- 각 상품 클릭 시 `/products/:id` 상세 페이지로 이동
- 동적 라우트 + `useRoute()` 사용

### 장바구니 기능 구현 (상태 공유)
| 기능 | 설명 |
| --- | --- |
| 장바구니 전역 상태 | `App.vue`에서 `provide()`로 전역 상태 제공 |
| 장바구니에 담기 | 상세 페이지에서 `inject()`로 전역 메서드 사용 |
| 장바구니 페이지 | 담은 상품 목록 출력 (상품명 + 가격) |
| 상태 구조 | Composition API 기반 `reactive()` 상태 공유 |


### 명명된 뷰 + 중첩 라우트

| 기능 | 설명 |
| --- | --- |
| 명명된 뷰 | `/products` 경로에서 좌측 필터 영역 + 우측 상품 목록 나누기 |
| 중첩 라우트 | `/products/:id` 안에서 상세정보/리뷰 탭 구성 |
| 실습 개념 | `components: { default, left }`, `<router-view name="left">` + children 라우트 |


## 📝 요구사항

### 1. 라우팅 구조 설정

- `/`: Home 페이지
- `/products`: 상품 목록 페이지
- `/cart`: 장바구니 페이지

### 2. 각 경로에 대응하는 컴포넌트 생성

- `Home.vue`, `Products.vue`, `Cart.vue` (모두 `pages/` 폴더에 생성)

### 3. `Header.vue` 컴포넌트 구현

- 상단 메뉴 구성: 홈 | 상품목록 | 장바구니
- 각 메뉴는 `<router-link>`로 연결
- 메뉴 클릭 시 해당 페이지로 이동

### 4. 레이아웃 구성

- `App.vue`에 `Header` 컴포넌트를 상단에 배치
- 본문 영역에는 `<router-view />`를 통해 페이지가 렌더링

### 5. products.json 만들기 (/src/data/products.json)

### 6. `ProductList.vue` 컴포넌트 생성 (또는 `Products.vue` 안에 작성)

- JSON 불러오기 (`fetch` 또는 `import`)
- 카드 형태로 상품 나열 (`v-for`)
- 각 상품 카드 클릭 시 해당 상세 페이지로 이동


### 7. 동적 라우트 등록

#### 추가할 라우트의 의미:

- 경로: `/products/:id`
    - `:id`는 변수 역할 (1, 2, 3 같은 상품 ID)
- 이름: `productDetail`
    - 명명된 라우트로 사용하기 위해 `name` 설정
- 컴포넌트: `ProductDetail`



### 8. 상세 페이지 구현 (`ProductDetail.vue`)

- `useRoute()` 사용해서 `params.id` 읽기
- `products.json`에서 해당 ID에 맞는 상품 찾기
- 상세 정보(이름, 가격, 이미지) 출력


### 9. `App.vue`에서 전역 장바구니 상태 제공

- `reactive()`로 `cart` 배열 만들기
- `addToCart(product)` 함수도 같이 제공
- `provide()`로 전역에 상태 전달


### 10. `ProductDetail.vue`에서 상품 담기 기능 구현

- `inject('addToCart')`로 함수 받아오기
- "장바구니 담기" 버튼 클릭 시 해당 상품을 cart에 추가
- 완료 후 `router.push({ name: 'cart' })`로 이동


### 11. `Cart.vue` 페이지 만들기
- `inject('cart')`로 장바구니 상태 받아오기
- 목록 출력 (상품명, 가격)
- 총합 계산 (선택)




### 12. `App.vue`에서 명명된 뷰 구조 구성

- 좌측에 `CategoryFilter.vue`, 우측에 `router-view` 기본 뷰를 표시할 수 있도록
    
    `App.vue`를 다음처럼 구성하시오:
    
    ```
    <div class="layout">
      <router-view name="left" />  <!-- 좌측 필터 -->
      <main class="main">
        <router-view />           <!-- 기본 콘텐츠 -->
      </main>
    </div>
    
    ```
    
- 좌우 영역이 나란히 배치되도록 CSS Flex 레이아웃을 적용하시오.




### 13. `router/index.js`에 명명된 뷰 및 중첩 라우트 등록

- `/products` 경로에 대해:
    - `components: { default: Products, left: CategoryFilter }` 형식으로 명명된 뷰 등록
- `/products/:id` 경로에 대해:
    - `ProductDetail`을 기본 컴포넌트로 사용하고
    - 하위 children 라우트를 등록하여 탭 구조 구현:
        - 기본: `ProductDescription.vue`
        - `/review`: `ProductReview.vue`
    - 각 child 라우트에 name을 지정 (`productDescription`, `productReview`)
 




### 14. `ProductDetail.vue`에 탭 기능 구현

- 상품 정보와 이미지, 가격, 장바구니 버튼을 출력
- 그 아래에 **탭 메뉴**를 구현하시오:
    
    ```
    <router-link
      :to="`/products/${product.id}`"
      exact-active-class="active-tab"
    >상세정보</router-link>
    
    <router-link
      :to="`/products/${product.id}/review`"
      exact-active-class="active-tab"
    >리뷰</router-link>
    ```
    
- 탭 클릭 시 하단에 `<router-view />`로 탭별 컴포넌트가 렌더링되어야 함
- `exact-active-class="active-tab"`은
👉 **경로가 정확히 일치할 때만** 해당 클래스를 붙여줌
👉 `/products/1`일 때만 "상세정보" 탭에 적용됨
👉 `/products/1/review`일 때는 "리뷰" 탭에만 적용됨



### 15. `ProductDescription.vue` / `ProductReview.vue` 만들기

- 각각 간단한 텍스트만 포함된 템플릿을 만들고, 정상적으로 탭 전환되는지 확인


## 📁 전체 폴더 구조

```
MiniMall/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── (이미지, 스타일 등)
│   ├── components/
│   │   └── Header.vue                # 상단 고정 메뉴
│   ├── data/
│   │   └── products.json             # 상품 리스트 JSON 데이터
│   ├── pages/
│   │   ├── Home.vue                  # 메인 페이지
│   │   ├── Products.vue              # 상품 목록 페이지
|   │   ├── CategoryFilter.vue        # 왼쪽 카테고리 필터 (left view)
│   |   ├── ProductDescription.vue    # 중첩 탭 - 상세정보
|   │   ├── ProductReview.vue          # 중첩 탭 - 리뷰
│   │   └── ProductDetail.vue         # 상품 상세 페이지 (동적 라우트)
│   ├── router/
│   │   └── index.js                  # 라우터 설정
│   ├── App.vue                       # 전체 레이아웃 (Header + router-view)
│   └── main.js                       # 앱 진입점
├── package.json
└── vite.config.js (또는 vue.config.js)
```
