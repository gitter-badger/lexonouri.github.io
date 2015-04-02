var buttonPostfix = "-btn";
var buttonFor = function(x){
	return x+buttonPostfix;
};

var initialSection = "#intro";
var initialButton = "#"+buttonFor(initialSection.substr(1));

$("section").hide();
$(initialSection).show();
$("#footer").show();

var lastClickedButton = "#"+buttonFor("intro");
var lastViewedSelection = "#intro";

$.each($('section'), function(){
	$("#"+buttonFor(this.id)).click(function(){
		var actualButton = this.id;
		var actualSection = actualButton.substr(0, actualButton.lastIndexOf(buttonPostfix));
		$(lastViewedSelection).hide();
		lastViewedSelection = "#"+actualSection;
		$(lastViewedSelection).show();

		if(lastClickedButton !== initialButton)
			$(lastClickedButton).removeClass('navbar-element-active').addClass('navbar-element');
		lastClickedButton = "#"+this.id;
		if(lastViewedSelection !== initialSection)
			$(lastClickedButton).removeClass('navbar-element').addClass('navbar-element-active active');
	});
});
