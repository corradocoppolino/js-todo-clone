/* 1. fare l’HTML con un input e una lista
2. nel JS creare un array con stringhe
3. ciclo for dell’array per stampare a video gli elementi facendo un append dentro ul
4. al click del cestino eliminare il parent
5. intercettare il keyup dell’input di ENTER per aggiungere l’elemento alla lista e ripulire l’input
6. se si vuole, abbellire il CSS */

$(document).ready(function(){

    var arrListaSpesa = [];

    //console.log(arrListaSpesa);

    /* for(var i = 0; i < arrListaSpesa.length; i++){

        var strListaSpesa = arrListaSpesa[i];
        //console.log(strListaSpesa);

        var liHtml = "<li><p>" + strListaSpesa + '</p><i class="fas fa-trash"></i></li>';
        $("main ul").append(liHtml);

    } */

    $(document).on("click", ".fa-trash", function(){

        console.log("ciao");
        $(this).parent().remove();

    })

    $("main input").keyup(function(event){

        //console.log(event.which);

        if(event.which == 13){

            var strPulita = $(this).val().trim();
            
            if(strPulita.length > 3){

                var liHtml = "<li><p>" + strPulita + '</p><i class="fas fa-trash"></i></li>';
                $("main ul").append(liHtml);
                $(this).val("");
            
            }
        }

    })



})