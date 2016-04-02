function AddMeetingPlace() {
	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
  	}else if(sessionStorage.getItem("identifiant")!= null){
  		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
  	}	
    var name_meeting = document.getElementById("name_meeting").value;
    var adress_meeting = document.getElementById("champ_adress").value;
    var latitude_meeting = document.getElementById("latitude_meeting").value;
    var longitude_meeting = document.getElementById("longitude_meeting").value;
    var country_meeting = document.getElementById("id_country").value;
    var city_meeting = document.getElementById("id_city").value;
    var meetingType = document.getElementById("meetingType").value;
	var email_meeting = document.getElementById("email_meeting").value;
	var phone_number_meeting = document.getElementById("phone_number_meeting").value;
	var website_meeting = document.getElementById("website_meeting").value;
    //var status_meeting = document.getElementById("status_meeting").value;


if((name_meeting=="")||(meetingType=="")){
	$('.MeetingPlace_info_requis').fadeIn(500).delay(2000).fadeOut(500);
}else{
var urlWS = "http://api.chessfamily.net/api/query";
		
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
    				authentication:"chessfemily",
    				action:"meeting_place_add",
    				added_bymemberid:id_utilisateur,
    				administrator_id:id_utilisateur,
    				name:name_meeting,
    				address:adress_meeting, 
    				latitude:latitude_meeting,
    				longitude:longitude_meeting,
					country_id:country_meeting,
					city_id:city_meeting,
    				type_id:meetingType,
    				status:1,
					email:email_meeting,
					website:website_meeting,
					phone_number:phone_number_meeting
    				},
            dataType:"json",
            success:function(result){
                  if(result.success == 1){
					  
						  sessionStorage.setItem("id_saved_meetingPlace",result.meeting_place.id);
						  sessionStorage.setItem("name_saved_meetingPlace",result.meeting_place.name);
						  //var meetingPlaceID = sessionStorage.getItem('id_saved_meetingPlace');
						  $('#id_meeting').val(result.meeting_place.id);
						  $('#search-box_meeting').val(result.meeting_place.name);
						  
					  $('.MeetingPlaceAdded').fadeIn(100).delay(800).fadeOut(100);
                      //$('#myModal').modal('hide');
					  setTimeout(function() {$('#myModal').modal('hide');}, 1000);
                  }else{
                    $('.MeetingPlace_info_requis').fadeIn(500).delay(2000).fadeOut(500);
                  }
                  
            }
        });
}
    return false;

}

function Test_adresse_email(email){
    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if(reg.test(email)){
		return(true);
    }else{
		return(false);
    }
}
