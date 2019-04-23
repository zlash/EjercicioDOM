function inicializar() {


    //Acá va el código de inicialización
    //01. Hacer que desaparezca el popup molesto.
    var sacar = document.querySelector('.blink');
    sacar.style.display = "none";

    //02. Ponerle fondo "#FAFBFC" al documento.
    document.body.style.backgroundColor = "#FAFBFC";

    //03. Todos los elementos que tienen la clase rojo, sacarles la clase rojo y ponerles la clase verde
    // PROBAR CON for of
    var classColor = document.querySelectorAll('.rojo');
   /*
    for (let i=0; i < classColor.length; i++){
        classColor[i].classList.replace('rojo', 'verde');
    }
   */
    
    for (let m in classColor){
        classColor[m].classList.replace('rojo', 'verde');
    }
  
    
    //04. Cambiar los puntos suspensivos "..." por el contenido que quieras.
    document.getElementsByTagName("li")[6].innerHTML = "El contenido que quieras";
  
    //05. Cambiar el input de texto definido como <input type="text"> por <textarea>
    var inputTag = document.getElementsByTagName("input")[0];
    var textAreaTag = document.createElement("textarea");
  
        // Copy the children
    while (inputTag.firstChild) {
        textAreaTag.appendChild(inputTag.firstChild); // *Moves* the child
    }

        // Copy the attributes
    for (let i=0; i < inputTag.attributes.length; i++) {
        textAreaTag.attributes.setNamedItem(inputTag.attributes[i].cloneNode());
    }

        // Replace it
    inputTag.parentNode.replaceChild(textAreaTag, inputTag);  

    //06. Agregar dos o tres noticias despues del titulo que dice "Nuevas noticias:"

    var h4 = document.querySelector("h4");
    h4.id= "nuevasnoticias";
    var ulNuevasNoticias = document.createElement("ul");
    h4.appendChild(ulNuevasNoticias);

    var noticia1 = document.createElement("li");
    var textNoticia1 = document.createTextNode("Gente que busca gente");
    var noticia2 = document.createElement("li");
    var textNoticia2 = document.createTextNode("Un bebe donó todo su dinero");
    var noticia3 = document.createElement("li");
    var textNoticia3 = document.createTextNode("Nueva píldora le da reset a tu vida");

    noticia1.appendChild(textNoticia1);
    noticia2.appendChild(textNoticia2);
    noticia3.appendChild(textNoticia3);

    ulNuevasNoticias.appendChild(noticia1);
    ulNuevasNoticias.appendChild(noticia2);
    ulNuevasNoticias.appendChild(noticia3);

}