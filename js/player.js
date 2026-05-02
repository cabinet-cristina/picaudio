// ===== PLAYER FULLSCREEN =====
var modCurent = 'eu';

function deschidePlayer(title, emo) {
  var e = emoConf[emo || curEmo];
  var pl = document.getElementById('fsPlayer');
  pl.style.background = e.fsBg;
  pl.classList.add('open');
  document.getElementById('fsLbl').textContent = e.fsLbl;
  document.getElementById('fsPicBody').setAttribute('fill', e.body);
  document.getElementById('fsEyes').innerHTML = e.eyes;
  document.getElementById('fsMouth').setAttribute('d', e.mouth);
  document.getElementById('fsTitle').textContent = title;
  document.getElementById('fsGlow').style.background = 'radial-gradient(ellipse,' + e.glow + ' 0%,transparent 70%)';
  document.getElementById('fsPic').style.filter = 'drop-shadow(0 12px 32px ' + e.glow + ')';
  document.body.style.overflow = 'hidden';

  var audio = document.getElementById('fsAudio');
  audio.src = modConfig[modCurent].audioSrc;
  history.pushState({player: true}, '');
  audio.load();
}

window.addEventListener('popstate', function() {
  var pl = document.getElementById('fsPlayer');
  if (pl.classList.contains('open')) inchidePlayer();
});

function inchidePlayer() {
  document.getElementById('fsPlayer').classList.remove('open');
  document.getElementById('fsAudio').pause();
  document.getElementById('fsPlayBtn').innerHTML = '&#9654;';
  document.body.style.overflow = '';
}

function togglePlay() {
  var audio = document.getElementById('fsAudio');
  var btn = document.getElementById('fsPlayBtn');
  if (audio.paused) {
    audio.play().then(function(){ btn.innerHTML = '&#9646;&#9646;'; }).catch(function(){ btn.innerHTML = '&#9654;'; });
  } else {
    audio.pause();
    btn.innerHTML = '&#9654;';
  }
}

function skipAudio(s) {
  var a = document.getElementById('fsAudio');
  a.currentTime = Math.max(0, Math.min(a.duration||0, a.currentTime+s));
}

function seekAudio(e) {
  var a = document.getElementById('fsAudio');
  if (!a.duration) return;
  var r = e.currentTarget.getBoundingClientRect();
  a.currentTime = ((e.clientX - r.left) / r.width) * a.duration;
}

function fmt(s) {
  var m = Math.floor(s/60);
  return m + ':' + (Math.floor(s%60) < 10 ? '0' : '') + Math.floor(s%60);
}

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('fsAudio');
  audio.addEventListener('timeupdate', function() {
    if (this.duration) {
      document.getElementById('fsFill').style.width = (this.currentTime/this.duration*100)+'%';
      document.getElementById('fsCrt').textContent = fmt(this.currentTime);
    }
  });
  audio.addEventListener('loadedmetadata', function() {
    document.getElementById('fsDur').textContent = fmt(this.duration);
  });
  audio.addEventListener('ended', function() {
    document.getElementById('fsPlayBtn').innerHTML = '&#9654;';
  });
});
