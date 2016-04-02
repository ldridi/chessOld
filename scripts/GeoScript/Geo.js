function geo(){


    var latitude = document.getElementById("lat").value;
    var longitude = document.getElementById("long").value;
    console.log(latitude);
    var urlWS = "http://api.chessfamily.net/api/query";
    $.ajax(
            {

                type:"POST",
                url:urlWS,
                data:{
                    authentication:"chessfemily",
                    action:"geolocation",
                    longitude:longitude,
                    latitude:latitude
                  },
                dataType:"json",
                  success:function(result){
            
                    console.log(result);

                  }
            }
        );
}