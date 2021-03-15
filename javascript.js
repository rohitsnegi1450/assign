$(document).ready(function(){
	$(".add").click(function(){
		$('form').append("<div>"+$('.dvdata').html()+"</div>");
	});

	$("form").on('click','.fileupload',function(){
		$(this).next().find('input').click();

	});
	$('form').on('change','input[type="file"]',function(){
		$(this).parent().siblings().first().val(this.files[0].name);
	});
		
	$('form').on("click",".anchor",function(){
		$(this).parent().not(".dvdata").remove();
			
	});		
});