const input = document.querySelector("#username");

input.addEventListener('keydown', function() {
   console.log('Key down!');
});

input.addEventListener('keyup', function() {
   console.log('Key up!');
});

input.addEventListener('keypress', function() {
   console.log('Key press!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
   // console.log(e);
   if(e.key === 'Enter') {
      if(!this.value) return;
      const newItemText = this.value;
      const newItem = document.createElement('li');
      newItem.innerText = newItemText;
      itemsUl.appendChild(newItem);
      this.value = '';
   }
});