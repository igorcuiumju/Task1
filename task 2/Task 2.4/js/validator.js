
$(document).ready(function() {
    $("#submit").click(function(){
 
	var name = $("#inName").val();
	var email = $("#inEmail").val();
	var subject = $("#inSubject").val();
	var message = $("#inMessage").val();

	
	if (name.length >= 3) {
		$('#inName').addClass("valid");
		$("#inName").removeClass("error");
	}
	else {
		$('#inName').addClass("error");
		$("#inName").removeClass("valid");
	}
	
	if (email.length > 0 && validateEmail(email)) {
		$('#inEmail').addClass("valid");
		$("#inEmail").removeClass("error");
	}
	else {
		$('#inEmail').addClass("error");
		$("#inEmail").removeClass("valid");
	}

	if (subject.length >= 10) {
		$('#inSubject').addClass("valid");
		$("#inSubject").removeClass("error");
	}
	else {
		$('#inSubject').addClass("error");
		$("#inSubject").removeClass("valid");
	}
	
	if (message.length >= 10 && message.length < 201) {
		$('#inMessage').addClass("valid");
		$("#inMessage").removeClass("error");
	}
	else {
		$('#inMessage').addClass("error");
		$("#inMessage").removeClass("valid");
	}
	


function validateEmail(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

   }); 
});
