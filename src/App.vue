<template>
  <div class="app-layout">
    <nav>
      <router-link to="/">🏠 Home</router-link>
      <router-link to="/admin/new">➕ Write</router-link>
      <router-link to="/explorer">🔍 Explorer</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style>
/* Global resets to ensure the dark theme covers the whole screen */
:root {
  --bg-color: #0f172a;
  --card-bg: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #10b981; /* Nice emerald/mint */
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.app-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

nav {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #334155;
  margin-bottom: 3rem;
}

nav a {
  text-decoration: none;
  color: var(--accent);
  font-weight: 600;
  font-size: 1.1rem;
  transition: opacity 0.2s;
}

nav a:hover {
  opacity: 0.8;
}
</style>
