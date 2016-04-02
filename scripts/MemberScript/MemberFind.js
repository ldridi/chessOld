
  function $_GET(param) {
    var vars = {};
    window.location.href.replace( 
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function( m, key, value ) { // callback
        vars[key] = value !== undefined ? value : '';
      }
    );

    if ( param ) {
      return vars[param] ? vars[param] : null;  
    }
    return vars;
  }
  
  if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
  	}else if(sessionStorage.getItem("identifiant")!= null){
  		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
  	}	
    var latitude = $_GET('lat');
    var longitude = $_GET('long');
    var distance = $_GET('range');
    var age_from = $_GET('age_from');
    var age_to = $_GET('age_to');
    var gender = $_GET('gender');
    var profile = $_GET('profile');
      
        
		    var urlWS="http://api.chessfamily.net/api/query";
        $.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{
    				authentication:"chessfemily",
    				action:"find_members",
    				distance:distance,
    				latitude:latitude,
    				longitude:longitude,
					member_id:id_utilisateur,
            age_min:age_from,
            age_max:age_to,
            gender:gender,
            profile:profile

          },
            dataType:"json",
              beforeSend: function(){
              $('.load_players').show();
              },
              success:function(result){
                if(result.success == 1){
                    $.each(result.members, function (index, item) { //.toFixed(2)
                      var li = ""+
                      "<div class='col-xs-6 ' >"+
                        "<div class='panel panel-default' style='background:#E5E5E5'>"+
                        "<div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'>"+
                          "<b>" + item.name +" "+ item.last_name + "</b></br>"+
                          "<font>&nbsp;</font>"+
                          "<font class='pull-right'> "+ item.distance + " KM </font>"+
                        "</div>"+
                        "<div class='panel-body' style='padding:0;'>"+
                          "<img id='"+ item.id +"' src='"+ item.image + "' class='img-responsive  center-block item' style='widht:200px; height:150px;'>"+
                        "</div>"+
                        "<div class='panel-footer' style='background:#F1D6A1'>"+
                          "<i class='fa fa-gamepad addnotif' style='font-size:25px;color:grey;' id='"+ item.id +"'></i>"+
                          "<i class='fa fa-star-o pull-right addfav' style='font-size:25px;color:grey;' id='"+ item.id +"'></i>"+
                        "</div>"+//"</div>"+
                      "</div>";     
                          
						  
						  /*
						  <button class="btn text-uppercase" id="send_invitation" onclick="AddNotifications()" >
							  <div class="icones_chargement"></div>
							  <div class="icones_ok"></div>
							  <div class="icones_ko"><i class='fa fa-gamepad' style='font-size:20px;'></i></div>
							  <font class="text-uppercase"><b style="font-size:10px;">Play</b></font>
						  </button>
						  */
						  
						  
                        $('.players').append(li);
                        
                    });
                    
                }else{
                    $('.noplayer').show();
                }
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );

   
 $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 

    });

 $(document).on('click','.addnotif', function(){
     
  var playersid = $(this).attr('id');
    var url = window.location.search;
    var m_id = url.substring(url.lastIndexOf("=")+1);
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
        action:"notification_add",
        member_id:id_utilisateur,
        receiver_id:playersid,
        message:''
      },
            dataType:"json",
          success:function(result){
			  if(result.success == 1){
                  $('#affiche_success_notif').fadeIn(500).delay(2000).fadeOut(500);
                  

              }else{
                $('#affiche_error_notif').fadeIn(500).delay(2000).fadeOut(500);
                
              }
        var messageNotification = result.notification.sender_name+' '+result.notification.sender_last_name+' vous à envoyer une notification';
                
        console.log(result);
          }
        });

    });




$(document).on('click','.addfav', function(){
       

        var url = window.location.search;
          if(localStorage.getItem("identifiantLocal")!= null){
        var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
      }else if(sessionStorage.getItem("identifiant")!= null){
        var id_utilisateur = sessionStorage.getItem("identifiant");//4;
      } 
          var playersid = $(this).attr('id');
          var m_id = url.substring(url.lastIndexOf("=")+1);
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
            url:urlWS,
            data:{
        authentication:"chessfemily",
        action:"friend_add",
        id_utilisateur:id_utilisateur,
        friend_id:playersid
      },
            dataType:"json",
          beforeSend: function(){
              //$('.icones_ko_fav').html("<img src='image/load.gif' width='20'>");
          },
          success:function(result){
              if(result.success == 1){
                  $('#affiche_success').fadeIn(500).delay(2000).fadeOut(500);
                  /*$('.icones_ok_fav').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");
                  $('.icones_ko_fav').hide();*/

              }else{
                $('#affiche_error').fadeIn(500).delay(2000).fadeOut(500);
                /*$('.icones_ko_fav').html("<i class='fa fa-gamepad' style='font-size:20px;'></i>");*/
              }
              console.log(result);
          }
        });

    });