import{q as c,R as t,j as r}from"./YuA7MKX-N8BBDZOAxa77.js";import{C as l}from"./aS8qsvb2wLNOaGAnCzpJ.js";import{F as s}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as m}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{G as d}from"./Bi4UfNCcyEwa4uqUp47V.js";import{I as u}from"./5aiE5jUjBMeUbLP8QDw7.js";import{S as f}from"./BKLmFzv6OKXaQoK-6mdc.js";const g=c(l)`
	${e=>e.margin!==!1?"margin-top: 9px;":""}};
	padding: 0;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.active?"var(--primary)":"var(--background-secondary)"};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-radius 0.2s ease, background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.useGreenColorScheme?"var(--success)":"var(--primary)"};

	}
`;function E(e){if(e.image&&e.icon&&e.label)throw new Error("SidebarAction can only have one of image, icon, or label");const[n,i]=t.useState("none"),[a,o]=t.useState(!1);return t.useEffect(()=>{if(!e.disablePill)return e.active?i("active"):i(a?"hover":"none")},[e.active,a]),r.jsxs(d,{children:[r.jsx(f,{type:n}),r.jsx(s,{placement:"right",type:"tooltip",offset:20,props:{content:r.jsx("span",{children:e.tooltip})},children:r.jsx(m,{children:r.jsxs(g,{onClick:e.action,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),margin:e.margin,active:e.active,useGreenColorScheme:e.useGreenColorScheme,children:[e.image&&r.jsx("img",{...e.image,loading:"lazy"}),e.icon&&r.jsx(u,{...e.icon,color:a&&e.useGreenColorScheme?"var(--text)":e.icon.color}),e.label&&r.jsx("span",{children:e.label})]})})})]})}export{E as S};
