//Not used till now
$(document).ready(function(){
	
	
	
	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
	
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function MessagesGetAll() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				perpage:10,
				page:1},
            dataType:"json",
          success:function(result){
               $.each(result.messages, function (index, item) { 

               			if(item.is_read == 1){
               				var color = "silver";
               			}else{
               				var color = "#efeded";
               			}

               		if(item.receiver_id == id_utilisateur ){

               			

               		var recu = "<div class='read_message monmessage' style='background:"+ color +"' id='" + item.id +"'>"+
						         "<div class='row'>"+
						            "<div class='col-xs-12'>"+
						                "<div class='row'>"+
						                    "<div class='col-xs-2'>"+
						                        "<img id='" + item.sender_id +"' src='"+item.sender_photo+"' style='width:50px;height:50px;' class='sender_profile img-responsive img-circle'>"+
						                    "</div>"+
						                    "<div class='message_item col-xs-10' id='" + item.sender_id +"'>"+
						                        "<b>"+item.sender_name+" "+item.sender_last_name +" - </b>"+
						                        "<b>" + item.date +"</b>"+
						                        "<p>"+
						                        item.message
						                        "</p>"+
						                    "</div>"+
						                "</div>"+
						            "</div>"+
						         "</div>"+
						      "</div>";

					$('.listmessage').append(recu);
				}
               });	
          },
        });
    }



    MessagesGetAll();

    $(document).on('click','.sender_profile', function(){
			document.location.href = 'profile.html?sender_id=' + $(this).attr('id'); 
	










	});

    $(document).on('click','.message_item', function(){
			document.location.href = 'messages_detail.html?sender_id=' + $(this).attr('id'); 
		});

    $(document).on('click','.read_message', function(){
			
			var id_utilisateur = sessionStorage.getItem("identifiant");
			var id_message = $(this).attr('id');

			$.ajax({
			type:"POST",
            url:urlWS,
            data:{
            	authentication:"chessfemily",
				action:"message_received_read",
				member_id:id_utilisateur,
				message_id:id_message
				},
            dataType:"json",
	          success:function(result){
	          		console.log(result);
	          }
      		});




		});
});












