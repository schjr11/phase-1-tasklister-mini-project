document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    let li = document.createElement ('li')
    li.textContent = e.target["new-task-description"].value
    document.querySelector('#tasks').append(li)
  })
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener('submit', (e) => {
    e.preventDefault()
    let li = document.createElement ('li')
    li.textContent = e.target["new-user-entry"].value
    document.querySelector('#users').append(li)
  })
});