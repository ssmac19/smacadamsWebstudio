import{j as e,c as m,e as p,g as r,i as n,h as u}from"../chunks/chunk-BO8V8g2I.js";/* empty css                      */const l=void 0,f=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],v=void 0,y=[],g=[],h=o=>e.jsxs("body",{className:"w-element",children:[e.jsx("div",{className:"w-element w-trigger-div"}),e.jsx(m,{code:`


<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tod’s Talkin</title>
<style>
  body {
    font-family: -apple-system, "Helvetica Neue", sans-serif;
    background: #000;
    color: #fff;
    text-align: center;
    overflow-x: hidden;
    margin: 0;
  }

  section {
    padding: 100vh 5vw;
  }

  h1, h2 {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease-out, transform 0.9s ease-out;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .delay { transition-delay: 0.2s; }
  .delay2 { transition-delay: 0.4s; }

  .boom {
    font-size: clamp(2.5rem, 10vw, 6rem);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0;
    transform: scale(0.7);
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.3, 1.2);
  }
  .boom.visible {
    opacity: 1;
    transform: scale(1);
  }

  .video iframe {
    width: 90vw;
    aspect-ratio: 16/9;
    border-radius: 12px;
    margin-top: 5vh;
    box-shadow: 0 0 30px rgba(255,255,255,0.2);
  }

  section::after {
    content: ". . . scroll scroll . . .";
    display: block;
    opacity: 0.3;
    margin-top: 50vh;
    font-style: italic;
  }
</style>


<section class="tod">
  <h1 class="reveal">Tod’s Talkin</h1>
  <h2 class="reveal delay">Football</h2>
  <h2 class="reveal delay2">Baseball</h2>
  <h2 class="reveal delay2">and Basketball</h2>
  <h1 class="boom">Tod’s Talkin SPORTS!</h1>

  <div class="video">
    <iframe src="https://player.vimeo.com/video/1125755369?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>
  </div>
</section>

<script>
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.reveal, .boom').forEach(el => observer.observe(el));
<\/script>


`,executeScriptOnCanvas:!0,className:"w-html-embed"})]}),x=({data:o})=>{const{system:t,resources:i,url:s}=o;return e.jsx(p.Provider,{value:{imageLoader:n,assetBaseUrl:r,resources:i,breakpoints:f,onError:console.error},children:e.jsx(h,{system:t},s)})},b=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),j=({data:o})=>{const{pageMeta:t}=o,{origin:i}=new URL(o.url);let s=t.socialImageUrl;t.socialImageAssetName&&(s=`${i}${n({src:`${r}/${t.socialImageAssetName}`})}`);const c=t.custom.some(a=>a.property==="twitter:card");return e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,s&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:d})=>e.jsx("meta",{property:a,content:d},a)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&c===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),v,y.map(a=>e.jsx("link",{rel:"preload",href:`${r}${a}`,as:"font",crossOrigin:"anonymous"},a)),g.map(a=>e.jsx("link",{rel:"preload",href:`${r}${a}`,as:"image"},a))]})},w=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/todstestin/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/todstestin/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:w}}};export{P as configValuesSerialized};
