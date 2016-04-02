//$(document).ready(function(){
    
	var urlWS = "http://api.chessfamily.net/api/query";
    function CountryGetAll(SelectedCountry) {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"country_get_all"},
            dataType:"json",
			  success:function(result){
				$.each(result.country, function (index, item) { 
					if(SelectedCountry==item.id){
						$('#country').append("<option value='" + item.id + "' selected>" + item.name +"</option>");
					}else{
						$('#country').append("<option value='" + item.id + "'>" + item.name +"</option>");
					}
					
				});
			  }
        });
    }



    //CountryGetAll();
//});
