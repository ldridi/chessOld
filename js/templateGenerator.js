$(document).ready(function(){
	
	//Header
	$.ajax({
            url: "templateParts/header.html",
            dataType : "html",
            success: function( data ) {
                $('#header').html(data);
            }
     });
	
	
	
	
	//Footer
	$.ajax({
            url: "templateParts/footer.html",
            dataType : "html",
            success: function( data ) {
                $('#footer').html(data);
            }
     });
	 
	 
/*navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
	alert('Latitude: '           + position.coords.latitude              + '<br />' +
			'Longitude: '          + position.coords.longitude             + '<br />');
}

// onError Callback receives a PositionError object
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}*/
	 
	 
	 var defaultDistance = sessionStorage.getItem("DefaultDistance");
	 if(defaultDistance!="undefined"){
		 //alert(defaultDistance);
		 $("input[name=distance]").val([defaultDistance]);
	 }
	
		
});




document.addEventListener("deviceready", getMobileInfo, true);
// PhoneGap is ready
function getMobileInfo() {
  //alert("checking...");
  $('#detect_os').val(device.platform+" "+device.version);
  $('#detect_UUID').val(device.uuid);
}


// a function to test the connectivity
document.addEventListener("offline", checkConnectivity, true);
function checkConnectivity(){
	alert("Merci d'activer la Connexion!");
	
}

function checkUpdateGPS(){
	
}

//geo.js
/*
navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
	alert('Latitude: '           + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />');
						
}

// onError Callback receives a PositionError object
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}


*/

function showPosition(position) {
    $('#getlat').val(position.coords.latitude);
    $('#getlong').val(position.coords.longitude);
}


