const allLis = document.querySelectorAll('li');
for(let i = 0; i < allLis.length; i++) {
   allLis[i].innerText = 'WE ARE THE CHAMPIONS!';
}

for(let li of allLis) {
   li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}

const todo = document.querySelector('#todos .todo');
todo.style.color = 'gray';
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%';

const todo = document.querySelector('#todos .todo');
todo.getAttribute('class');
todo.setAttribute('class', 'done');

// creating
document.createElement('h2');
