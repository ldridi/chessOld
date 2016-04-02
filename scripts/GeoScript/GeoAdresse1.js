function GeoAdresse(){


    var adresse = document.getElementById("adress_meeting").value;
    //var city_s = document.getElementById("search-box").value;
    //var country_s = document.getElementById("pays").value;
    var urlWS = "http://api.chessfamily.net/api/query";
    $.ajax(
            {


                type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"geolocation",
                    address:adresse
                  },
                dataType:"json",
                  success:function(result){
                    $('#champ_adress').val(adresse);
                    $('#latitude_meeting').val(result.latitude);
                    $('#longitude_meeting').val(result.longitude);
                    $('#country_meeting').val(result.country);
					$('#id_country').val(result.country_id);
					console.log(result);
                  }
            }
        );
}