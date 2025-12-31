import{q as e,o as n,j as o,a5 as a,f as r}from"./YuA7MKX-N8BBDZOAxa77.js";import{S as i}from"./CF6FO32TaLC-BNF6DE7O.js";import{B as l}from"./BW3TPAxD8-YSb3CwyVd3.js";import{C as p}from"./aS8qsvb2wLNOaGAnCzpJ.js";import{u as c}from"./LiJY25P-VFx-37gB8DfS.js";const m=e.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	flex: 1;
`,x=e(i)`
	width: 80vw;
	height: min-content;
	margin-bottom: 32px;

	@media (min-width: 768px) {
		width: 40vw;
	}
`;function s(){const t=c();return o.jsx(p,{style:{flex:1},children:o.jsxs(m,{children:[o.jsx(x,{}),o.jsx(a,{color:"var(--text)"}),t.token&&o.jsx("div",{style:{position:"absolute",bottom:"30vh"},children:o.jsx(l,{palette:"danger",onClick:()=>t.logout(),children:"Logout"})})]})})}const h=n(s),v=({children:t})=>o.jsx(r.Suspense,{fallback:o.jsx(s,{}),children:t});export{v as L,h as a};
