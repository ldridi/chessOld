
$(document).ready(function(){
    //variable host declarer dans templateGenerator.js
	   
    function eventType() {
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
          url:urlWS,
          data:{
              authentication:"chessfemily",action:"event_type"
              },
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'json',
          success:function(result){
			  //$('#type_event').html("<option value=''>All</option>");
			  //$('#type_event_modif').html("<option value=''>All</option>");
			  if($('#event_type_recheche').length){
				  $('#event_type_recheche').html("<option value='0'>All</option>");
			  }
            $.each(result.event_type, function (index, item) { 
                if($('#type_event').length){
					$('#type_event').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				if($('#type_event_modif').length){
                	$('#type_event_modif').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				if($('#event_type_recheche').length){
                	$('#event_type_recheche').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}


            });

            
          }
        });
    }



    eventType();
});

