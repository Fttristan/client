import{q as o,j as e}from"./YuA7MKX-N8BBDZOAxa77.js";import{R as a}from"./C5o7XLF22BT4oJDhl5hA.js";import{M as n,a as t,b as x,c as p}from"./Dh1pI18XKqXPGMnhnqUq.js";o.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;function m({inviteData:d,...c}){var i,s,l;const r=a.makeCDNUrl(`/splashes/${(i=d.guild)==null?void 0:i.id}/${(s=d.guild)==null?void 0:s.splash}.png`,{size:2048});return e.jsx(n,{nonDismissable:!0,padding:"0",maxWidth:"920",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",maxHeight:"100%"},children:[e.jsx("div",{style:{height:"100%"},children:e.jsx("div",{style:{overflow:"hidden scroll",paddingRight:24,width:400,padding:32},children:e.jsxs(t,{children:[e.jsx(x,{children:"You've been invited to join"}),e.jsx(p,{children:(l=d.guild)==null?void 0:l.name})]})})}),e.jsx("div",{style:{width:"520px",backgroundImage:`url(${r})`,backgroundSize:"cover",backgroundPosition:"100%",borderRadius:"0 5px 5px 0"}})]})})}export{m as I};
