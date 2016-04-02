
$(document).ready(function(){
    function meetingTypeList() {
		var MeetingTypeList = new Object();
        var urlWS = "http://api.chessfamily.net/api/query";
        $.ajax({
          type:"POST",
          url:urlWS,
          data:{
              authentication:"chessfemily",action:"meeting_place_type"
              },
          dataType: 'json',
          success:function(result){
			  
            $.each(result.meeting_place_type, function (index, item) { 
				var Type = new Object();
				Type.id = item.id;
				Type.label = item.label;
				MeetingTypeList[index]=Type;
            });
			
			sessionStorage.setItem('MeetingTypeList',MeetingTypeList);
          }
        });
    }



    meetingTypeList();
});

