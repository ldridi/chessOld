// JavaScript Document

	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	

	
	var urlWS = "http://api.chessfamily.net/api/query";
    var nbNewNotifications = function () {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"not_read_notifications",
				member_id:id_utilisateur
			},
            dataType:"json",
          success:function(result){
                if(result.nb_notifications != 0){
					$('.nbNewNotification').css("display","block");
					$('.nbNewNotification').html(result.nb_notifications);
				}else{
					$('.nbNewNotification').css("display","none");
					$('.nbNewNotification').html(result.nb_notifications);
				}
          }
        });
    }

	setInterval(nbNewNotifications,2000);


