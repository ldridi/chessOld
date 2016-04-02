$(document).ready(function(){
    function memberFind() {
          if(sessionStorage.getItem("identifiant")!=null){
			  var id_utilisateur = sessionStorage.getItem("identifiant");
		  }else if(localStorage.getItem("identifiantLocal")!=null){
			  var id_utilisateur = localStorage.getItem("identifiantLocal");
		  }
		  var urlWS = "http://api.chessfamily.net/api/query";

        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_get",
				id:id_utilisateur
				},
            dataType:"json",
          
          success:function(result){
				console.log(result);
              
              $('.image_profil').html(""+
			  "<a href='myprofile.html'>"+
			  		"<img src='"+ result.member.image +"' class='img-responsive img-circle center-block' style='border:3px solid white;margin-bottom:20px;width:130px;height:130px;border-radius:130px;'>"+
			  "</a>");
              $('.nom_member').html("<a href='myprofile.html'>"+result.member.name +" "+ result.member.last_name+"</a>");
              //console.log(result.member.image);
          }
        });
    }



    memberFind();
});
