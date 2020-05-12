'use strict'

const DOMcontainer = document.querySelector('.container');

const DOMglobals = DOMcontainer.querySelector('.global-actions');
const BTNremoveAll = DOMglobals.querySelector('.action.remove');

const DOMform = DOMcontainer.querySelector('.form');
const DOMtaskTextArea = DOMform.querySelector('textarea[name="task"]');
const DOMdeadlineInput = DOMform.querySelector('input[name="deadline"]');
const DOMformActions = DOMform.querySelector('.actions');
const DOMformAdd = DOMformActions.querySelector('.btn.add');
const DOMformClear = DOMformActions.querySelector('.btn.clear');

let DOMitems = null; //DOMcontainer.querySelector('.item');

function renderList( list ){
    for ( let i=0; i<list.length; i++){
        renderTodoItem( list[i] );
    }
}

function renderTodoItem( data ) {
    const id = 'todo_'+data.id;
    const HTML =`
        <div class="item" id="${id}">
            <div class="status ${data.status}"></div>
            <p class="description">${data.description}</p>
            <div class="deadline">${data.deadline}</div>

            <div class="actions">
                <div class="action remove">Remove</div>     
            </div>
        </div>`;

        DOMcontainer.insertAdjacentHTML('beforeend', HTML);
        DOMitems = DOMcontainer.querySelectorAll('.item');

        const item = DOMcontainer.querySelector('#'+id);


        // registruojame event listener
        item.querySelector('.action.remove')
        .addEventListener('click', () => {
                
            let currentAddedItemIndex = 0;

                // randu kelintas sarase yra norimas TODO item

                for ( let i=0; i< DOMitems.length; i++){
                    if ( DOMitems[i].id === id) {
                        currentAddedItemIndex = i;
                        break
                    }
                }
                
                removeTodo( currentAddedItemIndex );
            });
        return;
}

function removeAllTodos() {
    for ( let i=todo_list.length-1; i>=0; i--){
        removeTodo( i );
    }
}

function removeTodo( todoIndex ) {
    DOMitems[todoIndex].remove();
    DOMitems = DOMcontainer.querySelectorAll('.item');

    let leftTodos = [];
    for ( let i=0; i<todo_list.length; i++){
        if ( i !== todoIndex)
        {
            leftTodos.push( todo_list[i] );
        }
    }
    todo_list = leftTodos;
    return;
}

/* remove nuo galinio
[0, 1, 2, 3]
1. [1, 2, 3]
2. [1, 3]
3. [1, 3]
*/

renderList( todo_list );

BTNremoveAll.addEventListener( 'click', removeAllTodos);

DOMdeadlineInput.value = formatDate( 86400000 );

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

/*
function suma(a, b){
    return a+b;
}
console.log('function suma:', suma(8, 3));

const atimtis = function(a, b) {
    return a-b;
}
console.log('bevarde funkcija atimtis:', atimtis(8, 3));

const daugyba = (a, b) => a*b;
console.log('arrow function daugyba:', daugyba(3, 16));
*/