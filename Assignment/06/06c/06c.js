function validateEmail() 
{
    var email= window.document.forms[0].email.value;
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}




