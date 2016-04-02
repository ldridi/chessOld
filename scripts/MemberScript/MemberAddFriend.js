

function MemberAddFriend() {
	  
	  var url = window.location.search;
	  if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
	  var m_id = url.substring(url.lastIndexOf("=")+1);
	var urlWS = "http://api.chessfamily.net/api/query";
	$.ajax({
	  type:"POST",
		url:urlWS,
		data:{
			authentication:"chessfemily",
			action:"friend_add",
			id_utilisateur:id_utilisateur,
			friend_id:m_id
		},
		dataType:"json",
	  beforeSend: function(){
		  $('.icones_ko_fav').html("<img src='image/load.gif' width='20'>");
	  },
	  success:function(result){
		  if(result.success == 1){
			  $('#affiche_success').fadeIn(500).delay(2000).fadeOut(500);
			  $('.icones_ok_fav').html("<i class='fa fa-star-o' style='font-size:20px;'></i>");
			  $('.icones_ko_fav').hide();

		  }else{
			$('#affiche_error').fadeIn(500).delay(2000).fadeOut(500);
			$('.icones_ko_fav').html("<i class='fa fa-star-o' style='font-size:20px;'></i>");
		  }
		  console.log(result);
	  }
	});

}

