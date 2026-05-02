// ===== CONFIGURARE EMOTII =====
var emoConf = {
  neutru: {
    body:'#F0C060', mouth:'M76 130Q100 146,124 130',
    glow:'rgba(240,192,96,0.5)', bg:'rgba(120,90,20,0.18)',
    c1:'#F0C060', c2:'#c49020',
    label:'sunt aici', em:'cum te simți azi',
    fsBg:'radial-gradient(ellipse at 50% 40%,#3d2e00 0%,#0f0a00 70%)',
    fsLbl:'✨ Sunt aici',
    eyes:'<circle cx="74" cy="100" r="18" fill="#2a1a00"/><circle cx="74" cy="100" r="13" fill="#3a2500"/><circle cx="79" cy="94" r="6" fill="white"/><circle cx="72" cy="102" r="2.5" fill="white" opacity="0.55"/><line x1="74" y1="82" x2="74" y2="75" stroke="#2a1a00" stroke-width="2.5" stroke-linecap="round"/><line x1="65" y1="85" x2="62" y2="78" stroke="#2a1a00" stroke-width="2" stroke-linecap="round"/><line x1="83" y1="85" x2="86" y2="78" stroke="#2a1a00" stroke-width="2" stroke-linecap="round"/><circle cx="126" cy="100" r="18" fill="#2a1a00"/><circle cx="126" cy="100" r="13" fill="#3a2500"/><circle cx="131" cy="94" r="6" fill="white"/><circle cx="124" cy="102" r="2.5" fill="white" opacity="0.55"/><line x1="126" y1="82" x2="126" y2="75" stroke="#2a1a00" stroke-width="2.5" stroke-linecap="round"/><line x1="117" y1="85" x2="114" y2="78" stroke="#2a1a00" stroke-width="2" stroke-linecap="round"/><line x1="135" y1="85" x2="138" y2="78" stroke="#2a1a00" stroke-width="2" stroke-linecap="round"/>',
    extras:''
  },
  somn: {
    body:'#b39ddb', mouth:'M76 130Q100 146,124 130',
    glow:'rgba(179,157,219,0.45)', bg:'rgba(61,43,122,0.22)',
    c1:'#b39ddb', c2:'#7b5ea7',
    label:'somn liniștit', em:'un somn odihnitor',
    fsBg:'radial-gradient(ellipse at 50% 40%,#2d1a5e 0%,#0a0518 70%)',
    fsLbl:'🌙 Somn liniștit',
    eyes:'<path d="M56 100Q74 114,92 100" stroke="#2d1060" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="65" y1="102" x2="62" y2="94" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="74" y1="104" x2="74" y2="96" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="83" y1="102" x2="86" y2="94" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="59" y1="99" x2="55" y2="92" stroke="#2d1060" stroke-width="2" stroke-linecap="round"/><line x1="89" y1="99" x2="93" y2="92" stroke="#2d1060" stroke-width="2" stroke-linecap="round"/><path d="M108 100Q126 114,144 100" stroke="#2d1060" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="117" y1="102" x2="114" y2="94" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="126" y1="104" x2="126" y2="96" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="135" y1="102" x2="138" y2="94" stroke="#2d1060" stroke-width="2.5" stroke-linecap="round"/><line x1="111" y1="99" x2="107" y2="92" stroke="#2d1060" stroke-width="2" stroke-linecap="round"/><line x1="141" y1="99" x2="145" y2="92" stroke="#2d1060" stroke-width="2" stroke-linecap="round"/>',
    extras:'<text x="148" y="58" font-size="16" fill="white" opacity="0.5" font-weight="bold">z</text><text x="160" y="42" font-size="12" fill="white" opacity="0.35" font-weight="bold">z</text>'
  },
  tristete: {
    body:'#64c8f0', mouth:'M76 138Q100 126,124 138',
    glow:'rgba(100,200,240,0.45)', bg:'rgba(41,121,160,0.18)',
    c1:'#64c8f0', c2:'#2979a0',
    label:'tristețe blândă', em:'momentele grele',
    fsBg:'radial-gradient(ellipse at 50% 40%,#0d2a40 0%,#020810 70%)',
    fsLbl:'💙 Tristețe',
    eyes:'<path d="M58 104Q74 116,90 104" stroke="#0d4a6e" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="66" y1="106" x2="64" y2="97" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><line x1="74" y1="108" x2="74" y2="99" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><line x1="82" y1="106" x2="84" y2="97" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><path d="M57 90Q74 84,91 90" stroke="#4a9abf" stroke-width="3" stroke-linecap="round" fill="none"/><path d="M110 104Q126 116,142 104" stroke="#0d4a6e" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="118" y1="106" x2="116" y2="97" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><line x1="126" y1="108" x2="126" y2="99" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><line x1="134" y1="106" x2="136" y2="97" stroke="#0d4a6e" stroke-width="2.5" stroke-linecap="round"/><path d="M109 90Q126 84,143 90" stroke="#4a9abf" stroke-width="3" stroke-linecap="round" fill="none"/>',
    extras:'<path d="M70 118Q68 130,71 136" stroke="#aaddff" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.9"/><ellipse cx="71" cy="139" rx="4" ry="5.5" fill="#aaddff" opacity="0.72"/>'
  },
  fericire: {
    body:'#ff8c3a', mouth:'M66 128Q100 150,134 128',
    glow:'rgba(255,140,58,0.5)', bg:'rgba(224,90,0,0.18)',
    c1:'#ff8c3a', c2:'#e05a00',
    label:'fericire autentică', em:'a celebra bucuria',
    fsBg:'radial-gradient(ellipse at 50% 40%,#3d1a00 0%,#0f0500 70%)',
    fsLbl:'🧡 Fericire',
    eyes:'<path d="M56 100Q74 88,92 100" stroke="#5a2d00" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="64" y1="97" x2="61" y2="88" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="74" y1="94" x2="74" y2="85" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="84" y1="97" x2="87" y2="88" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="57" y1="100" x2="53" y2="92" stroke="#5a2d00" stroke-width="2" stroke-linecap="round"/><line x1="91" y1="100" x2="95" y2="92" stroke="#5a2d00" stroke-width="2" stroke-linecap="round"/><path d="M108 100Q126 88,144 100" stroke="#5a2d00" stroke-width="3.5" stroke-linecap="round" fill="none"/><line x1="116" y1="97" x2="113" y2="88" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="126" y1="94" x2="126" y2="85" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="136" y1="97" x2="139" y2="88" stroke="#5a2d00" stroke-width="2.5" stroke-linecap="round"/><line x1="109" y1="100" x2="105" y2="92" stroke="#5a2d00" stroke-width="2" stroke-linecap="round"/><line x1="143" y1="100" x2="147" y2="92" stroke="#5a2d00" stroke-width="2" stroke-linecap="round"/>',
    extras:'<text x="34" y="64" font-size="18" fill="white" opacity="0.5">★</text><text x="152" y="54" font-size="14" fill="white" opacity="0.38">★</text>'
  },
  anxietate: {
    body:'#80e8b0', mouth:'M84 132Q100 140,116 132',
    glow:'rgba(128,232,176,0.45)', bg:'rgba(46,125,94,0.18)',
    c1:'#80e8b0', c2:'#2e7d5e',
    label:'anxietate, respiră', em:'a liniști mintea',
    fsBg:'radial-gradient(ellipse at 50% 40%,#0a2e1a 0%,#020f05 70%)',
    fsLbl:'💚 Anxietate',
    eyes:'<circle cx="74" cy="100" r="20" fill="#0d3d28"/><circle cx="74" cy="100" r="15" fill="#0d4a32"/><circle cx="80" cy="93" r="7" fill="white"/><circle cx="72" cy="103" r="3" fill="white" opacity="0.5"/><line x1="74" y1="80" x2="74" y2="72" stroke="#0d3d28" stroke-width="2.5" stroke-linecap="round"/><line x1="64" y1="83" x2="61" y2="76" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="84" y1="83" x2="87" y2="76" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="56" y1="89" x2="52" y2="83" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="92" y1="89" x2="96" y2="83" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><circle cx="126" cy="100" r="20" fill="#0d3d28"/><circle cx="126" cy="100" r="15" fill="#0d4a32"/><circle cx="132" cy="93" r="7" fill="white"/><circle cx="124" cy="103" r="3" fill="white" opacity="0.5"/><line x1="126" y1="80" x2="126" y2="72" stroke="#0d3d28" stroke-width="2.5" stroke-linecap="round"/><line x1="116" y1="83" x2="113" y2="76" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="136" y1="83" x2="139" y2="76" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="108" y1="89" x2="104" y2="83" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/><line x1="144" y1="89" x2="148" y2="83" stroke="#0d3d28" stroke-width="2" stroke-linecap="round"/>',
    extras:'<path d="M158 54L162 44L166 54" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.45"/>'
  },
  furie: {
    body:'#FF3B30', mouth:'M84 132Q100 122,116 132',
    glow:'rgba(255,59,48,0.45)', bg:'rgba(200,30,20,0.18)',
    c1:'#FF3B30', c2:'#c0392b',
    label:'furie, hai s-o transformăm', em:'a transforma furia',
    fsBg:'radial-gradient(ellipse at 50% 40%,#3d0800 0%,#0f0200 70%)',
    fsLbl:'❤️ Furie',
    eyes:'<circle cx="74" cy="102" r="18" fill="#3d0000"/><circle cx="74" cy="102" r="13" fill="#4a0000"/><circle cx="80" cy="96" r="5" fill="white"/><circle cx="72" cy="104" r="2" fill="white" opacity="0.45"/><path d="M56 84Q74 92,92 84" stroke="#cc2200" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="126" cy="102" r="18" fill="#3d0000"/><circle cx="126" cy="102" r="13" fill="#4a0000"/><circle cx="132" cy="96" r="5" fill="white"/><circle cx="124" cy="104" r="2" fill="white" opacity="0.45"/><path d="M108 84Q126 92,144 84" stroke="#cc2200" stroke-width="5" stroke-linecap="round" fill="none"/>',
    extras:''
  }
};

var curEmo = 'neutru';

function hexToRgb(hex) {
  var r = parseInt(hex.slice(1,3),16);
  var g = parseInt(hex.slice(3,5),16);
  var b = parseInt(hex.slice(5,7),16);
  return r+','+g+','+b;
}

function schimbaEmotie(nume) {
  if (nume === curEmo) return;
  curEmo = nume;
  var e = emoConf[nume];
  document.getElementById('picBody').setAttribute('fill', e.body);
  document.getElementById('navPic').setAttribute('fill', e.body);
  document.getElementById('picEyes').innerHTML = e.eyes;
  document.getElementById('picMouth').setAttribute('d', e.mouth);
  document.getElementById('picExtras').innerHTML = e.extras || '';
  document.getElementById('picGlow').style.background = 'radial-gradient(ellipse,' + e.glow + ' 0%,transparent 70%)';
  document.getElementById('picLabel').textContent = e.label;
  document.getElementById('picLabel').style.color = e.c1;
  document.getElementById('heroEm').textContent = e.em;
  document.querySelector('.hero h1 em').style.color = e.c1;
  document.getElementById('hero').style.background = 'radial-gradient(ellipse at 50% 0%,' + e.bg + ' 0%,transparent 55%)';
  var cta = document.getElementById('heroCta');
  cta.style.background = 'linear-gradient(135deg,' + e.c2 + ',' + e.c1 + ')';
  cta.style.boxShadow = '0 8px 25px ' + e.glow;
  document.querySelectorAll('.emo-btn').forEach(function(b) {
    b.classList.toggle('active', b.getAttribute('onclick').indexOf("'"+nume+"'") > -1);
  });
}
