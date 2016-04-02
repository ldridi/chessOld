
function getDayById(DayId){
	
	var day = { 
		0 : "All Days",
		1 : "Mon",
		2 : "Tue",
		3 : "Wed",
		4 : "Thu",
		5 : "Fri",
		6 : "Sat",
		7 : "Sun"
	};
	return day[DayId];
}

$(document).ready(function(){
    var url = window.location.search;
    var m_id = url.substring(url.lastIndexOf("=")+1);//
	
	
	var urlWS = "http://api.chessfamily.net/api/query";
	
    function meetingGET() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"meeting_place_get",meeting_place_id:m_id},
            dataType:"json",
			success:function(result){
				
			  $('.titre_haut').html(result.meeting_place.name);
			  $('.website').html(result.meeting_place.website);
			  $('.email').html(result.meeting_place.email);
			  $('.adresse').html(result.meeting_place.adress);
			  $('.city').html(result.meeting_place.city);
			  $('.country').html(result.meeting_place.country);
			  $('.phone_number').html(result.meeting_place.phone_number);
			  $('.type_location').html(result.meeting_place.type);
			  if(result.meeting_place_opening_time.length!=0){
				  $('#HoursTitle').html("HOURS");
				  $.each(result.meeting_place_opening_time, function (index, item) { 
						$('#openingTimeDiv').append("<b>"+getDayById(item.day_ofweek)+" : "+item.start+" - "+item.end+"<br></b>")
					});
			  }
			console.log(result);
			if(result.photos.id != 0){
				$.each(result.photos, function (index, item) { 
					//alert(item.toSource());
					$('.rslides').append("<li><img id='"+item.id+"' src='"+item.image+"' alt=''></li>")
				});
			}else{
				$('.rslides').html("<li><img id='"+result.photos.photos+"' src='"+result.photos.photo+"' alt=''></li>")
				}
			
          }
        });
    }



    meetingGET();

});


