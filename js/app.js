// ===== STELE =====
function initStars() {
  var st = document.getElementById('stars');
  for (var i = 0; i < 80; i++) {
    var s = document.createElement('div'); s.className = 'star';
    var sz = Math.random() * 2.2 + 0.4;
    s.style.cssText = 'width:'+sz+'px;height:'+sz+'px;left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;--d:'+((Math.random()*3+2).toFixed(1))+'s;--o:'+(Math.random()*0.5+0.1).toFixed(2)+';animation-delay:'+(Math.random()*5).toFixed(1)+'s';
    st.appendChild(s);
  }
}

// ===== DROPDOWN =====
function toggleDropdown() {
  document.getElementById('dropBtn').classList.toggle('open');
  document.getElementById('dropMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var dd = document.getElementById('navDropdown');
  if (dd && !dd.contains(e.target)) {
    document.getElementById('dropBtn').classList.remove('open');
    document.getElementById('dropMenu').classList.remove('open');
  }
});

// ===== SCHIMBA MOD =====
function schimbaMod(mod) {
  modCurent = mod;
  var cfg = modConfig[mod];
  document.getElementById('dropLabel').textContent = cfg.label;
  document.getElementById('dropBtn').classList.remove('open');
  document.getElementById('dropMenu').classList.remove('open');

  document.querySelectorAll('.nav-dropdown-item').forEach(function(el) {
    el.classList.remove('active');
    if (el.textContent.trim().indexOf(cfg.label) > -1) el.classList.add('active');
  });

  var c = cfg.culoare;
  document.getElementById('picBody').setAttribute('fill', c);
  document.getElementById('navPic').setAttribute('fill', c);
  document.getElementById('picGlow').style.background = 'radial-gradient(ellipse,rgba('+hexToRgb(c)+',0.5) 0%,transparent 70%)';
  document.getElementById('hero').style.background = 'radial-gradient(ellipse at 50% 0%,rgba('+hexToRgb(c)+',0.15) 0%,transparent 55%)';
  document.getElementById('heroCta').style.background = 'linear-gradient(135deg,'+c+','+c+'cc)';
  document.getElementById('heroCta').style.boxShadow = '0 8px 25px rgba('+hexToRgb(c)+',0.4)';
  document.getElementById('picLabel').style.color = c;
  document.querySelector('.hero h1 em').style.color = c;
  document.getElementById('secTitle').innerHTML = cfg.secTitle;
  document.getElementById('secSub').innerHTML = cfg.secSub;
  document.getElementById('heroEm').textContent = cfg.heroEm;
  document.getElementById('heroSub').textContent = cfg.secSub;

  renderEpisoade(getEpisodesByMod(mod));
}

// ===== RENDER EPISOADE =====
function renderEpisoade(lista) {
  var epList = document.getElementById('epList');
  epList.innerHTML = '';

  lista.forEach(function(ep, i) {
    var id = 'ep' + i;
    var row = document.createElement('div');
    row.className = 'ep-row' + (ep.blocat ? ' locked' : '');

    var badgeHtml = ep.gratuit
      ? ' <span style="font-size:0.6rem;background:linear-gradient(135deg,#b39ddb,#7b5ea7);color:white;padding:0.15rem 0.55rem;border-radius:50px;font-weight:800;letter-spacing:0.06em">GRATUIT</span>'
      : '';

    var actionHtml = ep.blocat
      ? '<span class="ep-soon">⏳ În curând</span>'
      : '<button class="ep-play">&#9654;</button>';

    row.innerHTML =
      '<span class="ep-num">'+ep.num+'</span>'+
      '<div class="ep-info"><div class="ep-title">'+ep.titlu+badgeHtml+'</div><div class="ep-desc">'+ep.desc+'</div></div>'+
      '<span class="ep-dur">'+ep.dur+'</span>'+
      actionHtml;

    if (!ep.blocat) {
      row.querySelector('.ep-play').addEventListener('click', (function(title){
        return function(){ deschidePlayer(title, 'somn'); };
      })(ep.titlu));
    }

    epList.appendChild(row);

    if (!ep.blocat) {
      var ck = document.createElement('div');
      ck.className = 'checkin'; ck.id = 'ck'+id;
      ck.innerHTML =
        '<p class="checkin-q">Cum te-ai simțit după?</p>'+
        '<div class="checkin-emojis">'+
        '<button class="ck-btn" onclick="selectEmo(this,\'ck'+id+'\')">😌 Liniștit</button>'+
        '<button class="ck-btn" onclick="selectEmo(this,\'ck'+id+'\')">💙 Mai ușor</button>'+
        '<button class="ck-btn" onclick="selectEmo(this,\'ck'+id+'\')">🌙 Adormit</button>'+
        '<button class="ck-btn" onclick="selectEmo(this,\'ck'+id+'\')">🪬 Neutral</button>'+
        '</div>'+
        '<div class="ck-thanks" id="th'+id+'">Mulțumesc că mi-ai spus. 🌟</div>';
      epList.appendChild(ck);
    }
  });
}

function selectEmo(btn, ckId) {
  document.getElementById(ckId).querySelectorAll('.ck-btn').forEach(function(b){ b.classList.remove('sel'); });
  btn.classList.add('sel');
  var th = document.getElementById('th' + ckId.slice(2));
  if (th) th.classList.add('vis');
}

// ===== CHAT =====
var chatFlow = [
  {id:'varsta', q:'Ce vârstă ai? (aproximativ)', opts:['Sub 18 ani','18-25 ani','26-35 ani','36-50 ani','Peste 50 ani'], free:false},
  {id:'motiv', q:'Ce te-a adus aici? Spune-mi cu cuvintele tale.', opts:[], free:true, ph:'de ex: mă simt anxios, trec printr-o perioadă dificilă...'},
  {id:'disponibilitate', q:'Când ai fi disponibil pentru ședințe?', opts:['Dimineața','La prânz','După amiază','Seara','Weekend'], free:false},
  {id:'contact', q:'Cum preferi să te contacteze?', opts:['📧 Email','📱 WhatsApp'], free:false}
];
var chatStep = -1, chatData = {};

var AVATAR_SRC = document.getElementById('avatarB64') ? document.getElementById('avatarB64').dataset.src : '';

function getAvatar() {
  return '<div class="msg-av" style="overflow:hidden;padding:0"><img src="' + AVATAR_SRC + '" style="width:100%;height:100%;object-fit:cover;border-radius:50%"></div>';
}

function addMsg(text, tip) {
  var msgs = document.getElementById('chatMsgs');
  var d = document.createElement('div'); d.className = 'msg ' + (tip || 'pic');
  var av = tip === 'usr' ? '<div class="msg-av">👤</div>' : getAvatar();
  d.innerHTML = av + '<div class="msg-bub">'+text+'</div>';
  msgs.appendChild(d);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  var msgs = document.getElementById('chatMsgs');
  var d = document.createElement('div'); d.className = 'msg pic'; d.id = 'typing';
  d.innerHTML = getAvatar() + '<div class="msg-bub"><div class="typing-dots"><span></span><span></span><span></span></div></div>';
  msgs.appendChild(d); msgs.scrollTop = msgs.scrollHeight;
}

function hideTyping() { var t = document.getElementById('typing'); if (t) t.remove(); }

function startChat() {
  document.getElementById('chatOpts').style.display = 'none';
  nextStep();
}

function spuneMaiMulte() {
  document.getElementById('chatOpts').style.display = 'none';
  var msgs = [
    'Cristina e psihoterapeut licențiat — lucrează cu adulți și copii. 🌙',
    'Poți alege cum vrei să lucrați împreună — online prin video, față în față sau prin chat pe WhatsApp.',
    'O sesiune durează ~50 de minute. Prețul îl stabiliți împreună după primul contact.'
  ];
  var i = 0;
  function nextMsg() {
    if (i >= msgs.length) {
      var opts = document.getElementById('chatOpts');
      opts.style.display = 'flex';
      opts.innerHTML = '<button class="chat-opt" onclick="startChat()">Vreau să mă conecteze cu ea 🌙</button>';
      return;
    }
    showTyping();
    setTimeout(function(){
      hideTyping(); addMsg(msgs[i]); i++;
      setTimeout(nextMsg, 600);
    }, 900);
  }
  nextMsg();
}

function nextStep() {
  chatStep++;
  if (chatStep >= chatFlow.length) { trimiteMail(); return; }
  var step = chatFlow[chatStep];
  setTimeout(function(){
    showTyping();
    setTimeout(function(){
      hideTyping(); addMsg(step.q);
      if (step.opts.length > 0) {
        var opts = document.getElementById('chatOpts');
        opts.style.display = 'flex';
        opts.innerHTML = step.opts.map(function(o){
          return '<button class="chat-opt" onclick="selectOpt(\''+o.replace(/'/g,"\\'")+'\'">'+o+'</button>';
        }).join('');
        document.getElementById('chatInputRow').style.display = 'none';
      } else {
        document.getElementById('chatInputRow').style.display = 'flex';
        document.getElementById('chatInp').placeholder = step.ph || '';
        document.getElementById('chatInp').value = '';
        document.getElementById('chatOpts').style.display = 'none';
      }
    }, 900);
  }, 200);
}

function selectOpt(val) {
  document.getElementById('chatOpts').style.display = 'none';
  addMsg(val, 'usr');
  chatData[chatFlow[chatStep].id] = val;
  nextStep();
}

function trimite() {
  var val = document.getElementById('chatInp').value.trim();
  if (!val) return;
  document.getElementById('chatInputRow').style.display = 'none';
  addMsg(val, 'usr'); chatData[chatFlow[chatStep].id] = val; nextStep();
}

function trimiteMail() {
  showTyping();
  setTimeout(function(){
    hideTyping();
    addMsg('Perfect! Trimit acum introducerea către terapeuta mea. 🌟');
    var contact = chatData.contact || '';
    var mesaj = 'Buna ziua, am completat formularul pe picaudio.app:\n\nVarsta: '+(chatData.varsta||'-')+'\nCe m-a adus: '+(chatData.motiv||'-')+'\nDisponibilitate: '+(chatData.disponibilitate||'-');
    setTimeout(function(){
      if (contact.indexOf('WhatsApp') > -1) {
        window.location.href = 'https://wa.me/40770303729?text=' + encodeURIComponent(mesaj);
      } else {
        var subj = encodeURIComponent('Cerere terapie prin PIC - '+(chatData.varsta||''));
        var body = encodeURIComponent(mesaj + '\n\nTrimis prin picaudio.app');
        window.location.href = 'mailto:pauzade3minute@gmail.com?subject='+subj+'&body='+body;
      }
      document.getElementById('chatOpts').style.display = 'none';
      document.getElementById('chatInputRow').style.display = 'none';
      document.getElementById('chatOk').classList.add('vis');
    }, 1200);
  }, 1000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  initStars();
  renderEpisoade(epsAdult);
});
