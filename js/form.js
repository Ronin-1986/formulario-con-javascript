let formulario = document.querySelector("form");
console.log("funciona!");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let regexSoloLetras = /^[a-zA-Z\s]+$/;
    let soloNumeros = /^[0-9]{13,16}/;
    let numeros = /^[0-9]{1,16}/;
    let cvcCheck = /^[0-9]{3,3}/;

    //desaparecer faltan datos
    let x = document.getElementById("faltan-datos");
    if (!x.style.display === "none") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    
    // validación card
    if(!soloNumeros.test(formulario.card.value)){
        formulario.card.classList.add('is-invalid');
    }else{
        formulario.card.classList.remove('is-invalid');
    }

    // validación cvc
    if(!cvcCheck.test(formulario.cvc.value)){
        formulario.cvc.classList.add('is-invalid');
    }else{
        formulario.cvc.classList.remove('is-invalid');
    }

    // validación amount
    if(!soloNumeros.test(formulario.amount.value)){
        formulario.amount.classList.add('is-invalid');
    }else{
        formulario.amount.classList.remove('is-invalid');
    }

    //validación first name
    if(!regexSoloLetras.test(formulario.first_name.value)){
        formulario.first_name.classList.add('is-invalid');
    }else{
        formulario.first_name.classList.remove('is-invalid');
    }

     //validación last name
     if(!regexSoloLetras.test(formulario.last_name.value)){
        formulario.last_name.classList.add('is-invalid');
    }else{
        formulario.last_name.classList.remove('is-invalid');
    }

     //validación city
     if(!regexSoloLetras.test(formulario.city.value)){
        formulario.city.classList.add('is-invalid');
    }else{
        formulario.city.classList.remove('is-invalid');
    }

     //validación state
     if(!soloNumeros.test(formulario.state.value)){
        formulario.state.classList.add('is-invalid');
    }else{
        formulario.state.classList.remove('is-invalid');
    }

     //validación postal
     if(!numeros.test(formulario.postal.value)){
        formulario.postal.classList.add('is-invalid');
    }else{
        formulario.postal.classList.remove('is-invalid');
    }

     //validación text area
     if(!regexSoloLetras.test(formulario.text_area.value)){
        formulario.text_area.classList.add('is-invalid');
    }else{
        formulario.text_area.classList.remove('is-invalid');
    }


})

