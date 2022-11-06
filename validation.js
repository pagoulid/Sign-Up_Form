function pswd_validation(){
    const ErrorNode = document.querySelector('.pswd-error-msg');

    const pswdNode = document.getElementById('password');
    const cpswdNode = document.getElementById('cpassword');
    const pswd = pswdNode.value;
    const cpswd = cpswdNode.value;
    
    if(pswd===cpswd){

        if(!pswd.length>0){
                pswdNode.className = '';
                cpswdNode.className = '';
        }
        else{

            disp(pswdNode,'valid','error');
            disp(cpswdNode,'valid','error');
            
        }

        hideErrorMsg(ErrorNode);
   
    }
    else{

        disp(pswdNode,'error','valid');
        disp(cpswdNode,'error','valid');
        showErrorMsg(ErrorNode);

    }

}

function name_validation(first){

        const ErrorNode = document.querySelector('.'+first+'name-error-msg');
        const nameNode = document.getElementById(first+'name');
        const name = nameNode.value;
        
        const lenCondition =name.length>=3&&name.length<=10;
        const numCondition = new RegExp('^[a-zA-Z]+$').test(name);

        if(name.length>0){

            if(lenCondition&&numCondition){

                disp(nameNode,'valid','error');
                hideErrorMsg(ErrorNode);

            }
            else{

                disp(nameNode,'error','valid');
                showErrorMsg(ErrorNode);

            }

        }
        else{

            if(nameNode.className.length>0){

                nameNode.className = '';
                hideErrorMsg(ErrorNode);
            
            }
            
        }
        
    }

function disp(Node,addClass,replaceClass){

        if(Node.classList.contains(replaceClass)){
            Node.classList.replace(replaceClass,addClass); 
        }
        else{
            Node.classList.add(addClass);
        }

    }

 


function showErrorMsg(ErrorNode){
    ErrorNode.style.display = "block";
}

function hideErrorMsg(ErrorNode){

    if(ErrorNode.style.display=="block"){
        ErrorNode.style.display = "none";
    }
    
}