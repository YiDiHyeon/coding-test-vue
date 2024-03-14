<img src="https://capsule-render.vercel.app/api?type=waving&height=300&color=gradient&text=Coding%20test%20vue"/>
# coding-test-vue

## 아이온커뮤니케이션즈 코딩테스트 과제
주어진 Figma 디자인으로 pc, mobile 화면 제작

### 설명
장바구니와 찜은 vuex를 사용하였고, </br>
단일 화면으로 구성되어 있어 따로 router를 사용하지 않았습니다.

### 폴더 구조
```
📦 coding-test-vue
├─ src
│  ├─ assets      // 컴파일 되지 않는 font 저장소
│  ├─ components  // 전역으로 사용하는 component 폴더
│  ├─ filter      // 날짜 데이터를 가공
│  ├─ icons       // svg icon component 모음
│  ├─ store       // 장바구니, 찜 스토어
│  ├─ styles      // css 폴더
│  ├─ views       // 화면 구성 폴더
│  ├─ App.vue 
│  └─ main.js
├─ .eslintrc.js
├─ .prettierrc.js
├─ package.json
└─ vue.config.js
```

### 사용 기술 스택
- Node : v18.13.0
- vue : v2.6.14
- vuex : v3.6.2

- Vuex
    ```
  vue add vuex
  ```
- ESlint
  ```
   npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue
  ```
- Prettier
  ```
   npm i --save-dev prettier prettier-eslint
  ```
- Sass
  ```
  npm i --save-dev sass sass-loader svg-sprite-loader node-sas
  ```
- Svg
  ```
  npm i --save-dev svgo svg-sprite-loader
  ```
- dayjs
  ```
  npm install dayjs
  ```