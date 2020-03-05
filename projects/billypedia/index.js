/* global $ _ opspark */

$(document).ready(function(){
	$.getJSON('data.json', function (data){
		let topData = data.discography.topRated;
		let recData = data.discography.recordings;
		let billyData = data.images.billy;
		let riderData = data.rider;
		var billyI=0;
		$('#header-top-rated').append($('<div id="image-container-top-rated" class="image-container">')
			.append($('<img id="top-rated-image" class="image">').attr("src", topData[0].art)));
		topData.map(x =>$('#list-top-rated')
			.append($('<li>')
				.attr("class", "top-rated")
				.attr("click-val", x.title.toLowerCase().replace(/ /g,"-"))
				.text(x.title)
			)
		);
		$('#sidebar').append($('<section id="section-recordings">')
			.append($('<div id="image-container-recording" class="image-container">')
				.append($('<img id="recording-image" class="image">')
					.attr("src", recData[0].art)
				)
			)
			.append($('<ul id="list-recordings" class="list-recordings">'))
		);
		recData.map(x =>$('#list-recordings')
			.append($('<li class="recording">')
				.attr("click-val", x.title.toLowerCase().replace(/ /g, "-")
				).append($('<div class="title">').text("Title: "+x.title)
				).append($('<div class="artist">').text("Artist: "+x.artist)
				).append($('<div class="release">').text("Release: "+x.release)
				).append($('<div class="year">').text("Year: "+x.year))
			)
		);
		$('#image-container-billy').on("click", function(){
			if(billyI>=3){billyI=0;	$('#image-billy').attr("src", billyData[billyI]);}
			else{billyI++; $('#image-billy').attr("src", billyData[billyI]);}
		});
		$('.top-rated').on("click", function(){
			var imageURL = "images/album/"+$(this).attr('click-val')+".jpg";
			$('#top-rated-image').attr("src", imageURL);
		});
		$('.recording').on("click", function(){
			var imageURL = "images/album/"+$(this).attr('click-val')+".jpg";
			$('#recording-image').attr("src", imageURL);
		});
		$('#bId').append($('<div class="rider">').append($('<table>').append($('<tbody>'))));
		riderData.map(x =>$('tbody')
			.append($('<tr>').append($('<td>').text(x.type)).append($('<td>').text(x.desc))
			)
		);
	}) // YOUR CODE ABOVE HERE //
	.fail(function(){console.log('getJSON on discography failed!');});
});