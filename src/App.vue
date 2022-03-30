<template>
<navbar></navbar>
  <router-view/>
<footers></footers>
</template>

<script>
import navbar from '@/components/FrontNavbar.vue';

import footers from '@/components/FrontFooters.vue';

export default {
  components: {
    navbar,
    footers,
  },
  // 監聽桌機以下版本時，手機選單點選其他頁面轉跳後，自動收折手機選單
  watch: {
    $route() {
      const navbarNavAltMarkup = document.querySelector('#navbarNavAltMarkup');
      navbarNavAltMarkup.classList.remove('show');
    },
  },
};

</script>

<style lang="scss">

// 匯入 sweetalert2 CSS檔案
@import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
// 匯入 自己的css樣式，通常會是all.scss這個檔案來做管理
@import './assets/stylesheet/all';

</style>
