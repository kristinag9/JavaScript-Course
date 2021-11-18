const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// const form = document.querySelector('#signup-form');

const formData = {};
for(let input of [creditCardInput, termsCheckbox, veggieSelect]) {
   input.addEventListener('input', ({ target }) => {
      const { name, type, value, checked } = target;
      formData[name] = type === 'checkbox' ? checked : value;
      console.log(formData);
   })
}


// form.addEventListener('submit', function(e) {
//    // alert('Submitting a form');
//    e.preventDefault();
//    console.log('cc', creditCardInput.value);
//    console.log('terms', termsCheckbox.checked);
//    console.log('veggieSelect', veggieSelect.value);
//    // send form data to db
// });

// const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//    console.log('CC Changes!', e);
//    formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', (e) => {
//    console.log('VEGGIE!', e);
//    formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
//    console.log('CHECKBOX!', e);
//    formData['agreeToTerms'] = e.target.checked;
// });
