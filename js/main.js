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
let logoutButton=document.getElementById('logout');
let body=document.getElementsByTagName('body');
let filesButton=document.getElementById('myFiles');
let filesSection=document.getElementById('files');
window.addEventListener('load', function(event) {
  console.log('loaded');
  
 fetch('api.php?login=0', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body:  JSON.stringify({load:'true'})
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
});

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
    console.log(data);
    
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
    console.log(data);
    
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
logoutButton.onclick =function(){
    
 fetch('api.php?logout=1', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body:  JSON.stringify({})
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     return response.text();
  })
  .then(data =>{
    window.location.reload();
    
 
  
  }
  )
  .catch(error => console.error('Error:', error));
}
filesButton.onclick =function (){
  files.classList.remove('d-none');

  fetch('api.php?files=1', {
  method:'POST',
  headers: {
    'Content-Type': 'application/json',

  },
  body:  JSON.stringify({})
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
     return response.json();
  })
  .then(data =>{
    console.log(data);
    
    data.forEach(element => {
      
      let div=document.createElement('div');
      let divb=document.createElement('div');

     let h5=document.createElement('h5');
     let text=document.createElement('p');
     h5.innerText=element.file_name;  
     text.innerText=`file_path : ${element.file_path} \n file_size : ${element.file_size} \n is_public : ${element.is_public}`;
     div.classList.add('card');
     div.classList.add('postion-relative');
     divb.classList.add('card-body');
      h5.classList.add('card-title');
      text.classList.add('card-text');
     divb.appendChild(h5);
     divb.appendChild(text);
     div.appendChild(divb); 
     files.appendChild(div);
     console.log(element);
     
    });    
            
 
  
  }
  )
  .catch(error => console.error('Error:', error));
}