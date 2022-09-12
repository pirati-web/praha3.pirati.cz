document.addEventListener(
	"DOMContentLoaded",
	function(event) {
		$(".topic").on(
			"click",
			function(event) {
				$(".topic").removeClass("topic-selected");
				$(".topic-content").css("display", "none");
				
				const element = $(event.currentTarget);
				
				if (element.hasClass("topic-selected")) {
					element.removeClass("topic-selected");
				} else {
					element.addClass("topic-selected");
					
					$(`#${element[0].id}-content`).css("display", "block");
				}
			}
		);
	}
);
