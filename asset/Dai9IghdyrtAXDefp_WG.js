import{q as o,f as l,j as e}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as S}from"./2R3b5JQuKIu9ouzzfEUO.js";import"./DMaOWi_7BvjHR9OOcqbD.js";import{F as I}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as z}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import{I as y}from"./5aiE5jUjBMeUbLP8QDw7.js";import{L as C}from"./B61PCvkWSghSH4vvO73b.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as k}from"./BehbJKW-Ic5ZiA7tfWXx.js";import{I as E}from"./Dk8w3hWGVSKEKYDngyKi.js";const F=o.div`
	margin-top: 10px;
	display: flex;
	background-color: var(--background-secondary);
	padding: 12px;
	border-radius: 5px;
	flex: auto;
	border: 1px solid var(--background-secondary-alt);
	justify-content: space-between;
	box-sizing: border-box;
	flex-direction: column;
	min-width: 300px;
	width: fit-content;
	max-width: 100%;
	white-space: pre-line;
	overflow: hidden;
	@media only screen and (max-width: 420px) {
		width: 100%;
	}
`,_=o.div`
	display: flex;
`,$=o.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-self: center;
	flex-direction: column;
`,v=o.div`
	color: var(--text-secondary);
	font-size: 14px;
	font-family: var(--font-family-code);
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	display: block;
	word-wrap: normal;
	overflow: hidden;
	max-height: fit-content;
	line-height: 1.8em;
	overflow-x: scroll;
	width: 100% !important;
`,A=o.div`
	display: flex;
	flex-direction: row-reverse;
	// margin-right: 15%;

	// remove the temporary padding that moves it over the chat area on smaller screens where the member list is hidden
	@media (max-width: 1050px) {
		margin-right: auto;
	}
`,W=o.div`
	height: 24px;
	margin-left: 8px;
	flex: 0 0 auto;
`,q=o(y)`
	color: ${t=>t.$active?"var(--text)":"var(--text-secondary)"};

	&:hover {
		color: ${t=>t.$active?"var(--text-secondary)":"var(--text)"};
		cursor: pointer;
	}
`;function w({icon:t,active:h,ariaLabel:u,tooltip:r,disabled:c,color:x,label:n,onClick:s,iconButtonStyle:d,iconWrapperStyle:a,size:p="24px"}){return e.jsx(I,{placement:"bottom",type:"tooltip",props:{content:e.jsx("span",{children:r})},children:e.jsxs(z,{style:{display:"flex",alignItems:"center"},children:[e.jsx(W,{style:a,children:e.jsx(E,{onClick:s,disabled:c,style:d,children:e.jsx(q,{$active:!c&&h,icon:t,size:p,"aria-label":u,color:x})})}),n]})})}function ee({attachment:t}){const[h,u]=l.useState(!0),[r,c]=l.useState(),[x,n]=l.useState(),[s,d]=l.useState(0),[a,p]=l.useState(!1),j=t.proxy_url&&t.proxy_url.length>0?t.proxy_url:t.url,b=i=>i.split(/\r?\n/).length,m=(i,f)=>{const g=i.split(/\r?\n/);return g.length>f?g.slice(0,f).join(`\r
`):i},L=()=>{r&&(a?(p(!1),n(m(r,5))):(p(!0),s>100?n(m(r,100)+`
... (`+(s-100)+" lines remaining)"):n(r)))},T=()=>{r&&S.push({type:"text_viewer",text:r})};return l.useEffect(()=>{fetch(t.proxy_url).then(i=>i.text()).then(i=>{typeof i=="string"&&(c(i),n(m(i,5)),d(b(i)))}).catch(i=>{console.log(i)})},[t]),e.jsxs(F,{children:[e.jsxs(_,{children:[e.jsx(y,{icon:"mdiText",size:1,style:{marginRight:"5px"}}),e.jsxs($,{children:[e.jsx(C,{href:j,target:"_blank",rel:"noreferer noopener",color:"var(--text-link)",children:t.filename}),e.jsx(v,{style:{fontSize:"12px"},children:k(t.size)})]})]}),e.jsx(v,{children:e.jsx("code",{children:x})}),e.jsxs(A,{children:[e.jsx(w,{icon:"mdiArrowExpand",tooltip:"View Full Text",ariaLabel:"View Full Text",onClick:T,size:"16px",iconWrapperStyle:{display:"flex",alignItems:"center"}}),e.jsx(w,{icon:a?"mdiChevronUp":"mdiChevronDown",tooltip:"Expand ("+s+" lines)",ariaLabel:"Expand ("+s+" lines)",onClick:L,label:e.jsx("span",{style:{fontSize:"14px"},children:a?"Collapse":"Expand"}),size:"24px",iconButtonStyle:{display:"flex",justifyContent:"center"}})]})]})}export{ee as T};
