<script setup>
// Replace this with your actual GraphQL API URL
const graphqlUrl = 'https://your-api-endpoint.com/graphql';
</script>

<template>
  <div class="explorer-container">
    <div class="explorer-header">
      <h3>Yoga GraphiQL Explorer</h3>
      <p>Test your blog queries below</p>
    </div>

    <iframe :src="graphqlUrl" frameborder="0" class="yoga-iframe"></iframe>
  </div>
</template>

<style scoped>
.explorer-container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  background: #1e293b;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #334155;
}

.explorer-header {
  padding: 1rem;
  background: #0f172a;
  border-bottom: 1px solid #334155;
}

.explorer-header h3 {
  margin: 0;
  color: #10b981;
}
.explorer-header p {
  margin: 5px 0 0;
  font-size: 0.8rem;
  color: #94a3b8;
}

.yoga-iframe {
  width: 100%;
  flex-grow: 1;
  background: white; /* GraphiQL usually has its own theme */
}
</style>
