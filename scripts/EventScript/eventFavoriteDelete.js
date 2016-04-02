
                $(document).ready(function(){
 
                    function lanaguageGetAll(){
                      $.ajax({
                        dataType:"text",
                        url:"lanaguageGetAll.php",
                        success:function(data){
                              var d = jQuery.parseJSON(data);
                              
                                $.each(d, function (key, data) {
                                    console.log(key)
                                    $.each(data, function (index, data) {
                                        console.log("id : "+ d.language[index].id + " langauage : " + d.language[index].label + "");
                                    })
                                })





                        }
                      });
                    }
 
                    lanaguageGetAll();
              });
