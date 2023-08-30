// -----------------------upper----------------------------
let typeTask;
let addBtn;
let sortBtn;
let isActive;
// -----------------------bottom---------------------------
let taskMsg;
let li;
const ul = document.querySelector("ul");
// ----------------------pop-up----------------------------
let showPopUp;
let typeEditTask;
let popUpWarning;
let subBtn;
let cancelBtn;
let toDoEdit;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	// -----------------------upper----------------------------
	typeTask = document.querySelector("#task");
	addBtn = document.querySelector(".btn-add");
	sortBtn = document.querySelector(".btn-sort");
	isActive = true;
	// -----------------------bottom---------------------------
	taskMsg = document.querySelector(".tasks-messange");
	// ----------------------pop-up----------------------------
	PopUp = document.querySelector(".popup");
	typeEditTask = document.querySelector("#edit-task");
	popUpWarning = document.querySelector(".popup__warning");
	subBtn = document.querySelector(".submit");
	cancelBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addTask);
	sortBtn.addEventListener("click", toggleSort);
	ul.addEventListener("click", toolsPanelAction);
	subBtn.addEventListener("click", changeTask);
	cancelBtn.addEventListener("click", closePopup);
	typeTask.addEventListener("keyup", enterKeyCheck);
	typeEditTask.addEventListener("keyup", enterKeyCheck);
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
	toDoEdit = e.target.closest("li");
	PopUp.classList.toggle("active");
	typeEditTask.value = toDoEdit.textContent.replace("EDIT", "");
};
const completedTask = e => {
	e.target.closest("li").classList.toggle("completed");
};
const deleteTask = e => {
	e.target.closest("li").remove();

	const tasks = document.querySelectorAll("li");
	if (tasks.length === 0) {
		taskMsg.textContent = "Task list is empty";
	} else {
		taskMsg.textContent = "";
	}
};
const changeTask = () => {
	if (typeEditTask.value !== "") {
		toDoEdit.firstChild.textContent = typeEditTask.value;
		popUpWarning.textContent = "";
		closePopup();
	} else {
		popUpWarning.textContent = "Type content!";
	}
};
const closePopup = () => {
	PopUp.classList.remove("active");
};
const enterKeyCheck = e => {
	if (
		e.key === "Enter" &&
		e.target.closest("input").classList.value === "task"
	) {
		addTask();
	} else if (
		e.key === "Enter" &&
		e.target.closest("input").classList.value === "popup__edit-task"
	) {
		changeTask();
	}
};
let sortable = new Sortable(ul, {
	animation: 200,
	group: {
		name: "shared",
		pull: "clone",
		revertClone: true,
	},
	sort: false,
});
const toggleSort = () => {
	if (isActive === true) {
		console.log("wykonuje sie sort");
		sortBtn.classList.add("action");
		sortable.options.sort = true;
		isActive = false;
	} else if (isActive === false) {
		console.log("przerwanie sort");
		sortBtn.classList.remove("action");
		sortable.options.sort = false;
		isActive = true;
	}
};

document.addEventListener("DOMContentLoaded", main);
