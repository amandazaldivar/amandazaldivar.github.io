$(document).ready(function(){

	//append new element

  var now = new Date();
  var second = now.getSeconds();
  console.log(second);

  drawGridObjects();

 setInterval(function(){ 
    rotateGridObjects(second);
  }, 1000); 


 function drawGridObjects(){
  //append new element 20 times, and repeat that 100 times
  for (j = 0; j < 18; j++) {
    for (i = 0; i < 20; i++) { 
      $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px;'></div>" );
      //console.log("element " + j + ", " + i + " added");
    }
  }
}


  function rotateGridObjects(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    if (second < 60) {
      $('.time').css({
       // transform: 'rotate(' + second * 6 + 'deg)',
        width: second * 10 + 'px',
        height: second * 10 + 'px',
        marginLeft: second * -5 + 'px',
        marginTop: second * -5 + 'px',
      })
    }
    else {
     $('.time').css({
      // transform: 'rotate(' + second * 6 + 'deg)',
       width: '0px',
       height: '0px',

     }) 
   }


	//mouse interaction
	$('.element').mouseover(function(){
		$(this).css('background-color','#2c3fba');
	})
	//click to change color
	$('.element').click(function(){
		$(this).css('background-color','#00e1ff');
	})

  $('.time').mouseover(function(){
  $(this).css('background-color','#2c3fba');
  })

	$('.time').click(function(){
	$(this).css('background-color','#00e1ff');
	})


}
})