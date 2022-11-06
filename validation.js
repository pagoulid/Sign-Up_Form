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

    if(ErrorNode.style.visibility == "visible"){
        ErrorNode.style.visibility = "hidden";
    }
   
}

function setCondition(id,value){

    if( id.includes('name')){

        return (value.length>=3&&value.length<=10) && (new RegExp('^[a-zA-Z]+$').test(value));
    }
    else{
        
        if(id == 'email'){

            let split = value.split(/[@.]/);
            let checkFormat = false;
            let username = '';
            let mailserver = '';
            let org = '';

            if(split.length==3){
                 username = split[0];
                 mailserver = split[1];
                 mailserver = mailserver.replace('mail','');
                 org = split[2];
                 checkFormat=true;
                 console.log(username,mailserver,org,checkFormat);
            }
            
            
            return checkFormat && (username.length<=10) && (mailserver.length<=5) && (org.length<=4) && new RegExp('^[a-zA-Z].*([a-zA-Z|0-9]).*\\@.*([a-z]).*mail.*\\..*[a-z]{2}$').test(value);

        }
        else if(id == 'phone'){
            
            return  value.length==13 && new RegExp('^\\+.*[0-9]$').test(value);
        }
    }

}