
function MemberSetPhoto() {
	$('.load_upload_photo_member').show();
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
	params.action="member_set_photo";
	params.member_id=id_utilisateur;
	
	options.params = params;
	var ft = new FileTransfer();
	ft.upload(imgSrc, urlWS, win, fail, options);
    return false;
}
function win(r) {
	$('.load_upload_photo_member').hide();
	$('#updatePhotoOK').fadeIn(500).delay(2000).fadeOut(500);
	/*alert("Code = " + r.responseCode);
	alert("Response = " + r.response);
	alert("Sent = " + r.bytesSent);*/
}

function fail(error) {
	$('.load_upload_photo_member').hide();
	alert("upload error source " + error.source);
	alert("upload error target " + error.target);
}

