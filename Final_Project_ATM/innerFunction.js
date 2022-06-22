function deposit(){
    let moveQ = parseInt(document.getElementById('move').value);
    let balanceQ = parseInt(document.getElementById('quOne').value);
    let beforeChange = balanceQ;
    let change;
    let condition = balanceQ + moveQ;
    if(condition<991){
    change = document.getElementById('quOne').value = (balanceQ + moveQ);
    document.getElementById('ad').innerHTML="Movimiento exitoso.";
    document.getElementById('beforeMove').innerHTML="Cantidad anterior: ";
    document.getElementById('quantBalance').innerHTML=beforeChange;
    document.getElementById('afterMove').innerHTML="Cantidad actual: ";
    document.getElementById('quantFinal').innerHTML= change;
    document.getElementById('aboutMove').innerHTML=("Usted transfirió "+ moveQ +"$ su saldo actual es de "+change);
    }else{
        document.getElementById('ad').innerHTML="Usted no puede tener más de 990.00$ en su cuenta por regla de negocio. ";

    }
    
    

    // window.open('emergentWindow.html', 'Deposit', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
    
}

function withdrawal(){
    let moveQ = parseInt(document.getElementById('move').value);
    let balanceQ = parseInt(document.getElementById('quOne').value);
    let beforeChange = balanceQ;
    let change; 
    let condition = balanceQ - moveQ;
    if(condition>10){
        change = document.getElementById('quOne').value = (balanceQ - moveQ);
        document.getElementById('ad').innerHTML="Movimiento exitoso.";
        document.getElementById('beforeMove').innerHTML="Cantidad anterior: ";
        document.getElementById('quantBalance').innerHTML=beforeChange;
        document.getElementById('afterMove').innerHTML="Cantidad actual: ";
        document.getElementById('quantFinal').innerHTML= change;
        document.getElementById('aboutMove').innerHTML=("Usted retiró "+ moveQ +"$ su saldo actual es de "+change);
    }else{
        document.getElementById('ad').innerHTML="Usted no puede tener menos de 10.00$ en su cuenta por regla de negocio. ";
    }           
    

}