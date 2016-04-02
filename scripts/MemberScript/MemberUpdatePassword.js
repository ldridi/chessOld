function MemberUpdatePassword() {
    
    
    
    var password = document.getElementById("password").value;

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
                action:"member_edit",
                password:password,
                member_id:id_utilisateur
              },
              dataType:"json",
              success:function(result){
				  $('#updatePasswordOK').fadeIn(500).delay(2000).fadeOut(500);
                  console.log(result);
              }
        });
        
    
    return false;
}
