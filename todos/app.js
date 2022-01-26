const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo)=>{
    if(todo.length > 0){
        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
        `;
        list.innerHTML += html;
        addform.reset();
    }
}

addform.addEventListener('submit',(event)=>{
    event.preventDefault(); 
    const todo = addform.add.value.trim();
    generateTemplate(todo);
});

// delete todos
list.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filtertodos = (term)=>{
    Array.from(list.children)
        .filter((item)=>{
            return !item.textContent.toLowerCase().includes(term);
        })
        .forEach((itemaddclass)=>{
            itemaddclass.classList.add('filtered');
        });
    
    // to remove the filtered class in case user deletes a letter from search
    Array.from(list.children)
        .filter((item)=>{
            return item.textContent.toLowerCase().includes(term);
        })
        .forEach((itemremoveclass)=>{
            itemremoveclass.classList.remove('filtered');
        });
}

search.addEventListener('keyup',()=>{
    const term = search.value.trim().toLowerCase();
    filtertodos(term);
});
