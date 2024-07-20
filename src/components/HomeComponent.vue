<template>
  <div class="body">
    <div class="background">
      <div class="image-container">
        <img src="@/assets/homepage-background.png">
      </div>
    </div>
    <div class="icons">
      <div class="icon-small">
        <img src="@/assets/homepage-newday.png" alt="Image 1" @click="navigateTo('/newday')" style="cursor: pointer;">
        <img src="@/assets/homepage-wildfable.png" alt="Image 2" @click="navigateTo('/WildFable')" style="cursor: pointer;">
      </div>
      <div class="icon-small">
        <img src="@/assets/homepage-motion.png" alt="Image 3" @click="navigateTo('/AllinMotion')" style="cursor: pointer;">
        <img src="@/assets/homepage-cat.png" alt="Image 4" @click="navigateTo('/CatJack')" style="cursor: pointer;">  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  padding: 0px;
  margin: 0px;
}

.image-container {
  width: 100%;  /* Set the width of the container */
  height: 100vh;  /* Set the height of the container (100% of the viewport height) */
  padding: 0px;
  margin: 0px;

}

.body {
  position: relative;
}

.image-container img {
  width: 100%;
  padding: 0px;
  margin: 0px;
}

.icons {
  position: absolute;
  top: 70%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
}

.icon-small {
  margin: auto;
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
}

.icons img {
  width: 50%;
  height:auto;
}

@media (max-width: 1000px) {
  .icons {
    top: 60%;
  }
}

@media (max-width: 800px) {
  .icons {
    top: 50%;
  }
}

@media (max-width: 600px) {
  .icons {
    top: 30%;
  }
}
</style>
