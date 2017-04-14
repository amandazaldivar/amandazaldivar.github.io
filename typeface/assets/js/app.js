

$(document).ready(function() {
	$('#fullpage').fullpage({
		css3: true,
		autoScrolling: true,
		touchSensitivity: 1,
		scrollingSpeed: 600,
    // scrollBar: true,
		onLeave: function(index, nextIndex, direction){
      // console.log(index, nextIndex, direction);
      var section_to_trigger = '#section' + nextIndex;
      if (nextIndex == 2 && direction == 'down') {
        showText("#section2", "Of course, the keyboard is formatted similarly to its predecessor, the typewriter. The first typewriter was invented in 1867, and named the Sholes and Glidden Typewriter. It only typed in capital letters.", 0, 70);    
      } else if (nextIndex == 3 && direction == 'down') {
        showText("#section3", "It also introduced the QWERTY keyboard. The true reason of the scrambled order is unknown. However, it was probably designed to separate frequently-used letters that would clash and get jammed.", 0, 80);  
      } else if (nextIndex == 4 && direction == 'down') {
        showText("#section4", "We still use the QWERTY keyboard to this day, even though studies show that it does little to increase typing speed. There's essentially no need for scrambled letters on our keys, other than the simple fact that we’re used to it.", 0, 80);  
      } else if (nextIndex == 5 && direction == 'down') {
        showText("#section5", "What if we put the letters back in order? How quickly could you type? Let’s give it a shot. Try typing these words below.", 0, 80);
      } else if (nextIndex == 6 && direction == 'down') {
        showText("#section6", "qwerty", 0, 80);
        showText(".typehere-flicker", "Type here", 0, 80);
       } else if (nextIndex == 7 && direction == 'down') {
        showText("#section7", "key", 0, 80); 
        showText(".typehere-flicker2", "Type here", 0, 80); 
      } else if (nextIndex == 8 && direction == 'down') {
        showText("#section8", "chaotic", 0, 80); 
        showText(".typehere-flicker3", "Type here", 0, 80); 
      } else if (nextIndex == 9 && direction == 'down') {
        showText("#section9", "Tricky, huh?", 0, 80); 
 
      }
    }
	});






function blink(){
    $('.flicker, .flicker2, .flicker3, .caret').delay(200).fadeTo(200,0.1).delay(200).fadeTo(200,0.5, blink);
    // $('.flicker2').delay(200).fadeTo(200,0.5).delay(200).fadeTo(200,1, blink);    
}


$(".typehere, .typehere2, .typehere3").click(function(){
    $(".typehere-flicker2, .typehere-flicker2, .typehere-flicker3").hide();
    $(".typehere, .typehere2, .typehere3").removeAttr("background-color"); 
});

$(window).keypress(function(e){
    $(".flicker, .flicker2, .flicker3").remove();
    $(".typehere-flicker2, .typehere-flicker2, .typehere-flicker3").remove();      
});

$(document).ready(function() {
    blink();
});




// $('#section1').parent().parent().parent().hasClass('active')

var showText = function (target, message, index, interval) {    
  if (index < message.length) { 
    $(target).append(message[index++]); 
    setTimeout(function () { showText(target, message, index, interval); }, interval); 
  } 
}
    
$(function() {  
  showText("#section1", "Hello there! Take a look at your keyboard. Isn’t it amazing that this ordering of letters, numbers and symbols has been around for 180 years?", 0, 80);    
});





$(".typehere").click(function(){
$(window).keypress(function(e) {
  console.log(e.which);

  if(e.which == 113) {
    $(".typehere").append($(".letter-a").clone().removeClass("letter-a")); 
  }
   if(e.which == 119) {
    $(".typehere").append($(".letter-b").clone().removeClass("letter-b")); 
  }
  if(e.which == 101) {
    $(".typehere").append($(".letter-c").clone().removeClass("letter-c")); 
  }
  if(e.which == 114) {
    $(".typehere").append($(".letter-d").clone().removeClass("letter-d")); 
  }
  if(e.which == 116) {
    $(".typehere").append($(".letter-e").clone().removeClass("letter-e")); 
  }
  if(e.which == 121) {
    $(".typehere").append($(".letter-f").clone().removeClass("letter-f")); 
  }
  if(e.which == 117) {
    $(".typehere").append($(".letter-g").clone().removeClass("letter-g")); 
  }
  if(e.which == 105) {
    $(".typehere").append($(".letter-h").clone().removeClass("letter-h")); 
  }
  if(e.which == 111) {
    $(".typehere").append($(".letter-i").clone().removeClass("letter-i")); 
  }  
  if(e.which == 112) {
    $(".typehere").append($(".letter-j").clone().removeClass("letter-j")); 
  }
  if(e.which == 97) {
    $(".typehere").append($(".letter-k").clone().removeClass("letter-k")); 
  }
  if(e.which == 115) {
    $(".typehere").append($(".letter-l").clone().removeClass("letter-l")); 
  }
  if(e.which == 100) {
    $(".typehere").append($(".letter-m").clone().removeClass("letter-m")); 
  }
  if(e.which == 102) {
    $(".typehere").append($(".letter-n").clone().removeClass("letter-n")); 
  }
  if(e.which == 103) {
    $(".typehere").append($(".letter-o").clone().removeClass("letter-o")); 
  }  
 if(e.which == 104) {
    $(".typehere").append($(".letter-p").clone().removeClass("letter-p")); 
  }
  if(e.which == 106) {
    $(".typehere").append($(".letter-q").clone().removeClass("letter-q")); 
  }
  if(e.which == 107) {
    $(".typehere").append($(".letter-r").clone().removeClass("letter-r")); 
  }
  if(e.which == 108) {
    $(".typehere").append($(".letter-s").clone().removeClass("letter-s")); 
  }
  if(e.which == 122) {
    $(".typehere").append($(".letter-t").clone().removeClass("letter-t")); 
  }
  if(e.which == 120) {
    $(".typehere").append($(".letter-u").clone().removeClass("letter-u")); 
  }    
  if(e.which == 99) {
    $(".typehere").append($(".letter-v").clone().removeClass("letter-v")); 
  }
  if(e.which == 118) {
    $(".typehere").append($(".letter-w").clone().removeClass("letter-w")); 
  }
  if(e.which == 98) {
    $(".typehere").append($(".letter-x").clone().removeClass("letter-x")); 
  }
  if(e.which == 110) {
    $(".typehere").append($(".letter-y").clone().removeClass("letter-y")); 
  }
  if(e.which == 109) {
    $(".typehere").append($(".letter-z").clone().removeClass("letter-z")); 
  }
  });
});






$(".typehere2").click(function(){
$(window).keypress(function(e) {
  console.log(e.which);

  if(e.which == 113) {
    $(".typehere2").append($(".letter-a").clone().removeClass("letter-a")); 
  }
   if(e.which == 119) {
    $(".typehere2").append($(".letter-b").clone().removeClass("letter-b")); 
  }
  if(e.which == 101) {
    $(".typehere2").append($(".letter-c").clone().removeClass("letter-c")); 
  }
  if(e.which == 114) {
    $(".typehere2").append($(".letter-d").clone().removeClass("letter-d")); 
  }
  if(e.which == 116) {
    $(".typehere2").append($(".letter-e").clone().removeClass("letter-e")); 
  }
  if(e.which == 121) {
    $(".typehere2").append($(".letter-f").clone().removeClass("letter-f")); 
  }
  if(e.which == 117) {
    $(".typehere2").append($(".letter-g").clone().removeClass("letter-g")); 
  }
  if(e.which == 105) {
    $(".typehere2").append($(".letter-h").clone().removeClass("letter-h")); 
  }
  if(e.which == 111) {
    $(".typehere2").append($(".letter-i").clone().removeClass("letter-i")); 
  }  
  if(e.which == 112) {
    $(".typehere2").append($(".letter-j").clone().removeClass("letter-j")); 
  }
  if(e.which == 97) {
    $(".typehere2").append($(".letter-k").clone().removeClass("letter-k")); 
  }
  if(e.which == 115) {
    $(".typehere2").append($(".letter-l").clone().removeClass("letter-l")); 
  }
  if(e.which == 100) {
    $(".typehere2").append($(".letter-m").clone().removeClass("letter-m")); 
  }
  if(e.which == 102) {
    $(".typehere2").append($(".letter-n").clone().removeClass("letter-n")); 
  }
  if(e.which == 103) {
    $(".typehere2").append($(".letter-o").clone().removeClass("letter-o")); 
  }  
  if(e.which == 104) {
    $(".typehere2").append($(".letter-p").clone().removeClass("letter-p")); 
  }
  if(e.which == 106) {
    $(".typehere2").append($(".letter-q").clone().removeClass("letter-q")); 
  }
  if(e.which == 107) {
    $(".typehere2").append($(".letter-r").clone().removeClass("letter-r")); 
  }
  if(e.which == 108) {
    $(".typehere2").append($(".letter-s").clone().removeClass("letter-s")); 
  }
  if(e.which == 122) {
    $(".typehere2").append($(".letter-t").clone().removeClass("letter-t")); 
  }
  if(e.which == 120) {
    $(".typehere2").append($(".letter-u").clone().removeClass("letter-u")); 
  }    
  if(e.which == 99) {
    $(".typehere2").append($(".letter-v").clone().removeClass("letter-v")); 
  }
  if(e.which == 118) {
    $(".typehere2").append($(".letter-w").clone().removeClass("letter-w")); 
  }
  if(e.which == 98) {
    $(".typehere2").append($(".letter-x").clone().removeClass("letter-x")); 
  }
  if(e.which == 110) {
    $(".typehere2").append($(".letter-y").clone().removeClass("letter-y")); 
  }
  if(e.which == 109) {
    $(".typehere2").append($(".letter-z").clone().removeClass("letter-z")); 
  }
  });
});



$(".typehere3").click(function(){
$(window).keypress(function(e) {
  console.log(e.which);

  if(e.which == 113) {
    $(".typehere3").append($(".letter-a").clone().removeClass("letter-a")); 
  }
   if(e.which == 119) {
    $(".typehere3").append($(".letter-b").clone().removeClass("letter-b")); 
  }
  if(e.which == 101) {
    $(".typehere3").append($(".letter-c").clone().removeClass("letter-c")); 
  }
  if(e.which == 114) {
    $(".typehere3").append($(".letter-d").clone().removeClass("letter-d")); 
  }
  if(e.which == 116) {
    $(".typehere3").append($(".letter-e").clone().removeClass("letter-e")); 
  }
  if(e.which == 121) {
    $(".typehere3").append($(".letter-f").clone().removeClass("letter-f")); 
  }
  if(e.which == 117) {
    $(".typehere3").append($(".letter-g").clone().removeClass("letter-g")); 
  }
  if(e.which == 105) {
    $(".typehere3").append($(".letter-h").clone().removeClass("letter-h")); 
  }
  if(e.which == 111) {
    $(".typehere3").append($(".letter-i").clone().removeClass("letter-i")); 
  }  
  if(e.which == 112) {
    $(".typehere3").append($(".letter-j").clone().removeClass("letter-j")); 
  }
  if(e.which == 97) {
    $(".typehere3").append($(".letter-k").clone().removeClass("letter-k")); 
  }
  if(e.which == 115) {
    $(".typehere3").append($(".letter-l").clone().removeClass("letter-l")); 
  }
  if(e.which == 100) {
    $(".typehere3").append($(".letter-m").clone().removeClass("letter-m")); 
  }
  if(e.which == 102) {
    $(".typehere3").append($(".letter-n").clone().removeClass("letter-n")); 
  }
  if(e.which == 103) {
    $(".typehere3").append($(".letter-o").clone().removeClass("letter-o")); 
  }  
  if(e.which == 104) {
    $(".typehere3").append($(".letter-p").clone().removeClass("letter-p")); 
  }
  if(e.which == 106) {
    $(".typehere3").append($(".letter-q").clone().removeClass("letter-q")); 
  }
  if(e.which == 107) {
    $(".typehere3").append($(".letter-r").clone().removeClass("letter-r")); 
  }
  if(e.which == 108) {
    $(".typehere3").append($(".letter-s").clone().removeClass("letter-s")); 
  }
  if(e.which == 122) {
    $(".typehere3").append($(".letter-t").clone().removeClass("letter-t")); 
  }
  if(e.which == 120) {
    $(".typehere3").append($(".letter-u").clone().removeClass("letter-u")); 
  }    
  if(e.which == 99) {
    $(".typehere3").append($(".letter-v").clone().removeClass("letter-v")); 
  }
  if(e.which == 118) {
    $(".typehere3").append($(".letter-w").clone().removeClass("letter-w")); 
  }
  if(e.which == 98) {
    $(".typehere3").append($(".letter-x").clone().removeClass("letter-x")); 
  }
  if(e.which == 110) {
    $(".typehere3").append($(".letter-y").clone().removeClass("letter-y")); 
  }
  if(e.which == 109) {
    $(".typehere3").append($(".letter-z").clone().removeClass("letter-z")); 
  }
  });
});

// $("html").keypress(function(e){
//     if ( e.which === 190 ) {
//         $(e.target).trigger({
//             type: "keypress",
//             which: 40
//         });
//         e.preventDefault();
//     }
// });


});