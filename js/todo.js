/*

String.prototype.toAlternatingCase = function () {
    let text = '';

    for (let i=0; i<this.length; i++) {
        let letters = this[i];
        
        
        if (letters === letters.toLowerCase() )
        {
            // jei raide mazoji
            text = text + letters.toUpperCase();        
        }
        else{
            // jei raide didzioji
            text = text + letters.toLowerCase();
        }
    }
    //console.log(text);
    return text;

    
}

console.log("Linas".toAlternatingCase() === "lINAS");


String.prototype.firstLetter = function () {
    console.log( this );
    return this[0];
}

console.log( 'afghfgxcvb'.firstLetter() );
console.log( 'VASDASDASDFDSFS'.firstLetter() );

String.prototype.lastLetter = function () {
    console.log( this );
    return this[this.length-1];
}

console.log( 'afghfgxcvb'.lastLetter() );
console.log( 'VASDASDASDFDSFS'.lastLetter() );

*/



/*
Todo darba aprasancios savybes
- description
- deadline
- status: todo, in-progress, done
*/



//console.log(todo_list);

'use strict'

function renderList( list ) {
    
    const listPlace = document.querySelector('.container');
    let HTML = '';

    for (let i=0; i<list.length; i++) {
    
        const todoItem = list[i];
    
        HTML +=`
        <div class="item">
            <div class="status ${todoItem.status}"></div>
            <p class="description">${todoItem.description}</p>
            <div class="deadline">${todoItem.deadline}</div>

            <div class="actions">
                <div class="action remove">Remove</div>     
            </div>
        </div>`;
    }
    return listPlace.innerHTML += HTML; //innerTEXT isveda html
}

/******************************************
Render Todo List
********************************************/

renderList( todo_list );

/******************************************
Remove Single Todo Items 
********************************************/

const removeActions = document.querySelectorAll('.item .action.remove');

for ( let i=0; i<removeActions.length; i++){
    const removeElement = removeActions[i];
    removeElement.addEventListener('click', actionRemoveTodoItem);
}

function actionRemoveTodoItem( ){
    //const parentItem = event.path[2];
    const parentItem = event.target.closest('.item');
    parentItem.remove();
}

/******************************************
Remove ALL Todo Items 
********************************************/

const removeAll = document.querySelector('.global-actions > .action.remove');

removeAll.addEventListener('click', actionRemoveAll);

function actionRemoveAll(){

    const allTodoItems = event.target.closest('.container').querySelectorAll('.item');
    //const parent = event.target.closest('.container');
    //const allTodoItems = parent.querySelectorAll('.item');

    for ( let i=0; i<allTodoItems.length; i++){
        allTodoItems[i].remove();
    }
}

