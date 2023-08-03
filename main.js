// -----------------------upper----------------------------
let typeTask;
let addBtn;
// -----------------------bottom---------------------------
let taskMsg;
let ul;
// ----------------------pop-up----------------------------
let showPopUp;
let typeEditTask;
let popUpWarning;
let subBtn;
let cancelBtn;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	// -----------------------upper----------------------------
	typeTask = document.querySelector("#task");
	addBtn = document.querySelector(".btn-add");
	// -----------------------bottom---------------------------
	taskMsg = document.querySelector(".tasks-messange");
	ul = document.querySelector("ul");
	// ----------------------pop-up----------------------------
	PopUp = document.querySelector(".popup");
	typeEditTask = document.querySelector("#edit-task");
	popUpWarning = document.querySelector(".popup__warning");
	subBtn = document.querySelector(".submit");
	cancelBtn = document.querySelector(".cancel");
};
const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addTask);
	ul.addEventListener("click", toolsPanelAction);
	subBtn.addEventListener("click", changeTask);
	cancelBtn.addEventListener("click", closePopup);
};
const createTools = newTodo => {
	const newDiv = document.createElement("div");
	newDiv.classList.add("tools");
	newTodo.append(newDiv);

	const buttonOne = document.createElement("button");
	buttonOne.classList.add("complete");
	// const iCheck = document.createElement("i");
	// iCheck.classList.add("fa-regular", "fa-circle-check");

	// instead of upper example of creating <i> included classes, I use innerHtml to create whole element
	buttonOne.innerHTML = '<i class="fa-solid fa-check"></i>';

	const buttonTwo = document.createElement("button");
	buttonTwo.classList.add("edit");
	buttonTwo.textContent = "EDIT";

	const buttonThree = document.createElement("button");
	buttonThree.classList.add("delete");
	buttonThree.innerHTML = '<i class="fa-solid fa-xmark"></i>';

	newDiv.append(buttonOne, buttonTwo, buttonThree);
};
const addTask = () => {
	if (typeTask.value !== "") {
		const newTask = document.createElement("li");
		newTask.textContent = typeTask.value;
		ul.appendChild(newTask);
		createTools(newTask);
		typeTask.value = "";
		taskMsg.textContent = "";
	} else {
		taskMsg.textContent = "Type content of task!";
	}
};
const toolsPanelAction = e => {
	if (e.target.matches(".complete")) {
		completedTask(e);
	} else if (e.target.matches(".edit")) {
		editTask(e);
	} else if (e.target.matches(".delete")) {
		deleteTask(e);
	} else {
		console.log("doesn't work :(");
	}
};
const editTask = e => {
	PopUp.classList.toggle("active");
	typeEditTask.value = e.target.closest("li").textContent.replace("EDIT", "");
};
const completedTask = e => {
	e.target.closest("li").classList.toggle("completed");
};
const deleteTask = e => {
	e.target.closest("li").remove();
};
const changeTask = () => {
	
};
const closePopup = () => {
	PopUp.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", main);
