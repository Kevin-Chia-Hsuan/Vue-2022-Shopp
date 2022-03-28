<template>
  <div class="product-banner container-fluid">
    <div class="row h-100">
      <div class="container d-flex align-items-center">
        <!-- Vue3 的 AOS 寫法，要使用 aos-vue 標籤 -->
        <div class="row w-100">
          <div class="col-12">
            <!-- <h2 class="text-sm-xl text-lg-2xl text-4xl text-center text-light fw-bold">
                工欲善其事，必先利其器！
              </h2> -->
            <!-- 文字輸入動畫效果 -->
            <vue-writer class="text-sm-m text-lg-3xl text-4xl text-center text-light fw-bold" :array="['工欲善其事，必先利其器！', '來蝦拍選購，選購後不瞎拍！']" :typeSpeed="150" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1>產品列表頁面</h1>
</template>

<script>
import VueWriter from 'vue-writer';

export default {
  components: { VueWriter },
};
</script>
