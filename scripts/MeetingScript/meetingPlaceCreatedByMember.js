
$(document).ready(function(){

    
    function meetingPlaceCreatedByMember() {
      if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	

    
    
  var urlWS = "http://api.chessfamily.net/api/query";
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_meeting_places",
				member_id:id_utilisateur,
				perpage:30,
				page:1
			},
            dataType:"json",
			
          
          beforeSend: function(){
              $('.load_my_location').show();
          },
          success:function(result){
            $.each(result.meeting_places, function (index, item) { 
            console.log(item);
			if(item.adress!=null){adresse = item.adress;}else{adresse = "&nbsp;gg";}
			//if(item.type!=null){typeMeetingPlace = item.type;}else{typeMeetingPlace = "&nbsp;";}
			if(item.type!=null){typeMeetingPlaceDisplay = "";}else{typeMeetingPlaceDisplay = "display:none;";}
			if(item.status==1){colorStatus = "#98BF0A"; }else{colorStatus = "#f24e4e";}
			var li = "<li class='list-group-item '>"+
                        "<span class='badge' style='background:white;color:grey;margin-top:5px;'>"+
							  //"<font style='font-size:15px;'>"+ typeMeetingPlace + "</font>&nbsp;&nbsp;"+
							  "<img src='"+ item.type_image + "' width='25px' style='"+typeMeetingPlaceDisplay+"' />"+
							  "<i  class='fa fa-pencil-square modif_location' id='" + item.id + "' style='font-size:25px;color:#4B2618; margin-right:10px; margin-left:10px;' data-toggle='modal' data-target='#myModalEdit'></i>&nbsp;"+
							  "<i  class='fa fa-trash delete_location' id='" + item.id + "' style='font-size:25px;color:#4B2618;'></i>"+
                          "</span>"+
                          "<b class='mycrealocation' id='" + item.id +"'> " + item.name + " <i class='fa fa-circle' style='font-size:15px;color:" + colorStatus + ";'></i></b><br>"+
                          "<font style='font-size:12px;color:grey;'>&nbsp;" + adresse + "</font>"+
                      "</li>"; 
                $('.list-menu-mylocation').append(li);
                
            });
           
          },
          complete: function(){
              $('.load_my_location').hide();
          }
        });
    }



    meetingPlaceCreatedByMember();


    $(document).on('click','.mycrealocation', function(){
        document.location.href = 'locationDetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.modif_location', function(){

        var meetingId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
        var dataStringEdit = 'authentication=chessfemily&action=meeting_place_get&meeting_place_id='+meetingId
         var urlWS = "http://api.chessfamily.net/api/query";

        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
              authentication:"chessfemily",
              action:"meeting_place_get",
              meeting_place_id:meetingId
              },
            dataType:"json",
            success:function(result){
                              $('#name_meeting_edit').val(result.meeting_place.name);
                              $('#adress_meeting_edit').val(result.meeting_place.adress);
                              $('#latitude_meeting_edit').val(result.meeting_place.latitude);
                              $('#longitude_meeting_edit').val(result.meeting_place.longitude);
                              $('#meetingType_edit').val(result.meeting_place.type_id);
                              $('#id_meeting_edit').val(meetingId);

                             
                              
          }
        }); 
        
    });

$(document).on('click','.delete_location', function(){

        var meetingId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
        
         var urlWS = "http://api.chessfamily.net/api/query";

        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
              authentication:"chessfemily",
              action:"meeting_place_delete",
              member_id:id_utilisateur,
              meeting_place_id:meetingId
              },
            dataType:"json",
            success:function(result){
              location.reload();

                             
                              
          }
        }); 
        
    });

});

