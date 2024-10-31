const divs = document.querySelectorAll("div");
const btns = document.querySelectorAll("button");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelectorAll("ul")[0];

const container = divs[0];
container.className = 'container';

const searchContainer = divs[1];
searchContainer.className = 'search';

const liContainer = divs[2];
liContainer.className = 'li-container';

const emptyContainer = divs[3];
emptyContainer.className = 'empty';

const taskCountContainer = divs[4];
taskCountContainer.className = 'task-count';

const btnAnadir = btns[0];
btnAnadir.className = 'btn-add';


const noTaskSpan = emptyContainer.querySelectorAll("p")[0];
const taskCounter = taskCountContainer.querySelectorAll("span")[1];

btnAnadir.addEventListener("click", function (e){
  e.preventDefault(); 
  const textoTarea = input.value;
  if(textoTarea == "") {
    alert("No se pueden anadir tareas vacias, inserta una tarea por favor.")
  } else {
    noTaskSpan.textContent = ""; // Borro el span que decia no hay tareas
    taskCounter.textContent++; // Aumento cada vez que anado tarea
    input.value = ""; // Limpio el input
    crearTareas(ul, textoTarea);
  }
})


function crearTareas(ul, texto) {
  const li = document.createElement("li");
  const p = document.createElement("p");
	const span = document.createElement("span");

  const btnDelete = document.createElement("button");
  btnDelete.className = 'btn-delete';
  btnDelete.textContent = 'x';

  ul.appendChild(li)
  li.appendChild(p);
  li.appendChild(btnDelete)
  p.appendChild(span);
  
  span.textContent = texto; // Anado el texto de la tarea a la lista

  // Anado un event listener a cada btnDelete
  btnDelete.addEventListener("click", function (e) {
    e.preventDefault(); 
    li.remove();
    taskCounter.textContent--;
    actualizarContador();
  })

  p.addEventListener("click", function (e) {
    e.preventDefault(); 
    if(span.hasAttribute("style")) {
      span.removeAttribute("style");
    } else {
      span.style.textDecoration = "line-through";
    }
  })


  return ul;
}

function actualizarContador() {
  if(taskCounter.textContent === '0') {
    noTaskSpan.textContent = 'You have no pending tasks';
  }
}