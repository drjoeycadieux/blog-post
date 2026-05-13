<script setup>
import { ref } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

// 1. Define the Mutation (This is how you "Write" to GraphQL)
const ADD_POST = gql`
  mutation CreatePost($title: String!, $content: String!, $slug: String!) {
    createPost(data: { title: $title, content: $content, slug: $slug }) {
      id
      title
    }
  }
`;

const title = ref('');
const content = ref('');
const slug = ref('');

// 2. Setup the mutation function
const { mutate: createPost, loading, error } = useMutation(ADD_POST);

const handleSubmit = async () => {
  try {
    await createPost({
      title: title.value,
      content: content.value,
      slug: slug.value.toLowerCase().replace(/ /g, '-'),
    });
    alert('Post created successfully!');
    // Clear the form
    title.value = content.value = slug.value = '';
  } catch (e) {
    console.error(e);
  }
};
</script>

<template>
  <div class="admin-panel">
    <h2>Create New Blog Post</h2>

    <form @submit.prevent="handleSubmit">
      <input v-model="title" placeholder="Post Title" required />
      <input v-model="slug" placeholder="url-slug-example" required />
      <textarea
        v-model="content"
        placeholder="Write your blog content here..."
        rows="10"
        required
      ></textarea>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Saving...' : 'Publish Post' }}
      </button>

      <p v-if="error" class="error">{{ error.message }}</p>
    </form>
  </div>
</template>

<style scoped>
.admin-panel {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input,
textarea {
  background: #0f172a;
  border: 1px solid #334155;
  color: white;
  padding: 0.8rem;
  border-radius: 6px;
}
button {
  background: #10b981;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
button:disabled {
  background: #334155;
}
</style>
