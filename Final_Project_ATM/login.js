function login(form){
    if(form.user.value=="ALERA"){
        if(form.pass.value=="123."){
            location="init.html";
        } else{
            alert("Error de password");
        }
    }else{
        alert("Error de Usuario");
    }
    }