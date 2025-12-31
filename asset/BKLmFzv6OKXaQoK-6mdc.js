import{q as r,j as e}from"./YuA7MKX-N8BBDZOAxa77.js";import{C as i}from"./aS8qsvb2wLNOaGAnCzpJ.js";const n=r(i)`
	position: absolute;
	// top: 0;
	left: 0;
	width: 8px;
	height: 48px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: inherit;
`,s=r.span`
	width: 8px;
	border-radius: 0 4px 4px 0;
	background-color: white;
	margin-left: -4px;
	transition: height 0.3s ease;

	${t=>{switch(t.type){case"unread":return`
					height: 8px;
				`;case"hover":return`
				height: 20px;
				`;case"active":return`
				height: 40px;
				`;default:return`
					height: 0;
					`}}}
`;function p({type:t}){return e.jsx(n,{children:e.jsx(s,{type:t})})}export{p as S};
