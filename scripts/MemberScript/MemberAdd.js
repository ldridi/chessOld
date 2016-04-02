
function AddMember() {
    var urlWS="http://api.chessfamily.net/api/query";
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_conf = document.getElementById("password_conf").value;
    var birthday = document.getElementById("birthday").value;
    var genre = document.getElementById("genre").value;
	var os = document.getElementById("detect_os").value;
	var device_token = document.getElementById("detect_UUID").value;
  
  document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
	  //alert("success");
    alert('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal.init("6b7a8cef-2b9c-4205-ad53-f2ebedda3c6a",
                                 {googleProjectNumber: "663342117564"},
                                 notificationOpenedCallback);
  
  // Show an alert box if a notification comes in when the user is in your app.
  window.plugins.OneSignal.enableInAppAlertNotification(true);
}, false);  //alert("name:"+name+"last_name:"+last_name+"email:"+email+"password:"+password+"birthday:"+birthday+"genre:"+genre);
	if ((name == '') && (last_name == '') && (email == '') && (password == '') && (password_conf == '') && (birthday == '') && (genre == '') && (password != password_conf)){
        $('.info_requis').fadeIn();
    }
    else
    {
		$.ajax({
	
				type:"POST",
				url:urlWS,
				data:{authentication:"chessfemily",
					action:"member_add",
					name:name,
					last_name:last_name,
					email:email,
					password:password, 
					password_conf:password_conf,
					birthday:birthday,
					genre:genre,
					os:os,
					device_token:device_token},
				dataType:"json",
				success:function(data){
					//alert("DataSuccess : "+data.success);
					//console.log(data);
					if(data.success == 1){
                        console.log(data);
						  //$('.testlogin').html(' success connexion');
                            $('.email_existe').fadeOut();
						  $('.info_requis').fadeOut();
						  $('.inscritok').fadeIn();
						  $('.inscritok').fadeOut(4000);
						  //sessionStorage.setItem("identifiant", data.member.id);
						  //alert("Bienvenue à ChessFamily");
						  //window.location.href="home.html";
                        
					  }else if(data.error_msg == 'erreur_201:Sorry, email exist'){
                            $('.email_existe').fadeIn();
                        }else{
						  $('.info_requis').fadeIn();
                          console.log(data.error_msg);
					  }
					
				},
				error:function(e)
				{
					console.log(e.toString());
				}
			});
	}

   
    return false;
}

