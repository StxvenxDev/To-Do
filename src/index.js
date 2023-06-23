
import './styles.css'

import { ToDo,ToDoList } from './classes';
import { crearTarea } from './js/componentes';


export const tareas = new ToDoList();


tareas.todos.forEach(todo => crearTarea(todo));

/*
tareas.nuevoToDo(tarea2);

crearTarea(tarea2);

console.log(tareas);
*/