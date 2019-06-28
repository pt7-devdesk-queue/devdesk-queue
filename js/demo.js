//Demo Page

const firstName = document.getElementById('firstName');
// const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
firstName.addEventListener('change', () => {
    if (firstName.value.length < 6) {
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
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        emailError.classList.toggle('hidden');
        emailError.classList.toggle('error');  
    }
});
phone.addEventListener('change', () => {
    if (phone.value.length < 10) {
        phoneError.classList.toggle('hidden');
        phoneError.classList.toggle('error');        
    } 
});






  

