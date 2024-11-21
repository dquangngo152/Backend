<template>
    <div class="Bai4">
      <h1>Quản lý bài viết</h1>
      <CreatePost @add-post="addPost" /> <br />
      <PostList :posts="posts" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import CreatePost from './CreatePost.vue';
  import PostList from './PostList.vue';
  
  const posts = ref([]);
  
  function addPost(post)  {
    posts.value.push(post);
  };
  </script>
  <style >
.Bai4{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}</style>
  