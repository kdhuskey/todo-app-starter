// You can access the 'todoItems' variable from the 'data.js' file, so long as 'data.js'
// comes before 'script.js' in the HTML document
console.log(todoItems)

// Use the 'todoItems' variable to create the appropriate elements and append them onto
// the page.

const incompleteItems = document.querySelector('#incomplete-items')
const completeItems = document.querySelector('#complete-items')

// loop over each todo item in the data
for (let item of todoItems) {
  // create a list item element and set appropriate bootstrap classes
  const listItem = document.createElement('li')
  listItem.classList.add('list-group-item')
  // create a checkbox and add it to the list item
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('form-check-input')
  listItem.appendChild(checkbox)
  // create a label for the checkbox, add classes, set text and add to list item
  const label = document.createElement('label')
  label.innerText = item.title
  label.classList.add('form-check-label', 'ps-3')
  listItem.appendChild(label)

  // if the todo item has been marked as completed in the data
  if (item.completed) {
    // then add it to the complete section and check the checkbox input
    completeItems.appendChild(listItem)
    checkbox.checked = true
  } else {
    // otherwise, add it to the incomplete section
    incompleteItems.appendChild(listItem)
  }
}
