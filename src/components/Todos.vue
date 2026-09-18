<script setup lang="ts">
//import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

// create a reactive reference to the array of todos
const todos = ref<Array<Schema['Todo']["type"]>>([]);

function listTodos() {
  client.models.Todo.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      todos.value = items
     },
  }); 
}

function createTodo() {
  client.models.Todo.create({
    content: window.prompt("Todo content")
  }).then(() => {
    // After creating a new todo, update the list of todos
    listTodos();
  });
}
    
// fetch todos when the component is mounted
 onMounted(() => {
  listTodos();
});

</script>

<template>
  <main>
    <h1>My todos</h1>
    <button @click="createTodo">+ new</button>
    <ul>
      <li 
        v-for="todo in todos" 
        :key="todo.id">
        {{ todo.content }}
      </li>
    </ul>
    <div>
      🥳 App successfully hosted. Try creating a new todo.
      <br />
      <a href="https://docs.amplify.aws/vue/start/quickstart/">
        Review next steps of this tutorial.
      </a>
    </div>
  </main>
</template>


<style scoped>
body {
  margin: 0;
  background: linear-gradient(180deg, rgb(194, 143, 81), rgb(255, 255, 255));
  display: flex;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: white;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  border: 1px solid black;
  gap: 1px;
  background-color: black;
  border-radius: 8px;
  overflow: auto;
}

li {
  background-color: white;
  padding: 8px;
}

li:hover {
  background: #dadbf9;
}

a {
  font-weight: 800;
  text-decoration: none;
}
</style>