//function 
function isEmpty(obj) {
  return obj 
      && obj.constructor === Object 
      && Object.keys(obj).length === 0;
}

let  signInButton=document.getElementById('signInButton');
let loginSection=document.getElementById('loginSection');
let loginInButton=document.getElementById('loginInButton');
let registerSection=document.getElementById('registerSection');
let email=document.getElementById('email');
let login=document.getElementById('login');
let password=document.getElementById('InputPassword');
let email_register=document.getElementById('email_register');
let username_register=document.getElementById('username_register');
let password_register1=document.getElementById('password_register1');
let password_register2=document.getElementById('password_register2');
let register=document.getElementById('register');
let dashboard=document.getElementById('dashboard');
let body=document.getElementsByTagName('body');
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
  body:  JSON.stringify({ email: email.value, password: password.value })
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     return response.json();
  })
  .then(data =>{

  if(data=='[]'){
    // let alert=document.createElement('div');
    // let button=document.createElement('button');
    // button.type='button';

    // alert.classList.add('alert');
    // alert.classList.add('alert-danger');
    // alert.classList.add('position-absolute');
    //    alert.classList.add('position-absolute');
    // alert.textContent='login failed';
    // body[0].appendChild(alert);

  }else{
    
    loginSection.classList.add('d-none');
    dashboard.classList.remove('d-none');



  }
  
  
  }
  )
  .catch(error => console.error('Error:', error));
  
     
    
    
    
}
register.onclick = function (){
    if(password_register1.value===password_register2.value)
        {
          fetch('api.php?register=1', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body:  JSON.stringify({ email: email_register.value, password: password_register1.value,username:username_register.value })
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     return response.json();
  })
  .then(data => jso=data)
  .catch(error => console.error('Error:', error));

    registerSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
}
  

  
}