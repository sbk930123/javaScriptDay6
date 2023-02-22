const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = [];


function saveToDos() {
  localStorage.setItem("할일", JSON.stringify(toDos));
}

// Todo 항목중 선택항목을 삭제
function deleteTodo(event) {
  const li = event.target.parentElement;
  const toDo = li.firstChild.innerText;
  toDos = toDos.filter(item => item !== toDo);
  localStorage.setItem("할일", JSON.stringify(toDos));
  li.remove();
}

// Todo 리스트를 화면에 보여줌
function paintTodo() {
  console.log(toDos);
  // li를 만든다
  const li = document.createElement("li");
  // span을 만든다
  const span = document.createElement("span");
  span.innerText = toDoInput.value;
  // button을 만든다
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  // li에 appendChild로 span과 button 추가
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  toDoInput.value = ""; // 추가 후 input 값 초기화
}

// Form Submit 이벤트를 처리하는 콜백함수
function handleToDoSubmit(event) {
  event.preventDefault();
  toDos.push(toDoInput.value);
  saveToDos();
  paintTodo();
  // 보여주는 기능 함수를 호출한다.
}

toDoForm.addEventListener('submit', handleToDoSubmit);



