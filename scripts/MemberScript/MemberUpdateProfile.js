function MemberUpdateProfileFunction() {
    
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    
    //var password = document.getElementById("password").value;
    //var password_conf = document.getElementById("password_conf").value;
    var birthday = document.getElementById("birthday").value;
    var genre = document.getElementById("genre").value;
    var country = document.getElementById("country").value;
	
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
                name:name,
                last_name:last_name,
                birthday:birthday,
                gender:genre,
                residence_countryid:country,
                member_id:id_utilisateur
              },
              dataType:"json",
              success:function(result){
                      $('#updateok').fadeIn(500).delay(2000).fadeOut(500);
                      
              }
        });
        
    
    return false;
}
