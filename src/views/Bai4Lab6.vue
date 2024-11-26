<template>
  <div>
  <form @submit.prevent="submitForm" class="col-sm-4">
    <h3>Thêm học sinh</h3>
    <div class="mb-3 mt-3">
      <label for="name">Họ tên:</label>
      <input type="text" class="form-control" v-model="student.name" id="name" required />
    </div>

    <div class="mb-3">
      <label for="score">Điểm:</label>
      <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score" required />
    </div>

    <div class="mb-3">
      <label for="dob">Ngày sinh:</label>
      <input type="date" class="form-control" v-model="student.dob" id="dob" required />
    </div>

    <button type="submit" class="btn btn-success">
      {{ isEditing ? 'Cập nhật' : 'Thêm' }}
    </button>
  </form>
  

  <h3>Danh sách học sinh</h3>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Họ và tên</th>
        <th>Điểm</th>
        <th>Ngày sinh</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(stu, index) in students" :key="index">
        <td>{{ stu.name }}</td>
        <td>{{ stu.score }}</td>
        <td>{{ stu.dob }}</td>
        <td>
          <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
        </td>
        <td>
          <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu ban đầu
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

// Biến quản lý trạng thái form
const student = ref({
  name: '',
  score: null,
  dob: ''
})

let isEditing = ref(false)
let editingIndex = ref(null)
function submitForm() {
    if (isEditing.value) {
        // Cập nhật thông tin học sinh
        // { ...student.value } sẽ tạo một bản sao mới của đối tượng student.value
        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex.value = null
    } else {
        // Thêm học sinh mới
        students.value.push({ ...student.value })
    }
    resetForm()
}

function editStudent(index) {
    student.value = { ...students.value[index] }
    isEditing.value = true
    editingIndex.value = index
}

function deleteStudent(index) {
    students.value.splice(index, 1)
}

function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    }
}

</script>


<style>

body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f9f9f9;
  color: #333;
}


form {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

form h3 {
  margin-bottom: 15px;
  color: #007bff;
}

form .form-control {
  border: 1px solid #ced4da;
  border-radius: 5px;
}

form .btn-success {
  background-color: #28a745;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

form .btn-success:hover {
  background-color: #218838;
}

/* Định dạng bảng */
table {
  background-color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

table thead {
  background-color: #007bff;
  color: #ffffff;
}

table th, table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

table tr:hover {
  background-color: #f1f1f1;
}

/* Định dạng nút sửa và xóa */
table .btn-warning {
  background-color: #ffc107;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

table .btn-warning:hover {
  background-color: #e0a800;
}

table .btn-danger {
  background-color: #dc3545;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

table .btn-danger:hover {
  background-color: #c82333;
}



</style>
