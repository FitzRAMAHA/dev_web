// POO

class Video {
	constructor (thumbnailSource, videoTitle, channelLogo, channelName, views) {
		this.thumbnailSource = thumbnailSource;
		this.videoTitle = videoTitle;
		this.channelLogo = channelLogo;
		this.channelName = channelName;
		this.views = views;
	}
}



let video1 = new Video ('./media/bestOfCelebFeud.JPG',
			'Best Of Celebrity Family Feud', 
			'./media/familyFeudLogo.JPG',
			'Family Feud', 
			6700000);

			
let video2 = new Video ('./media/bestOfCelebFeud.JPG',
			'Best Of', 
			'./media/familyFeudLogo.JPG',
			'Family ', 
			6700000);

// const videos = [
// 	video1, video2, video1, video1
// ];

const videos = [];
function displayVideos(videos) {
	// videos.forEach(video => displayVideoItem(video))
	if (videos instanceof Array) {
		videos.forEach(video => displayVideoItem(video))
	}
}


function displayVideoItem(video) {
	const htmlTag = document.getElementById('home')
	const html = htmlTag.innerHTML;
	htmlTag.innerHTML +=
	`<li class='box'>
		<img src=${video.thumbnailSource}>
			<div class='description'>
				<img src=${video.channelLogo} class='logo'>
				<div class='text-below'>
					<p>${video.videoTitle}</p>
					<p>${video.channelName}</p>
					<p>${video.views} spectateurs</p>
					<p class='live-button'>ACTUELLEMENT EN DIRECT</p>
				</div>
			</div>
	</li>`;
}

displayVideos(videos)


$(document).ready(function() {
	alert('jQuery is ready ^^');
	// All jQuery code here ^^
});