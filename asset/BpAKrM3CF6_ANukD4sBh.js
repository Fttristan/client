import{q as m,j as o}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as g}from"./2R3b5JQuKIu9ouzzfEUO.js";import"./DMaOWi_7BvjHR9OOcqbD.js";import{A as f}from"./Jv9lrR2iNVJHhUaGLP9f.js";import{F as x}from"./BDIgkKBMa9XVxyJ3-_W5.js";import{V as a}from"./AdxsYoOjuV2AsspUjQ4j.js";import{T as j}from"./Dai9IghdyrtAXDefp_WG.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{g as h,z as b}from"./BehbJKW-Ic5ZiA7tfWXx.js";const u=350;function y(i,d){const s=i/d;let e=i*s,r=d*s;if(r>u){const t=u/r;e*=t,r=u}return{adjustedWidth:Math.floor(e),adjustedHeight:Math.floor(r)}}const A=m.div`
	cursor: ${i=>i.withPointer?"pointer":"default"};
	padding: 2px 0;
`,E=m.img`
	border-radius: 4px;
	width: 100%;
	height: auto;
`;function V({attachment:i}){var r;const d=i.proxy_url&&i.proxy_url.length>0?i.proxy_url:i.url,s=h(i);let e=o.jsx(o.Fragment,{});if(s.isImage&&s.isEmbeddable){const t=i.width,p=i.height,{adjustedWidth:l,adjustedHeight:n}=y(t,p);e=o.jsx(E,{src:d,alt:i.filename,loading:"lazy",style:{maxWidth:l,maxHeight:n}})}else s.isVideo&&s.isEmbeddable?e=o.jsx(a,{attachment:i}):s.isAudio&&s.isEmbeddable?e=o.jsx(f,{attachment:i}):s.isText&&s.isEmbeddable?e=o.jsx(j,{attachment:i}):e=o.jsx(x,{attachment:i});return o.jsx(A,{withPointer:(r=i.content_type)==null?void 0:r.startsWith("image"),onClick:()=>{var l;if(!((l=i.content_type)!=null&&l.startsWith("image")))return;const{width:t,height:p}=b(i.width,i.height);g.push({type:"image_viewer",attachment:i,width:t,height:p})},children:e},i.id)}export{V as M};
