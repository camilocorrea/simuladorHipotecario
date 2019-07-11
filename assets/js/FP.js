<script type="text/javascript">
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
  console.log(document.cookie);
  </script>

    <script src="./assets/vendor/js/fingerprint2.js"></script>
    <script>
     
     var hasConsole = typeof console !== "undefined"
  
  var fingerprintReport = function () {
    var d1 = new Date()
    Fingerprint2.get(function(components) {
      var murmur = Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31)
      var d2 = new Date()
      var time = d2 - d1
      var details = ""
      console.log("Fecha: "+d1);
      console.log("Fingerprint: "+murmur);
      sessionStorage.setItem("dispositivo",murmur);
      
      for (var index in components) {
        var obj = components[index]
        var line = obj.key + " = " + String(obj.value).substr(0, 100)

          if(obj.key == "platform"){
            sessionStorage.setItem("plataforma",String(obj.value));
          }
          if(obj.key == "userAgent"){
            sessionStorage.setItem("sistemaOperativo",String(obj.value));
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
    </script>