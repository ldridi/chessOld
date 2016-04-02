
function memberSetLocation(typeBtn) {
	// 1 - ajout event btn J y Suis
	// 2 - btn footer
	// 3-  ajout meeting place
	
	if(typeBtn==1){
		$('.AddressBlock').hide();
		 $('.load_jySuis').show();
		navigator.geolocation.getCurrentPosition(onSuccess,onError);
	}else if(typeBtn==3){
		$('.AddressBlock').hide();
		 $('.load_jySuis').show();
		navigator.geolocation.getCurrentPosition(onSuccess3,onError);
	}else{
		$('#set_location').hide();
		$('.load_memberSetLocation').show();
		navigator.geolocation.getCurrentPosition(onSuccess2,onError);
	}
	
	
}
function onSuccess(position) {
		
		var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
		var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
		if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
		var city_s = document.getElementById("search-box").value;
		var country_s = document.getElementById("pays").value;
		var urlWS = "http://api.chessfamily.net/api/query";
		$.ajax({
			type:"POST",
			url:urlWS,
			data:{
				authentication:"chessfemily",
				action:"member_location_set",
				member_id:id_utilisateur,
				latitude:latitude,
				longitude:longitude
			},
			dataType:"json",
			beforeSend: function(){
				 $('.load_jySuis').show();
			  },
			success:function(result){
				  //$('#messagemapsuccess').fadeIn(500).delay(700).fadeOut(500);
				  //$('#lat').html(latitude);
				  //$('#long').html(longitude);
				  $('#latitude_meeting').val(latitude);
				  $('#longitude_meeting').val(longitude);
				  $('#country_meeting').val(country_s);
                    $('#city_meeting').val(city_s);
                    $("#adress_meeting").attr('disabled','disabled');
				  console.log(result);
			},
			error:function(e){
				//$('#messagemaperror').fadeIn(500).delay(700).fadeOut(500);
				
			},
			complete: function(){
				  $('.load_jySuis').hide();
			  }
		});
	}
	
	function onSuccess2(position) {
		var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
		var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
		if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
			//var city_s = document.getElementById("search-box").value;
    //var country_s = document.getElementById("pays").value;
		var urlWS = "http://api.chessfamily.net/api/query";
		$.ajax({
			type:"POST",
			url:urlWS,
			data:{
				authentication:"chessfemily",
				action:"member_location_set",
				member_id:id_utilisateur,
				latitude:latitude,
				longitude:longitude
			},
			dataType:"json",
			beforeSend: function(){
				  $('#set_location').hide();
		$('.load_memberSetLocation').show();
			  },
			success:function(result){
				  $('#messagemapsuccess').fadeIn(500).delay(700).fadeOut(500);
				  $('#lat').html(latitude);
				  $('#long').html(longitude);
				  //$('#latitude_meeting').val(latitude);
				  //$('#longitude_meeting').val(longitude);
				  //$('#country_meeting').val(country_s);
                  //$('#city_meeting').val(city_s);
                  //$("#adress_meeting").attr('disabled','disabled');
				  console.log(result);
			},
			error:function(e){
				$('#messagemaperror').fadeIn(500).delay(700).fadeOut(500);
				
			},
			complete: function(){
				
				  $('.load_memberSetLocation').hide();
				  //$('.mapcursor').css('color','#582D1C');
				  $('#set_location').show();
			  }
		});
	}
	
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}

function onSuccess3(position) {
		
		var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
		var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
		if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
		//var city_s = document.getElementById("search-box").value;
		//var country_s = document.getElementById("pays").value;
		var urlWS = "http://api.chessfamily.net/api/query";
		$.ajax({
			type:"POST",
			url:urlWS,
			data:{
				authentication:"chessfemily",
				action:"member_location_set",
				member_id:id_utilisateur,
				latitude:latitude,
				longitude:longitude
			},
			dataType:"json",
			beforeSend: function(){
				 $('.load_jySuis').show();
			  },
			success:function(result){
				  //$('#messagemapsuccess').fadeIn(500).delay(700).fadeOut(500);
				  //$('#lat').html(latitude);
				  //$('#long').html(longitude);
				  $('#latitude_meeting').val(latitude);
				  $('#longitude_meeting').val(longitude);
				  $('#adress_meeting').val("");
				  //$('#country_meeting').val(country_s);
                    //$('#city_meeting').val(city_s);
                    
				  console.log(result);
			},
			error:function(e){
				//$('#messagemaperror').fadeIn(500).delay(700).fadeOut(500);
				
			},
			complete: function(){
				  $('.load_jySuis').hide();
			  }
		});
	}