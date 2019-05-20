<template>
  <div id="app">
    <form @submit.prevent="add()">
      <input type="text" v-model="name">
      <button>Add</button>
    </form>

    <ul>
      <li v-for="todo in todos">
        <!-- <li v-for="(todo index) in todos"> -->
        {{todo.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      todos: []
    };
  },
  methods: {
    add() {
      if (this.name) {
        // alert(this.name); //画面に出力されるか
        this.todos = this.todos.concat({ name: this.name });
        this.name = "";
      }
    }
  }
};
</script>

<style>
</style>
