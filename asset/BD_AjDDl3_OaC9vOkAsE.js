import{q as e,o as a,j as r}from"./YuA7MKX-N8BBDZOAxa77.js";import{I as c}from"./5aiE5jUjBMeUbLP8QDw7.js";import{I as d}from"./Dk8w3hWGVSKEKYDngyKi.js";import{u as l}from"./LiJY25P-VFx-37gB8DfS.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as p}from"./BehbJKW-Ic5ZiA7tfWXx.js";const x=e.div`
	width: 520px;
	min-width: auto;
	border: 1px solid transparent;
	padding: 10px;
	border-radius: 4px;
	background-color: var(--background-secondary);
	border-color: var(--background-secondary-alt);
	flex-direction: row;
	align-items: center;
	display: flex;
`,m=e.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;

	.muted {
		color: var(--text-secondary);
	}
`,h=e.progress`
	height: 6px;
	width: 100%;
`,u=e(c)`
	color: var(--text-secondary);

	&:hover {
		color: var(--text);
	}
`;function f({message:o}){const s=l(),t=o.files.reduce((n,i)=>n+i.size,0);return r.jsxs(x,{children:[r.jsxs(m,{children:[r.jsxs("div",{style:{gap:"5px",display:"flex"},children:[r.jsx("span",{children:"Uploading"}),r.jsx("span",{children:o.files.length===1?o.files[0].name:`${o.files.length} files`}),r.jsx("span",{className:"muted",children:"-"}),r.jsx("span",{className:"muted",children:p(t)})]}),r.jsx(h,{value:o.progress,max:100})]}),r.jsx(d,{variant:"blank",onClick:()=>{o.abort(),s.queue.remove(o.id)},children:r.jsx(u,{icon:"mdiClose",size:"24px"})})]})}const z=a(f);export{z as A};
