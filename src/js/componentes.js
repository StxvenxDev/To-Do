import { ToDo} from "../classes";
import { tareas } from "..";
//Html Ref
const divToDoList = document.querySelector('.todo-list');
const txtTodo   = document.querySelector('.new-todo');
const borrarCompletado = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const contador = document.querySelector('.todo-count');

export const crearTarea = (todo) =>{

    

    const htmlToDo = 
    `
    <li class=" ${ (todo.completado) ? 'completed' : '' } " data-id="${todo.id}">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
			<label> ${ todo.tarea } </label>
			<button class="destroy"></button>
		</div>
        <input class="edit" value="Create a TodoMVC template">
    </li> -->
    `
    const  div = document.createElement('div');

    div.innerHTML = htmlToDo;

    divToDoList.append(div.firstElementChild);
    
}



txtTodo.addEventListener('keyup' , ( event ) => {

    if(event.keyCode === 13 && txtTodo.value.length > 0){

        const tarea = new ToDo(txtTodo.value);
        
        tareas.nuevoToDo(tarea);

        crearTarea(tarea);

        txtTodo.value = '';

        console.log(tareas)
    }
});

divToDoList.addEventListener('click', (event) => {

    const divElement   = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId       = todoElemento.getAttribute('data-id');

    if(divElement.includes('input')){

        tareas.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if(divElement.includes('button')){

        tareas.eliminarTodo(todoId);
        divToDoList.removeChild(todoElemento);
        
    }

} );

borrarCompletado.addEventListener('click',  (event) =>{

    tareas.eliminarCompletados();

    for(let i = divToDoList.children.length-1 ;  i >= 0 ; i--){
        const elemento = divToDoList.children[i];

        if(elemento.classList.contains('completed')){
            divToDoList.removeChild(elemento);
        }
    }

});

ulFilters.addEventListener('click' , (event) => {


    const filtro = event.target.text;
    if (!filtro){return};

    for ( const elemento of divToDoList.children){

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden')
                }
                break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');     
                }
                break;
        }
    }
});