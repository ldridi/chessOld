
$(document).ready(function(){
	var current_title = $(document).attr('title');
	
	if(current_title=='Profile Details'){
		var url = window.location.search;
    	var id_utilisateur = url.substring(url.lastIndexOf("=")+1);//1;
	}else{
		
		if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}		
	}

	var urlWS = "http://api.chessfamily.net/api/query";
    function PublicationsGetAllById() {
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_publications",
				member_id:id_utilisateur,
				perpage:10,
				page:1},
            dataType:"json",

          beforeSend: function(){
              $('.affiche_detail_publication').hide();
              $('.load_detail_publication').show();
          },
          success:function(result){
			  if(result.success==1){
				  var displayVideo = "";
				  var displayLink = "";
				  var displayPhoto = "";
				  
				  $.each(result.publications, function (index, item) {
					  	if(item.video_link == null ){ displayVideo = "style='display:none;'";}else{displayVideo = "style='display:visible;'";}
						if(item.web_link == null ){ displayLink = "style='display:none;'";}else{displayLink = "style='display:visible;'";}
						if(item.photos.length == 0){ displayPhoto = "style='display:none;'";}
						
				  		var pub = ""+
				  			"<div class='publication' >"+
				  			"<div class='row'>"+
				              "<div class='col-xs-3'>"+
				                  "<img src='"+item.member_photo+" 'class='img-responsive img-circle center-block' style='border:3px solid white;margin-bottom:20px;width:50px;height:50px;border-radius:50px;'>"+
				              "</div>"+
				              "<div class='col-xs-9'>"+
				                  "<div class='row'>"+
				                      "<div class='col-xs-12'>"+
									  	  "<h5><b>"+item.member+"</b></h5>"+
										  "<h6>"+item.date+"</h6>"+
				                          "<p>"+item.formatted_text+"</p>"+
				                      "</div>"+
				                      "<div class='col-xs-12'>"+

				                          "<a href='"+item.video_link+"' target='_blink'><button class='btn btn-xs btn_index'"+ displayVideo +"><i class='glyphicon glyphicon-facetime-video'></i>&nbsp;&nbsp;Video</button></a>&nbsp;"+
				                          "<a href='"+item.web_link+"' target='_blink'><button class='btn btn-xs btn_index'"+ displayLink +"><i class='glyphicon glyphicon-globe'></i>&nbsp;&nbsp;Link</button></a>&nbsp;"+
				                          "<button class='btn btn-xs btn_index'"+ displayPhoto +"><i class='glyphicon glyphicon-camera'></i>&nbsp;&nbsp;Photo</button>"+
				                      
				                      "</div>"+
				                  "</div>"+
				              "</div>"+
				          "</div>"+
				          "</div>";
				          
						$('.publication_list').append(pub);
				  });
			  }else{
				  $('.publication_list').html("Pas de Publications");
			  }
	  
          },
          complete: function(){
              $('.load_detail_publication').hide();
              $('.affiche_detail_publication').show();
          }
        });
    }



    PublicationsGetAllById();

});

