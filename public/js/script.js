import '../dist/bundle.js';

// Get a reference to the signupButton element
const signupButton = document.getElementById('signupButton');
const name = document.getElementById('name');
const email = document.getElementById('email');
const cr_passwd = document.getElementById('cr_passwd');
const cn_passwd = document.getElementById('cn_passwd');
const termCon = document.getElementById('termCon');

// Add a click event listener to the button
signupButton.addEventListener('click', ( ) => {
  // This code will be executed when the button is clicked
  if (termCon.checked){
    if (cr_passwd.value == cn_passwd.value && cn_passwd.value != null && cr_passwd.value != null){
      console.log('Name ' + name.value);
      console.log('Email ' + email.value);
    }
  }
  // You can add your own code here to handle the button click event
});