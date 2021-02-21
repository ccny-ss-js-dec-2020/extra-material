$('#contact-me-form').on('submit', function(e){
	//make sure all of the inputs are filled in
	//make sure if they use single quotes that they're escaped
	e.preventDefault();

	const name = $("#name-input").val();
	const email = $("#email-input").val();
	const message = $("#message-input").val();

		var emailPostBuddy = {
			name: name,
			email: email,
			message: message
		};

		// setting up this client-side post to communicate with the post that we created on the server-side
		$.ajax({
			method: 'POST',
			url: '/api/email',
			data: JSON.stringify(emailPostBuddy),
			contentType: 'application/json',
			success:function(res){
				console.log(res)
			}
		});

});
