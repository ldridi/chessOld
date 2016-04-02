
$(document).ready(function(){

    var url = window.location.search;
    var e_id = url.substring(url.lastIndexOf("=")+1);//1;
	
	var urlWS = "http://api.chessfamily.net/api/query";
    function eventGET() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"event_get",event_id:e_id},
            dataType:"json",
			
          beforeSend: function(){
              $('.affiche_detail_event').hide();
              $('.load_detail_event').show();
          },
          success:function(result){
			  console.log(result);
                              $('.titre_haut').html(result.event.name);
                              $('.event_type').html(result.event.type);
                              $('.date_start').html(result.event.start_date);
                              $('.date_end').html(result.event.end_date);
                              $('.site').html(result.event.website);
                              $('.email').html(result.event.email);
                              $('.tel').html(result.event.phone_number);
                              $('#description').html(result.event.description);
							  $('address').html(result.event.adress);
							  //$('#img_event').attr("src",result.event.meeting_photos[0].image);
							  $.each(result.event.meeting_photos, function (index, item) { 
									$('.rslides').append("<li><img src='"+item.image+"' alt=''></li>")
								});
							  
							  
							  //alert(result.event.meeting_photos[0].image);		  
          },
          complete: function(){
              $('.load_detail_event').hide();
              $('.affiche_detail_event').show();
          }
        });
    }



    eventGET();

});

