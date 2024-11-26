<template>
  <div class="container mt-5">
    <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
        <div class="col sm-4 mb-4" v-for="(item, index ) in items" :key="index">
          <div class="card">
            <img :src="item.image" class="img-fluid" alt=""/>
            <div class="card-body">
              <h3 class="card-title">{{ item.title  }}</h3>
              <p class="card-text">{{ item.content  }}</p>
              <button class="btn btn-info">XEM CHI TIẾT</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';


const items = ref ([

 { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là một trong những chất dinh dưỡng tốt cho sức khỏe', image: img1 },
 { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại...', image: img2 },
{ title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng...', image: img3 },
]);

</script>


<style>

</style>