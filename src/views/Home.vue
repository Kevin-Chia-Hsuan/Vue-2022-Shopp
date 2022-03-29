<template>
  <div class="over-x bg-warning">
    <section>
      <div class="banner container-fluid" style="background-image: url(https://raw.githubusercontent.com/Kevin-Chia-Hsuan/Vue-2022-Shopp/master/src/assets/images/banner01.jpg); background-size: cover; background-position: center center; height: 70vh; opacity: 85%">
        <div class="row h-100">
          <div class="container d-flex align-items-center">
            <!-- Vue3 的 AOS 寫法，要使用 aos-vue 標籤 -->
            <aos-vue class="row w-100" animation="fade-up" :duration="1000">
              <div class="col-11 offset-1 col-lg-4 offset-lg-8">
                <h2 class="text-sm-2xl text-lg-3xl text-4xl text-light fw-bold mb-5">想透過鏡頭看世界嗎？</h2>
                <p class="text-lg-m text-lg text-light mb-7">來蝦拍選購器材，讓我們一起瞎拍吧！</p>
                <router-link to="products" class="w-75 btn-custom btn-custom-light d-flex justify-content-center align-items-center">
                  <div class="text-lg-m text-lg">手刀選購去</div>
                </router-link>
              </div>
            </aos-vue>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container introduce py-lg-14 py-10">
        <ul class="row p-0">
          <aos-vue class="mb-10" animation="fade-left" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row-reverse flex-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/camera01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">數位單眼相機</h3>
                    <p>數位單眼相機又稱DSLR（Digital Single-lens Reflex Camera的縮寫）， 因為有反光鏡，所以可以直接透過鏡頭在觀景窗內顯示圖像，易於對焦。 可換鏡頭的設計，讓拍照擁有更多的可能性。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多相機</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
          <aos-vue class="mb-10" animation="fade-right" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/lens01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">數位單眼鏡頭</h3>
                    <p>可根據拍照的場景、主題選擇適合的鏡頭種類，主要分為變焦鏡頭及定焦鏡頭。 變焦鏡最大的優點就是便利，依照焦段可以拍攝的範圍很彈性，非常方便。 定焦鏡微不能調整的鏡頭，其優點在於圖像質量和亮度，因為鏡片和移動組件少，一般能做得小和輕。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多鏡頭</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
          <aos-vue class="mb-10" animation="fade-left" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row-reverse flex-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/glass01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">單眼鏡頭濾鏡</h3>
                    <p>不僅提供相機鏡頭保護作用，UV 保護鏡用途是要隔絕影像不受到紫外線的干擾、 ND 減光鏡顧可減少光線進入感光元件、偏光鏡透過轉動鏡片外環鏡框可以將非金屬物體及 水面等反光消除。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多濾鏡</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
          <aos-vue class="mb-10" animation="fade-right" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/tripod01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">專業攝影腳架</h3>
                    <p>除了相機及鏡頭以外，腳架可算是最值得投資的攝影器材之一，因為腳架能夠穩定相機機身， 拍攝清晰銳利的相片。作慢快門長時間曝光拍攝時，腳架更是不可或缺的器材， 以上情況都不是後期製作可以取代的。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多腳架</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
          <aos-vue class="mb-10" animation="fade-left" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row-reverse flex-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/stabilizer01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">三軸穩定器</h3>
                    <p>三軸穩定器，顧名思義『三軸』穩定器原理，是利用科技技術將常用於手機中的陀螺儀組件 ，偵測人手持時的動作水平、垂直各方向的移動，『自動』輔助畫面的穩定。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多穩定器</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
          <aos-vue class="mb-10" animation="fade-right" :duration="500">
            <li class="no-gutters d-flex align-items-center flex-lg-row flex-column shadow p-5 bg-body rounded-3">
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-12">
                    <img src="../assets/images/card01.jpg" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="row">
                  <div class="col-lg-9 mx-auto">
                    <h3 class="text-2xl fw-bold m-0">各類記憶卡</h3>
                    <p>各類記憶卡，MicroSD、SDHC、SDXC、CF卡等等，挑選相容自己相機的記憶卡， 包含規格、容量及寫入、讀取速度。</p>
                    <button type="button" class="btn btn-danger btn-lg">查看更多記憶卡</button>
                  </div>
                </div>
              </div>
            </li>
          </aos-vue>
        </ul>
      </div>
    </section>
    <section>
      <div class="subscription container-fluid">
        <aos-vue class="container d-flex flex-column align-items-md-end justify-content-center h-100" animation="zoom-in" :duration="1000">
          <div class="row">
            <div class="col-12">
              <h2 class="text-sm-2xl text-4xl text-light text-border">快來訂閱我們吧！</h2>
              <p class="text-sm-m text-2xl text-light text-border">現在訂閱，馬上領取9折優惠</p>
              <form class="subscribe-form">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="請輸入您的電子郵件" aria-label="請輸入您的電子郵件" aria-describedby="button-addon2" />
                  <button class="btn btn-primary" type="button" id="button-addon2">訂閱</button>
                </div>
              </form>
            </div>
          </div>
        </aos-vue>
      </div>
    </section>
  </div>
  <!-- 返回頁面最上面按鈕 -->
  <a href="#" class="scrollTopBtn">
    <i class="bi bi-capslock-fill fs-4"></i>
  </a>
</template>

<script>
// Vue2 AOS寫法
// import AOS from 'aos';

// export default {
//   mounted() {
//     AOS.init();
//   },
// };

// Vue3 AOS寫法
import AosVue from 'aos-vue';

export default {
  components: { AosVue },
};
</script>
