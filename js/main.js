let flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
let tag;
let flickrOptions = {};
const $searchField = $('#search');
const $submitButton = $('#submit');

function displayPhotos(data) {
		var photoHTML = '<ul>';
		$.each( data.items, function(i, photo) {
			var image = (photo.media.m).replace('_m.jpg', '_b.jpg');
			photoHTML += '<li class="grid-25 tablet-grid-50">';
			photoHTML += `<a href="${image}" data-lightbox="image" class="image">`;
			photoHTML += `<img src="${photo.media.m}"></a></li>`;
		});
		photoHTML += '</ul>';
		$('#photos').html(photoHTML);
		$searchField.prop("disabled", false);
		$submitButton.attr("disabled", false).val("Search");
	}

// Button click event for #tag selections
$('button').click(function() {
	tag = $(this).text();
	$searchField.attr('placeholder', tag);
	tag += ",berlin,blackandwhite";
	flickrOptions = {
		tags: tag,
		format: "json"
	}
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);
}); // End Button Click Event

// Form search event for #tag selections
$('form').submit(function(evt) {
	evt.preventDefault();
	$searchField.prop("disabled", true);
	$submitButton.attr("disabled", true).val("searching...");
	tag = $searchField.val();
	tag += ",berlin,black and white";
	flickrOptions = {
		tags: tag,
		format: "json"
	}
	$.getJSON(flickrAPI, flickrOptions, displayPhotos);

}); // End Form Search Event

// Lightbox
lightbox.option({
})


























