
function AddNotifications() {
	
    var url = window.location.search;
    var m_id = url.substring(url.lastIndexOf("=")+1);
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
				action:"notification_add",
				member_id:id_utilisateur,
				receiver_id:m_id,
				message:''
			},
            dataType:"json",
			beforeSend: function(){
              $('.icones_ko').html("<img src='image/load.gif' width='20'>");
          },
		  
          success:function(result){
			  //var messageNotification = result.notification.sender_name+' '+result.notification.sender_last_name+' <span key="ReceivedNotification" class="TranslationDiv">vous à envoyer une notification</span>';
			  if(result.success == 1){
                  $('#affiche_success_notif').fadeIn(500).delay(2000).fadeOut(500);
                  $('.icones_ok').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");
                  $('.icones_ko').hide();

              }else{
                $('#affiche_error_notif').fadeIn(500).delay(2000).fadeOut(500);
                $('.icones_ko').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");
              }
                
				console.log(result);
          }
        });
    }
	