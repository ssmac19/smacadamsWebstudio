import{j as e,l as g,m as p,c as o,n as s,C as j,P as k,A as w,I as m,a as r,k as N,O as y,x as _,b as z,M as C,R as B,y as a,r as n,s as c,e as M,g as h,i as v,h as S}from"../chunks/chunk-BO8V8g2I.js";import{f as P}from"../chunks/chunk-Qjsdzf0r.js";import{n as I}from"../chunks/chunk-CKMi5HA9.js";/* empty css                      */const u=void 0,T=[{id:"d6gc-Cbv9CGEOZTxivFq0"},{id:"LuLHRV53cYuKjHHLbr-I3",maxWidth:991},{id:"YyuN4Hhlv43a5Ks8E2QY8",maxWidth:767},{id:"yg6mxd48QoV-ZmB-fENBB",maxWidth:479}],L=void 0,E=["JetBrainsMono-Thin_xLUk127hRt418Sona1UEw.woff2","JetBrainsMono-SemiBoldItalic_G8uxq7vi06POsP2-YONKg.woff2","JetBrainsMono-Medium_HNoAkWb7g_MRKN-NW4-m7.woff2","JetBrainsMono-MediumItalic_lRn405eMhJaFnRnsJ1XwW.woff2","JetBrainsMono-BoldItalic_xSHvi9Gx47ESuEmpCdEL4.woff2","JetBrainsMono-Light_vcSIniLNABK-O5vkBGhsf.woff2","JetBrainsMono-LightItalic_9x-epzL947_HapaUOInjA.woff2","JetBrainsMono-ExtraBoldItalic_R-sWDIPGfxKmJPIIMImsU.woff2","Quicksand-Bold_lle70Rk6T5mTYePgsVKA2.ttf","JetBrainsMono-ExtraBold_lZO8ORzjWBQcP7DGYLpH5.woff2","JetBrainsMono-SemiBold_0sJpgx4ishzCCJV39ifAG.woff2","JetBrainsMono-Regular_dzUjgxm8aUZXpNTMvc_UR.woff2","JetBrainsMono-ThinItalic_WPXnaPX-oKhTabDBPHQ9k.woff2","JetBrainsMono-ExtraLightItalic_-n3vDpdqtITwfVd8_hsST.woff2","JetBrainsMono-Bold_Rbep5cDRz8VBUDtbd5DPi.woff2","JetBrainsMono-Italic_pZVpoAW8C-NlDbf3UvzJl.woff2","Quicksand-SemiBold_Ycx36cJLRYOPDZV6hHqgs.ttf","JetBrainsMono-ExtraLight_804k6UNM6BzMpSbVVJjpc.woff2"],U=[],V=l=>e.jsxs(P,{className:"w-body w-body-16",children:[e.jsx(g,{children:e.jsxs(p,{children:[e.jsx(o,{code:`<style>
  :root {
    /* Variables for vavez-link */
    --vavez-link-color: white;
    --vavez-link-hover-weight: 800;
    --vavez-link-normal-weight: 200;
    --vavez-link-dimmed-weight: 100;
    --vavez-link-opacity: 1;
    --vavez-link-dimmed-opacity: 0.7;

    /* Variables for werk-link */
    --werk-link-color: black;
    --werk-link-hover-weight: 800;
    --werk-link-normal-weight: 200;
    --werk-link-dimmed-weight: 100;
    --werk-link-opacity: 1;
    --werk-link-dimmed-opacity: 0.7;
  }

  /* vavez-link styles */
  .vavez-link {
    color: var(--vavez-link-color);
    font-weight: var(--vavez-link-normal-weight);
    opacity: var(--vavez-link-opacity);
    transition: font-weight 0.3s, opacity 0.3s;
  }

  .vavez-link:hover {
    font-weight: var(--vavez-link-hover-weight);
    opacity: var(--vavez-link-opacity);
  }

  .vavez-link-container:hover .vavez-link:not(:hover) {
    font-weight: var(--vavez-link-dimmed-weight);
    opacity: var(--vavez-link-dimmed-opacity);
  }

  /* werk-link styles */
  .werk-link {
    color: var(--werk-link-color);
    font-weight: var(--werk-link-normal-weight);
    opacity: var(--werk-link-opacity);
    transition: font-weight 0.3s, opacity 0.3s;
  }

  .werk-link:hover {
    font-weight: var(--werk-link-hover-weight);
    opacity: var(--werk-link-opacity);
  }

  .werk-link-container:hover .werk-link:not(:hover) {
    font-weight: var(--werk-link-dimmed-weight);
    opacity: var(--werk-link-dimmed-opacity);
  }
</style>
`,className:"w-html-embed"}),e.jsx(s,{className:"w-box"}),e.jsx(s,{className:"w-box w-switcher-2",children:e.jsx(s,{className:"w-box w-eyeballslider-2 ",children:e.jsx(o,{code:`


    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toggle Switch</title>
    <style>
        /* Switch Container */
        .switch {
            --line: #505162; /* Line color */
            --circle-fill-light: #505162; /* Darker fill for circle in light mode */
            --circle-fill-dark: #1F1F1F; /* Dark fill for circle in dark mode */
            --circle-stroke-light: #F7F8FF; /* Light stroke for circle in light mode */
            --circle-stroke-dark: #F7F8FF; /* White stroke for circle in dark mode */
            --duration: 0.4s; /* Animation duration */
            cursor: pointer;
            display: inline-block;
        }

        .switch input {
            display: none; /* Hide the actual checkbox */
        }

        /* The capsule (track) */
        .switch input + div {
            position: relative;
            width: 56px; /* Length of the switch */
            height: 24px; /* Height to fit the circle */
            background-color: transparent; /* No background, set in Webstudio */
            border-radius: 12px; /* Rounded capsule */
            transition: background-color var(--duration) ease;
        }

        /* Thin line inside the capsule */
        .switch input + div::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 4px; /* Thin line height */
            background-color: var(--line); /* Line color */
            border-radius: 2px; /* Round the ends of the line */
            transform: translateY(-50%);
        }

        /* Circle (dot) */
        .switch input + div::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 24px;
            height: 24px;
            background-color: var(--circle-fill-light); /* Start with dark fill in light mode */
            border-radius: 50%;
            box-shadow: inset 0 0 0 6px var(--circle-stroke-light); /* Light stroke for light mode */
            transform: translate(0, -50%);
            transition: 
                transform var(--duration) ease,
                box-shadow var(--duration) ease, 
                background-color var(--duration) ease;
        }

        /* Inward-growing effect in dark mode */
        .switch input:checked + div::after {
            transform: translateX(32px) translateY(-50%); /* Slide the circle to the right */
            background-color: var(--circle-fill-dark); /* Dark fill for the circle */
            box-shadow: inset 0 0 0 12px var(--circle-stroke-dark); /* Inward-growing white stroke in dark mode */
        }

        /* Dark mode body background change */
        body.dark-mode {
            background-color: #262730; /* Dark background */
            color: white;
            transition: background-color var(--duration), color var(--duration);
        }
    </style>


    <div class="toggle-box">
        <label class="switch">
            <input type="checkbox" id="modeSwitch">
            <div></div>
        </label>
    </div>

    <script>
        // Function to apply dark or light mode
        function applyMode(mode) {
            if (mode === 'dark') {
                document.body.classList.add('dark-mode');
                document.getElementById('modeSwitch').checked = true;
            } else {
                document.body.classList.remove('dark-mode');
                document.getElementById('modeSwitch').checked = false;
            }
        }

        // On page load, check for stored mode
        document.addEventListener('DOMContentLoaded', function () {
            const storedMode = localStorage.getItem('mode') || 'light';
            applyMode(storedMode);
        });

        // Event listener for the toggle switch
        document.getElementById('modeSwitch').addEventListener('change', function () {
            const mode = this.checked ? 'dark' : 'light';
            localStorage.setItem('mode', mode);
            applyMode(mode);
        });
    <\/script>


`,className:"w-html-embed w-css-light-dark-modes-2"})})}),e.jsx(g,{children:e.jsx(p,{children:e.jsxs("div",{className:"w-element w-div",children:[e.jsx("div",{className:"w-element w-logo-1"}),e.jsx(j,{className:"w-navigation-menu w-navigation-menu-7",children:e.jsxs(k,{className:"w-menu-list w-menu-list-7",children:[e.jsx(w,{"data-ws-index":"0",className:"w-menu-item",children:e.jsx(m,{children:e.jsx(r,{href:"/",target:"_self",className:"w-link w-link-64",children:"werk"})})}),e.jsx(w,{"data-ws-index":"1",className:"w-menu-item",children:e.jsx(m,{children:e.jsx(r,{href:"/shurts",target:"_self",className:"w-link w-link-62",children:"stuff"})})}),e.jsx(w,{"data-ws-index":"3",className:"w-menu-item",children:e.jsx(m,{children:e.jsx(r,{href:"/about",target:"_self",className:"w-link w-link-63",children:"about"})})}),e.jsx(w,{"data-ws-index":"4",className:"w-menu-item",children:e.jsx(m,{children:e.jsx(r,{href:"/contact",target:"_self",className:"w-link w-link-74",children:"contact"})})}),e.jsx(s,{className:"w-box w-viewport-container-6",children:e.jsx(N,{className:"w-menu-viewport w-menu-viewport-7"})})]})}),e.jsxs(y,{open:!1,children:[e.jsx(_,{children:e.jsx(z,{className:"w-button w-button-34",children:e.jsx(o,{code:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="100%" height="100%" style="display: block;"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"/></svg>',className:"w-html-embed w-hamburger-menu-svg-1"})})}),e.jsx(C,{className:"w-dialog-overlay w-sheet-overlay-20",children:e.jsx(B,{className:"w-dialog-content w-sheet-content-20",children:e.jsxs("div",{className:"w-element w-element-7",children:[e.jsx("div",{className:"w-element w-spc-1"}),e.jsxs("div",{className:"w-element w-element-8",children:[e.jsx("a",{href:"/",className:"w-element w-werk",children:"werk"}),e.jsx("a",{href:"/shurts",className:"w-element w-stuff-1",children:"stuff"}),e.jsx("a",{href:"/contact",className:"w-element w-contact-7",children:"contact"}),e.jsxs("a",{href:"/about",className:"w-element w-about-11",children:["about",e.jsx("br",{}),""]})]}),e.jsx("div",{className:"w-element w-spc"}),e.jsx("div",{className:"w-element w-sos-wrap-1",children:e.jsxs(s,{className:"w-box w-sos-buttons-1",children:[e.jsx(o,{code:`<style>
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
`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsx(s,{className:"w-box w-twitter-4",children:e.jsx(r,{target:"_blank",href:"https://x.com/qbccle",className:"w-link w-qbccle-3",children:e.jsx(o,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed w-html-embed-41 soc-btn"})})}),e.jsx(s,{className:"w-box w-instagram-4",children:e.jsx(r,{target:"_blank",href:"https://www.instagram.com/quarterbackclub",className:"w-link w-ig-3",children:e.jsx(o,{code:`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor"></path>
  <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor"></path>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor"></path>
</svg>`,className:"w-html-embed w-html-embed-42 soc-btn"})})}),e.jsx(s,{className:"w-box w-discord-8",children:e.jsx(r,{href:"https://discordapp.com/users/ssmacadams",target:"_blank",className:"w-link w-discord-9",children:e.jsx(o,{code:`<!-- Discord (outline + eyes), inherits color from parent -->
<svg viewBox="0 0 192 192" width="24" height="24" aria-hidden="true">
  <path d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"></path>
  <ellipse cx="71" cy="101" rx="13" ry="15" fill="currentColor"></ellipse>
  <ellipse cx="121" cy="101" rx="13" ry="15" fill="currentColor"></ellipse>
</svg>
`,executeScriptOnCanvas:!1,className:"w-html-embed w-html-embed-43 soc-btn"})})})]})})]})})})]})]})})})]})}),e.jsxs(s,{className:"w-box w-container-17",children:[e.jsxs(s,{className:"w-box w-rules-concepts",children:[e.jsx(s,{className:"w-box w-silver",children:e.jsx(a,{src:"/assets/rules_silver_optimized_QYz4sPcC4cFFEfzKGZRDj.gif",width:1920,height:1080,className:"w-image w-silver-gif"})}),e.jsx(s,{className:"w-box w-rusty",children:e.jsx(a,{src:"/assets/rules_rusty_optimized_v21Qp-Jzq1vZfa0B6nY5k.gif",width:1920,height:1080,className:"w-image w-rusty-gif"})})]}),e.jsx(s,{className:"w-box w-sal-and-moondog",children:e.jsx(s,{className:"w-box w-box-88",children:e.jsx(a,{src:"/assets/sal_moon_50percent_fix_compress_RtcIAFQSMZ3rf1n_XN9Lc.jpg",width:2550,height:3300,className:"w-image w-image-31"})})}),e.jsxs(s,{className:"w-box w-urhere",children:[e.jsxs(s,{className:"w-box w-can-22-banner",children:[e.jsx(s,{className:"w-box w-box-91",children:e.jsx(a,{src:"/assets/cantri22_2E2u_Gb0ebDjKHxl8j6G6.svg",width:1080,height:1080,className:"w-image w-image-32"})}),e.jsx(s,{className:"w-box w-box-89",children:e.jsx(s,{className:"w-box w-box-90",children:e.jsx(I,{className:"w-text w-text-1",children:"Collective Arts Network (CAN) is a nonprofit organization serving the visual arts industry in and around Cleveland, providing a public forum for promotion, reporting, and reviews. Its primary projects are the quarterly print magazine CAN Journal, the website CANjournal.org, its blog, and the e-newsletter CAN Weekly. Additional projects include CAN Triennial, a regionally focused, curated art exhibit."})})})]}),e.jsx(s,{className:"w-box w-urhere-jose",children:e.jsx(s,{className:"w-box w-box-80",children:e.jsx(n,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563053",quality:"1080p",className:"w-vimeo w-vimeo-148",children:e.jsx(c,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_jose_thumb_Atb0EGqah5DvY8tvCGeCP.png",loading:"lazy",optimize:!0,className:"w-preview-image w-preview-image-265"})})})}),e.jsx(s,{className:"w-box w-urhere-ja",children:e.jsx(s,{className:"w-box w-box-78",children:e.jsx(n,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563036",quality:"1080p",className:"w-vimeo w-vimeo-146",children:e.jsx(c,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_ja_thumb_EGla_M2-5tQsyx1Nj076m.png",loading:"lazy",optimize:!0,className:"w-preview-image w-preview-image-263"})})})}),e.jsx(s,{className:"w-box w-urhere-myles",children:e.jsx(s,{className:"w-box w-box-77",children:e.jsx(n,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563084",quality:"1080p",className:"w-vimeo w-vimeo-145",children:e.jsx(c,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_mylesthumb_HXpQqxCsrFBV1jUDjQv4q.png",loading:"lazy",optimize:!0,className:"w-preview-image w-preview-image-262"})})})}),e.jsx(s,{className:"w-box w-urhere-mike",children:e.jsx(s,{className:"w-box w-box-79",children:e.jsx(n,{autoplay:!0,showPreview:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1010563070",quality:"1080p",className:"w-vimeo w-vimeo-147",children:e.jsx(c,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/urhere_mike_thumb_JWUIZwjivMSGbNFHRHKej.png",loading:"lazy",optimize:!0,className:"w-preview-image w-preview-image-264"})})})})]}),e.jsxs(s,{className:"w-box w-meowcats",children:[e.jsx(a,{src:"/assets/meow_frank_QoB5dbdf-3rZuSrTxvsJN.png",width:5e3,height:1920,className:"w-image w-frank"}),e.jsxs(s,{className:"w-box w-box-83",children:[e.jsx(a,{src:"/assets/meow_thumb_greyfuzz__x1fl3xfh7e3-EapNEAia.png",width:960,height:960,className:"w-image w-image-26"}),e.jsx(a,{src:"/assets/meow_thumb_oilyblack_3UQMrlk8Z_RZxDzW87QQ8.png",width:960,height:960,className:"w-image w-image-27"}),e.jsx(a,{src:"/assets/meow_thumb_orange_tP4Q1zG3-r1hJvLCWtc7o.png",width:960,height:960,className:"w-image w-image-25"})]}),e.jsx(a,{src:"/assets/meow_ollie_OjUbv7YvLSxL7e2GlUsij.png",width:5e3,height:1921,className:"w-image w-micro"})]}),e.jsxs(s,{className:"w-box w-bl00dz",children:[e.jsx(a,{src:"/assets/bloods2_compressed_XEDfHoTB0D8BfPEV0x1EB.jpg",width:960,height:540,className:"w-image w-image-28"}),e.jsx(a,{src:"/assets/bloods1_compressed_dAdaIQ9NnXS5Pg3sHlaHn.jpg",width:960,height:540,className:"w-image w-image-29"})]}),e.jsx(s,{className:"w-box w-bloodbook",children:e.jsxs(s,{className:"w-box w-box-86",children:[e.jsx(s,{className:"w-box w-box-84",children:e.jsx(a,{src:"/assets/bloodbook_1compressed_Vh44ZIRw6uPxo80oEXTVX.jpg",width:1632,height:1224,className:"w-image"})}),e.jsx(s,{className:"w-box w-box-85",children:e.jsx(a,{src:"/assets/bloodbook_2compressed_by4mGL5mpr1OmHT7yKDLm.gif",width:720,height:404,className:"w-image w-image-30"})})]})}),e.jsx(s,{className:"w-box w-xmas-leg",children:e.jsx(s,{className:"w-box w-box-87",children:e.jsx(n,{quality:"1080p",showPreview:!0,autoplay:!0,doNotTrack:!0,loop:!0,muted:!0,showPortrait:!1,showControls:!1,url:"https://vimeo.com/1009324676",className:"w-vimeo w-vimeo-149",children:e.jsx(c,{alt:"Vimeo video preview image",sizes:"100vw",src:"/assets/legthumbhqcompressed_wHWQWDVOBj7jXL7BZQKUa.png",optimize:!0,loading:"lazy",className:"w-preview-image w-preview-image-266"})})})}),e.jsxs(s,{className:"w-box w-wrasslin",children:[e.jsx(s,{className:"w-box w-box-139",children:e.jsx(a,{src:"/assets/rickrudepants_compress_Z0MsaEDXoEcD4UbCxbM7U.jpg",width:1664,height:2048,className:"w-image w-image-50"})}),e.jsx(s,{className:"w-box w-box-140",children:e.jsx(a,{src:"/assets/paulbearer_compress_SqtqgFmwv3CIIuN-Xs6mT.jpg",width:1200,height:1278,className:"w-image w-image-41"})}),e.jsx(s,{className:"w-box w-box-141",children:e.jsx(a,{src:"/assets/razorramont_compress_Zis4GLQT4aaJ6nQmXUfEl.jpg",width:1664,height:2048,className:"w-image w-image-43"})})]}),e.jsx(s,{className:"w-box w-worm-babies",children:e.jsx(a,{src:"/assets/v2-worms-1400_NFLowsrQsbzg1IiIl8gNV.jpg",width:1400,height:1102,className:"w-image w-image-44"})}),e.jsxs(s,{className:"w-box w-brew",children:[e.jsxs(s,{className:"w-box w-box-142",children:[e.jsx(a,{src:"/assets/brewbox1_-pglMxwIBU66sywJjk32s.png",width:600,height:615,className:"w-image w-image-46"}),e.jsx(a,{src:"/assets/brewbox2_0UQHL5zwQ3HIFnUNbsjaw.png",width:600,height:615,className:"w-image w-image-45"})]}),e.jsx(s,{className:"w-box w-box-143",children:e.jsx(a,{src:"/assets/brewbox3_Xjwijs0zfr05NT5Oin6GF.png",width:1360,height:566,className:"w-image w-image-47"})})]}),e.jsxs(s,{className:"w-box w-autumn-lanterns",children:[e.jsx(a,{src:"/assets/hedgehog_still_jdseRo4mou-lUrqd2jIa9.png",width:960,height:960,className:"w-image w-hedgehog"}),e.jsx(a,{src:"/assets/snail_still_Lkt-evijqJaom454h8_CS.png",width:960,height:960,className:"w-image w-pumpkinsnail"}),e.jsx(a,{src:"/assets/owl_still_FQ013ea_wqAxWMatYqwBX.png",width:960,height:960,className:"w-image w-owl"})]}),e.jsx(s,{className:"w-box w-walterandzoob",children:e.jsxs(s,{className:"w-box w-box-144",children:[e.jsx(a,{src:"/assets/walter700_ez5BPViA8X_PW_KPDEwol.png",width:700,height:700,className:"w-image w-image-48"}),e.jsx(a,{src:"/assets/zoob700_22tOBc8Pf01inW4-aSffC.png",width:700,height:700,className:"w-image w-image-49"})]})})]}),e.jsx(s,{className:"w-box"}),e.jsx(g,{children:e.jsx(p,{children:e.jsx(s,{className:"w-box w-code-footy",children:e.jsx(s,{className:"w-box w-box-206",children:e.jsx(s,{className:"w-box w-arrow",children:e.jsx(r,{href:"/",target:"_self",className:"w-link w-link-68 footy-link",children:e.jsx(o,{code:`<!--?xml version="1.0" encoding="utf-8"?-->
<svg fill="#FFFFFF" width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
</svg>
`,className:"w-html-embed w-back-arrow-svg "})})})})})})})]}),D=({data:l})=>{const{system:i,resources:x,url:d}=l;return e.jsx(M.Provider,{value:{imageLoader:v,assetBaseUrl:h,resources:x,breakpoints:T,onError:console.error},children:e.jsx(V,{system:i},d)})},F=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),H=({data:l})=>{const{pageMeta:i}=l,{origin:x}=new URL(l.url);let d=i.socialImageUrl;i.socialImageAssetName&&(d=`${x}${v({src:`${h}/${i.socialImageAssetName}`})}`);const b=i.custom.some(t=>t.property==="twitter:card");return e.jsxs(e.Fragment,{children:[l.url&&e.jsx("meta",{property:"og:url",content:l.url}),e.jsx("title",{children:i.title}),e.jsx("meta",{property:"og:title",content:i.title}),i.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:i.description}),e.jsx("meta",{property:"og:description",content:i.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),u,d&&e.jsx("meta",{property:"og:image",content:i.socialImageUrl}),u,i.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),i.custom.map(({property:t,content:f})=>e.jsx("meta",{property:t,content:f},t)),(i.socialImageAssetName!==void 0||i.socialImageUrl!==void 0)&&b===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),L,E.map(t=>e.jsx("link",{rel:"preload",href:`${h}${t}`,as:"font",crossOrigin:"anonymous"},t)),U.map(t=>e.jsx("link",{rel:"preload",href:`${h}${t}`,as:"image"},t))]})},A=Object.freeze(Object.defineProperty({__proto__:null,Head:H},Symbol.toStringTag,{value:"Module"})),O={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/illustration/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:F}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/illustration/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:A}}};export{O as configValuesSerialized};
