import{j as e,c as n,l as g,m as f,C as b,P as j,A as l,I as c,a as o,n as t,k,O as y,x as N,b as C,M,R as z,y as S,r as w,s as p,e as B,g as d,i as u,h as _}from"../chunks/chunk-BO8V8g2I.js";/* empty css                      */const h=void 0,P=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],T=void 0,A=["JetBrainsMono-Thin_xLUk127hRt418Sona1UEw.woff2","JetBrainsMono-SemiBoldItalic_G8uxq7vi06POsP2-YONKg.woff2","JetBrainsMono-Medium_HNoAkWb7g_MRKN-NW4-m7.woff2","JetBrainsMono-MediumItalic_lRn405eMhJaFnRnsJ1XwW.woff2","JetBrainsMono-BoldItalic_xSHvi9Gx47ESuEmpCdEL4.woff2","JetBrainsMono-Light_vcSIniLNABK-O5vkBGhsf.woff2","JetBrainsMono-LightItalic_9x-epzL947_HapaUOInjA.woff2","JetBrainsMono-ExtraBoldItalic_R-sWDIPGfxKmJPIIMImsU.woff2","Quicksand-Bold_lle70Rk6T5mTYePgsVKA2.ttf","JetBrainsMono-ExtraBold_lZO8ORzjWBQcP7DGYLpH5.woff2","JetBrainsMono-SemiBold_0sJpgx4ishzCCJV39ifAG.woff2","JetBrainsMono-Regular_dzUjgxm8aUZXpNTMvc_UR.woff2","JetBrainsMono-ThinItalic_WPXnaPX-oKhTabDBPHQ9k.woff2","JetBrainsMono-ExtraLightItalic_-n3vDpdqtITwfVd8_hsST.woff2","JetBrainsMono-Bold_Rbep5cDRz8VBUDtbd5DPi.woff2","JetBrainsMono-Italic_pZVpoAW8C-NlDbf3UvzJl.woff2","Quicksand-SemiBold_Ycx36cJLRYOPDZV6hHqgs.ttf","JetBrainsMono-ExtraLight_804k6UNM6BzMpSbVVJjpc.woff2"],E=[],I=a=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element w-element-121",children:e.jsxs("div",{className:"w-element w-stack-wrap",children:[e.jsx("div",{className:"w-element w-banner-2",children:e.jsx("h1",{className:"w-element w-element-122",children:"STEVEMACADAMS"})}),e.jsx("div",{className:"w-element w-embed-section",children:e.jsx(n,{code:`<style>
  /* Scope everything so parent styles don't collide */
  .ws-anim { --bg:#000; }
  .ws-anim, .ws-anim * { box-sizing:border-box; }

  .ws-anim {
    background: var(--bg);
    isolation:isolate;            /* new stacking context */
  }

  .ws-anim .sticky-wrapper {
    position: relative;
    height: 200vh;                /* adjust for longer/shorter scroll */
    background: var(--bg);
  }

  .ws-anim .sticky-video {
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    background: var(--bg);
    z-index: 100;                 /* stay above the image/nav */
  }

  .ws-anim video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;            /* switch to 'contain' if you dislike cropping */
    background: var(--bg);
    display: block;
    pointer-events: none;
  }
</style>

<div class="ws-anim">
  <div class="sticky-wrapper" id="wsWrap">
    <div class="sticky-video">
      <video id="wsVid" preload="auto" muted playsinline poster="">
        <source src="https://ssmac19.github.io/pngseq/solv4v5render.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

<script>
  (function(){
    const vid  = document.getElementById('wsVid');
    const wrap = document.getElementById('wsWrap');

    const FPS = 24, FRAMES = 150, MAX = FRAMES - 1;
    let ticking = false, primed = false;

    function progress() {
      const rect = wrap.getBoundingClientRect();
      const start = scrollY + rect.top;
      const total = wrap.offsetHeight - innerHeight;
      const scrolled = Math.min(Math.max(scrollY - start, 0), Math.max(total,0));
      return total > 0 ? scrolled / total : 0;     // 0..1
    }

    function seek(t){
      if (typeof vid.fastSeek === 'function') {
        try { vid.fastSeek(t); return; } catch(e){}
      }
      vid.currentTime = t;
    }

    function update(){
      const p = progress();
      const frame = Math.min(MAX, Math.max(0, Math.round(p * MAX)));
      const t = frame / FPS;                         // exact frame time
      if (!isNaN(t)) seek(t);
      ticking = false;
    }

    async function prime(){
      if (primed) return;
      try {
        await vid.play();                            // quick play→pause primes decoder
        await new Promise(r => setTimeout(r, 60));
        vid.pause();
        seek(0.0001);
      } catch(e) {}
      primed = true;
    }

    vid.addEventListener('loadedmetadata', async ()=>{
      await prime();
      update();                                      // set initial frame
      addEventListener('scroll', ()=>{
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive:true });
      addEventListener('resize', update);
    });
  })();
<\/script>
`,executeScriptOnCanvas:!0,className:"w-html-embed w-html-embed-49"})})]})}),e.jsx(g,{children:e.jsx(f,{children:e.jsxs("div",{className:"w-element w-div",children:[e.jsx("div",{className:"w-element w-logo-1"}),e.jsx(b,{className:"w-navigation-menu w-navigation-menu-7",children:e.jsxs(j,{className:"w-menu-list w-menu-list-7",children:[e.jsx(l,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(c,{children:e.jsx(o,{href:"/",target:"_self",className:"w-link w-link-64",children:"werk"})})}),e.jsx(l,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(c,{children:e.jsx(o,{href:"/shurts",target:"_self",className:"w-link w-link-62",children:"stuff"})})}),e.jsx(l,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(c,{children:e.jsx(o,{href:"/about",target:"_self",className:"w-link w-link-63",children:"about"})})}),e.jsx(l,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(c,{children:e.jsx(o,{href:"/contact",target:"_self",className:"w-link w-link-74",children:"contact"})})}),e.jsx(t,{className:"w-box w-viewport-container-6",children:e.jsx(k,{className:"w-menu-viewport w-menu-viewport-7"})})]})}),e.jsxs(y,{open:!1,children:[e.jsx(N,{children:e.jsx(C,{className:"w-button w-button-34",children:e.jsx(n,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"/></svg>',className:"w-html-embed w-hamburger-menu-svg-1"})})}),e.jsx(M,{className:"w-dialog-overlay w-sheet-overlay-20",children:e.jsx(z,{className:"w-dialog-content w-sheet-content-20",children:e.jsxs("div",{className:"w-element w-element-7",children:[e.jsx("div",{className:"w-element w-spc-1"}),e.jsxs("div",{className:"w-element w-element-8",children:[e.jsx("a",{href:"/",className:"w-element w-werk",children:"werk"}),e.jsx("a",{href:"/shurts",className:"w-element w-stuff-1",children:"stuff"}),e.jsx("a",{href:"/contact",className:"w-element w-contact-7",children:"contact"}),e.jsxs("a",{href:"/about",className:"w-element w-about-11",children:["about",e.jsx("br",{}),""]})]}),e.jsx("div",{className:"w-element w-spc"}),e.jsx("div",{className:"w-element w-sos-wrap-1",children:e.jsxs(t,{className:"w-box w-sos-buttons-1",children:[e.jsx(n,{code:`<style>
/* --- sizes you can tweak --- */
:root{
  --soc-size: 40px;    /* circle size */
  --soc-icon: 18px;    /* icon size inside */
  --soc-gap: 12px;     /* spacing */
  --soc-bg: #fff;      /* white circle */
  --soc-ink: #111;     /* black icon/lines */
  --soc-border: rgba(0,0,0,.15); /* thin edge so it reads on white pages */
}

/* row */
.soc-buttons{
  display:flex; flex-wrap:wrap; gap:var(--soc-gap);
  justify-content:center; align-items:center;
}

/* static white pill */
.soc-btn{
  inline-size:var(--soc-size); block-size:var(--soc-size);
  display:inline-flex; align-items:center; justify-content:center;
  background: var(--soc-bg);
  color: var(--soc-ink);                /* icon/line color via currentColor */
  border: 1px solid var(--soc-border);
  border-radius: 999px;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  transition: none;                     /* no hover animations */
}

/* icon sizing */
.soc-btn svg, .soc-btn img{
  width: var(--soc-icon);
  height: var(--soc-icon);
  display: block;
}

/* normalize SVGs:
   - any filled shapes become currentColor (black)
   - any stroked shapes use currentColor (black)
   - preserve explicit 'none' values so outlines stay hollow */
.soc-btn svg [fill]:not([fill="none"]){ fill: currentColor !important; }
.soc-btn svg [stroke]:not([stroke="none"]){ stroke: currentColor !important; }

/* accessibility focus (subtle, visible on any bg) */
.soc-btn:focus-visible{
  outline: 2px solid #000; outline-offset: 2px;
}

/* lock sizes at WS breakpoints so panel overrides can’t resize them */
@media (max-width: 991px), (max-width: 767px), (max-width: 479px){
  .soc-btn{ inline-size:var(--soc-size) !important; block-size:var(--soc-size) !important; }
}
</style>
`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsx(t,{className:"w-box w-twitter-4",children:e.jsx(o,{target:"_blank",href:"https://x.com/qbccle",className:"w-link w-qbccle-3",children:e.jsx(n,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed w-html-embed-41 soc-btn"})})}),e.jsx(t,{className:"w-box w-instagram-4",children:e.jsx(o,{target:"_blank",href:"https://www.instagram.com/quarterbackclub",className:"w-link w-ig-3",children:e.jsx(n,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path>
  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed w-html-embed-42 soc-btn"})})}),e.jsx(t,{className:"w-box w-discord-8",children:e.jsx(o,{href:"https://discordapp.com/users/ssmacadams",target:"_blank",className:"w-link w-discord-9",children:e.jsx(n,{code:`<!-- Discord (outline + eyes), inherits color from parent -->
<svg viewBox="0 0 192 192" width="24" height="24" aria-hidden="true">
  <path d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
  <ellipse cx="71" cy="101" rx="13" ry="15" fill="currentColor"></ellipse>
  <ellipse cx="121" cy="101" rx="13" ry="15" fill="currentColor"></ellipse>
</svg>
`,executeScriptOnCanvas:!1,className:"w-html-embed w-html-embed-43 soc-btn"})})})]})})]})})})]})]})})}),e.jsxs("div",{className:"w-element w-element-123",children:[e.jsx(t,{className:"w-box w-kspacer",children:e.jsx(S,{src:"/assets/m2buck_smallSconnects_20g5fQloyoEi5pMu_AGyb.png",width:1024,height:1024,alt:"",className:"w-image w-image-121"})}),e.jsx(t,{className:"w-box w-krang-1",children:e.jsx("div",{className:"w-element w-element-124",children:e.jsx(t,{className:"w-box w-vidbox",children:e.jsx(w,{autoplay:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,url:"https://vimeo.com/566689735",showPreview:!0,className:"w-vimeo w-vimeo-513",children:e.jsx(p,{alt:"Vimeo video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image w-preview-image-1195"})})})})}),e.jsx(t,{className:"w-box w-uda1-10",children:e.jsx(t,{className:"w-box w-box-249",children:e.jsx(w,{url:"https://vimeo.com/1083059061",showPortrait:!1,showControls:!1,autoplay:!0,doNotTrack:!0,loop:!0,muted:!0,showPreview:!0,className:"w-vimeo w-vimeo-514",children:e.jsx(p,{alt:"Vimeo video preview image",sizes:"",optimize:!0,className:"w-preview-image w-preview-image-1196"})})})}),e.jsx(t,{className:"w-box w-st00pid-2",children:e.jsx(t,{className:"w-box w-vidstup-1",children:e.jsx(w,{url:"https://vimeo.com/1053479613",showPreview:!0,autoplay:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,className:"w-vimeo w-vimeo-515",children:e.jsx(p,{alt:"Vimeo video preview image",sizes:"100vw",optimize:!0,className:"w-preview-image w-preview-image-1197"})})})}),e.jsx(t,{className:"w-box w-dustw"})]})]}),V=({data:a})=>{const{system:s,resources:m,url:r}=a;return e.jsx(B.Provider,{value:{imageLoader:u,assetBaseUrl:d,resources:m,breakpoints:P,onError:console.error},children:e.jsx(I,{system:s},r)})},J=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),R=({data:a})=>{const{pageMeta:s}=a,{origin:m}=new URL(a.url);let r=s.socialImageUrl;s.socialImageAssetName&&(r=`${m}${u({src:`${d}/${s.socialImageAssetName}`})}`);const x=s.custom.some(i=>i.property==="twitter:card");return e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:s.title}),e.jsx("meta",{property:"og:title",content:s.title}),s.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:s.description}),e.jsx("meta",{property:"og:description",content:s.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),h,r&&e.jsx("meta",{property:"og:image",content:s.socialImageUrl}),h,s.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),s.custom.map(({property:i,content:v})=>e.jsx("meta",{property:i,content:v},i)),(s.socialImageAssetName!==void 0||s.socialImageUrl!==void 0)&&x===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),T,A.map(i=>e.jsx("link",{rel:"preload",href:`${d}${i}`,as:"font",crossOrigin:"anonymous"},i)),E.map(i=>e.jsx("link",{rel:"preload",href:`${d}${i}`,as:"image"},i))]})},H=Object.freeze(Object.defineProperty({__proto__:null,Head:R},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:_}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/landing/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:J}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/landing/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}}};export{D as configValuesSerialized};
