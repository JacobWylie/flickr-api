// Button click event for #tag selections
$('button').click(function() {
	$('button').removeClass("selected");
	$(this).addClass("selected");
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var tag = $(this).text()
	tag += ",berlin"
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
}); // End Button Click Event