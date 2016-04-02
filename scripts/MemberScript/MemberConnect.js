
$(document).ready( function () {
	$("#connexionForm").submit( function() {
		ConnectMember(0);
		return false; 
	});
});                  
/*
0:normale
1:Facebook
2:GoogleID
*/

function ConnectMember(ConnexionCase){
	var urlWS = "http://api.chessfamily.net/api/query";
	
	if(ConnexionCase==0){
		var login = document.getElementById("login").value;
		var pass = document.getElementById("pass").value;
		var Remember = document.getElementById("remeber_me").checked;
		var DataString = {
			authentication:"chessfemily",
			action:"member_connect",
			email:login,
			password:pass
			};
	}else if(ConnexionCase==1){
		
		var fbID = document.getElementById("FacebookID").value;
		var DataString = {
			authentication:"chessfemily",
			action:"member_connect",
			facebook_id:fbID
			};
		
	}else if(ConnexionCase==2){
		var fbID = document.getElementById("GooglePlusID").value;
		alert(document.getElementById("GooglePlusID").value);
		var DataString = {
			authentication:"chessfemily",
			action:"member_connect",
			google_id:login
			};
	}

   	
	$.ajax({
	  	type:"POST",
		url:urlWS,
		data:DataString,
		dataType:"json",
	  beforeSend: function(){
		  $('.testlogin').hide();
		  $('.load_connexion').show();
	  },
	  success:function(result){
		  if(result.success == 1){
			  
			  if(Remember == true){
				  localStorage.setItem("identifiantLocal", result.member.id);
			  }else{
				  sessionStorage.setItem("identifiant", result.member.id);
			  }
			  //subscribeToParse(result.member.id);
			  window.location.href="home.html";
		  }else{
			  if(ConnexionCase==1){//facebook
				  if(result.error_msg == "erreur_200:Sorry, no record found"){
					  
					  //AddMember();
					  
				  }
			  }else if(ConnexionCase==2){//google Plus
			  	
			  }else{
			  	$('.testlogin').html("<center><b><font color='red'>Veuillez vérifier votre login/mot de passe</font></b></center></br>");
			  }
		  }
	  },
	  complete: function(){
		  $('.load_connexion').hide();
		  $('.testlogin').show();
	  }
	});
 
}

 /**
function subscribeToParse(UserID){
	var appId = "0Ej5SNPfwkMoz57PlZatSp4nbk8DuBwXUqjYbe0V";
	var clientKey = "FUEv83u49TkaZMpNxGgd1cFLMQEnh3u9DaUZRJen";
	var JSKey = "M7S10w3YfIYidPc0pi2pEzCJNjDVhoAr2KDvpj2g";
	//alert("subscribeToParse  - Start");
	parsePlugin.initialize(appId, clientKey, function() {
		//alert("initialize");
    parsePlugin.subscribe('SampleChannel', function() {
		//alert("subscribe");
        parsePlugin.getInstallationId(function(id) {
				//alert("getInstallationId : "+id);
           
             * Now you can construct an object and save it to your own services, or Parse, and corrilate users to parse installations
             * 
             var install_data = {
                installation_id: id,
                channels: ['SampleChannel']
             }
             

        }, function(e) {
            alert('error');
        });

    }, function(e) {
        alert('error');
    });

}, function(e) {
    alert('error');
});
	
	
}
function SetInstallationItemByID(appKey,JSKey,installationID, memberID){
	
	Parse.initialize(appKey, JSKey);
	
	var query = new Parse.Query(Parse.Installation);
	
	query.equalTo("installationId", installationID);
	
	query.first({
		success: function (Installation) {
			
			Installation.save(null, {
				success: function (Installation) {
					
					Installation.set('member_id', memberID);
					Installation.save();
					
				}
			});
		}
	});
}

*
             */