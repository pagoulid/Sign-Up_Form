function validation(){
    const ErrorNode = document.querySelector('.error-msg');

    const pswdNode = document.getElementById('password');
    const cpswdNode = document.getElementById('cpassword');
    const pswd = pswdNode.value;
    const cpswd = cpswdNode.value;
    
    


if(cpswdNode.classList.contains('pswd-error')){
    
    if(pswd===cpswd){
    pswdNode.classList.replace('pswd-error','pswd-valid');
    cpswdNode.classList.replace('pswd-error','pswd-valid');
    ErrorNode.style.display = "none";
    }
}
else{
    if(pswd!=cpswd){
        pswdNode.classList.replace('pswd-valid','pswd-error');
        cpswdNode.classList.replace('pswd-valid','pswd-error');
        ErrorNode.style.display = "block";
    }
}

}