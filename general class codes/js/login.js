import validator from "https://cdn.jsdelivr.net/npm/validator@13.11.0/+esm";

const passwordInput = document.getElementById('passwordInput');
const emailInput = document.getElementById('email')

const passwordLockButton = document.getElementById('passwordLock');
const passwordLockIcon = document.getElementById('passwordLockIcon');
const form = document.getElementById('form');

const errorSpan = document.getElementById('error')

const callBack = () => {
    passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'
    passwordLockIcon.src = passwordInput.type == 'password' ? "../assets/mdi_password (1).svg" : "../assets/open password.svg"
}




const formCallback = async (e) => {
        e.preventDefault()
        const email = emailInput.value;
        const password = passwordInput.value;

        console.log(validator.isEmail(email))




}

passwordLockButton.addEventListener('click',  callBack)
form.addEventListener('submit', formCallback)
 

// const passwordInput = document.getElementById('passwordInput');
// const emailInput = document.getElementById('email')

// const passwordLockButton = document.getElementById('passwordLock');
// const passwordLockIcon = document.getElementById('passwordLockIcon');
// const form = document.getElementById('form');

// const errorSpan = document.getElementById('error')


// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const passwordPattern =  /^.{6,}$/;

// const callBack = () => {
//     passwordInput.type = passwordInput.type == 'password' ? 'text' : 'password'
//     passwordLockIcon.src = passwordInput.type == 'password' ? "../assets/lock2.svg" : "../assets/openLock.svg"
// }

// const formCallback = (e) => {
//         e.preventDefault()
//         const email = emailInput.value;
//         const password = passwordInput.value;

//         const isEmailCorrect = emailPattern.test(email)
//         const isPasswordCorrect = passwordPattern.test(password)

//         if(!isPasswordCorrect) {
//             errorSpan.innerText = "Password is not correct"
//         }

//         if(isEmailCorrect && isPasswordCorrect) {


//             window.localStorage.setItem('user', JSON.stringify({
//                 email
//             }))
//             console.log("user is logged in")


//         }


// }

// passwordLockButton.addEventListener('click',  callBack)
// form.addEventListener('submit', formCallback)

























// ? optional chaining
// event propagation


// const grandParent = document.querySelector('#grandParent')
// const parent = document.getElementById("parent")
// const child = document.getElementById("child")

// grandParent.addEventListener('click', function (){
//     console.log("grandparent clicked")
// })


// parent.addEventListener('click', function (e) {
//     e.stopPropagation()
//     console.log('parent clicked')
// })

// child.addEventListener('click', function (e) {
//     e.stopPropagation()
//     console.log('child clicked')
// })


// event propagation describes the way events move through the DOM elements 
// when an event (like a click event) happens

// it has three phases
// capturing phase
// Target phase 
// bubbling/ propagation phase  => down to the root
 