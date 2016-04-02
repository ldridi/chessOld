function AddEvent() {
    
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
    var type_event = document.getElementById("type_event").value;
    //var type_meeting = document.getElementById("champ_meeting").value;


    var name = document.getElementById("name").value;
    var organizer = document.getElementById("organizer").value;
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    var is_rated = document.getElementById("is_rated").value;
    var description = document.getElementById("description").value;
    var prize_fund = document.getElementById("prize_fund").value;
    var phone_number = document.getElementById("phone_number").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;

var meetingPlaceID = sessionStorage.getItem('id_saved_meetingPlace');
//var meetingPlaceName = sessionStorage.getItem('name_saved_meetingPlace');




    	   var urlWS = "http://api.chessfamily.net/api/query";
        
        $.ajax({
            type:"POST",
            url:urlWS,
            data:{
			    authentication:"chessfemily",
			    action:"event_add",
			    announcer_id:id_utilisateur,
                type_id:type_event,
                meeting_placeid:meetingPlaceID,
                name:name,
                organizer:organizer,
                start_date:start_date,
                end_date:end_date,
                is_rated:is_rated,
                description:description,
                prize_fund:prize_fund,
                phone_number:phone_number,
                email:email,
                website:website
				},
            dataType:"json",
          success:function(result){
                  if(result.success == 1){
					  $('#affiche_success').fadeIn(100).delay(800).fadeOut(100);
                      //$('#myModal').modal('hide');
					  setTimeout(function() {window.location='myevent.html';}, 1000);
                    //$('#myModal').modal('hide');
                  }else{
                    $('.Event_info_requis').fadeIn(500).delay(2000).fadeOut(500);;
                  }

                  
          }
        });
        
    
    return false;
}
