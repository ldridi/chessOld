
$(document).ready(function(){

    function meetingType() {
		var meetingPlaceType = sessionStorage.getItem("MeetingTypeList");
		/*$.each(meetingPlaceType, function (index, item) {
			 console.log(item);
			 //$('#type_meeting_search').append("<option value='" + item.id + "'>" + item.label +"</option>");
		});*/
     
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
          url:urlWS,
          data:{
              authentication:"chessfemily",action:"meeting_place_type"
              },
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'json',
          success:function(result){
			  if($('#meetingType_edit').length){$('#meetingType_edit').html("<option value='0'>All</option>");}
            $.each(result.meeting_place_type, function (index, item) { 
				if($('#meetingType_edit').length){//Edit my Meeting Place
					$('#meetingType_edit').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				if($('#type_meeting').length){//page EventAdd
					$('#type_meeting').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				if($('#type_meeting_search').length){
					$('#type_meeting_search').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				if($('#meetingType').length){//Add my Meeting Place
					$('#meetingType').append("<option value='" + item.id + "'>" + item.label +"</option>");
				}
				
            });

            
          }
        });
    }



    meetingType();
});

