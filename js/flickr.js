// Button click event for #tag selections
$('button').click(function() {
	$('button').removeClass("selected");
	$(this).addClass("selected");
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var tag = $(this).text();
	tag += ",berlin,black,white";
	var flickrOptions = {
		tags: tag,
		format: "json"
	};
	function displayPhotos(data) {
		var photoHTML = '<ul>';
		$.each( data.items, function(i, photo) {
			photoHTML += '<li class="grid-25 tablet-grid-50">';
			photoHTML += '<a href="' + photo.link + '" class="image">';
			photoHTML += '<img src="' + photo.media.m + '"></a></li>';
		});
		photoHTML += '</ul>';
		$('#photos').html(photoHTML);
	}
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
}); // End Button Click Event

// Form search event for #tag selections
$('form').submit(function(evt) {
	evt.preventDefault();
	var $searchField = $('#search');
	var $submitButton = $('#submit');

	$searchField.prop("disabled", true);
	$submitButton.attr("disabled", true).val("searching...");
	var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var tag = $searchField.val();
	tag += ",berlin,black,white";
	var flickrOptions = {
		tags: tag,
		format: "json"
	};
	function displayPhotos(data) {
		var photoHTML = '<ul>';
		$.each( data.items, function(i, photo) {
			photoHTML += '<li class="grid-25 tablet-grid-50">';
			photoHTML += '<a href="' + photo.link + '" class="image">';
			photoHTML += '<img src="' + photo.media.m + '"></a></li>';
		});
		photoHTML += '</ul>';
		$('#photos').html(photoHTML);
		$searchField.prop("disabled", false);
		$submitButton.attr("disabled", false).val("Search");
	}
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
}); // End Form Search Event