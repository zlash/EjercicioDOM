function inicializar() {
    $(document).ready(function(){
    
        $("#popup").hide();

        $("body").css("background-color", "#FAFBFC");
    
        var $claseRoja = $("body").find(".rojo");

        for (let x of $claseRoja) {
            $claseRoja.removeClass("rojo").addClass("verde");
        }

        $($("li")[6]).html("Milanesa con fritas");

        var $attributes = $($($("form").find("input"))[0]).attr("placeholder");
        $($("input")[0]).replaceWith('<textarea>' + '</textarea>');
        $("textArea").attr({"placeholder": $attributes, "id" : "textarea"});

        var noticiasNuevas = ["Noticia Positiva 1", "Noticia Positiva 2", "Noticia Positiva 3"]

        for (cadaNoticia of noticiasNuevas){
            $("h4").append("<li>"+ cadaNoticia +"</li>");
        }

        $(".input-form").append("<button>"+ "Agregar a la lista" + "</button>").attr("id", "botonAgregar");

        var agregarLista = function(){
            var $input = $("#textarea").val();
            if ($input != ""){
                $("ul").append("<li>"+ $input +"</li>");
                $("#textarea").val("");
            }
        }

        $("button").click(function(){
            agregarLista();
        });

    });

}