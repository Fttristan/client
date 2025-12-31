import{f as h,j as t,R as s,u as p,q as m}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as g}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as M}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{C as x}from"./C6B2VPnBNxKCdOzNcpOR.js";import{u as f}from"./LiJY25P-VFx-37gB8DfS.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{h as j,r as C}from"./BehbJKW-Ic5ZiA7tfWXx.js";const u=m.span`
	padding: 0 2px;
	border-radius: 4px;
	background-color: hsl(${e=>e.color??"var(--primary-hsl)"} / 0.3);
	user-select: ${e=>e.withHover?"none":"inherit"};

	${e=>e.withHover&&`
		&:hover {
			background-color: hsl(${e.color??"var(--primary-hsl)"} / 0.5);
			cursor: pointer;
		}
	`}
`;function d({id:e}){const o=f(),[n,c]=s.useState(null),l=s.useContext(x);return s.useEffect(()=>{(async()=>{const r=await o.users.resolve(e);c(r??null)})()},[e]),n?t.jsx(g,{type:"userPopout",placement:"right",props:{user:n},children:t.jsx(M,{children:t.jsxs(u,{withHover:!0,onContextMenu:i=>l.onContextMenu(i,{type:"user",user:n}),children:["@",n.username]})})}):t.jsxs(u,{children:["@",e]})}function v({id:e}){const o=f(),[n,c]=s.useState(null),l=p(),i=s.useContext(x),r=()=>{n&&n.isGuildTextChannel&&l(`/channels/${n.guildId}/${n.id}`)};return s.useEffect(()=>{const a=o.channels.get(e);a&&c(a)},[e]),n?t.jsxs(u,{withHover:!0,onClick:r,onContextMenu:a=>i.onContextMenu(a,{type:"channelMention",channel:n}),children:["#",n.name]}):t.jsxs(u,{children:["#",e]})}function w({id:e}){const o=f(),[n,c]=s.useState(null),[l,i]=s.useState(void 0);return s.useEffect(()=>{const r=o.roles.get(e);r&&c(r)},[e]),s.useEffect(()=>{if(!(n!=null&&n.color)||n.color==="#000000")return;const r=j(n.color);r&&i(C(r.r,r.g,r.b))},[n]),n?t.jsxs(u,{color:l,withHover:!0,children:["@",n.name]}):t.jsx(u,{children:"@unknown-role"})}function $({id:e}){return t.jsx(u,{children:e})}function b({type:e,id:o}){return e==="role"?t.jsx(w,{id:o}):e==="user"?t.jsx(d,{id:o}):e==="channel"?t.jsx(v,{id:o}):e==="text"?t.jsx($,{id:o}):null}const B=h.memo(b);export{B as M};
