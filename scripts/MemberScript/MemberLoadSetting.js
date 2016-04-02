

	function loadSettgin(){
		$('#distance').val(localStorage.getItem("distance"));
		$('#DefaultLanguage').val(localStorage.getItem("DefaultLanguage"));
		if(localStorage.getItem("xday")!=""){$('#xday').val(localStorage.getItem("xday"))}else{$('#xday').val("15");};
		$('#xdayheader').html(localStorage.getItem("xdayheader"));

		
	}
	

