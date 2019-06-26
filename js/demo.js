//Demo Page

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const company = document.getElementById('company');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
firstName.addEventListener('change', () => {
    if (firstName.value.length < 6) {
        document.body.style.background = "red";
        console.log(firstName);
    } else {
        console.log("it didn't work!!")
    }
});





  

