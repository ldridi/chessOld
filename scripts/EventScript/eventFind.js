  function $_GET(param) {
    var vars = {};
    window.location.href.replace( 
      /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
      function( m, key, value ) { // callback
        vars[key] = value !== undefined ? value : '';
      }
    );

    if ( param ) {
      return vars[param] ? vars[param] : null;  
    }
    return vars;
  }
    var latitude = $_GET('lat1');
    var longitude = $_GET('long1');
    var distance = $_GET('rangeevent');
    var event_type = $_GET('event_type');
    var activity = $_GET('activity');
      console.log(event_type);
        
		    var urlWS="http://api.chessfamily.net/api/query";
        $.ajax(
        {

            type:"POST",
            url:urlWS,
            data:{
    				authentication:"chessfemily",
    				action:"find_events",
    				distance:distance,
    				latitude:latitude,
    				longitude:longitude,
            event_type_id:event_type,
            nb_days:activity

          },
            dataType:"json",
              beforeSend: function(){
              $('.load_events').show();
          },
          success:function(result){
           console.log();
            /**/
          if(result.success == 1){
            $.each(result.favorite_events, function (index, item) { 
			console.log();
			//if(item.status==1){colorStatus = "#98BF0A"; }else{colorStatus = "#f24e4e";}
              var li = "<li class='list-group-item' id='" + item.event_id + "'>" +
                        
                        "<span class='badge' style='background:white;'>" +
                            "<i class='fa fa-trash delete' id='" + item.event_id +"' style='font-size:25px;color:#4B2618;' ></i>" +
                        "</span>" +
                        "<b class='events' id='"+ item.event_id +"'>" + item.name +
                            //" <i class='fa fa-circle' style='font-size:15px;color:"+colorStatus+"'></i>" +
                        "</b>" +
                        "<br>" +
                        "<font style='font-size:12px;color:grey;'>From : " + item.start_date + " - To : " + item.end_date + "</font>" +
                    "</li>";  

                $('.list-menu-events').append(li);
                $('.fav_event').hide();

            });
          }else{
            $('.noevent').show();
          }
          },
          complete: function(){
              $('.load_events').hide();
          }
        }
    );

