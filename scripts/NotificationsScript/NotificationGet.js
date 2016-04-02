
// JavaScript Document


	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}
	lang = localStorage.getItem("DefaultLanguage");
	var NotificationSended = "";
	var noNotification = "";
	switch(lang){
		case 'fr':
			NotificationSended = "vous à envoyer une notification.";
			noNotification = "Aucune Notification Trouvée!";
			break;
		case 'en':
			NotificationSended = "sent you a notification.";
			noNotification = "No Notification found!";
			break; 
	}
	
	
	var urlWS = "http://api.chessfamily.net/api/query";
    var NotificationGetByIdMember =function () {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"notifications",
				member_id:id_utilisateur,
				perpage:30,
				page:1},
            dataType:"json",
          success:function(result){
			  console.log(result);
			  if(result.success==1){
			  	notif = "";
				  $.each(result.notifications, function (index, item) {
					notif += "<div class='notification notif_lu' id='" + item.id +"'>"+
						              "<div class='row'>"+
						                  "<div class='sender_profile col-xs-3' id='" + item.sender_id +"'>"+
						                      "<img src='"+this.sender_photo+"' class='img-responsive img-circle' style='width:50px;height:50px;'>"+
						                  "</div>"+
						                  "<div class='notif_sender col-xs-9' >"+
						                      "<p>"+
											  	   this.date+
						                          "<br/><b>"+ 
						                          	this.sender_name+" "+this.sender_last_name +
						                          "</b>&nbsp;"+
						                          "<i>"+NotificationSended+"</i>"+
												  
						                          //this.message+
											   "</p>"+
						                  "</div>"+
						              "</div>"+
					            "</div>"
						
					$('.Notification_list').html(notif);
					

				  });
			  }else{
				  $('.Notification_list').html("Pas de Notification");
			  }
	  
          }
        });
    }



    setInterval(NotificationGetByIdMember,2000)

    $(document).on('click','.notif_lu', function(){
        var notifId = $(this).attr('id');
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
	        action:"notification_read",
	        member_id:id_utilisateur,
	        notification_id:notifId,
	        },
	            dataType:"json",
	          success:function(result){
	            console.log(result);
	          }
	     });
    });


    $(document).on('click','.notif_sender', function(){
			document.location.href = 'messages_detail.html?sender_id=' + $(this).attr('id'); 
			//console.log($(this).attr('id'));
		});

    $(document).on('click','.sender_profile', function(){
			document.location.href = 'profile.html?sender_id=' + $(this).attr('id'); 
		});


