import{o as E,f as o,j as e,q as t,A as y,w as z}from"./YuA7MKX-N8BBDZOAxa77.js";import{A as T}from"./CMemKA7NvxEoxcoA2SkN.js";import{B as C}from"./BW3TPAxD8-YSb3CwyVd3.js";import{S as B}from"./01DFOVX6nySZEvb5FNcA.js";import{u as I}from"./LiJY25P-VFx-37gB8DfS.js";const L=t.div`
	display: flex;
	flex-direction: column;

	min-width: 30vw;
`,$=t.div`
	border-radius: 8px;
	background-color: var(--background-secondary);
	padding: 16px;
`,c=t.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${n=>n.spacerTop&&y`
			margin-top: 24px;
		`}

	${n=>n.spacerBottom&&y`
			margin-bottom: 24px;
		`}
`,x=t.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	overflow: hidden;
	margin-right: 16px;
`,h=t.span`
	margin-bottom: 4px;
	color: var(--text-secondary);
	font-size: 12px;
	font-weight: var(--font-weight-medium);
	letter-spacing: 0.5px;
`,g=t.div`
	overflow: hidden;
	text-overflow: ellipsis;
`,f=t.span`
	color: var(--text);
	font-size: 16px;
	font-weight: var(--font-weight-regular);
`,N=t.button`
	color: var(--text-link);
	cursor: pointer;
	width: auto;
	display: inline;
	height: auto;
	padding: 2px 4px;
	position: relative;
	background: none;
	border: none;
	border-radius: 4px;
	font-size: 14px;
	font-weight: var(--font-weight-medium);
	user-select: none;
	text-rendering: optimizeLegibility;
`,P=t.div`
	position: relative;
	display: inline-block;
`,V=t.input`
	display: none;
`,q=t.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
	font-size: 0px;
`,D=t.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: var(--background-tertiary);
	padding: 10px 16px;
	border-radius: 8px;
	margin-top: 24px;
	align-items: center;
`,H=t.div`
	display: flex;
	gap: 10px;
`,O=t.p`
	color: var(--text-secondary);
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	margin: 0;
	padding: 0;
`;function Y(){var j,b,w;const n=I(),[d,k]=o.useState(!0),[s,l]=o.useState(),m=o.useRef(null),[A,v]=o.useState(!1),[a,p]=o.useState(!1),R=i=>{const[u,r]=i.split("@");return`${"*".repeat(u.length)}@${r}`},S=i=>{i.target.files&&l(i.target.files[0])},F=()=>{l(void 0)},U=async()=>{if(p(!0),!s)return;const i=new FileReader;i.onload=async()=>{const u={avatar:i.result};n.rest.patch(z.user(),u).then(r=>{l(void 0),p(!1)}).catch(r=>{console.error(r),p(!1)})},i.readAsDataURL(s)};return o.useEffect(()=>{v(!!s)},[s]),e.jsxs("div",{children:[e.jsx(B,{children:"Account"}),e.jsxs(L,{children:[e.jsxs($,{children:[e.jsx(c,{spacerBottom:!0,children:e.jsxs(P,{children:[s?e.jsx("img",{src:URL.createObjectURL(s),alt:"Avatar",width:"80px",height:"80px",style:{borderRadius:"50%",pointerEvents:"none",objectFit:"cover"}}):e.jsx(T,{user:n.account,size:80}),e.jsx(V,{ref:m,type:"file",name:"avatar",accept:"image/*",onChange:S,disabled:a}),e.jsx(q,{role:"button",onClick:()=>{var i;return(i=m.current)==null?void 0:i.click()},"aria-disabled":a})]})}),e.jsx(c,{spacerBottom:!0,children:e.jsxs(x,{children:[e.jsx(h,{children:"Username"}),e.jsx(g,{children:e.jsxs(f,{children:[(j=n.account)==null?void 0:j.username,"#",(b=n.account)==null?void 0:b.discriminator]})})]})}),e.jsx(c,{children:e.jsxs(x,{children:[e.jsx(h,{children:"Email"}),e.jsx(g,{children:e.jsxs(f,{children:[(w=n.account)!=null&&w.email?d?R(n.account.email):n.account.email:"No email added.",e.jsx(N,{onClick:()=>k(!d),children:d?"Reveal":"Hide"})]})})]})}),e.jsx(c,{spacerTop:!0,children:e.jsxs(x,{children:[e.jsx(h,{children:"Phone Number"}),e.jsx(g,{children:e.jsx(f,{children:"No phone number added."})})]})})]}),A&&e.jsxs(D,{children:[e.jsx(O,{children:"You have unsaved changes."}),e.jsxs(H,{children:[e.jsx(C,{palette:"link",onClick:F,disabled:a,children:"Discard"}),e.jsx(C,{palette:"primary",disabled:a,onClick:U,children:a?"Saving...":"Save"})]})]})]})]})}const W=E(Y);export{W as A};
