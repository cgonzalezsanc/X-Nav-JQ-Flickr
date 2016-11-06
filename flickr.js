function add_images(tag) {
	var url_api = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + tag +"&tagmode=any&format=json&jsoncallback=?";//Al añadir callback=? se trata como jsonp
	$.getJSON(url_api).done(function(data) {
		$.each(data.items, function(i, item) {
			var img = "<img src='" + item.media.m + "'>";
			$("#imagenes").after(img);
		});
	});
}

$(document).ready(function() {
	var tag = "fuenlabrada";
	add_images(tag);
	$("#boton").click(function() {
		tag = $("input").val();
		add_images(tag);
	});
});
