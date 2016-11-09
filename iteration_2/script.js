$(document).ready(function(){


 for (i = 0; i < 200; i++) { 
    $("body").append( "<div class='element' style='left:" + i*5 + "vw;'></div>" );
    console.log("element " + i + " added");
}
$(".element").hide(300).show(1000).hide(300).show(1000).hide(300).show(1000).slideUp(2000);
});