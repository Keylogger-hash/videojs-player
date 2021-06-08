var player = videojs('video-player',{
  autoplay:'muted',
  controls:true,
  loop:true,
  playbackRates:[0.5,1,1.5],
  plugins:{
    hotkeys:{
      enableMOdifiersForNumber:false,
      seekStep:2
    }
  }

})
