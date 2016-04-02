
$(document).ready(function(){
    function meetingPlaceFavorite() {
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
				action:"meeting_place_favorite",
				member_id:id_utilisateur,
				perpage:30,
				page:1
				},
            dataType:"json",
          beforeSend: function(){
              $('.load_location').show();
          },
          success:function(result){
			  
            $.each(result.favorite_meeting_places, function (index, item) {
				console.log(item);
				if(item.adress!=null){adresse = item.adress;}else{adresse = "&nbsp;";}
				if(item.type!=null){typeMeetingPlaceDisplay = "";}else{typeMeetingPlaceDisplay = "display:none;";}
				if(item.status==1){colorStatus = "#98BF0A"; }else{colorStatus = "#f24e4e";}
                var li = ""+
				"<li class='list-group-item'>" +
                	"<span class='badge' style='background:white;color:grey;margin-top:0px;'>"+
                		//"<font style='font-size:20px;'>" + typeMeetingPlace+ "</font>&nbsp;&nbsp;"+
						"<img src='"+ item.image + "' width='30px' style='"+typeMeetingPlaceDisplay+"' />"+
						"<i class='fa fa-trash delete' id='" + item.meeting_place_id +"' style='font-size:25px;color:#4B2618; margin-left:15px;'></i>"+
					"</span>"+
					"<b class='location' id='" + item.meeting_place_id +"'> " + item.name + "&nbsp;&nbsp;<i class='fa fa-circle' style='font-size:15px;color:"+colorStatus+"'></i></b><br>"+
					"<font style='font-size:12px;color:grey;'>" + adresse +"</font>"+ // 
				"</li>";
                $('.list-menu-location').append(li);
            });
          },
          complete: function(){
              $('.load_location').hide();
          }
        });
    }



    meetingPlaceFavorite();

    $(document).on('click','.location', function(){
        document.location.href = 'locationDetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.delete', function(){
        var LocationId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
       
        $.ajax({
          	type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"meeting_place_favorite_delete",
				member_id:id_utilisateur,
				meeting_place_id:LocationId
				},
            dataType:"json",
          success:function(result){
            $('.msg_delete').show();
            location.reload();
          }
        });
    });

});

