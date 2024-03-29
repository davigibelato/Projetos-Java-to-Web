function verification(){ 
    let user=document.getElementById("user").value
    let password=document.getElementById("password").value
    console.log(user)
    console.log(password)

    if(user === "" || password === ""){
        alert("Preencha todos os campos!")
    }else{
        alert("Agora podemos começar!")
        window.location.href = "./pages/calc-imc.html"
    }
}
