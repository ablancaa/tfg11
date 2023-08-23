<template>
    <div class="task-list">
    <h1> Tasks</h1>
    <form class="form" @submit.prevent="createTask">
      <label class="label" for="task">Nueva tarea:</label>
      <input class="input" type="text" v-model="newTask" id="task" />
      <input class="button" type="submit" value="Crear Prestamo" />
    </form>
    <ul class="list">
      <li
        class="task" title="Tacha esta tarea"
        v-for="task in tasks" :key="task" @click="completeTask(task.text)"
      >{{task.text}} - <button  @click="deleteTask(task.text, task.completed)"><img src="../assets/eliminar.png" height="20"/></button></li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
    let newTask = "";
    let tasks = reactive [{}];
    
            onMounted(() => {
                 tasks = reactive [
            {text: 'Una prueba 1', completed: false},
            {text: 'Una prueba 2', completed: false},
            {text: 'Una prueba 3', completed: false},
            {text: 'Una prueba 4', completed: false},
            {text: 'Una prueba 5', completed: false},
            {text: 'Una prueba 6', completed: false},
            {text: 'Una prueba 7', completed: false},
            {text: 'Una prueba 8', completed: false},
            {text: 'Una prueba 9', completed: false},
            {text: 'Una prueba 10', completed: false},
            {text: 'Una prueba 11', completed: false},
            {text: 'Una prueba 12', completed: false}
            ];
    
  });
    function createTask() {
        let task = [{
         text: newTask,
         completed: false,
        },];
       //tasks.push(task);
       
        task.push(task);
        newTask = "";
        console.log(task);
     }
     
</script>

<style scoped>
.task-list {
  width: 800px;
  max-width: 100%;
  margin: 0px auto;
}

.form {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0px 10px 22px -1px rgba(0,0,0,0.25);
  margin-top: 10px;
}
.label {
  display: block;
  margin-bottom: 10px;
}
.input {
  height: 35px;
  border-radius: 5px;
}
.button {
  margin-left: 20px;
  height: 35px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
  background-color: #2ecc71;
  color: #ecf0f1;
  cursor: pointer
}
.list {
  margin-top: 40px;
  margin-right: 200px;
  text-align: left;
}

.task {
   cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>