var buttonPostfix = "-btn";
var buttonFor = function(x){
	return x+buttonPostfix;
};

$("section").hide();
$("#intro").show();
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
		
		$(lastClickedButton).removeClass('navbar-element-active').addClass('navbar-element');
		lastClickedButton = "#"+this.id;
		$(lastClickedButton).removeClass('navbar-element').addClass('navbar-element-active');
	});
});
