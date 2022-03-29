<template>
  <div class="product-banner container-fluid" style="background-image: url(https://raw.githubusercontent.com/Kevin-Chia-Hsuan/Vue-2022-Shopp/master/src/assets/images/banner02.jpg); background-size: cover; background-position: center center; height: 70vh; opacity: 85%">
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
  <section>
    <div class="container-fluid bg-warning px-4 px-md-6 py-8 py-md-12">
      <div class="container bg-light px-4 px-md-6 py-5 py-md-10">
        <div class="row">
          <div class="col-md-3 col-lg-2">
            <ul class="list-group">
              <li>
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                全部商品
              </a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">單眼相機</a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">單眼鏡頭</a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">鏡頭濾鏡</a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">攝影腳架</a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">三軸穩定器</a>
              </li>
              <li>
                <a href="#" class="list-group-item list-group-item-action">記憶卡</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 col-lg-10 mt-8 mt-md-0">
            <ul class="row">
              <li class="col-12 col-md-6 col-lg-4 mb-5" v-for="product in products" :key="product.id">
                <div class="card">
                  <div
                    style="height: 220px; background-size: contain;
                    background-position: center; background-repeat: no-repeat;"
                    :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  ></div>
                  <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <div class="card-price">
                      <del class="h6" v-if="product.price">原價{{ product.origin_price }}元</del>
                      <div class="h5 text-danger fw-bolder" v-if="product.price">
                        現在只要{{ product.price }}元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </li>
              <!-- <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-price">
                      <del class="h6">原價?元</del>
                      <div class="h5 text-danger fw-bolder">
                        現在只要?元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-price">
                      <del class="h6">原價?元</del>
                      <div class="h5 text-danger fw-bolder">
                        現在只要?元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-price">
                      <del class="h6">原價?元</del>
                      <div class="h5 text-danger fw-bolder">
                        現在只要?元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-price">
                      <del class="h6">原價?元</del>
                      <div class="h5 text-danger fw-bolder">
                        現在只要?元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 col-lg-4 mb-5">
                <div class="card">
                  <img src="" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <div class="card-price">
                      <del class="h6">原價?元</del>
                      <div class="h5 text-danger fw-bolder">
                        現在只要?元
                      </div>
                    </div>
                    <button type="button" class="btn btn-danger me-3 me-md-1">加入購物車</button>
                    <button type="button" class="btn btn-primary">查看更多</button>
                  </div>
                </div>
              </div> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="container mt-12 mt-md-15">
        <div class="row">
          <div class="d-flex justify-content-center">
            <pagination :page="pagination" @get-product="getProducts"></pagination>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- 返回頁面最上面按鈕 -->
  <button type="button" class="scrollTopBtn" @click="scrollToTop">
    <i class="bi bi-capslock-fill fs-4"></i>
  </button>
</template>

<script>

// 載入 分頁頁碼 元件
import pagination from '@/components/Pagination.vue';

// scrollTop 需要的 DOM
const tBody = document.querySelector('html,body');

export default {
  data() {
    return {
      // 產品列表
      products: [],
      // 分頁
      pagination: {},
      page: '',
      // 點擊狀態，針對按鈕 disabled 效果
      isLoadingItem: '',
      // loading 外部插件，針對整體讀取效果
      isLoading: false,
    };
  },
  components: {
    pagination,
  },
  mounted() {
    // 取得資料、DOM元素
    this.getProducts();
  },
  methods: {
    // 返回頁面最上方
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    // 取得全部商品列表
    getProducts(page = 1) { // 使用參數預設值觀念，若未帶參數，則預設為第1頁
      // 將預設page參數帶入API網址中
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          // 取出前台商品內容
          this.products = res.data.products;
          // console.log(this.products);
          this.pagination = res.data.pagination;
          // console.log(this.pagination)
          tBody.scrollTop = 0;
          this.isLoading = false;
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
