<template>
  <div>
    <h3>Add Task</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Task..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTask(this.title);
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #d4af09;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #d4af09;
  color: #fff;
  border: 1px solid #d4af09;
  cursor: pointer;
  border-radius: 10%;
}
</style>