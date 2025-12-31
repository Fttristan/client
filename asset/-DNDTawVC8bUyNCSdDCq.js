import{j as e,Q as s,n as u,I as j,q as i}from"./YuA7MKX-N8BBDZOAxa77.js";import{A as v}from"./CMemKA7NvxEoxcoA2SkN.js";import{H as w}from"./BTnekbDuzfJChn_J3HiX.js";import{u as y}from"./DMCex30FeWvvThtDj-pY.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import{R as b}from"./C5o7XLF22BT4oJDhl5hA.js";import{S as k}from"./b9QDabEUvKe6AI27JKho.js";import{S as R}from"./BZTnN1zTvoaS8Mm9EpYT.js";import{u as S}from"./LiJY25P-VFx-37gB8DfS.js";import{F as a}from"./CsHNvrcJvsKd417O9QE6.js";import{F as d}from"./r7F8zce5OY3kApMcqdVf.js";const z=i.div`
	background-color: #252525;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	width: 340px;
	max-height: 600px;
	overflow: hidden;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 4px 8px rgb(0 0 0 / 15%);
	color: var(--text);
`,M=i.div`
	display: flex;
	flex-direction: column;
`,P=i.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-tertiary);
	border-radius: 4px;
	margin: 0 16px 16px;
	max-height: 340px;
	gap: 8px;

	& > :first-child {
		padding: 12px 12px 0 12px;
	}

	& > :nth-child(n + 3) {
		padding: 0 12px;
	}

	& > :last-child {
		padding: 0 12px 12px 12px;
	}
`,r=i.div`
	display: flex;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
`,D=i.div`
	text-overflow: clip;
	white-space: nowrap;
	overflow: hidden;
`,T=i.span`
	font-size: 20px;
	font-weight: var(--font-weight-bold);
`,Y=i.span`
	font-size: 14px;
	font-weight: var(--font-weight-medium);
`,l=i.span`
	display: flex;
	font-weight: var(--font-weight-bold);
	margin-bottom: 6px;
	font-size: 12px;
	user-select: none;
`,F=i.div`
	display: flex;
	flex-direction: row;
	column-gap: 8px;
	align-items: center;
	user-select: none;
`,c=i.span`
	font-size: 14px;
	font-weight: var(--font-weight-regular);
`,A=i.div`
	font-size: 8px;
	background-image: none;
	background-color: var(--background-secondary);
	text-align: center;
	width: 16px;
	height: 16px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`,C=i.div`
	font-weight: var(--font-weight-bold);
	overflow: hidden;
	white-space: nowrap;
`,N=i.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	margin-top: 2px;
`,U=i.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 12px;
	height: 12px;
	border-radius: 50%;
	padding: 0;
	margin: 0 4px;
	background-color: ${t=>t.color??"var(--text-disabled)"};
`,I=i.div`
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: var(--font-weight-medium);
	background-color: var(--background-primary-alt);
	border-radius: 12px;
	box-sizing: border-box;
	height: 22px;
	margin: 0 4px 4px 0;
	padding: 8px;
`,H=i.div`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	max-width: 200px;
`;function V({user:t,member:o}){const p=S(),x=y("UserProfilePopout"),g=t.id,{timestamp:h}=k.deconstruct(g),f=p.presences.get(t.id);return e.jsxs(z,{children:[e.jsx(M,{children:e.jsx(v,{style:{margin:"22px 16px"},size:80,onClick:n=>{n.preventDefault(),n.stopPropagation(),x.debug("open profile modal")},user:t,presence:f,statusDotStyle:{size:25,borderThickness:.3},showPresence:!0,isFloating:!0})}),e.jsxs(P,{children:[e.jsx(r,{children:e.jsx("div",{children:e.jsxs(D,{children:[e.jsx(T,{children:(o==null?void 0:o.nick)??t.username}),e.jsx("div",{children:e.jsxs(Y,{children:[t.username,"#",t.discriminator]})})]})})}),e.jsx(w,{style:{margin:"0 12px"}}),e.jsxs(r,{children:[e.jsx(l,{children:"Member Since"}),e.jsxs(F,{children:[e.jsx(a,{placement:"top",type:"tooltip",props:{content:e.jsx("span",{children:"Spacebar"})},children:e.jsx(d,{children:e.jsx("div",{children:e.jsx(R,{width:16,height:16,style:{borderRadius:"50%"}})})})}),e.jsx(c,{children:s(h).format("MMM D, YYYY")}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:"4px",width:"4px",borderRadius:"50%",backgroundColor:"var(--text-disabled)"}}),e.jsx(a,{placement:"top",type:"tooltip",props:{content:e.jsx("span",{children:o.guild.name})},children:e.jsx(d,{children:o.guild.icon?e.jsx("img",{src:b.makeCDNUrl(u.guildIcon(o.guild.id,o.guild.icon,j.PNG)),width:16,height:16,loading:"lazy",style:{borderRadius:"50%"}}):e.jsx(A,{children:e.jsx(C,{children:o.guild.acronym})})})}),e.jsx(c,{children:s(o.joined_at).format("MMM D, YYYY")})]})]})]}),o&&e.jsxs(r,{children:[e.jsx(l,{children:o.roles.length?"Roles":"No Roles"}),e.jsx(N,{children:o.roles.map((n,m)=>e.jsxs(I,{children:[e.jsx(U,{color:n.color}),e.jsx(H,{children:n.name})]},m))})]})]})]})}export{V as U};
