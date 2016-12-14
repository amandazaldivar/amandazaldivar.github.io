$(document).ready(function(){



  function show(id) {
    document.getElementById(id).style.visibility = "visible";
  }
  function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
  }


<div onMouseOver="show('div')" onMouseOut="hide('div')">

}
})