# PIC · picaudio.app

Pauza de Trei Minute — ghidaje audio terapeutice în română.

## Structură fișiere

```
picaudio/
├── index.html          ← pagina principală (HTML curat)
├── netlify.toml        ← configurare Netlify
├── css/
│   └── style.css       ← tot designul
├── js/
│   ├── data.js         ← episoade + configurare moduri
│   ├── emotii.js       ← configurare PIC per emoție
│   ├── player.js       ← player audio fullscreen
│   └── app.js          ← logică: stele, moduri, chat, render
├── audio/
│   ├── somn1.mp3           ← Pic cel mare S01 (GRATUIT)
│   ├── somnmic1.mp3        ← Pic cel mic S01 (GRATUIT)
│   ├── somnmijlociu1.mp3   ← Pic cel mijlociu S01 (GRATUIT)
│   └── somnadolescent1.mp3 ← Pic adolescent S01 (GRATUIT)
```

## Cum adaugi un episod nou

1. Înregistrezi audio
2. Urci fișierul în folderul `audio/`
3. Deschizi `js/data.js`
4. Găsești lista corectă (epsAdult, epsMic, etc.)
5. Schimbi `blocat:true` în `blocat:false` și adaugi `src`

## Stack

- Frontend: HTML/CSS/JS pur
- Hosting: Netlify → picaudio.app (Cloudflare)
- Audio: folderul audio/ (viitor: Cloudflare R2)
- Plăți: Stripe (viitor)
- DB: Supabase (viitor)
