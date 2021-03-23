function toggleMenu() {
  let idd = document.getElementById("isaka");
  console.log(idd);

  if (idd.style.maxHeight == "0px") {
    idd.style.maxHeight = "160px";
  } else {
    idd.style.maxHeight = "0px";
  }
}

var videos = [
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    name: "Big Buck Bunny GTV",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    ],
    name: "ForBiggerFun GTV",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    ],
    name: "ForBiggerrides GTV",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    ],
    name: "Sintel",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    ],
    name: "SubaruOutback ",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    ],
    name: "Volkswagen Channel",
  },
  {
    sources: [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    ],
    name: "Elephant Dream",
  },
];

for (let i = 0; i < videos.length; i++) {
  let video = document.createElement("video");
  video.id = "video_player";

  document.body.append(video);
  video.src = "";
  video.src = videos[i].sources;
  video.addEventListener("click", playVideo);
}

function playVideo(e) {
  if (event.target.paused) {
    event.target.play();
  } else {
    event.target.pause();
  }
}
