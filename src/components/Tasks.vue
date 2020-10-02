<template>
  <div class="container">
    <h1>Tasks Tracker</h1>
    <div class="tasks">
      <div v-for="todo in allTasks" :key="todo.id" class="task">
        <h5>{{ todo.title }}</h5>
        <i class="fas fa-trash"></i>
        <p>{{ todo.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tasks",
  methods: {
    ...mapActions(["fetchTasks"])
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchTasks();
  }
};
</script>
<style scoped>
.tasks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.task {
  border: 1px solid #ccc;
  background: #d4af09;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.container {
  padding: 0;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
</style>