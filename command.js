const text = document.getElementsByClassName('name1')[0];

const email = document.getElementsByClassName('email')[0];

const tel = document.getElementsByClassName('tel1')[0];

const hide = document.getElementsByClassName('successful')[0];

const msg11 = document.getElementsByClassName('msg11')[0];


const emailInput = document.getElementById('email');

const emailError = document.getElementById('emailError');

const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const btn = document.getElementsByClassName('btn')[0];

function validation() 
{  
  emailInput.addEventListener('input', () => 
  { 
      if (!format.test(emailInput.value)) 
      {
        emailError.textContent = 'Please enter a valid email address';
      } 

      else if (emailInput.value.length <= 0) 
      {
        emailError.textContent = ''; 
      }
      
      else 
      { 
        emailError.textContent = ''; 
      } 
  }); 
} 

// function message()
// {
//   var Name = document.getElementById('name');
//   var email = document.getElementById('email');
//   var tel = document.getElementById('tel');
//   var msg = document.getElementById('mag');
 
//   if (Name.value == '' || email.value == '' || tel.value == '' || msg.value == '')
//   {
//     danger.style.display = 'block';
//   }
//   else
//   {
//     setTimeout(() =>{
//       Name.value = '';

//       email.value = '';

//       tel.value = '';

//       msg.value = '';
//     }, 6000)

//     success.style.display = 'block';
//   }

//   setTimeout(() =>
//   {
//     danger.style.display = 'none';
//     success.style.display = 'none';
//   }, 4000);

  
// }



  
btn.addEventListener('click', function(event)
{
   event.preventDefault()

   if (name1.value.length == 0)
    { 
        alert("name field can't be empty");  	
    } 


    else if (email.value.length == 0)
    { 
        alert("email field can't be empty");  	
    }

    else if (tel1.value.length == 0)
    { 
      alert("Tel field can't be empty");  	
    }

    else if (msg11.value.length == 0)
    {
      alert("Message field can't be empty");
    }

    

    if(text.value != '' && email.value !== '' && tel1.value != '' && msg11.value != '')
    {
      hide.classList.add('show')

      setTimeout(()=>
      {
          // hide.classList.remove('show')
          text.value = '';
          email.value = '';
          tel1.value = '';
          msg11.value = '';
      }, 4000)
    }
    
    
      setTimeout(()=>
      {
          hide.classList.remove('show')
          text.value != '';
          email.value != '';
          tel1.value != '';
          msg11.value = '';
      }, 4000)
    
    
    
})

setTimeout(()=>
    {
      hide.classList.remove('show')
      text.value = ''
      email.value = ''
      tel1.value = ''
   }, 4000)
  
