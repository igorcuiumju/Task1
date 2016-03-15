$(document).ready(function() {


});

function onButtonSend() {
	var txt = $("#text").val().toUpperCase();

	console.log(txt.split(''));
	$("#raspuns").val(txt.split('').reverse());
}