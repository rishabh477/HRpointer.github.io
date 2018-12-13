$(document).ready(function(){
	var checkPath= window.location.pathname;
	$(".nav li").each(function(){
		if($(this).attr('href')==checkPath){
			$(this).addClass("active");
		}
		$(this).removeClass("active");
	})
	$('.toggle_link').on('click',function(){
		var showpanel=$(this).attr('rel');
		$('.arrow-left').html('<i class="fa fa-caret-down" aria-hidden="true"></i>');
		
	})
})