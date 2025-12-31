import{q as r,o as s,j as t,Q as i}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as n}from"./CsHNvrcJvsKd417O9QE6.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as o}from"./r7F8zce5OY3kApMcqdVf.js";import"./C5L5ilNGc1FL9CGzmfPa.js";import"./-DNDTawVC8bUyNCSdDCq.js";import"./DHHhgtpjOMdQgGr8ao9W.js";import"./Bj3GVG-z3cLqjL0zb1L8.js";import"./CC5WMRh9aNqjC5F0jn7z.js";import{M as a}from"./D_zrOCkx60RrrErYDafh.js";import"./C209ML8Rq_9uA-wXKXZ0.js";import"./DlH2QNQoQjgrht8yWmkX.js";import"./DYrM_Gkt8RaZjkTPRNi-.js";import"./qz4BddTetYdFfyodnFyA.js";import"./Y8-bfeL-ADaHJ2-vaWDg.js";import"./ChPfX-PAxRw_FvfQ9QCH.js";import"./DnUuIl_qQ9_BDdjeE4Hc.js";import{c as p}from"./CGTG0yydcbmB_nEHM58Y.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";const $=r.div`
	display: flex;
	overflow: none;
	flex-direction: row;
	${e=>!e.header&&"align-items: center;"}
	${e=>e.header&&"margin-top: 10px;"}
	${e=>e.mention&&"background-color: hsl(var(--warning-light-hsl)/0.1);"}
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;

	.message-details {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.message-details > .name {
		font-weight: var(--font-weight-medium);
	}

	&:hover {
		background-color: ${e=>e.mention?"hsl(var(--warning-light-hsl)/0.08);":"var(--background-primary-highlight);"};

		time,
		.edited {
			opacity: 1;
		}
	}
`,F=r.div`
	width: 62px;
	display: flex;
	flex-shrink: 0;
	padding-top: 2px;
	flex-direction: row;
	justify-content: center;

	.messageTimestampWrapper {
		display: flex;
		flex-direction: column;
	}

	time,
	.edited {
		opacity: 0;
		font-size: 12px;
		color: var(--text-secondary);
	}
`,N=r.div`
	position: relative;
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 48px;
	word-wrap: anywhere;
	flex: 1;
`,I=r.div`
	${e=>e.sending&&"opacity: 0.5;"}
	${e=>e.failed&&"color: var(--error);"}
	margin: 2px 0;
`,m=r.div`
	flex-shrink: 0;
	font-size: 12px;
	display: inline-flex;
	color: var(--text-secondary);
	padding-left: 4px;
	align-self: center;

	.edited {
		cursor: default;
		user-select: none;
	}
`,O=s(({message:e,position:d})=>d==="left"?e instanceof a&&e.edited_timestamp?t.jsxs("div",{className:"messageTimestampWrapper",children:[t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("time",{className:"copyTime",dateTime:e.edited_timestamp.toISOString(),children:i(e.edited_timestamp).format("h:mm A")})})}),t.jsx("span",{className:"edited",children:t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("span",{children:"(edited)"})})})})]}):t.jsx(t.Fragment,{children:t.jsx("time",{dateTime:e.timestamp.toISOString(),children:i(e.timestamp).format("h:mm A")})}):t.jsxs(m,{children:[t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("time",{className:"copyTime",dateTime:e.timestamp.toISOString(),children:i(e.timestamp).calendar(void 0,p)})})}),e instanceof a&&e.edited_timestamp&&t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("span",{className:"edited",children:"(edited)"})})})]}));export{$ as M,F as a,O as b,N as c,I as d};
