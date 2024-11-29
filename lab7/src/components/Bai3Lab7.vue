<template>
  <div class="container">
    <!-- Form Đăng Ký -->
    <div v-if="!isSubmitted" class="form-container p-5 col-sm-6">
      <h3>Form Đăng Ký</h3>
      <form @submit.prevent="submitForm">
        <!-- Họ tên -->
        <div class="mb-3">
          <label for="name" class="d-flex justify-content-start">Họ tên:</label>
          <input
            v-model="formData.name"
            type="text"
            id="name"
            class="form-control"
            placeholder="Nhập họ tên"
          />
          <p v-if="errors.name" style="color: red">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div class="mb-3">
          <label for="email" class="d-flex justify-content-start">Email:</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            class="form-control"
            placeholder="Nhập email"
          />
          <p v-if="errors.email" style="color: red">{{ errors.email }}</p>
        </div>

        <!-- Mật khẩu -->
        <div class="mb-3">
          <label for="password" class="d-flex justify-content-start"
            >Mật khẩu:</label
          >
          <input
            v-model="formData.password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Nhập mật khẩu"
          />
          <p v-if="errors.password" style="color: red">{{ errors.password }}</p>
        </div>

        <!-- Ngày sinh -->
        <div class="mb-3">
          <label for="dob" class="d-flex justify-content-start"
            >Ngày sinh:</label
          >
          <input
            v-model="formData.dob"
            type="date"
            id="dob"
            class="form-control"
          />
          <p v-if="errors.dob" style="color: red">{{ errors.dob }}</p>
        </div>

        <!-- Giới tính -->
        <div class="mb-3 d-flex justify-content-start">
          <label>Giới tính:</label>
          <label>
            <input v-model="formData.gender" type="radio" value="Nam" /> Nam
          </label>
          <label>
            <input v-model="formData.gender" type="radio" value="Nữ" /> Nữ
          </label>
          <label>
            <input v-model="formData.gender" type="radio" value="Khác" /> Khác
          </label>
          <p v-if="errors.gender" style="color: red">{{ errors.gender }}</p>
        </div>

        <!-- Ngôn ngữ -->
        <div class="mb-3 d-flex justify-content-start">
          <label>Ngôn ngữ:</label>
          <label>
            <input
              v-model="formData.languages"
              type="checkbox"
              value="Tiếng Việt"
            />
            Tiếng Việt
          </label>
          <label>
            <input
              v-model="formData.languages"
              type="checkbox"
              value="Tiếng Anh"
            />
            Tiếng Anh
          </label>
          <label>
            <input
              v-model="formData.languages"
              type="checkbox"
              value="Tiếng Nhật"
            />
            Tiếng Nhật
          </label>
          <p v-if="errors.languages" style="color: red">
            {{ errors.languages }}
          </p>
        </div>

        <!-- Nút Đăng Ký -->
        <button type="submit" class="btn btn-primary">Đăng ký</button>
      </form>
    </div>

    <!-- Thông tin hiển thị -->
    <div v-else class="info-container p-5 col-sm-5">
      <h3>Thông tin đã đăng ký:</h3>
      <p>Họ tên: {{ formData.name }}</p>
      <p>Email: {{ formData.email }}</p>
      <p>Ngày sinh: {{ formData.dob }}</p>
      <p>Giới tính: {{ formData.gender }}</p>
      <p>
        Ngôn ngữ:
        {{
          formData.languages.length
            ? formData.languages.join(", ")
            : "Không có ngôn ngữ nào"
        }}
      </p>
      <button @click="resetForm" class="btn btn-primary">Đăng ký lại</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

// Dữ liệu form
const formData = reactive({
  name: "",
  email: "",
  password: "",
  dob: "",
  gender: "",
  languages: [],
});

const isSubmitted = ref(false);

const errors = reactive({
  name: "",
  email: "",
  password: "",
  dob: "",
  gender: "",
  languages: "",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Hàm kiểm tra lỗi
const validateForm = () => {
  let isValid = true;

  // Validate Họ tên
  if (!formData.name) {
    errors.name = "Họ tên là bắt buộc.";
    isValid = false;
  } else {
    errors.name = "";
  }

  // Validate Email
  if (!formData.email) {
    errors.email = "Email là bắt buộc.";
    isValid = false;
  } else if (!emailRegex.test(formData.email)) {
    errors.email = "Vui lòng nhập email hợp lệ.";
    isValid = false;
  } else {
    errors.email = "";
  }

  // Validate Mật khẩu
  if (!formData.password) {
    errors.password = "Mật khẩu là bắt buộc.";
    isValid = false;
  } else if (formData.password.length < 6) {
    errors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
    isValid = false;
  } else {
    errors.password = "";
  }

  // Validate Ngày sinh
  if (!formData.dob) {
    errors.dob = "Vui lòng chọn ngày sinh.";
    isValid = false;
  } else {
    errors.dob = "";
  }

  // Validate Giới tính
  if (!formData.gender) {
    errors.gender = "Vui lòng chọn giới tính.";
    isValid = false;
  } else {
    errors.gender = "";
  }

  // Validate Ngôn ngữ
  if (formData.languages.length === 0) {
    errors.languages = "Vui lòng chọn ít nhất một ngôn ngữ.";
    isValid = false;
  } else {
    errors.languages = "";
  }

  return isValid;
};

// Hàm xử lý khi submit form
const submitForm = () => {
  if (validateForm()) {
    isSubmitted.value = true;
  } else {
    isSubmitted.value = false;
  }
};

// Hàm reset form
const resetForm = () => {
  formData.name = "";
  formData.email = "";
  formData.password = "";
  formData.dob = "";
  formData.gender = "";
  formData.languages = [];
  isSubmitted.value = false;
  for (const key in errors) {
    errors[key] = "";
  }
};
</script>
