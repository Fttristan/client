import{q as x,o as v,f as C,R as o,j as i}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as g}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as b}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{C as E}from"./C6B2VPnBNxKCdOzNcpOR.js";import{u as j}from"./LiJY25P-VFx-37gB8DfS.js";const y=x.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;function F({message:t,guild:p}){const m=j(),e=C.useContext(E),[c,f]=o.useState(void 0),[s,l]=o.useState(),[a,h]=o.useState(void 0),{members:n}=p||{};o.useEffect(()=>{s&&(e==null||e.onContextMenu(s,{type:"user",user:t.author,member:a}))},[s,a]);const d=async r=>{var u;r.preventDefault(),r.stopPropagation(),l(r),(u=m.guilds.get(t.guild_id))==null||u.members.resolve(t.author.id).then(h)};return o.useEffect(()=>{if(!n)return;const r=n.get(t.author.id);r&&f(r.roleColor)},[t,n]),i.jsx(g,{placement:"right-start",type:"userPopout",props:{user:t.author},children:i.jsx(b,{children:i.jsx(y,{style:{color:c},ref:e==null?void 0:e.setReferenceElement,onContextMenu:d,children:t.author.username})})})}const z=v(F);export{z as M};
