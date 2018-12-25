$(document).ready(function(){
$(".but").click(function(e){
  e.preventDefault()
    $(".sidebar").addClass("sideous");
  });
  $(".but").mouseleave(function(e){
    e.preventDefault()
      $(".sidebar").removeClass("sideous");
    });

});