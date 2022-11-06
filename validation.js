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

function validation(id){/*For phone,names,mail*/ 

        const ErrorNode = document.querySelector('.'+id+'-error-msg');
        const Node = document.getElementById(id);
        const text = Node.value;
        
        
        const condition = setCondition(id,text);

        if(text.length>0){

            if(condition){

                disp(Node,'valid','error');
                hideErrorMsg(ErrorNode);

            }
            else{

                disp(Node,'error','valid');
                showErrorMsg(ErrorNode);

            }

        }
        else{

            if(Node.className.length>0){

                Node.className = '';
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
    ErrorNode.style.visibility = "visible";
}

function hideErrorMsg(ErrorNode){

    if(ErrorNode.style.display=="block"){
        ErrorNode.style.visibility = "hidden";
    }
   
}

function setCondition(id,value){

    if( id.includes('name')){

        return (value.length>=3&& value.length<=10) && (new RegExp('^[a-zA-Z]+$').test(value));
    }
    else{

        if(id == 'email'){

        }
        else if(id == 'phone'){

            return  true && new RegExp('^\\+.*[\d{3}]$').test(value);
        }
    }

}