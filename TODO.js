// function aHover() {
//     aHover.style.color = "var(--secondary-color)";
//     console.log("You hovered over the title!")
// }
// aHover.addEventListener("mouseover", aHover) 

const todos = [
        { text: "Create mission and vision statements", completed: true },
        { text: "Conduct market research and analysis", completed: true },
        { text: "Develop financial projections and budget", completed: false },
        { text: "Outline marketing and sales strategies", completed: true },
    ];

const checklist = document.querySelector(".checklist-items");
const progressFill = document.querySelector("#progressFill");
const progressPercentage = document.querySelector("#progressPercentage");

function updateProgress() {
    const completedCount = todos.filter(todo => todo.completed).length;
    const percentage = todos.length === 0
        ? 0
        : Math.round((completedCount / todos.length) * 100);

    progressFill.style.width = `${percentage}%`;
    progressPercentage.textContent = `${percentage}%`;
}

function renderChecklist() {
    checklist.replaceChildren();

    todos.forEach((todo, index) => {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const text = document.createElement("span");

        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        

        text.textContent = todo.text;
        
         checkbox.addEventListener("change", () => {
            todos[index].completed = checkbox.checked;
            updateProgress();
        });

        label.append(checkbox, text);
        item.append(label);
        checklist.append(item);
    });

    updateProgress();
}

renderChecklist();



const checklistForm = document.querySelector("#checklistForm")
const checklistInput = document.querySelector("#checklistInput")

checklistForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    console.log("Item submitted:${checklistInput.value}")

    const newItem = {
        text: checklistInput.value,
        completed: false
    }
    todos.push(newItem)
    renderChecklist();
    checklistInput.value=""
});

// const removedItem = "Clean the house"

// function getItemsLeft() {
//     return todos.filter((item) => item.text !== removedItem && !item.completed)
// }

// function renderTodos() {
//     const todoList = document.querySelector("#toDoList")
//     todoList.replaceChildren()

//     getItemsLeft().forEach((todo) => {
//         const todoItem = document.createElement("li")
//         todoItem.classList.add("item")
//         todoItem.textContent = todo.text
//         if (todo.completed) {
//             todoItem.classList.add("completed")
//         }
//         todoList.append(todoItem)
//     })
// }

const removeCheckedButton = document.querySelector(".checklist-button");

removeCheckedButton.addEventListener("click", () => {
    for (let index = todos.length - 1; index >= 0; index--) {
        if (todos[index].completed) {
            todos.splice(index, 1);
        }
    }

    renderChecklist();
});
