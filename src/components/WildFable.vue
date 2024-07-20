<template>
    <div class="image-container">
      <div class="header-img">
        <div class="back-icon" @click.stop="goHome">
          <img src="@/assets/back.svg" alt="back">
        </div>
        <div class="header">
          <img src="@/assets/fable01.png" alt="header-image">
        </div>
      </div>
  
      <!-- Dynamic image 1 -->
      <div class="dynamic">
        <div class="icon-container">
            <div class="icon">
                <div class="icon1">
                     <img class="icon-left" src="@/assets/fable-left.png" @click="prevImage(0)">
                </div>
                <div class="icon1">
                      <img class="icon-right" src="@/assets/fable-right.png" @click="nextImage(0)">
                </div>
        </div>
        </div>

        <img :src="dynamicImages[0].currentSrc" alt="dynamic-image-1">
      </div>
  
      <!-- Dynamic image 2 -->
      <div class="dynamic">
        <div class="icon-container">
            <div class="icon">
                <div class="icon1"> 
                     <img class="icon-left"  src="@/assets/fable-left.png" @click="prevImage(1)">
                </div>
                <div class="icon1">
                     <img class="icon-right" src="@/assets/fable-right.png" @click="nextImage(1)">
                </div>
        </div>
        </div>
        <img :src="dynamicImages[1].currentSrc" alt="dynamic-image-2">
      </div>
  
      <!-- Dynamic image 3 -->
      <div class="dynamic">
        <div class="icon-container">
            <div class="icon">
                <div class="icon1">
                      <img class="icon-left" src="@/assets/fable-left.png" @click="prevImage(2)">
                </div>
                <div class="icon1">
                     <img class="icon-right" src="@/assets/fable-right.png" @click="nextImage(2)">
                </div>
        </div>
        </div>
        <img :src="dynamicImages[2].currentSrc" alt="dynamic-image-3">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DynamicImages',
    data() {
      return {
        dynamicImages: [
          {
            images: [
              require('@/assets/fable02.png'),
              require('@/assets/fable02alt1.png'),
              require('@/assets/fable02alt2.png'),
              require('@/assets/fable02alt3.png'),
            ],
            currentIndex: 0,
            currentSrc: require('@/assets/fable02.png')
          },
          {
            images: [
              require('@/assets/fable03.png'),
              require('@/assets/fable03alt1.png'),
              require('@/assets/fable03alt2.png'),
              require('@/assets/fable03alt3.png'),
            ],
            currentIndex: 0,
            currentSrc: require('@/assets/fable03.png')
          },
          {
            images: [
              require('@/assets/fable04.png'),
              require('@/assets/fable04alt1.png'),
              require('@/assets/fable04alt2.png'),
              require('@/assets/fable04alt3.png'),
              require('@/assets/fable04alt4.png'),
            ],
            currentIndex: 0,
            currentSrc: require('@/assets/fable04.png')
          }
        ]
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
      prevImage(index) {
        const imageObj = this.dynamicImages[index];
        imageObj.currentIndex = (imageObj.currentIndex - 1 + imageObj.images.length) % imageObj.images.length;
        imageObj.currentSrc = imageObj.images[imageObj.currentIndex];
      },
      nextImage(index) {
        const imageObj = this.dynamicImages[index];
        imageObj.currentIndex = (imageObj.currentIndex + 1) % imageObj.images.length;
        imageObj.currentSrc = imageObj.images[imageObj.currentIndex];
      }
    }
  };
  </script>
  
  <style scoped>
  .image-container {
    width: 100%;
    position: relative;
  }
  
  .header-img {
    position: relative;
  }
  
  .header-img img {
    width: 100%;
  }
  
  .back-icon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 30px;
    cursor: pointer;
  }
  
  .dynamic {
    position: relative;
    margin-top: 20px;
  }
  
  .icon-container {
    width: 100%;
    position: absolute;
    top: 41%;
    gap: 10px;
  }
  
  .icon1 {
    width: 10%
  }

  .icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    height: 50px;
  }


  .dynamic img {
    width: 100%;
    height: auto;
  }
  
  @media (max-width: 600px) {
    .back-icon {
      width: 25px;
    }

  }
  </style>
  