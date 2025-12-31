import{q as i,m as d,j as r}from"./YuA7MKX-N8BBDZOAxa77.js";import{B as n}from"./BW3TPAxD8-YSb3CwyVd3.js";const x=i.div`
	height: 100%;
	padding: 12px;
	background-color: var(--background-secondary);
	color: var(--text);

	h3 {
		margin: 0;
		margin-bottom: 10px;
	}

	code {
		font-size: 12px;
	}
`;function j({children:e,section:t}){const[o,s]=d();if(o){const a=o instanceof Error?o.message:o,c=o instanceof Error?o.stack:void 0;return r.jsxs(x,{children:[t==="app"?r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"App Crash"}),r.jsx(n,{onClick:s,children:"Ignore"}),r.jsx(n,{onClick:()=>location.reload(),children:"Reload"})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Component Error"}),r.jsx(n,{onClick:s,children:"Ignore"})]}),r.jsx("br",{}),r.jsx("br",{}),a,r.jsx("br",{}),r.jsx("code",{children:c})]})}return r.jsx(r.Fragment,{children:e})}export{j as E};
