$(document).ready(function(){
    function memberFind() {
          
          var url = window.location.search;
  
          var m_id = url.substring(url.lastIndexOf("=")+1);

          var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_get",
				id_member:id_utilisateur
				},
            dataType:"json",
          success:function(result){
              $.each(result.member_languages, function (index, item) {
                $('.lang').append("<b>" + item.label + " | </b>");
            });
          }
        });
    }



    memberFind();
});
