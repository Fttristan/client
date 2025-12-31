import{q as t,R as a,j as n}from"./YuA7MKX-N8BBDZOAxa77.js";import{I as p}from"./5aiE5jUjBMeUbLP8QDw7.js";const l=t.div`
	padding: 24px 8px 0 16px;
`,c=t.span`
	font-size: 12px;
	font-weight: var(--font-weight-bold);
	color: var(--text-secondary);
	user-select: none;
	cursor: pointer;

	display: flex;
	align-items: center;
`,x=t.div`
	margin-top: 4px;
	display: flex;
	flex-direction: column;
	display: ${e=>e.open===!1?"flex":"none"};
`;t.span`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	color: var(--text-normal);
	user-select: none;
	margin-left: 8px;
	padding: 4px 0;
`;function m(e){const[o,i]=a.useState(!1),s=()=>i(r=>!r);return n.jsxs(l,{children:[n.jsxs(c,{onClick:s,children:[n.jsx(p,{icon:o?"mdiChevronRight":"mdiChevronDown",size:"16px"}),e.name]}),n.jsxs(x,{open:o,children:[...e.items]})]})}export{m as L};
