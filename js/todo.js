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

/******************************************
Form Actions 
********************************************/

const DOMform = document.querySelector('.form');
const DOMtaskTextArea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformActions = DOMform.querySelector('.actions');
const DOMformAdd = DOMformActions.querySelector('.btn.add');
const DOMformClear = DOMformActions.querySelector('.btn.clear');

DOMdeadlineInput.value = formatDate( 86400000 ); //24*60*60*1000 //paros milisekundes 8640000;

DOMformClear.addEventListener('click', clearForm);

function clearForm(){
    //console.log('clear');
    //console.log(DOMtaskTextArea);
    //console.log(DOMdeadlineInput);

    DOMtaskTextArea.value = '';
    DOMdeadlineInput.value = '';
}

DOMformAdd.addEventListener('click', addnewTodoItem);

function addnewTodoItem(){

    let newTodo = {
        description: DOMtaskTextArea.value.trim(),
        created_on: formatDate(),
        deadline: DOMdeadlineInput.value.trim(),
        status: 'todo'
    };

    if ( newTodo.description.length === 0){
        console.error('ERROR: tuscias description');
    }

    if ( newTodo.deadline.length > 0 && (new Date(newTodo.deadline)).toString() === 'Invalid Date' ){
        console.error('ERROR: nevalidus deadline');
    }

    todo_list.push( newTodo ) ; 
    
    return;  
}

function formatDate( deltaTime = 0 ){
    let now = new Date();

    if ( deltaTime !== 0 ){
        now = new Date( Date.now() + deltaTime);
    }

    let minutes = now.getMinutes();
    let hours = now.getHours();
    let days = now.getDate();
    let month = now.getMonth() + 1;
    const years = now.getFullYear();

    if ( minutes < 10 ){
        minutes = '0'+minutes;
    }
    if ( hours < 10 ){
        hours = '0'+hours;
    }
    if ( days < 10 ){
        days = '0'+days;
    }
    if ( month < 10 ){
        month = '0'+month;
    }

    return years+'-'+month+'-'+days+' '+hours+':'+minutes;
}

function addnewTodoItem0(){
    
    let newTodo = {};

    console.log('TODO: istraukti "task" description');
    console.log('TODO: istraukti "deadline"');

    console.log('TODO: validavimas description');
    console.log('TODO: validavimas deadline');

    console.log('TODO: sukonstruojam "todo item" objekta');
    console.log('TODO: statusas "todo"');
    console.log('TODO: statusas tcreated_on NOW/DABAR');

    return newTodo
}