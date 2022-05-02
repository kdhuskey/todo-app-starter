// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.

const completeList = document.querySelector('#complete-items')
const incompleteList = document.querySelector('#incomplete-items')
// completeList.style.backgroundColor = 'blue'
// incompleteList.style.backgroundColor = 'pink'


const newTodo = document.querySelector('#todoForm')
const task = document.querySelector('.form-control')
const theTodoList = document.querySelector('#incomplete-items')
const completedList = document.querySelector('#complete-items')
const bodyB = document.querySelector('body')
bodyB.style.backgroundColor = 'skyBlue'
newTodo.style.backgroundColor = 'yellow'
task.style.backgroundColor = 'pink'






newTodo.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = {
        id: todoItems.length + 1,
        title: task.value,
        completed: false,
    }
    todoItems.push(newTask)
    console.log(todoItems)
    const addedTask = document.createElement('li')
    addedTask.classList.add('list-group-item')
    const label = document.createElement('label')
    label.innerText = newTask.title
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    
    const deleteButton = document.createElement('button')
    // deleteButton.classList.add('remove')
    deleteButton.innerText = 'Remove?'
    deleteButton.addEventListener('click', function(){
        addedTask.remove()
    })
    

    checkbox.classList.add('form-check-input')
    label.classList.add('form-check-label', 'ps-3')
    addedTask.appendChild(checkbox)
    addedTask.appendChild(label)
    addedTask.appendChild(deleteButton)
    theTodoList.appendChild(addedTask)
    
    //reset needs to go at the end!
    newTodo.reset()

    checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
    completedList.appendChild(addedTask)
    newTask.completed = true
    } else {
    theTodoList.appendChild(addedTask)
        }
    })

})


for (let item of todoItems) {
    const currentItem = document.createElement('li')
    currentItem.classList.add('list-group-item')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('form-check-input')
    currentItem.appendChild(checkbox)
    const label = document.createElement('label')
    label.innerText = item.title
    label.classList.add('form-check-label', 'ps-3')
    currentItem.appendChild(label)
    
    if (item.completed) {
        completeList.appendChild(currentItem)
        checkbox.checked = true
    }
    else {
        incompleteList.appendChild(currentItem)
        
    }
    
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.innerText = 'Remove?'
    deleteButton.type = 'button'
    currentItem.appendChild(deleteButton)
    deleteButton.addEventListener('click', function(){
        currentItem.remove()
    })
    checkbox.addEventListener("click", function () {
        if (checkbox.checked) {
            completeList.appendChild(currentItem)
            newTask.completed = true
        } else {
            incompleteList.appendChild(currentItem)
        }
    })

}
// refresh.. need to figure out how to get the og form to work again
// const refreshPage = document.querySelector('#clearPage')
// refreshPage.addEventListener('click', function(e){
//     e.preventDefault()
//     completeList.remove()
//     incompleteList.remove()
// })

