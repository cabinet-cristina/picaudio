// ===== CONFIGURARE MODURI =====
var modConfig = {
  eu:         { label:'Pic cel mare',    culoare:'#F0C060', secTitle:'🌙 Pic de somn — <em>Șapte seri liniștite</em>',   secSub:'Călătorii audio cu PIC, create de un psihoterapeut. Pentru adulți (18+).', heroEm:'cum te simți azi',     audioSrc:'audio/somn1.mp3' },
  mic:        { label:'Pic cel mic',     culoare:'#FFB7C5', secTitle:'🌙 Pic de somn — <em>Șapte seri de poveste</em>',  secSub:'Povești audio cu PIC, pentru copii între 4 și 6 ani.',                     heroEm:'PIC te așteaptă',    audioSrc:'audio/somnmic1.mp3' },
  mijlociu:   { label:'Pic cel mijlociu',culoare:'#80e8b0', secTitle:'🌙 Pic de somn — <em>Șapte aventuri de seară</em>',secSub:'Aventuri audio cu PIC, pentru copii între 7 și 12 ani.',                   heroEm:'gata de aventură?',  audioSrc:'audio/somnmijlociu1.mp3' },
  adolescent: { label:'Pic adolescent',  culoare:'#64c8f0', secTitle:'🌙 Pic de somn — <em>Șapte seri pentru tine</em>', secSub:'Pauze audio cu PIC, pentru adolescenți între 13 și 18 ani.',               heroEm:'o pauză doar a ta',  audioSrc:'audio/somnadolescent1.mp3' }
};

// ===== EPISOADE ADULȚI =====
var epsAdult = [
  { num:'S 01', titlu:'Pic de odihnă',        desc:'Pentru serile în care adormi mai greu | O seară la mare',            dur:'22 min', gratuit:true,  blocat:false },
  { num:'S 02', titlu:'Pic de eliberare',      desc:'Tot ce ai dus azi | Pădure de noapte',                               dur:'3 min',  gratuit:false, blocat:true },
  { num:'S 03', titlu:'Pic sub cerul liber',   desc:'Când ai prea multe gânduri | Sub cerul înstelat',                    dur:'3 min',  gratuit:false, blocat:true },
  { num:'S 04', titlu:'Pic de siguranță',      desc:'Când te pui în pat și simți neliniște | Locul tău sigur',            dur:'3 min',  gratuit:false, blocat:true },
  { num:'S 05', titlu:'Pic de pe lună',        desc:'Când ești prea obosit ca să închizi ochii | La lumina lunii',        dur:'3 min',  gratuit:false, blocat:true },
  { num:'S 06', titlu:'Pic de vis',            desc:'Când somnul e la un pas | Un loc doar pentru tine',                  dur:'3 min',  gratuit:false, blocat:true },
  { num:'S 07', titlu:'Pic de recunoștință',   desc:'Un lucru bun din ziua asta | La o cafea de seară',                   dur:'3 min',  gratuit:false, blocat:true }
];

// ===== EPISOADE COPII MICI =====
var epsMic = [
  { num:'S 01', titlu:'Pic, cel mai rotund din Picopia', desc:'Undeva între lună și stele, acolo unde noaptea miroase a vanilie', dur:'8 min', gratuit:true,  blocat:false },
  { num:'S 02', titlu:'Vox face mofturi',                desc:'Supă de pietricele cu petale',                                     dur:'8 min', gratuit:false, blocat:true },
  { num:'S 03', titlu:'Pic stinge lumina',               desc:'Când luminile se sting',                                           dur:'8 min', gratuit:false, blocat:true },
  { num:'S 04', titlu:'Pic se supără',                   desc:'Două picături supărate',                                           dur:'8 min', gratuit:false, blocat:true },
  { num:'S 05', titlu:'Patru lăbuțe',                   desc:'Urme mici pe strada cea mai îngustă din Picopia',                  dur:'8 min', gratuit:false, blocat:true },
  { num:'S 06', titlu:'Pic și Bof',                     desc:'Patru lăbuțe',                                                     dur:'8 min', gratuit:false, blocat:true },
  { num:'S 07', titlu:'Pic la Picopia Kindergarten',    desc:'Prima zi la grădiniță',                                            dur:'8 min', gratuit:false, blocat:true }
];

// ===== EPISOADE COPII MIJLOCII =====
var epsMijlociu = [
  { num:'S 01', titlu:'Pic de aventură | Prima zi la Zola School', desc:'Toți știu ce fac',                                    dur:'11 min', gratuit:true,  blocat:false },
  { num:'S 02', titlu:'Pic de stele | Cel mai bun',                desc:'Elmor, globul albastru',                              dur:'11 min', gratuit:false, blocat:true },
  { num:'S 03', titlu:'Pic din nor | Dor de cineva',               desc:'Un dor care nu știe unde să stea',                    dur:'11 min', gratuit:false, blocat:true },
  { num:'S 04', titlu:'Pic de cald | Când te simți lăsat deoparte',desc:'La masă',                                            dur:'11 min', gratuit:false, blocat:true },
  { num:'S 05', titlu:'Pic de pe lună | Când îți e rușine',       desc:'Nu vreau să știe nimeni',                             dur:'11 min', gratuit:false, blocat:true },
  { num:'S 06', titlu:'Pic de vis | Când nu știi ce vrei să fii', desc:'Vox desenează, Riri decide, și PIC se întreabă',      dur:'11 min', gratuit:false, blocat:true },
  { num:'S 07', titlu:'Pic de dimineață | Când începi ziua bine', desc:'Un început',                                          dur:'11 min', gratuit:false, blocat:true }
];

// ===== EPISOADE ADOLESCENȚI =====
var epsAdolescent = [
  { num:'S 01', titlu:'Pic de noapte | Planeta Solen',   desc:'Când ziua apasă și nu știi de ce',                          dur:'7 min', gratuit:true,  blocat:false },
  { num:'S 02', titlu:'Pic de spațiu | Planeta Koru',    desc:'Să fii înconjurat de toți și să nu te vadă nimeni',         dur:'7 min', gratuit:false, blocat:true },
  { num:'S 03', titlu:'Pic de liniște | Planeta Mira',   desc:'Când același gând se întoarce iar și iar',                  dur:'7 min', gratuit:false, blocat:true },
  { num:'S 04', titlu:'Pic de forță | Planeta Dura',     desc:'Fiecare pas costă. Și mergi totuși.',                       dur:'7 min', gratuit:false, blocat:true },
  { num:'S 05', titlu:'Pic de mâine | Planeta Exo',      desc:'Când nu știi ce urmează și ți-e frică să nu știi',          dur:'7 min', gratuit:false, blocat:true },
  { num:'S 06', titlu:'Pic de claritate | Planeta Neva', desc:'Un moment mic de lumină prin ceață',                        dur:'7 min', gratuit:false, blocat:true },
  { num:'S 07', titlu:'Pic de respiro | Planeta Velo',   desc:'Să stai jos și să lași ziua să treacă',                     dur:'7 min', gratuit:false, blocat:true }
];

function getEpisodesByMod(mod) {
  if (mod === 'eu') return epsAdult;
  if (mod === 'mic') return epsMic;
  if (mod === 'mijlociu') return epsMijlociu;
  if (mod === 'adolescent') return epsAdolescent;
  return epsAdult;
}
