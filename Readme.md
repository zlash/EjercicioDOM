# Ayuda!

Necesito hacer los siguientes cambios a la página web, pero no se puede cambiar el código HTML.

En el archivo script.js hay una función `inicializar()` que está vacia y se ejecuta al cargar la página.

Los cambios que necesito son:

## Cambios

* Hacer que desaparezca el popup molesto.
* Ponerle fondo "#FAFBFC" al documento.
* Todos los elementos que tienen la clase `rojo`, sacarles la clase `rojo` y ponerles la clase `verde`
* Cambiar los puntos suspensivos "..." por el contenido que quieras.
* Cambiar el input de texto definido como `<input type="text">` por `<textarea>`
* Agregar dos o tres noticias despues del titulo que dice "Nuevas noticias:"

Al terminar, commitear todos los cambios a github y hacer un pull request contra este repo.

Gracias!


#EXTRA! 

Como ejercicio extra, al terminar lo anterior, se puede convertir el código escrito a jQuery.

Para realizarlo, es recomendable comenzar en un nuevo branch (Que se puede llamar, por ejemplo jQuery). 

Para incluir jQuery, en el archivo index.html, en el bloque `head` hay que agregar:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js" integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg=" crossorigin="anonymous"></script>
```

Además se agrega el siguiente pedido:

* Agregar un botón después del textarea que al hacer click en el, el contenido del textarea se agregue como un nuevo `<li>` al `<ul>` y luego el textarea vuelva estar vacio. Como validación extra, si el textarea está vacio, que no pase nada.
