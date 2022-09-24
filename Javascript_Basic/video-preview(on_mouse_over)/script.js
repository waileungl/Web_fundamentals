var playVideo = document.querySelector("#catVideo")
function play() {
    playVideo.play();
}
function pause() {
    playVideo.pause();
}
playVideo.addEventListener('mouseover', play);
playVideo.addEventListener('mouseout', pause);