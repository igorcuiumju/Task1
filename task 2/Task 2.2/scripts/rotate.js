$(function(){
  $('.rectangle-button').on('click', function(e){
  	debugger;
  	var degrees = Math.random() * 360;
  	var rotate = 'rotate(' + degrees + 'deg)';
  	$('.rectangle-rotate').css({
  		'webkit-transition': '-webkit-transform 0.3s ease-in',
      'moz-transition': '-moz-transform 0.3s ease-in',
      'ms-transform': rotate, /* IE 9 */
      'webkit-transform': rotate, /* Chrome, Safari, Opera */
      'transform': rotate,	
    });
  })
});