/**
  * Modified from this artice on treehouse
  * http://blog.teamtreehouse.com/building-custom-controls-for-html5-videos
*/

window.onload = function() {
	// Video
	var video = document.getElementById("video");
	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
	// Sliders
	var seekBar = document.getElementById("seek-bar");

	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
	if (video.paused == true) {
		// Play the video
		video.play();
		// Add the paused class
		playButton.classList.add('paused');
	  } else {
		// Pause the video
		video.pause();
		// Remove the paused class 
		playButton.classList.remove('paused');
	  }
	});

	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
	  if (video.muted == false) {
		// Mute the video
		video.muted = true;
		// Add the mute class
		muteButton.classList.add('mute');
	  } else {
		// Unmute the video
		video.muted = false;
		// Remove the mute class
		muteButton.classList.remove('mute');
	  }
	});
	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);
		// Update the video time
		video.currentTime = time;
	});
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;
		// Update the slider value
		seekBar.value = value;
	});
		// Pause the video when the slider handle is being dragged
		// Add paused to the play button
		seekBar.addEventListener("mousedown", function() {
		video.pause();
		playButton.classList.remove('paused');
	});

	// Play the video when the slider handle is dropped
	// Remove paused from the play button
	seekBar.addEventListener("mouseup", function() {
		video.play();
		playButton.classList.add('paused');
	});
}
