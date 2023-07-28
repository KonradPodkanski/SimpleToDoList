// -----------------------upper----------------------------
const typeTask = document.querySelector("#task");
const addBtn = document.querySelector(".btn-add");
const cardWarning = document.querySelector(".warning");
// -----------------------bottom---------------------------
const taskMsg = document.querySelector(".tasks-messange");
const ul = document.querySelector("ul");
const li = document.querySelectorAll("li");
const completeBtn = document.querySelectorAll(".complete");
const editBtn = document.querySelectorAll(".edit");
const delBtn = document.querySelectorAll(".delete");
// ----------------------pop-up----------------------------
const typeEditTask = document.querySelector("#edit-task");
const popUpWarning = document.querySelector(".popup__warning");
const subBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");

const addTask = () => {
	const newLi = document.createElement("li");
	const newDiv = document.createElement("div");
	const buttonOne = document.createElement("button");
	const buttonTwo = document.createElement("button");
	const buttonThree = document.createElement("button");
	const iCheck = document.createElement("i");
	const iDel = document.createElement("i");
	newDiv.classList.add("tools");
	buttonOne.classList.add("complete");
	buttonTwo.classList.add("edit");
	buttonThree.classList.add("delete");
	iCheck.classList.add("fa-regular", "fa-circle-check");
	iDel.classList.add("fa-solid", "fa-xmark");
	buttonTwo.textContent = "EDIT";

	buttonOne.appendChild(iCheck);
	buttonThree.appendChild(iDel);
	newDiv.append(buttonOne, buttonTwo, buttonThree);
	newLi.textContent = typeTask.value;
	newLi.appendChild(newDiv);
	ul.appendChild(newLi);
	typeTask.value = "";
};

const checkTask = () => {
	if (typeTask.value == 0) {
		cardWarning.textContent = "you have to enter the content!";
	} else {
		cardWarning.textContent = "";
		addTask();
	}
};
addBtn.addEventListener("click", checkTask);
console.log(typeTask);
