$(document).ready(function(){
    $("img").click(function(){
        $(this).hide("slow");
        $("#label").html("You just removed " + $(this).attr("alt"));
    });
    $("img").hover(function(){
        console.log($(this).attr("alt"));
    });

    $("#restore").click(function(){
        $("img").show("slow");
    });
});