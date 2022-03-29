<template>
  <section>
    <div class="subscription container-fluid">
      <aos-vue class="container d-flex flex-column align-items-md-end justify-content-center h-100" animation="zoom-in" :duration="1000">
        <div class="row">
          <div class="col-12">
            <h2 class="text-sm-2xl text-4xl text-light text-border">快來訂閱我們吧！</h2>
            <p class="text-sm-m text-2xl text-light text-border">現在訂閱，馬上領取9折優惠</p>
            <Form ref="form" class="subscribe-form" v-slot="{ errors }" @submit="getCoupon">
              <div class="input-group mb-3">
                <Field
                id="email"
                name="信箱"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                placeholder="請輸入 Email"
                rules="email|required"
                v-model="form.user.email"
                ></Field>
                <button class="btn btn-primary" type="submit">訂閱</button>
                <ErrorMessage name="信箱" class="invalid-feedback text-lg" style="font-weight: bold;"></ErrorMessage>
              </div>
            </Form>
          </div>
        </div>
      </aos-vue>
    </div>
  </section>
  <div class="container-fluid footer bg-warning py-5 py-md-8">
    <div class="container">
      <div class="row footer-list">
        <ul class="col-md-8 footer-contact">
          <li>
            <a href="mailto:camera@business.com" class="fs-3 text-secondary ms-3">
              <i class="bi bi-envelope fs-3 text-secondary"></i>
              camera@shop-shutter.com
            </a>
          </li>
          <li>
            <a href="tel:0800-000-000" class="fs-3 text-secondary ms-3">
              <i class="bi bi-telephone fs-3 text-secondary"></i>
              0800-123-456
            </a>
          </li>
        </ul>
        <ul class="col-md-4 footer-icon d-flex justify-content-start justify-content-md-end">
          <li class="me-3 me-md-8">
            <a href="https://www.facebook.com/profile.php?id=1844418885" target="_blank">
              <img src="../assets/images/icon-fb.svg" alt="fb-icon" />
            </a>
          </li>
          <li class="me-3 me-md-8">
            <a href="https://www.instagram.com/kevin780212/" target="_blank">
              <img src="../assets/images/icon-ig.svg" alt="ig-icon" />
            </a>
          </li>
          <li class="">
            <a href="#">
              <img src="../assets/images/icon-line.svg" alt="line-icon" target="_blank" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-copyright d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="#">logo</a>
        </div>
        <div class="copyright">
          <p class="text-center text-secondary fw-bold mb-2">Copyright © 2022 Kevin嘉軒</p>
          <p class="text-center text-secondary fw-bold mb-0">本網站僅供個人作品使用，不提供商業用途</p>
        </div>
        <ul class="d-none d-md-block mb-0">
          <li class="mb-2">
            <a href="#" class="text-secondary fw-bold">隱私權政策</a>
          </li>
          <li>
            <a href="#" class="text-secondary fw-bold">服務條款</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import AosVue from 'aos-vue';

export default {
  data() {
    return {
      // 表單結構
      form: {
        user: {
          email: '',
        },
        message: '',
      },
    };
  },
  components: { AosVue },
  methods: {
    getCoupon() {
      this.$swal(
        '感謝您的訂閱',
        '您的專屬9折優惠碼：10off_sale',
        'success',
      );
    },
  },
};
</script>
