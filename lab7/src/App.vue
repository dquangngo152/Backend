<template>
  <div id="app">
    <nav>
      <router-link to="/bai1lab7">bai1lab7</router-link>
      <router-link to="/bai2lab7">bai2lab7</router-link>
      <router-link to="/bai3lab7">bai3lab7</router-link>
      <router-link to="/bai4lab7">bai4lab7</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
