import { createRouter, createWebHistory } from 'vue-router';

import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';
import AdminCreatePost from './components/AdminCreatePost.vue';

import GraphExplorer from './components/GraphExplorer.vue';

const routes = [
  { path: '/', component: PostList },
  { path: '/post/:slug', component: PostDetail },
  { path: '/admin/new', component: AdminCreatePost }, // <-- Add this
  { path: '/explorer', component: GraphExplorer }, // <-- Add this!
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; // This sends the router to main.js
