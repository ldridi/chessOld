$(document).ready(function(){
  country_id = $('#id_country').val();
  city_id = $('#id_city').val();
  
  $("#search-box_meeting").keyup(function(){
    if($("#search-box_meeting").val().length >= 4){


    var urlWS="http://api.chessfamily.net/api/query";
    $.ajax({
    type: "POST",
    url: urlWS,
    data:{authentication:"chessfemily",action:"meeting_place_search",country_id:country_id,city_id:city_id,name:$(this).val()},
    beforeSend: function(){
      $("#search-box_meeting").css("background","#FFF url(LoaderIcon.gif) no-repeat 150px");
    },
    success: function(result){
		
      $("#suggesstion-box_meeting").show();
	  $('#suggesstion-box_meeting').html("");
      $.each(result.meeting_places, function (index, item) {
          if(item.name.length > 0){
          $('#suggesstion-box_meeting').append("<li class='meeting' id='"+item.id+"'>"+item.name+"</li>");
        }
      });
      $("#search-box_meeting").css("background","#FFF");
      //$("#suggesstion-box").html(data);
      
      
    },
    complete: function(){
      $("#search-box_meeting").css("background","white");
    }
    });
  }else{
    $("#suggesstion-box_meeting").hide();
    $("#suggesstion-box_meeting li").html('');

  }
  });
});

/*function selectCountry() {
$("#search-box").val(val);
$("#suggesstion-box").hide();
}*/

$(document).on('click','.meeting', function(){
        $("#id_meeting").val($(this).attr('id'));
        $("#search-box_meeting").val($(this).text());
        $("#suggesstion-box_meeting").hide();
    });