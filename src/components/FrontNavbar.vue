<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning py-md-4 py-2 px-sm-10">
    <div class="container-fluid">
      <h1 class="logo mb-0">
        <a class="navbar-brand" href="#">Navbar</a>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="cart-icon d-lg-none">
        <a class="fs-3 text-secondary px-5" href="#"><i class="bi bi-cart3"></i></a>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav align-items-center">
          <router-link to="products" class="nav-link fs-5 fw-bold px-5">
            <i class="bi bi-shop"></i>
            商品列表
          </router-link>
          <a class="nav-link fs-5 fw-bold px-5" href="#">Features</a>
          <a class="nav-link fs-5 fw-bold px-5" href="#">Pricing</a>
        </div>
      </div>
      <div class="cart-icon d-none d-lg-block">
        <a class="fs-3 text-secondary px-5" href="#"><i class="bi bi-cart3"></i></a>
      </div>
    </div>
  </nav>
  <button type="button" class="scrollTopBtn" @click="scrollToTop">
    <i class="bi bi-capslock-fill fs-4"></i>
  </button>
</template>
