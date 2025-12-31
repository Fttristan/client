import{q as i,f as o,w as I,j as e,n as c,I as p}from"./YuA7MKX-N8BBDZOAxa77.js";import{C}from"./aS8qsvb2wLNOaGAnCzpJ.js";import{u as R}from"./LiJY25P-VFx-37gB8DfS.js";import{u as E}from"./DMCex30FeWvvThtDj-pY.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import{R as x}from"./C5o7XLF22BT4oJDhl5hA.js";import"./b9QDabEUvKe6AI27JKho.js";import{b as G}from"./BehbJKW-Ic5ZiA7tfWXx.js";import{B as z}from"./BW3TPAxD8-YSb3CwyVd3.js";const D=i(C)`
	background-color: var(--background-secondary);
	border-radius: 8px;
	max-width: 430px;
	min-width: 160px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	justify-self: start;
	align-self: start;
	width: 100%;
`,n=i.div``,s=i.h3`
	margin: 0 0 12px 0;
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--text-secondary);
`,N=i.div`
	border-radius: 8px 8px 0 0;
	height: 64px;
	margin: -16px -16px 16px -16px;
	overflow: hidden;
`,W=i.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`,u=i.div`
	display: flex;
	flex-flow: row wrap;
	gap: 16px;
`,h=i.div`
	display: flex;
	flex: 1000 0 auto;
	align-items: center;
	max-width: 100%;
	gap: 16px;
`,g=i.div`
	display: flex;
	flex: 1;
	min-width: 1px;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	flex-wrap: nowrap;
`,v=i.h3`
	margin: 0 0 2px 0;
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--text-header);
`,L=i.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	column-gap: 12px;
`,f=i.div`
	display: flex;
	flex: 0 1 auto;
	align-items: center;
	flex-flow: nowrap;
	min-width: 0;
`,P=i.div`
	background-color: var(--success);
	border-radius: 50%;
	height: 8px;
	width: 8px;
	margin-right: 4px;
	flex: 0 0 auto;
`,Y=i.div`
	background-color: var(--status-offline);
	border-radius: 50%;
	height: 8px;
	width: 8px;
	margin-right: 4px;
	flex: 0 0 auto;
`,m=i.span`
	margin-right: 0;
	flex: 0 1 auto;
	color: var(--text-header-secondary);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size: 14px;
`,_=i(v)`
	color: var(--error);
`,B=i.span`
	font-size: 14px;
	color: var(--text-header-secondary);
	font-weight: var(--font-weight-regular);
`,H=i(z)`
	height: 40px;
	align-self: center;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	flex: 1 0 auto;
	width: auto;
`;function Q({isSelf:a,code:w}){const j=R(),d=E("InviteEmbed"),[t,b]=o.useState(),[y,l]=o.useState(!0),[k,S]=o.useState(!1);return o.useEffect(()=>{j.rest.get(I.invite(w),{wuth_counts:!0,with_expiration:!0}).then(r=>{b(r),l(!1),d.debug("Resolved invite: ",r)}).catch(r=>{d.error("Error fetching invite: ",r),S(!0),l(!1)})},[]),e.jsxs(D,{children:[y&&e.jsx(n,{children:e.jsx(s,{children:"Resolving Invite"})}),k&&e.jsxs(n,{children:[e.jsx(s,{children:a?"You sent an invite, but...":"You received an invite, but..."}),e.jsx(u,{children:e.jsxs(h,{children:[e.jsx("div",{style:{backgroundColor:"var(--background-secondary-alt)",flex:"0 0 auto",width:"50px",height:"50px",borderRadius:"16px",backgroundClip:"padding-box",backgroundPosition:"center center",backgroundSize:"100% 100%"}}),e.jsxs(g,{children:[e.jsx(_,{children:"Invalid Invite"}),e.jsx(B,{children:"Try sending a new invite!"})]})]})})]}),t&&e.jsxs(n,{children:[t.guild.splash&&e.jsx(N,{children:e.jsx(W,{src:x.makeCDNUrl(c.guildSplash(t.guild.id,t.guild.splash,p.PNG)),alt:"Guild Splash"})}),e.jsx(s,{children:a?"You sent an invite to join a guild":"You've been invited to join a guild"}),e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsx("div",{style:{backgroundImage:t.guild.icon?`url(${x.makeCDNUrl(c.guildIcon(t.guild.id,t.guild.icon,p.PNG))})`:G(t.guild.name),backgroundColor:"var(--background-secondary-alt)",flex:"0 0 auto",width:"50px",height:"50px",borderRadius:"16px",backgroundClip:"padding-box",backgroundPosition:"center center",backgroundSize:"100% 100%"}}),e.jsxs(g,{children:[e.jsx(v,{children:t.guild.name}),e.jsxs(L,{children:[e.jsxs(f,{children:[e.jsx(P,{}),e.jsxs(m,{children:[(t.guild.presence_count||0).toLocaleString()," Online"]})]}),e.jsxs(f,{children:[e.jsx(Y,{}),e.jsxs(m,{children:[(t.guild.member_count||0).toLocaleString()," Members"]})]})]})]})]}),e.jsx(H,{palette:"secondary",children:"Join"})]})]})]})}export{Q as I};
