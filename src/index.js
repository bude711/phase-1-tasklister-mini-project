const form = document.querySelector("form");
const list = document.querySelector("#tasks");


function createNewToDo(event) {
  event.preventDefault();

  const task = document.querySelector('#new-task-description');
  task.value;

  const newList = document.createElement('li');
  newList.textContent = task.value;

  list.append(newList);

  //clear the inout field

 task.value=''

}

document.addEventListener("DOMContentLoaded", () => {
  
document.addEventListener('submit', createNewToDo)



//fucntion extract the value and append it as a list item

});




//what should happen?

//  prevent default-prevents page from reloading/reseting after submitting form
//create an event listened wheny ou submit the form that the value and append it as a list item

//  get element by id
//  get the input value
//  add event listener-so when you submit it does someething with that input vallue
//  get the input value
//  get the form element
//  get the new ul (unordered list) element
//  create child for list, li element (list item)
//  append it to parent container, the unorderd list 

//type task into input field 
//click a submit button
    //create event listener
//task string should appear in DOM after submit button is activated

