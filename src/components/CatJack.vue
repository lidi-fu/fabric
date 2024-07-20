<template>
    <div class="whole">
      <div class="image-container">
        <!-- Static images -->
        <div class="header-img">
            <div class="back-icon" @click="goHome">
              <img src="@/assets/cat-back.svg" alt="back">
            </div>
            <img :src="imageSrcs.cat01" alt="cat01">
        </div>
        <img :src="imageSrcs.cat02" alt="cat02">
        
        <!-- Dynamic image 1 -->
        <div class="dynamic">
          <div class="icon">
            <img src="@/assets/cat-left.svg" @click="prevImage(0)">
            <img src="@/assets/cat-right.svg" @click="nextImage(0)">
          </div>
          <img :src="dynamicImages[0].currentSrc" alt="dynamic-cat-1">
        </div>
        
        <!-- Static image -->
        <img :src="imageSrcs.cat04" alt="cat04">
        
        <!-- Dynamic image 2 -->
        <div class="dynamic">
          <div class="icon">
            <img src="@/assets/cat-left.svg" @click="prevImage(1)">
            <img src="@/assets/cat-right.svg" @click="nextImage(1)">
          </div>
          <img :src="dynamicImages[1].currentSrc" alt="dynamic-cat-2">
        </div>
        
        <!-- Static image -->
        <img :src="imageSrcs.cat06" alt="cat06">
        
        <!-- Dynamic image 3 -->
        <div class="dynamic">
          <div class="icon">
            <img src="@/assets/cat-left.svg" @click="prevImage(2)">
            <img src="@/assets/cat-right.svg" @click="nextImage(2)">
          </div>
          <img :src="dynamicImages[2].currentSrc" alt="dynamic-cat-3">
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'CatJack',
  data() {
    return {
      imageSrcs: {
        cat01: require('@/assets/cat01.png'),
        cat02: require('@/assets/cat02.png'),
        cat04: require('@/assets/cat04.png'),
        cat06: require('@/assets/cat06.png')
      },
      dynamicImages: [
        {
          images: [
            require('@/assets/cat03.png'),
            require('@/assets/cat03alt.png'),
            require('@/assets/cat03alt.png')
          ],
          smallImages: [
            require('@/assets/cat03-.png'),
            require('@/assets/cat03alt-.png'),
            require('@/assets/cat03alt-.png')
          ],
          currentIndex: 0,
          currentSrc: require('@/assets/cat03.png')
        },
        {
          images: [
            require('@/assets/cat05.png'),
            require('@/assets/cat05alt.png'),
          ],
          smallImages: [
            require('@/assets/cat05-.png'),
            require('@/assets/cat05alt-.png'),
          ],
          currentIndex: 0,
          currentSrc: require('@/assets/cat05.png')
        },
        {
          images: [
            require('@/assets/cat07.png'),
            require('@/assets/cat07alt.png'),
          ],
          smallImages: [
            require('@/assets/cat07-.png'),
            require('@/assets/cat07alt-.png'),
          ],
          currentIndex: 0,
          currentSrc: require('@/assets/cat07.png')
        }
      ]
    };
  },
  mounted() {
    this.updateImageSources();
    window.addEventListener('resize', this.updateImageSources);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateImageSources);
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    prevImage(index) {
      const imageObj = this.dynamicImages[index];
      imageObj.currentIndex = (imageObj.currentIndex - 1 + imageObj.images.length) % imageObj.images.length;
      imageObj.currentSrc = imageObj.images[imageObj.currentIndex];
      if (window.innerWidth < 600) {
        imageObj.currentSrc = imageObj.smallImages[imageObj.currentIndex];
      }
    },
    nextImage(index) {
      const imageObj = this.dynamicImages[index];
      imageObj.currentIndex = (imageObj.currentIndex + 1) % imageObj.images.length;
      imageObj.currentSrc = imageObj.images[imageObj.currentIndex];
      if (window.innerWidth < 600) {
        imageObj.currentSrc = imageObj.smallImages[imageObj.currentIndex];
      }
    },
    updateImageSources() {
      const isSmallScreen = window.innerWidth < 600;
      this.imageSrcs = {
        cat01: isSmallScreen ? require('@/assets/cat01-.png') : require('@/assets/cat01.png'),
        cat02: isSmallScreen ? require('@/assets/cat02-.png') : require('@/assets/cat02.png'),
        cat04: isSmallScreen ? require('@/assets/cat04-.png') : require('@/assets/cat04.png'),
        cat06: isSmallScreen ? require('@/assets/cat06-.png') : require('@/assets/cat06.png')
      };
      this.dynamicImages.forEach(imageObj => {
        imageObj.currentSrc = isSmallScreen ? imageObj.smallImages[imageObj.currentIndex] : imageObj.images[imageObj.currentIndex];
      });
    }
  }
};
</script>

<style scoped>
.header-img {
  position: relative;
}

.back-icon {
  position: absolute;
  width: 40px;
  top: 50px;
  left: 30px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.dynamic {
  position: relative;
  display: inline-block;
  width: 100%;
}

.icon {
  position: absolute;
  bottom: 50px;
  left: 30px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  background: rgba(255, 255, 255, 0.8);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

/* .icon img {
  width: 20px;
  height: 20px;
} */
.dynamic img {
  display: block;
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
    .icon {
        
    }
    
}
</style>
