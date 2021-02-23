$(document).ready(function(){

	$('#first-post').on('keypress', function(e){
		if(e.key === "Enter"){
			var obj = {
				"name": $('#first-post').val()
			}

			$.ajax({
				method: 'POST',
				url: '/first-post',
				data: JSON.stringify(obj),
				contentType: 'application/json'
			}).done(function(res, textStatus, jqXHR){

					$('div').eq(0).text(res.name)
					$('#first-post').val("");
			}).fail(function (jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus)
				console.log(errorThrown)
			})
		}
	})

});
