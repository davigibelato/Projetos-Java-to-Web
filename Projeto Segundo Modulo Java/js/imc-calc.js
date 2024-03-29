function calculate(){
    var heigth = document.getElementById("heigth").value/100;
    var weigth = document.getElementById("weigth").value;


    var imc= weigth / heigth ** 2;
    var text = ""
    console.log(imc)

    if(imc <=18.5){
        text=("Você está muito magro");
    }else if(imc <= 24.9){
        text=("Você está com o peso normal (:");
    }else if(imc <= 29.9){
        text=("Você está com sobrepeso");
    }else if(imc <= 39.9){
        text=("Você está com obesidade");
    }else if(imc > 39.9){
        text=("Você está com obesidade mórbida");
    }
    document.getElementById("text_area").innerText="            seu imc é de: "+Math.round(imc)+"                    "+text;
}

function verification(){ 
    let heigth=document.getElementById("heigth").value
    let weigth=document.getElementById("weigth").value
    console.log(heigth)
    console.log(weigth)

    if(heigth === "" || weigth === ""){
        alert("Preencha todos os campos!")
    }else{
        calculate();
    }
}

function runFunction(){
    verification();
    
}
