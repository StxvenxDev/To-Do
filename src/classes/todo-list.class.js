
import { ToDo } from './index'

export class ToDoList{

    constructor (ToDo){
        
        this.cargarLocalStorage();

    }

    nuevoToDo(ToDo){
        this.todos.push(ToDo);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        for(let todo of this.todos){

            if(todo.id == id){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;

            }

        }

    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : [];
        
        this.todos = this.todos.map(obj => ToDo.fromJson(obj));
    
    }
}