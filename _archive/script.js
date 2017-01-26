$(document).ready(function(){

	//append new element
	for (i = 0; i < 684; i++){
		$("body").append('<div class="element" ></div>');
		console.log("element " + i + " added");
}



	//mouse interaction
	$('li').mouseover(function(){
		$(this).css('background-color','#2c3fba');
	})

		$('li').mouseout(function(){
		$(this).css('none');
	})
	//click to change color
	$('.element').click(function(){
		$(this).css('background-color','#00e1ff');
	})

if (i < 50) {
color = "white";

}
})