<template>
  <div id="app">
    <header>
      <nav>
        <!-- Tạo các liên kết điều hướng -->
        <ul>
          <li><router-link to="/Bai1Lab6">Bài 1</router-link></li>
          <li><router-link to="/Bai2Lab6">Bài 2</router-link></li>
          <li><router-link to="/Bai3Lab6">Bài 3</router-link></li>
          <li><router-link to="/Bai4Lab6">Bài 4</router-link></li>
        </ul>
      </nav>
    </header>
    
    <!-- Chỗ hiển thị nội dung từ router -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

