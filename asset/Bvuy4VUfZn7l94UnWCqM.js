import{q as p,f as n,n as j,I as x,a6 as C,a7 as y,j as a,a8 as R,a9 as w,aa as k}from"./YuA7MKX-N8BBDZOAxa77.js";import{u as P}from"./LiJY25P-VFx-37gB8DfS.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import{R as b}from"./C5o7XLF22BT4oJDhl5hA.js";import"./b9QDabEUvKe6AI27JKho.js";const T=p.div`
	position: absolute;
	bottom: 52px;
	right: 0;
	z-index: 1;
`,v=p.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;function M({isOpen:e,onClose:u,buttonRef:c,onEmojiSelect:d}){const[i,E]=n.useState(null),{guilds:m,emojis:g}=P();n.useEffect(()=>{const o=()=>{e&&c.current&&E(c.current.getBoundingClientRect())};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e]);const{customEmojis:h,categories:f}=n.useMemo(()=>{const o=[],s=[];return m.all.forEach(t=>{const l=t.emojis;l.length>0&&(l.forEach(r=>{o.push({names:[r.name],imgUrl:r.imageUrl,id:r.id,categoryId:t.id})}),s.push({name:t.name,category:`custom_${t.id}`,imageUrl:t.icon?b.makeCDNUrl(j.guildIcon(t.id,t.icon,x.PNG)):null,acronym:t.acronym}))}),s.push(...C()),{customEmojis:o,categories:s}},[g.all,m.all]);return e&&i&&y.createPortal(a.jsx(v,{onClick:u,children:a.jsx(T,{onClick:o=>o.stopPropagation(),style:{position:"fixed",bottom:window.innerHeight-i.top+8,right:window.innerWidth-i.right},children:a.jsx(R,{theme:k.DARK,emojiStyle:w.TWITTER,lazyLoadEmojis:!0,customEmojis:h,categories:f,onEmojiClick:o=>{d(o)}})})}),document.body)}export{M};
