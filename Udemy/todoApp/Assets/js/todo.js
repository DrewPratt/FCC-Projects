// todo app JS file
let trashIcon = "<span><i class='delete fa fa-trash'></i></span>"


//gray out completed
$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
})

//delete button
$('ul').on('click', 'span', function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
})

//capture input text & create new todo
$('input[type = "text"]').on('keypress', function (event) {
	if (event.which === 13) {
		let todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li>' + trashIcon + ' ' + todoText + '</li>');
	}

})

$('.fa-plus').click(function () {
	$('input[type = "text"]').fadeToggle();
})
