$(document).ready(function() {

	$("#contact").validate ({

		rules: {				
			name: {

				required: true,
				minlength: 3

			},

			Email: {

			},

			subject: {

			},

			message: {

			},
	
		},
	})

});

