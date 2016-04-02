$(document).ready(function(){
  
  $("#search-box").keyup(function(){
    if($("#search-box").val().length >= 4){
      
    var urlWS="http://api.chessfamily.net/api/query";
    var country_id = document.getElementById("id_country").value;
    $.ajax({
    type: "POST",
    url: urlWS,
    data:{authentication:"chessfemily",action:"city_search",country_id:country_id,city:$(this).val()},
    beforeSend: function(){
      $("#search-box").css("background","#FFF url(LoaderIcon.gif) no-repeat 150px");
    },
    success: function(result){
		
      $("#suggesstion-box").show();
	  $('#suggesstion-box').html("");
      $.each(result.city, function (index, item) {
		  console.log(item.city);
          if(item.city.length > 0){
          $('#suggesstion-box').append("<li class='city' id='"+item.id+"'>"+item.city+"</li>");
        }
      });
      $("#search-box").css("background","#FFF");
      //$("#suggesstion-box").html(data);
      
      
    },
    complete: function(){
      $("#search-box").css("background","white");
    }
    });
  }else{
    $("#suggesstion-box").hide();
    $("#suggesstion-box li").html('');

  }
  });
});

/*function selectCountry() {
$("#search-box").val(val);
$("#suggesstion-box").hide();
}*/

$(document).on('click','.city', function(){

       
        $("#id_city").val($(this).attr('id'));
        $("#search-box").val($(this).text());
        $("#suggesstion-box").hide();
    });