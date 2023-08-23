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
import { reactive, onMounted, ref } from "vue";
    let newTask = ref("");
    let tasks = reactive ([
      {text: 'Una prueba 1', completed: false},
      {text: 'Una prueba 2', completed: false},
      {text: 'Una prueba 3', completed: false},
    ]);
 
    let task = {
        text: newTask.value,
        completed: false,
        };
        
    onMounted(() => {           
    
    });

    function createTask() {
        task = {
         text: newTask.value,
         completed: false,
        };
        tasks.push(task);
        newTask.value = "";
        console.log(task);
        console.log(tasks);
     }

     function completeTask(taskText) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (taskText === task.text) {
          task.completed = !task.completed;
        }
      }
    }
    function deleteTask (taskText, completed){
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (taskText === task.text) {
         
          tasks.splice(i,1); 
          
          let nuevoArray = tasks[i];
          
           // nuevoArray.completed = true;
          
          
          console.log(nuevoArray);
        }
   
      }
      console.log(completed);
      
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
  background-color: #1882bb;
  color: #ecf0f1;
  cursor: pointer
}
.list {
  margin-top: 10px;
  margin-right: 200px;
  text-align: left;
  background-color: #d6dcfdd9;
  border-radius: 15px;
  width: 100%;
  
}

.task {
   cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: lightgrey;
}
</style>