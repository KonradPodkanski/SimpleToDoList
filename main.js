// -----------------------upper----------------------------
let typeTask;
let addBtn;
// -----------------------bottom---------------------------
let taskMsg;
let ul;
// ----------------------pop-up----------------------------
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
	typeEditTask = document.querySelector("#edit-task");
	popUpWarning = document.querySelector(".popup__warning");
	subBtn = document.querySelector(".submit");
	cancelBtn = document.querySelector(".cancel");
};
const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addTask);
	addBtn.addEventListener("click", createTools);
};
const createTools = () => {
	const newDiv = document.createElement("div");
	newDiv.classList.add("tools");

	const buttonOne = document.createElement("button");
	buttonOne.classList.add("complete");
	// const iCheck = document.createElement("i");
	// iCheck.classList.add("fa-regular", "fa-circle-check");

	// instead of upper example of creating <i> included classes, I use innerHtml to create whole element
	buttonOne.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

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
		const newLi = document.createElement("li");
		newLi.textContent = typeTask.value;
		ul.appendChild(newLi);
		typeTask.value = "";
		taskMsg.textContent = "";
		console.log("jest ok");
	} else {
		taskMsg.textContent = "Type content of task!";
	}
};

document.addEventListener("DOMContentLoaded", main);
