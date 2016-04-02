function MessagesSend() {
	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}
	var url = window.location.search;
	var id_friend = url.substring(url.lastIndexOf("=")+1);
	var message = document.getElementById("textmessage").value;
	var urlWS = "http://api.chessfamily.net/api/query";
	$.ajax({
		type:"POST",
		url:urlWS,
		data:{
			authentication:"chessfemily",
			action:"send_message",
			member_id:id_utilisateur,
			receiver_id:id_friend,
			object:'--',
			message:message
			},
		dataType:"json",
	  success:function(result){
		   $('#textmessage').val('');
	  },
	});
}















