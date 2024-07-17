// Carregar a API do YouTube IFrame Player
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Cria a variável do player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video1', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Função para rastrear eventos do vídeo
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    fbq('trackCustom', 'VideoPlay', {video_id: 'CQues6RH-j4'});
  } else if (event.data == YT.PlayerState.PAUSED) {
    fbq('trackCustom', 'VideoPause', {video_id: 'CQues6RH-j4'});
  } else if (event.data == YT.PlayerState.ENDED) {
    fbq('trackCustom', 'VideoComplete', {video_id: 'CQues6RH-j4'});
  }
}
