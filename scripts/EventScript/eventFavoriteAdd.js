

    function EventFavoriteAdd() {
          
          var url = window.location.search;
          if(localStorage.getItem("identifiantLocal")!= null){
				var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
			}else if(sessionStorage.getItem("identifiant")!= null){
				var id_utilisateur = sessionStorage.getItem("identifiant");//4;
			}	
          var e_id = url.substring(url.lastIndexOf("=")+1);
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"events_favorite_add",
				member_id:id_utilisateur,
				event_id:e_id
			},
            dataType:"json",
          success:function(result){
              
             $('#messagefavorite').fadeIn(500);
            $('#messagefavorite').fadeOut(1000);
          }
        });

    }


/*
<button class="btn text-uppercase" id="send_invitation" onclick="MemberAddFriend()">
  <div class="icones_ok_fav"></div>
  <div class="icones_ko_fav"><i class='fa fa-star-o' style='font-size:20px;'></i></div>
  <font class="text-uppercase"><b style="font-size:10px;">Favorite</b></font>
</button>
*/

