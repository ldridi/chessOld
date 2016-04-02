
function MemberSetting() {
    var DefaultLanguage = document.getElementById("DefaultLanguage").value;
	//alert(document.getElementById("distance").value);
    if(document.getElementById("distance").value!=""){var distance = document.getElementById("distance").value;}else{var distance = "15";}
	if(document.getElementById("xday").value!=""){var xday = document.getElementById("xday").value;}else{var xday = "15";}
    //var xday = document.getElementById("xday").value;

    localStorage.setItem("distance", distance);
    localStorage.setItem("DefaultLanguage", DefaultLanguage);
    localStorage.setItem("xday", xday);
    localStorage.setItem("xdayheader", xday);
    location.reload();
}

