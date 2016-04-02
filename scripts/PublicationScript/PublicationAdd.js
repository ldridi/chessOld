/*
function AddPublication() {
    var urlWS="http://api.chessfamily.net/api/query";
    var status = document.getElementById("statusinput").value;
    var video = document.getElementById("lienvideo").value;
    var web = document.getElementById("lienweb").value;
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
	
		if(status == ''){
				$('#messagee').fadeIn(500);
					$('#messagee').fadeOut(1000);
		}else{

			$.ajax({
				type:"POST",
				url:urlWS,
				data:{authentication:"chessfemily",
					action:"member_publication_add",
					member_id:id_utilisateur,
					formatted_text:status,
					video_link:video,
					web_link:web,
					visibility:1
				},
				dataType:"json",
				success:function(result){	
					$('#message').fadeIn(500);
					$('#message').fadeOut(1000);
					$('#statusinput').val('');
					$('#lienvideo').val('');
					$('#lienweb').val('');
					location.reload();
				}
			});
		}
}
*/

function MemberPublication_AddPhoto(publicationID) {
    var urlWS = "http://api.chessfamily.net/api/query";
	var imgSrc = document.getElementById('image').src;
	
	if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
	
	//alert(imgSrc.substr(imgSrc.lastIndexOf('/')+1));
    options = new FileUploadOptions();
	options.fileKey = "photo";
	options.fileName = imgSrc.substr(imgSrc.lastIndexOf('/')+1);
	options.mimeType = "image/jpeg";
	
	var params = new Object();
	params.authentication="chessfemily";
	params.action="member_publication_add_photo";
	params.member_id=id_utilisateur;
	params.publication_id=publicationID;
	
	options.params = params;
	var ft = new FileTransfer();
	ft.upload(imgSrc, urlWS, win, fail, options);
    return false;
}
function win(r) {
	alert("Code = " + r.responseCode);
	alert("Response = " + r.response);
	alert("Sent = " + r.bytesSent);
}

function fail(error) {
	alert("upload error source " + error.source);
	alert("upload error target " + error.target);
}

function AddPublication() {
    var urlWS="http://api.chessfamily.net/api/query";
    var status = document.getElementById("statusinput").value;
    var video = document.getElementById("lienvideo").value;
    var web = document.getElementById("lienweb").value;
    if(localStorage.getItem("identifiantLocal")!= null){
		var id_utilisateur = localStorage.getItem("identifiantLocal");//4;
	}else if(sessionStorage.getItem("identifiant")!= null){
		var id_utilisateur = sessionStorage.getItem("identifiant");//4;
	}	
	
		if(status == ''){
				$('#messagee').fadeIn(500);
					$('#messagee').fadeOut(1000);
		}else{

			$.ajax({
	
				type:"POST",
				url:urlWS,
				data:{authentication:"chessfemily",
					action:"member_publication_add",
					member_id:id_utilisateur,
					formatted_text:status,
					video_link:video,
					web_link:web,
					visibility:1
				},
				dataType:"json",
				beforeSend: function(){
					  $('.load_upload_photo_publication').show();
				  },
				success:function(result){
					
					MemberPublication_AddPhoto(result.member_publication.id);
					$('#message').fadeIn(500);
					$('#message').fadeOut(1000);
					$('#statusinput').val('');
					$('#lienvideo').val('');
					$('#lienweb').val('');
				},
				complete: function(){
					  $('.load_upload_photo_publication').hide();
				  }
			});

		}
	

   
    
}

