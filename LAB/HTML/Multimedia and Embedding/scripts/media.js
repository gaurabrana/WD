var mediaElem = document.getElementById("my-media-element");
mediaElem.load();

var mediaElem = document.querySelector("video");
mediaElem.audioTracks.onaddtrack = function(event) {
  audioTrackAdded(event.track);
}