const state = {
  tasks: [],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const actions = {
  async fetchTasks({ commit }) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonRes = await res.json();

      commit('setTasks', jsonRes);
    } catch (error) {
      console.log(error);
    }
  },
  async addTask({ commit }, title) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false }),
      });
  
      const dataRes = await res.json();
      commit('addTask', dataRes);
      
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  addTask: (state, task) => state.tasks.unshift(task),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
