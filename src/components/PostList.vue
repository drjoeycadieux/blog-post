<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// The Query: Change "allPosts" to match your API schema
const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      excerpt
      slug
    }
  }
`;

const { result, loading, error } = useQuery(GET_POSTS);
</script>

<template>
  <section class="blog-container">
    <h1>Latest Articles</h1>

    <div v-if="loading" class="status">Loading posts...</div>
    <div v-else-if="error" class="status error">{{ error.message }}</div>

    <div v-else class="post-grid">
      <div v-for="post in result.posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.excerpt }}</p>
        <router-link :to="'/post/' + post.slug" class="read-more">
          Read More →
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.post-card {
  background: #1e293b; /* Darker card color */
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #334155;
  transition: transform 0.2s, border-color 0.2s;
}

.post-card:hover {
  transform: translateY(-5px);
  border-color: #10b981;
}

h2 {
  margin-top: 0;
  color: #f8fafc;
}

p {
  color: #94a3b8;
  line-height: 1.5;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: #10b981;
  text-decoration: none;
  font-weight: bold;
}
</style>
