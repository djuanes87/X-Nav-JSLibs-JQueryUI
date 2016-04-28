$(document).ready(function(){
  var menu = true;

  var fecha = function(){
    var hoy = new Date();
    $("#date p" ).text(hoy.getDate() + "/" + hoy.getMonth() + "/" + hoy.getFullYear());

  };

  var desplegarMenu = function(){
    if(menu){
      $("#cuadro").hide(500);
      menu = false;
    }else{
      $("#cuadro").show(500);
      menu = true;
    }
  };


  $( "#menu" ).menu();
  $("#home").click(desplegarMenu);
  $( "#datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "jquery-ui-1.11.4.custom/images/calendar.gif",
    buttonImageOnly: true,
    buttonText: "Select date"
  });


  desplegarMenu();
  fecha();

});
