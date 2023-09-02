<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* :root {
  font-size: 1vw;
} */
#app {
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
}
</style>
