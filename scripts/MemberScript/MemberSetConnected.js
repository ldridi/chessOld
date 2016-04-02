

    function setConnected() {
          
          	var url = window.location.search;
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
					action:"set_vailability",
					member_id:id_utilisateur,
					availability:1
				},
	            dataType:"json",
	          success:function(result){
				  location.reload();
	              console.log(result);
	          }
	        });

    }


