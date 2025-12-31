import{q,f as l,j as z}from"./YuA7MKX-N8BBDZOAxa77.js";import{u as B}from"./LiJY25P-VFx-37gB8DfS.js";const P=q.div`
	resize: none;
	border: none;
	outline: none;
	background-color: transparent;
	color: var(--text);
	overflow-wrap: break-word;
	word-break: break-word;
	white-space: break-spaces;
	font-size: 16px;
	font-family: var(--font-family);
	flex: 1;
	padding: 13px 10px;
	min-height: 20px;
	max-height: 50vh;
	overflow-y: auto;

	&:disabled {
		cursor: not-allowed;
		color: var(--text-disabled);
	}

	img.emoji {
		width: 22px;
		height: 22px;
		vertical-align: middle;
		margin: 0 1px;
	}

	&:empty:before {
		content: attr(data-placeholder);
		color: var(--text-disabled);
		pointer-events: none;
		font-size: 0.875rem;
	}
`;function X({id:M,value:T,onChange:E,onKeyDown:j,placeholder:y="",disabled:N=!1,maxLength:h}){const e=l.useRef(null),b=B(),[C,f]=l.useState(!1),[p,g]=l.useState(-1),c=l.useCallback(r=>{const n=document.createElement("div");return n.innerHTML=r,n.querySelectorAll("img.emoji").forEach(u=>{var t;const a=u.getAttribute("data-emoji-name");if(a){const s=document.createTextNode(`:${a}:`);(t=u.parentNode)==null||t.replaceChild(s,u)}}),n.innerHTML=n.innerHTML.replace(/<br>/g,`
`),n.textContent||""},[]),H=l.useCallback(r=>{const n=/:(\w+):/g;let o=r;return o=o.replace(n,(u,a)=>{const t=Array.from(b.emojis.all.values()).find(s=>s.name===a);return t?`<img class="emoji" src="${t.imageUrl}" alt="${a}" title="${a}" data-emoji-name="${a}" data-emoji-id="${t.id}" />`:u}),o=o.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>"),o},[b.emojis]);l.useEffect(()=>{if(!e.current)return;if(c(e.current.innerHTML)!==T){const n=H(T);e.current.innerHTML=n}},[T,H,c]);const I=l.useCallback(r=>{if(!e.current)return;const n=r.nativeEvent,o=n.inputType;if(o==="insertText"||o==="insertCompositionText"){const a=n.data;if(a===":")if(C){if(p>=0){const t=window.getSelection();if(t&&t.rangeCount>0){const s=t.getRangeAt(0),m=document.createRange();m.selectNodeContents(e.current),m.setEnd(s.startContainer,s.startOffset);const S=m.toString().substring(p).match(/^:(\w+):$/);if(S){const w=S[1],v=Array.from(b.emojis.all.values()).find(x=>x.name===w);if(v){let x=0,k=null,L=0;const O=document.createTreeWalker(e.current,NodeFilter.SHOW_TEXT,null);let A;for(;A=O.nextNode();){const i=(A.textContent||"").length;if(x+i>p){k=A,L=p-x;break}x+=i}if(k){const d=document.createRange();d.setStart(k,L),d.setEnd(s.startContainer,s.startOffset),d.deleteContents();const i=document.createElement("img");i.className="emoji",i.src=v.imageUrl,i.alt=w,i.title=w,i.setAttribute("data-emoji-name",w),i.setAttribute("data-emoji-id",v.id),d.insertNode(i),d.setStartAfter(i),d.collapse(!0),t.removeAllRanges(),t.addRange(d)}f(!1),g(-1);const D=c(e.current.innerHTML);E(D);return}}}}f(!1),g(-1)}else{f(!0);const t=window.getSelection();if(t&&t.rangeCount>0){const s=t.getRangeAt(0),m=document.createRange();m.selectNodeContents(e.current),m.setEnd(s.startContainer,s.startOffset);const R=m.toString();g(R.length-1)}}else C&&a&&!/\w/.test(a)&&(f(!1),g(-1))}else(o==="deleteContentBackward"||o==="deleteContentForward")&&(f(!1),g(-1));const u=c(e.current.innerHTML);u.trim()||(e.current.innerHTML=""),E(u)},[c,E,b.emojis,C,p]);l.useEffect(()=>{if(!e.current)return;!c(e.current.innerHTML).trim()&&e.current.innerHTML!==""&&(e.current.innerHTML="")},[T,c]);const $=l.useCallback(r=>{if(h&&e.current&&c(e.current.innerHTML).length>=h&&!["Backspace","Delete","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r.key)){r.preventDefault();return}j==null||j(r)},[h,c,j]);return z.jsx(P,{id:M,ref:e,contentEditable:!N,onInput:I,onKeyDown:$,"data-placeholder":y,suppressContentEditableWarning:!0})}export{X as C};
