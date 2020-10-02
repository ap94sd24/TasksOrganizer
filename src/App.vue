<template>
  <div id="app">
    <div class="container">
      <AddTask/>
      <Tasks />
    </div>
  </div>
</template>

<script>
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";
export default {
  name: "App",
  components: {
    Tasks,
    AddTask
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5;
  background: #e6e3e3;
}

.container {
  max-width: 1000px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
