import{q as m,o as x,u,f as v,R as s,j as t,n as y,I as C,C as I}from"./YuA7MKX-N8BBDZOAxa77.js";import{C as j}from"./aS8qsvb2wLNOaGAnCzpJ.js";import{F as b}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as E}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{C as G}from"./C6B2VPnBNxKCdOzNcpOR.js";import{u as S}from"./LiJY25P-VFx-37gB8DfS.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import{P as N}from"./BUjYG6qMQjp0KnokeClt.js";import{R}from"./C5o7XLF22BT4oJDhl5hA.js";import"./b9QDabEUvKe6AI27JKho.js";import{S as $}from"./BKLmFzv6OKXaQoK-6mdc.js";const k=m.div`
	position: relative;
	display: flex;
	justify-content: center;
	cursor: pointer;
`,M=m(j)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.hasImage?"transparent":e.active?"var(--primary)":"var(--background-secondary)"};
	transition: border-radius 0.2s ease, background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.hasImage?"transparent":"var(--primary)"};
	}
`;function P({guild:e,active:f}){const r=S(),l=u(),a=v.useContext(G),[h,n]=s.useState("none"),[i,c]=s.useState(!1);s.useEffect(()=>r.activeChannelId&&r.activeGuildId===e.id?n("active"):n(i?"hover":"none"),[r.activeGuildId,i]);const d=()=>{const o=e.channels.find(p=>N.getPermission(r.account.id,e,p).has("VIEW_CHANNEL")&&p.type!==I.GuildCategory);l(`/channels/${e.id}${o?`/${o.id}`:""}`)};return t.jsxs(k,{ref:a.setReferenceElement,onContextMenu:o=>a.onContextMenu(o,{type:"guild",guild:e}),children:[t.jsx($,{type:h}),t.jsx(b,{placement:"right",type:"tooltip",offset:20,props:{content:t.jsx("span",{children:e.name})},children:t.jsx(E,{children:t.jsx(M,{onClick:d,active:f,hasImage:!!(e!=null&&e.icon),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:e.icon?t.jsx("img",{src:R.makeCDNUrl(y.guildIcon(e.id,e==null?void 0:e.icon,C.PNG)),width:48,height:48,loading:"lazy"}):t.jsx("span",{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer"},children:e==null?void 0:e.acronym})})})})]})}const J=x(P);export{k as G,J as a};
