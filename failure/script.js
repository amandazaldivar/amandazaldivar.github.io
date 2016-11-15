$(document).ready(function(){

	//append new element

  var now = new Date();
  var second = now.getSeconds();
  console.log(second);

 drawGridObjects();

 setInterval(function(){ 
    scaleSquare(second);
  }, 1000); 


 function drawGridObjects(){
  //append new element 20 times, and repeat that 100 times
  for (j = 0; j < 100; j++) {
    for (i = 0; i < 20; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      //console.log("element " + j + ", " + i + " added");
    }
  }
}


  function scaleSquare(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    //$('.time').css('transform','rotate(' + second*6 + 'deg)');
    $('.time').css('transform','scale('x*s, y*s')');

    //is this the right way??
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