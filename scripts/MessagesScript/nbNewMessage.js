// JavaScript Document

	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	

	
	var urlWS = "http://api.chessfamily.net/api/query";
    var nbNewMessage = function () {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"not_read_messages",
				member_id:id_utilisateur
			},
            dataType:"json",
          success:function(result){
                if(result.nb_messages!=0){
					$('.nbNewMessage').css("display","block");
					$('.nbNewMessage').html(result.nb_messages);
				}else{
					$('.nbNewMessage').html(result.nb_messages);
					$('.nbNewMessage').css("display","none");
				}
				
          }
        });
    }

	setInterval(nbNewMessage,2000);
