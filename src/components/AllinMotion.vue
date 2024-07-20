<template>
    <div class="image-container" @click="hideVideo">
      <div class="back-icon" @click.stop="goHome">
        <img src="@/assets/back.svg" alt="back">
      </div>
      <div class="play-01" @click.stop="playVideo('video01')">
        <img src="@/assets/play.svg" alt="play">
      </div>
      <div class="play-02" @click.stop="playVideo('video02')">
        <img src="@/assets/play.svg" alt="play">
      </div>
      <img src="@/assets/motion.png" alt="motion">
  
      <!-- Video player -->
      <div v-if="isVideoVisible" class="video-overlay" @click="hideVideo">
        <video :src="currentVideoSrc" controls autoplay loop></video>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    name: 'AllinMotion',
    data() {
      return {
        isVideoVisible: false,
        currentVideoSrc: ''
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
      playVideo(video) {
        this.currentVideoSrc = require(`@/assets/${video}.mp4`);
        this.isVideoVisible = true;
      },
      hideVideo() {
        this.isVideoVisible = false;
      }
    }
  };
  </script>
<style>
.image-container {
  width: 100%;
  position: relative;
}

.image-container img {
  width: 100%;
}

.play-01, .play-02 {
  position: absolute;
  cursor: pointer;
}

.play-01 {
  top: 52%;
  left: 45%;
}

.play-02 {
  top: 81%;
  left: 45%;
}

.back-icon {
  position: absolute;
  right: 100px;
  top: 40px;
  width: 5%;
  cursor: pointer;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-overlay video {
  max-width: 80%;
  max-height: 80%;
}

@media (max-width: 600px) {
  .back-icon {
    right: 50px;
    width: 35px;
  }
  .play-01 {
    top: 53%;
    left: 40%;
  }
  .play-02 {
    top: 82%;
    left: 40%;
  }
}
</style>
