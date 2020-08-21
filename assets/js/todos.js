//Check off specific todos by clicking

$("ul").on("click","li", function(){
	$(this).toggleClass("completed")
})

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove()
	})

	event.stopPropagation()
})

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		todoText = $(this).val()
		if(todoText !== ""){
			$("ul").append('<li><span><i class="fas fa-trash"></i></span> '+todoText+"</li>")
			$(this).val("")
		}
	}
})

$(".fa-edit").on("click", function(){
	$("input[type='text']").fadeToggle()
})