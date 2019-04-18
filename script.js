function inicializar() {
    //Acá va el código de inicialización
    document.querySelector(".blink").style.display = "none";
    document.querySelector("body").style.backgroundColor = "#FAFBFC";
    
    for(let redClass of document.querySelectorAll(".rojo")){
        redClass.classList.add("verde");
        redClass.classList.remove("rojo");
    }

}