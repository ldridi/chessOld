
$(document).ready(function(){
    
    
    function eventCreatedByMember() {
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
    				action:"member_events",
    				member_id:id_utilisateur,
					perpage:30,
					page:1
    				},
            dataType:"json",
          beforeSend: function(){
              $('.load_my_events').show();
          },
          success:function(result){
			  

            if(result.success == 1){
                $.each(result.events, function (index, item) { 
                  console.log(item);
				//if(item.status==1){colorStatus = "#98BF0A"; }else{colorStatus = "#f24e4e";}
				if(item.start_date!=null){fromDate = "From : " + item.start_date;; }else{fromDate = "&nbsp;";}
				if(item.end_date!=null){toDate = " - To : " + item.end_date; }else{toDate = "&nbsp;";}
            var li = "<li class='list-group-item ' id='" + item.id + "'>" +
                        
                        "<span class='badge' style='background:white;'>" +
                            "<i data-toggle='modal' data-target='#myModalModif' class='fa fa-pencil-square modif_event' id='" + item.id + "' style='font-size:25px;color:#4B2618;margin-right:10px;'></i>&nbsp;" +
                            "<i  class='fa fa-trash delete_event' id='" + item.id + "' style='font-size:25px;color:#4B2618;'></i>" +
                        "</span>" +
                        "<b class='events' id='" + item.id + "'>" + item.name +
                            //" <i class='fa fa-circle' style='font-size:15px;color:"+colorStatus+"'></i>" +
                        "</b>" +
                        "<br>" +
                        "<font style='font-size:12px;color:grey;'>" +fromDate+ toDate + "</font>" +
                    "</li>";     
                $('.list-menu-myevents').append(li);
                
                
            });
            }else{
              $('.cre_event').show();
            }
            
          },
          complete: function(){
              $('.load_my_events').hide();

          }
        });
    }



    eventCreatedByMember();


    $(document).on('click','.events', function(){
        document.location.href = 'eventDetails.html?event_id=' + $(this).attr('id'); 
    });

    $(document).on('click','.modif_event', function(){
        var eventId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
        var dataStringDelete = 'authentication=chessfemily&action=event_get&event_id='+eventId;
        var urlWS = "http://api.chessfamily.net/api/query";

        $.ajax({
            type:"POST",
            url:urlWS,
            data:{
              authentication:"chessfemily",
              action:"event_get",
              announcer_id:id_utilisateur,
              event_id:eventId
            },
          dataType: 'json',
          success:function(result){
               $('#id_event_edit').val(result.event.id);
                $('#name_modif').val(result.event.name);
                $('#organizer_modif').val(result.event.organizer);
                $('#start_date_modif').val(result.event.start_date);
                $('#end_date_modif').val(result.event.end_date);
                $('#is_rated_modif').val(result.event.is_rated);
                $('#description_modif').val(result.event.description);
                $('#prize_fund_modif').val(result.event.prize_fund);
                $('#phone_number_modif').val(result.event.phone_number);
                $('#email_modif').val(result.event.email);
                $('#website_modif').val(result.event.website);
                
                              
          }
        }); 
    });

$(document).on('click','.delete_event', function(){
        var eventId = $(this).attr('id');
        if(localStorage.getItem("identifiantLocal")!= null){
			var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
		}else if(sessionStorage.getItem("identifiant")!= null){
			var id_utilisateur = sessionStorage.getItem("identifiant");//4;
		}	
       
        $.ajax({
            type:"POST",
            url:urlWS,
            data:{
        authentication:"chessfemily",
        action:"event_delete",
        member_id:id_utilisateur,
        event_id:eventId
        },
            dataType:"json",
          success:function(result){
            $('.msg_delete').show();
            location.reload();
          }
        });
    });
});
