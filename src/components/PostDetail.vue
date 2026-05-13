<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { useRoute } from 'vue-router';

const route = useRoute();

// Query that takes a $slug variable
const GET_SINGLE_POST = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content
      publishedAt
      author {
        name
      }
    }
  }
`;

const { result, loading, error } = useQuery(GET_SINGLE_POST, () => ({
  slug: route.params.slug, // Gets the slug from the URL
}));
</script>

<template>
  <div class="post-page">
    <router-link to="/">← Back to list</router-link>

    <div v-if="loading">Opening the post...</div>

    <article v-if="result && result.post">
      <header>
        <h1>{{ result.post.title }}</h1>
        <small
          >By {{ result.post.author?.name }} on
          {{ result.post.publishedAt }}</small
        >
      </header>

      <div class="content" v-html="result.post.content"></div>
    </article>
  </div>
</template>

<style scoped>
.post-page {
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.8;
}

.back-link {
  color: #94a3b8;
  text-decoration: none;
  display: block;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #f8fafc;
}

.meta {
  color: #64748b;
  margin-bottom: 2rem;
}

.content {
  font-size: 1.125rem;
  color: #cbd5e1;
}

/* This targets HTML content coming from your GraphQL API */
.content :deep(p) {
  margin-bottom: 1.5rem;
}

.content :deep(img) {
  max-width: 100%;
  border-radius: 8px;
}
</style>
