import{q as g,o as h,R as x,j as v}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as E}from"./2R3b5JQuKIu9ouzzfEUO.js";import{I as b}from"./5aiE5jUjBMeUbLP8QDw7.js";import{a as p}from"./CiW7RIy8_7rKRg9LP8yw.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as L}from"./BehbJKW-Ic5ZiA7tfWXx.js";const A=g.button`
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
`,T=g(b)`
	color: var(--text-secondary);
	&:hover {
		color: var(--text);
	}
`;let t;function z(r,u){t&&t.remove(),t=document.createElement("input"),t.accept="*",t.type="file",t.multiple=!0,t.style.display="none",t.addEventListener("change",async i=>{var a;const s=(a=i.currentTarget)==null?void 0:a.files;if(s){for(const d of s)if(d.size>p)return u();r(Array.from(s))}}),document.body.appendChild(t),t.click()}function j({append:r,clearInput:u}){const i=()=>{E.push({type:"error",title:"File Too Large",error:`Max file size is ${L(p)}.`})},s=()=>{z(r,i)};return x.useEffect(()=>{function a(e){var l;const c=(l=e.clipboardData)==null?void 0:l.items;if(typeof c>"u")return;const f=[];for(const o of c)if(o.type.startsWith("text/"))o.kind==="string"&&o.getAsString(n=>{if(n.length>4e3){e.preventDefault();const y=new File([n],"message.txt",{type:"text/plain"});r([y]),u()}});else{const n=o.getAsFile();if(n){if(n.size>p){i();continue}f.push(n)}}r(f)}function d(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")}function m(e){var f;e.preventDefault();const c=(f=e.dataTransfer)==null?void 0:f.files;if(c){const l=[];for(const o of c){if(o.size>p){i();continue}l.push(o)}r(l)}}return document.addEventListener("paste",a),document.addEventListener("dragover",d),document.addEventListener("drop",m),()=>{document.removeEventListener("paste",a),document.removeEventListener("dragover",d),document.removeEventListener("drop",m)}},[]),v.jsx(A,{onClick:s,children:v.jsx(T,{icon:"mdiPlusCircle",size:"24px"})})}const S=h(j);export{S as A};
