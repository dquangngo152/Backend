<template>
  <div class="col-sm-4 m-5">
    <h2>Bình luận bài viết</h2>
    <div class="card">
      <img src="../assets/images/img1.jpg" alt="hình ảnh" />
      <div class="card-body">
        <h5 class="card-title">8 loại rau củ quả giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để
          bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có
          8 loại rau củ giàu canxi...
        </p>
      </div>
    </div>

    <form @submit.prevent="submitComment" class="mt-3">
      <textarea
        id="commentText"
        cols="60"
        v-model="commentText"
        placeholder="Nhập bình luận của bạn"
      ></textarea>
      <br />
      <button
        type="submit"
        class="btn btn-success d-flex justify-content-start"
      >
        Gửi bình luận
      </button>
    </form>

    <div v-if="comments.length" class="mt-3">
      <h3 class="d-flex justify-content-start">Danh sách các bình luận:</h3>
      <ul style="list-style-type: circle; padding-left: 20px">
        <li v-for="(comment, index) in comments" :key="index">
          <div class="d-flex">
            <strong>{{ comment.name }}:</strong> <span>{{ comment.text }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["username"]);

const commentText = ref("");

// Mảng chứa các bình luận đã gửi
const comments = ref([]);

// Xử lý gửi bình luận
function submitComment() {
  if (commentText.value) {
    // Thêm bình luận mới vào mảng comments
    comments.value.push({
      name: props.username, // Sử dụng tên từ props
      text: commentText.value,
    });
    // Xóa dữ liệu trong form sau khi gửi
    commentText.value = "";
  }
}
</script>
