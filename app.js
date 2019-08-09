document.getElementById('formTareas').addEventListener('submit', guardarTarea);

function guardarTarea(e){
    
  let titulo =  document.getElementById('titulo').value
  let descripcion = document.getElementById('descripcion').value
 
  const tarea = {
      titulo, //titulo: titulo,
      descripcion //descripcion: descripcion
  };
  
  if(localStorage.getItem('tareas')=== null){
      //si el localstorage esta vacio empieza a agregar las tareas
    let tareas =[];
    tareas.push(tarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }else{ 
      // si ya habia unas, simplemente actualiza y agregalas nuevamente
   let tareas= JSON.parse(localStorage.getItem('tareas'));
   tareas.push(tarea);
   localStorage.setItem('tareas', JSON.stringify(tareas));
  }
  

 
 
 
 
  e.preventDefault();
}