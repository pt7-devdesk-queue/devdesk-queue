// //Demo Page
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
firstName.addEventListener('change', () => {
    if (firstName.value.length < 6) {
        console.log(firstName.value.length);
        firstNameError.classList.toggle('hidden');
        firstNameError.classList.toggle('error');  
    } 
});
lastName.addEventListener('change', () => {
    if (lastName.value.length < 6) {
        lastNameError.classList.toggle('hidden');
        lastNameError.classList.toggle('error');        
    } 
});
company.addEventListener('change', () => {
    if (company.value.length < 6) {
        companyNameError.classList.toggle('hidden');
        companyNameError.classList.toggle('error');        
    } 
});
email.addEventListener('change', () => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        emailError.classList.toggle('hidden');
        emailError.classList.toggle('error');        
    }
});
phone.addEventListener('change', () => {
    var filter = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    if (!filter.test(phone.value)) {
        phoneError.classList.toggle('hidden');
        phoneError.classList.toggle('error');
    }
});

// const inputs = querySelectorAll('.demo-content .demo-form div input');
//  inputs.forEach((input) => {
//      input.addEventListener('change', (event) => {
//          if (input.value.length < 6) {
//              input + 'Error'.classList.toggle('hidden');
//              input + 'Error'.classList.toggle('error');
//          }
//      })
//  } )




//  const firstName = document.getElementById('firstName');
//  const lastName = document.getElementById('lastName');
//  const company = document.getElementById('company');
//  const email = document.getElementById('email');
//  const phone = document.getElementById('phone');

//  firstName.addEventListener('click', checkText(firstName.length), false);


//  function checkText(el) {
//     el.preventDefault();

//      if (el.length < 6) {
//          console.log(el);
//      }
//  }



  

