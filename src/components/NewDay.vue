<template>
  <div class="image-view">
    <div class="image-container">
      <div class="back-icon" @click="goHome">
        <img src="@/assets/back.svg" alt="back">
      </div>
      <div class="image-item">
        <img :src="currentSrc" alt="Archive 1" class="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDay',
  data() {
    return {
      largeSrc: require('@/assets/newday.png'),
      smallSrc: require('@/assets/newday-.png'),
      currentSrc: require('@/assets/newday.png') // Default to the large image
    };
  },
  mounted() {
    this.updateImageSource();
    window.addEventListener('resize', this.updateImageSource);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateImageSource);
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    updateImageSource() {
      this.currentSrc = window.innerWidth < 600 ? this.smallSrc : this.largeSrc;
    }
  }
};
</script>

<style scoped>
.image-container {
  position: relative;
}

.back-icon {
  position: absolute;
  top: 50px;
  left: 40px;
  width: 40px;
  cursor: pointer;
}

.image-item {
  /* Add your styles for the image item */
}

.image {
  display: block;
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .back-icon {
    left: 20px;
  }
}
</style>
