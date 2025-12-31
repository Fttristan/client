import{q as a,o as u,R as n,f as m,j as e}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as f}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as h}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{u as x}from"./LiJY25P-VFx-37gB8DfS.js";import{I as g}from"./5aiE5jUjBMeUbLP8QDw7.js";import{S as v}from"./DB2tqCcZC6oWCXGq12mZ.js";const s=a(v)`
	background-color: var(--background-secondary);
	cursor: pointer;

	&:hover {
		background-color: var(--background-secondary-highlight);
	}
`,i=a.header`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;function j(){const r=x(),[o,c]=n.useState(!1),[l,t]=n.useState("mdiChevronDown"),p=d=>{c(d)};return m.useEffect(()=>{t(o?"mdiClose":"mdiChevronDown")},[o]),r.activeGuildId==="@me"?e.jsx(s,{style:{cursor:"default",pointerEvents:"none",display:"flex",justifyContent:"center"},children:e.jsx(i,{children:"Direct Messages"})}):r.activeGuild?e.jsx(f,{type:"guild",open:o,onOpenChange:p,props:{guild:r.activeGuild},children:e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(i,{children:r.activeGuild.name}),e.jsx(g,{icon:l,size:"20px",color:"var(--text)"})]})})}):null}const H=u(j);export{H as C};
