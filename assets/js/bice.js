var idleTime = 0;




$(document).ready(function () {



        var idleInterval = setInterval(timerIncrement, 1000); // 1 seg

        //event desktop
		    $(this).mousemove(function (e) {
          idleTime = 0;
          clearInterval(idleInterval);
		      idleInterval = setInterval(timerIncrement, 1000);
		    });
		    document.addEventListener("click", function( event ) {
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
		    }, false);
		    $(this).keypress(function (e) {
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
        });


        //event mobile
        document.addEventListener("touchstart", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchend", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchcancel", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchleave", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchmove", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);


});

function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime == 60) { // 60 = 60 sec

    if(sessionStorage.getItem("canalSimuladorAutomotriz")=="PUBLICO"){

      $('#myModal3').modal('show');
      $('#myModalExito').modal('hide');
      $('#myModalErrorConnCti').modal('hide');
      $('#myModalExitoContacto').modal('hide');
      $('#myModalErrorConn').modal('hide');
      $('#myModal1').modal('hide');
      $('#myModal2').modal('hide');
      document.getElementById("botonParaReiniciar").click();

    }
    if(sessionStorage.getItem("canalSimuladorAutomotriz")=="PRIVADO"){

      $('#myModal6').modal('show');
      $('#myModalExito').modal('hide');
      $('#myModalErrorConnCti').modal('hide');
      $('#myModalExitoContacto').modal('hide');
      $('#myModalErrorConn').modal('hide');
      $('#myModal4').modal('hide');
      $('#myModal5').modal('hide');
      document.getElementById("botonParaReiniciar").click();

    }
  }

}

function pruebajc() {
  $("[data-toggle='tooltip']").tooltip();
}

function showModal() {


  if(sessionStorage.getItem("canalSimuladorHipotecario")=="PUBLICO"){
    $('#myModal1').modal('show');
  }
  if(sessionStorage.getItem("canalSimuladorHipotecario")=="PRIVADO"){
    $('#myModal4').modal('show');
  }
}

function showModal2() {

  if(sessionStorage.getItem("canalSimuladorHipotecario")=="PUBLICO"){
    $('#myModal2').modal('show');
  }
  if(sessionStorage.getItem("canalSimuladorHipotecario")=="PRIVADO"){
    $('#myModal5').modal('show');
  }
}

function showExitoMail(){
    $('#myModalExito').modal('show');
    $('#myModal1').modal('hide');
    $('#myModal2').modal('hide');

}

function showErrorMail(){
  $('#myModalErrorConn').modal('show');
  $('#myModalErrorConnCti').modal('hide');
  $('#myModalExitoContacto').modal('hide');
  $('#myModalExito').modal('hide');
  $('#myModal1').modal('hide');
  $('#myModal2').modal('hide');
  $('#myModal3').modal('hide');
  $('#myModal4').modal('hide');
  $('#myModal5').modal('hide');
  $('#myModal6').modal('hide');
}

function showErrorCti(){

  $('#myModalErrorConnCti').modal('show');
  $('#myModalErrorConn').modal('hide');
  $('#myModalExitoContacto').modal('hide');
  $('#myModalExito').modal('hide');
  $('#myModal1').modal('hide');
  $('#myModal2').modal('hide');
  $('#myModal3').modal('hide');
  $('#myModal4').modal('hide');
  $('#myModal5').modal('hide');
  $('#myModal6').modal('hide');
}

function contactoOK(){
    $('#myModalExitoContacto').modal('show');
    $('#myModalExito').modal('hide');
    $('#myModal1').modal('hide');
    $('#myModal2').modal('hide');
}

$(document).ready(function () {


  $("#collapseOne").on("hide.bs.collapse", function(){
    $("#pregunta1").html('1)	¿Por qué comprar tu nuevo auto con un Crédito Automotriz BICE?<i class="indicator glyphicon glyphicon-chevron-down pull-right"></i>');
  });
  $("#collapseOne").on("show.bs.collapse", function(){
    $("#pregunta1").html('1)	¿Por qué comprar tu nuevo auto con un Crédito Automotriz BICE?<i class="indicator glyphicon glyphicon-chevron-up pull-right"></i>');
  });

  $("#collapseTwo").on("hide.bs.collapse", function(){
    $("#pregunta2").html('2)	¿Qué tan simple es el trámite de la prenda del auto?<i class="indicator glyphicon glyphicon-chevron-down pull-right"></i>');
  });
  $("#collapseTwo").on("show.bs.collapse", function(){
    $("#pregunta2").html('2)	¿Qué tan simple es el trámite de la prenda del auto?<i class="indicator glyphicon glyphicon-chevron-up pull-right"></i>');
  });

  $("#collapseThree").on("hide.bs.collapse", function(){
    $("#pregunta3").html('3)	¿Necesito asegurar mi nuevo auto?<i class="indicator glyphicon glyphicon-chevron-down pull-right"></i>');
  });
  $("#collapseThree").on("show.bs.collapse", function(){
    $("#pregunta3").html('3)	¿Necesito asegurar mi nuevo auto?<i class="indicator glyphicon glyphicon-chevron-up pull-right"></i>');
  });


  if (document.documentMode || /Edge/.test(navigator.userAgent)) {


    $( '.range-slider__range' ).css ("height", "32px");
    $( '.range-slider__range' ).css ("background", "#FFFFFF");
    $( '.range-slider__range' ).css ("-webkit-appearance", "slider-vertical");

  }
  else{
    var test = (((320000000-60000000) * 100) / 840000000);

    $( ".sliderMontoCredito input" ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+test +'%, #DEDECF ' + test + '%, #DEDECF 100%)' );

    $( '.sliderMontoCredito input' ).on( 'input', function( ) {

      var test = (((this.value-60000000) * 100) / 840000000);

      $( this ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+test +'%, #DEDECF ' + test + '%, #DEDECF 100%)' );


    } );

    var test2 = (((25-8) * 100) / 22)
    $( ".sliderPlazo input" ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+test2 +'%, #DEDECF ' + test2 + '%, #DEDECF 100%)' );

    $( '.sliderPlazo input' ).on( 'input', function( ) {

      var test2 = (((this.value-8) * 100) / 22)

      $( this ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+test2 +'%, #DEDECF ' + test2+ '%, #DEDECF 100%)' );


    } );
  }


})

/*
var idleTime = 0;
$(document).ready(function () {

        $('[data-toggle="tooltip"]').tooltip();

        var idleInterval = setInterval(timerIncrement, 1000); // 1 seg

        //event desktop
		    $(this).mousemove(function (e) {
          idleTime = 0;
          clearInterval(idleInterval);
		      idleInterval = setInterval(timerIncrement, 1000);
		    });
		    document.addEventListener("click", function( event ) {
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
		    }, false);
		    $(this).keypress(function (e) {
            idleTime = 0;
		        clearInterval(idleInterval);
		        idleInterval = setInterval(timerIncrement, 1000);
        });


        //event mobile
        document.addEventListener("touchstart", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchend", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchcancel", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchleave", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);

        document.addEventListener("touchmove", function( event ) {
          idleTime = 0;
          clearInterval(idleInterval);
          idleInterval = setInterval(timerIncrement, 1000);
        }, false);


});

function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime == 300) { // 60 sec
    $("#mensajeModalContacto").text("¿Quieres que te sigamos asesorando?");
    $('#myModal').modal('show');
  }
}

*/


$(document).on("click", ".enviarSimulacionButton", function () {
  var myBookId = $(this).data('id');
  //console.log("book id: "+myBookId);
  $("#mensajeModalContacto").text(myBookId);
  $(".modal-body #bookId").val( myBookId );
  // As pointed out in comments,
  // it is unnecessary to have to manually call the modal.
  // $('#addBookDialog').modal('show');
});

function cssIsolatedRange(inputSlider){
  //console.log("valor pintar: "+inputSlider);
  var tope = 80000000;
  var sliderID2=0;
  if(inputSlider > tope){
      sliderID2=tope;
  }
  else{
      sliderID2=inputSlider;
  }

  if (document.documentMode || /Edge/.test(navigator.userAgent)) {


    $( '.range-slider__range' ).css ("height", "32px");
    $( '.range-slider__range' ).css ("background", "#FFFFFF");
    $( '.range-slider__range' ).css ("-webkit-appearance", "slider-vertical");

  }
  else{
    var slider2 = (((sliderID2-7000000) * 100) / 73000000);
  $( ".sliderMontoCredito input" ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+slider2 +'%, #DEDECF ' + slider2 + '%, #DEDECF 100%)' );
  }


}

function cssIsolatedRangeCuota(inputSlider){
  //console.log("valor pintar: "+inputSlider);
  var tope = 2000000;
  var sliderID2=0;
  if(inputSlider > tope){
      sliderID2=tope;
  }
  else{
      sliderID2=inputSlider;
  }

  if (document.documentMode || /Edge/.test(navigator.userAgent)) {


    $( '.range-slider__range' ).css ("height", "32px");
    $( '.range-slider__range' ).css ("background", "#FFFFFF");
    $( '.range-slider__range' ).css ("-webkit-appearance", "slider-vertical");

  }
  else{
    var slider2 = (((sliderID2-8) * 100) / 22);
    //$( ".sliderPrecio input" ).css( 'background', 'linear-gradient(to right, #AAB00A 0%, #AAB00A '+slider2 +'%, #DEDECF ' + slider2 + '%, #DEDECF 100%)' );
    $( ".sliderPlazo input" ).css( 'background', 'linear-gradient(to right, #5189B4 0%, #5189B4 '+slider2 +'%, #DEDECF ' + slider2 + '%, #DEDECF 100%)' );
  }


}


var theCookies = document.cookie.split(';');
  var expiresdate = new Date(2050, 1, 02, 11, 20);
  var cookie = "";
  var cookieName = "simuladores";
  var version = "0.1.4";
  var cName = "";
  var cValue = "";
  //var domain = "www.bice.cl";
  for (var i = 1; i <= theCookies.length; i++) {
    if(theCookies[i - 1] === ""){
      document.cookie = cookieName + '=' + version + '; expires=' + expiresdate.toUTCString();
      location.reload(true);
    }
    cookie = theCookies[i - 1].split('=');
    if((cookie[0] + "") != "" && cookie[1]!== undefined){
      cName = cookie[0].trim() + "";
      cValue = cookie[1].trim() + "";
    }

    if (cName == cookieName && cValue != version) {
      //PROD https
      //document.cookie = cookieName + '=' + version + '; expires=' + expiresdate.toUTCString() + ";Secure;";
      //DESA http
      document.cookie = cookieName + '=' + version + '; expires=' + expiresdate.toUTCString();
      location.reload(true);
    }
  }
  //PROD https
  //document.cookie = cookieName + "=" + version + "; expires=" + expiresdate.toUTCString() + ";Secure;";
  //DESA http
  document.cookie = cookieName + "=" + version + "; expires=" + expiresdate.toUTCString();



  var hasConsole = typeof console !== "undefined"

  var fingerprintReport = function () {
    var d1 = new Date()
    Fingerprint2.get(function(components) {
      var murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
      var d2 = new Date()
      var time = d2 - d1
      var details = ""

      sessionStorage.setItem("dispositivoSimuladorAutomotriz",murmur);

      for (var index in components) {
        var obj = components[index]
        var line = obj.key + " = " + String(obj.value).substr(0, 100)

          if(obj.key == "platform"){
            sessionStorage.setItem("plataformaSimuladorAutomotriz",String(obj.value));
          }
          if(obj.key == "userAgent"){
            sessionStorage.setItem("sistemaOperativoSimuladorAutomotriz",String(obj.value));
          }
        details += line + "\n"
      }
    })
  }
  var cancelId
  var cancelFunction
  // see usage note in the README
  if (window.requestIdleCallback) {
    cancelId = requestIdleCallback(fingerprintReport)
    cancelFunction = cancelIdleCallback
  } else {
    cancelId = setTimeout(fingerprintReport, 500)
    cancelFunction = clearTimeout
  }



