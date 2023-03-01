const form = document.getElementById('add-todo');
const list = document.getElementById('list');

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const input = document.getElementById('title');
    
    const newText = document.createElement('div');
    newText.textContent= input.value;
    
    const newItem = document.createElement('li');


    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X"
    deleteButton.addEventListener('click', function(){
        newItem.remove();
    })
    const editButton = document.createElement('button')
    editButton.textContent = "edit";
    
    list.append(newItem)
    newItem.append(newText);
    newItem.append(editButton);
    newItem.append(deleteButton);
    
    input.value = '';

    
})