let  signInButton=document.getElementById('signInButton');
let loginSection=document.getElementById('loginSection');
let loginInButton=document.getElementById('loginInButton');
let registerSection=document.getElementById('registerSection');
let email=document.getElementById('email');
let login=document.getElementById('login');
let password=document.getElementById('InputPassword');
let token=document.getElementsByName("_token");
signInButton.onclick = function (){
    loginSection.classList.add("d-none");
    registerSection.classList.remove("d-none")
    
}
loginInButton.onclick = function (){
    loginSection.classList.remove("d-none");
    registerSection.classList.add("d-none")
    
}
login.onclick = function (){
  
 fetch('api.php?login=1', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body:  JSON.stringify({ email: 'John', password: '1234' })
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     return response.json();
  })
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));

    
    
}