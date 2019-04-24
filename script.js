function inicializar() {
    //Acá va el código de inicialización
    document.querySelector(".blink").style.display = "none";
    document.querySelector("body").style.backgroundColor = "#FAFBFC";
    
    /* Change red class for green class */
    for(let redClass of document.querySelectorAll(".rojo")){
        redClass.classList.add("verde");
        redClass.classList.remove("rojo");
    }

    /*Change dots for a text */
    document.querySelectorAll("li")[6].innerText ="Cambiar puntos suspensivos";


    /*Change input text for text area */
    document.querySelectorAll("input")[0].classList.add("inputText");

    let text = document.querySelector(".inputText");
    let textArea = document.createElement("textarea");
    text.parentNode.replaceChild(textArea,text);

    /* Agregar Noticia*/

    let noticiaArray = ["Hola hoy pase un juego de Final Fantasy", "Me pase en dificultad maxima todo Dark soul 3", "Me Vi got capitulo 3"]
   
    for(i=0; i<noticiaArray.length; i++){
        let parentNode = document.querySelector(".info-box");
        let noticia = document.createElement("p");
        let text = document.createTextNode(noticiaArray[i]);
        noticia.appendChild(text);
        parentNode.appendChild(noticia);
    }
    
}