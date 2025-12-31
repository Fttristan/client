import{R as a,j as t,q as c}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as p}from"./CsHNvrcJvsKd417O9QE6.js";import{F as x}from"./r7F8zce5OY3kApMcqdVf.js";const d=c.div`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	gap: 5px;

	a {
		color: var(--text);
		cursor: pointer;
		padding: 2px 6px;
		font-weight: 600;
		user-select: none;
		display: inline-block;
		background: var(--background-tertiary);

		font-size: 10px;
		text-transform: uppercase;
	}
`;function h(e){const o=a.useRef(null);let r="Copy";e.class&&(r=e.class.split("-")[1]);const l=a.useCallback(()=>{var n,s;const i=(s=(n=o.current)==null?void 0:n.querySelector("code"))==null?void 0:s.innerText;i&&navigator.clipboard.writeText(i)},[o]);return t.jsxs("pre",{ref:o,style:{position:"relative"},children:[t.jsx(d,{children:t.jsx(p,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:'"Copy to Clipboard'})},children:t.jsx(x,{children:t.jsx("a",{onClick:l,children:r})})})}),e.children]})}export{h as C};
