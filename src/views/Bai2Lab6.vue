<template>
    <div class="container">
        <h3> Nhập tháng của bạn </h3>
            <input  type ="number" v-model.number="month"/>
            <p v-if="month <1 || month >12 " style="color: red;"> VUI LÒNG NHẬP THÁNG TỪ 1 ĐẾN 12</p>
                <p v-else-if="month >=1 && month <=3">MÙA XUÂN</p>
                <p v-else-if="month<=6 ">MÙA HÈ </p>
                <p v-else-if="month<=9 ">MÙA THU</p>
                <P v-else> MÙA ĐÔNG</P>
                
    </div>
</template>

<script setup>
import { ref } from 'vue';
const month = ref(1)
</script>

<style scoped>

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}


h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
  font-family: 'Arial', sans-serif;
}


input[type="number"] {
  width: 80%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 10px;
}


input[type="number"]:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}


p {
  font-size: 16px;
  margin: 10px 0;
}

/* Màu sắc nổi bật cho các đoạn văn bản thông báo mùa */
p:nth-child(3) {
  color: #28a745; /* Mùa xuân - màu xanh lá */
}

p:nth-child(4) {
  color: #ffc107; /* Mùa hè - màu vàng */
}

p:nth-child(5) {
  color: #fd7e14; /* Mùa thu - màu cam */
}

p:nth-child(6) {
  color: #17a2b8; /* Mùa đông - màu xanh nhạt */
}

/* Màu cho thông báo lỗi */
p[style="color: red;"] {
  font-weight: bold;
}
</style>
