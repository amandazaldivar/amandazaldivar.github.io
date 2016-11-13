$(document).ready(function(){

	//append new element

  drawGridObjects();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject(); 


 function drawGridObjects(){
  //append new element 20 times, and repeat that 100 times
  for (j = 0; j < 100; j++) {
    for (i = 0; i < 20; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      //console.log("element " + j + ", " + i + " added");
    }
  }
}

 function drawRandomObject(){
  var rx = Math.floor(Math.random()*100);
  var ry = Math.floor(Math.random()*100);
  var color = "#000";
  		if (ry < 50) {
  		 color = "#22ccc9";
 		 }


 		else if (rx < 50){
   		 color = "#360d72";
 	 }

 		else if (rx > 50){
   		 color = "#007bff";
 	 }

  		else {
    		color = "#003d3c"; 
 			 }
  console.log("rx: " + rx + " ry: " + ry);
  $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + ";'></div>" );

}


	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','#2c3fba');
	})
	//click to change color
	$('.element').click(function(){
		$(this).css('background-color','#00e1ff');
	})

	$('.random').click(function(){
	$(this).css('background-color','#00e1ff');
	})

if (i < 50) {
color = "white";

}
})