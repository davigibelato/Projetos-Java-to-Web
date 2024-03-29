function verification(){ 
    let user = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value

    console.log(user);
    console.log(senha);

    if(user === "" || senha === ""){
        Swal.fire({
            icon: "error",
            title: "Calma aí",
            text: "Preencha Todos os Campos",
          });
    }else if(user === "admin" || senha === "admin"){
        Swal.fire("Obrigado Por Fazer Login (:");
    }else{
        
        Swal.fire({
            icon: "error",
            title: "Opa",
            text: "Senha ou Usuario Incorretos!",
          });
    }


}

