import{A as r,q as t,f as s,j as a,aj as u}from"./YuA7MKX-N8BBDZOAxa77.js";import{B as h}from"./BW3TPAxD8-YSb3CwyVd3.js";import{a as v,b,c as w,d as y}from"./B-G7-Cp8YhkwiylJSQ5R.js";import{I as j}from"./5aiE5jUjBMeUbLP8QDw7.js";const k=t.div`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	z-index: 9999;
	position: fixed;

	max-height: 100%;
	user-select: none;

	animation-duration: 0.2s;
	animation-fill-mode: forwards;

	display: grid;
	overflow: hidden;
	place-items: center;

	color: var(--text);
	background: rgba(0, 0, 0, 0.8);

	${n=>n.closing?r`
					animation-name: ${v};

					> div {
						animation-name: ${b};
					}
			  `:r`
					animation-name: ${w};
			  `}
`,C=t.div`
	margin: 20px;
	display: flex;
	flex-direction: column;

	animation-name: ${y};
	animation-duration: 0.25s;
	animation-timing-function: cubic-bezier(0.3, 0.3, 0.18, 1.1);

	overflow: hidden;
	background: var(--background-tertiary);

	${n=>!n.fullScreen&&r`
			max-width: min(calc(100vw - 20px), ${n.maxWidth??"450px"});
			max-height: min(calc(100vh - 20px), ${n.maxHeight??"650px"});
		`}

	${n=>n.fullScreen&&r`
			width: 100%;
			height: 100%;
		`}

	${n=>!n.transparent&&!n.fullScreen&&r`
			border-radius: 8px;
		`}
`,$=t.div`
	padding: 16px;
	flex-shrink: 0;
	word-break: break-word;
	gap: 8px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`,M=t.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding-top: 0;
	padding: ${n=>n.padding??"0 16px 16px"};

	overflow-y: auto;
	font-size: 0.9375rem;
`,p=t.div`
	gap: 8px;
	display: flex;
	padding: 16px;
	flex-direction: row-reverse;
	background: var(--background-secondary);
	border-radius: 0 0 4px 4px;
`,z=t.div`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,I=t.div`
	font-size: 24px;
	font-weight: var(--font-weight-bold);
	color: var(--text);
	margin: 0;
	padding: 0;
`,E=t.div`
	margin-top: 24px;
	display: flex;
	flex-direction: column;
`,S=t.div`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px;
	cursor: pointer;
	color: var(--text-disabled);

	&:hover {
		color: var(--text);
	}
`;function T({title:n,description:l,...i}){const[c,m]=s.useState(!1),d=s.useCallback(()=>{m(!0),c||setTimeout(()=>{var e;return(e=i.onClose)==null?void 0:e.call(i,!0)},200)},[c,i]),f=s.useCallback(async()=>{var e,o,x;await((x=(o=(e=i.actions)==null?void 0:e.find(g=>g.confirmation))==null?void 0:o.onClick)==null?void 0:x.call(o))&&d()},[i.actions]);return s.useEffect(()=>{if(i.signal==="confirm")f();else if(i.signal){if(i.signal==="close"&&i.nonDismissable)return;d()}},[i.signal]),a.jsx(u,{children:a.jsx(k,{closing:c,onClick:()=>!i.nonDismissable&&d(),children:a.jsxs(C,{...i,style:{...i.wrapperStyle},onClick:e=>e.stopPropagation(),actions:!1,children:[!i.withoutCloseButton&&a.jsx("div",{style:{position:"relative"},children:!i.nonDismissable&&a.jsx(S,{onClick:d,children:a.jsx(j,{icon:"mdiClose",size:1})})}),(n||l)&&a.jsxs($,{children:[n&&typeof n=="string"?a.jsx(I,{children:n}):n,l&&typeof l=="string"?a.jsx(z,{children:l}):l]}),a.jsx(M,{...i,children:i.children}),i.actions&&i.actions.length>0&&a.jsx(p,{children:i.actions.map((e,o)=>a.jsx(h,{disabled:i.disabled,...e,onClick:async()=>{await e.onClick()&&d()}},o))})]})})})}export{E as I,T as M,$ as a,z as b,I as c};
