/*
$(document).ready(function(){
	
	
	var url = window.location.search;
	var id_friend = url.substring(url.lastIndexOf("=")+1);//1;
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
            data:{
            	authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				friend_id:id_friend,
				perpage:10,
				page:1 
				},
            dataType:"json",
          success:function(result){
          	
               $.each(result.messages, function (index, item) { 

               			if(item.receiver_id == id_utilisateur){
               				var color = "#B7C8DF";
               			}else{
               				var color = "beige";
               			}

               		if(item.receiver_id == id_utilisateur ){
var recu = "<div class='monmessage' style='background:"+ color +"' >"+
						         "<div class='row'>"+
						            "<div class='col-xs-12'>"+
						                "<div class='row'>"+
						                    "<div class='col-xs-2'>"+
						                        "<img id='" + item.sender_id +"' src='"+item.sender_photo+"' style='width:50px;height:50px;' class='sender_profile img-responsive img-circle'>"+
						                    "</div>"+
						                    "<div class='col-xs-10'>"+
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
               			

               		

					
				}else{
					var recu = "<div class='monmessage' style='background:"+ color +"'>"+
						         "<div class='row'>"+
						            "<div class='col-xs-12'>"+
						                "<div class='row'>"+
						                    "<div class='col-xs-10'>"+
						                        "<b>"+item.sender_name+" "+item.sender_last_name +" - </b>"+
						                        "<b>" + item.date +"</b>"+
						                        "<p>"+
						                        	item.message+
						                        "</p>"+
						                    "</div>"+
											"<div class='col-xs-2'>"+
						                        "<img id='" + item.sender_id +"' src='"+item.sender_photo+"' style='width:50px;height:50px;' class='sender_profile img-responsive img-circle'>"+
						                    "</div>"+
						                "</div>"+
						            "</div>"+
						         "</div>"+
						      "</div>";
				}
				$('.listmessage').append(recu);
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
});
*/

$(document).ready(function(){
	
	
	var url = window.location.search;
	var id_friend = url.substring(url.lastIndexOf("=")+1);//1;
	
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
            data:{
            	authentication:"chessfemily",
				action:"messages",
				member_id:id_utilisateur,
				friend_id:id_friend,
				perpage:10,
				page:1 
				},
            dataType:"json",
          success:function(result){
          	
               $.each(result.messages, function (index, item) { 

               			if(item.receiver_id == id_utilisateur){
               				var color = "#B7C8DF";
               			}else{
               				var color = "beige";
               			}

               		if(item.receiver_id == id_utilisateur ){
var recu = "<div class='monmessage' style='background:"+ color +"' >"+
						         "<div class='row'>"+
						            "<div class='col-xs-12'>"+
						                "<div class='row'>"+
						                    "<div class='col-xs-3'>"+
						                        "<img id='" + item.sender_id +"' src='"+item.sender_photo+"' style='width:50px;height:50px;' class='sender_profile img-responsive img-circle'>"+
						                    "</div>"+
						                    "<div class='col-xs-9'>"+
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
               			

               		

					
				}else{
					var recu = "<div class='monmessage' style='background:"+ color +"'>"+
						         "<div class='row'>"+
						            "<div class='col-xs-12'>"+
						                "<div class='row'>"+
						                    "<div class='col-xs-9'>"+
						                        "<b>"+item.sender_name+" "+item.sender_last_name +" - </b>"+
						                        "<b>" + item.date +"</b>"+
						                        "<p>"+
						                        	item.message+
						                        "</p>"+
						                    "</div>"+
											"<div class='col-xs-3'>"+
						                        "<img id='" + item.sender_id +"' src='"+item.sender_photo+"' style='width:50px;height:50px;' class='sender_profile img-responsive img-circle'>"+
						                    "</div>"+
						                "</div>"+
						            "</div>"+
						         "</div>"+
						      "</div>";
				}
				$('.listmessage').append(recu);
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
});

