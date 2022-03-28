<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <button type="button" @click="showAlert">Hello world</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal(
        '成功',
        '加入購物車成功',
        'success',
      );
    },
  },
};
</script>
