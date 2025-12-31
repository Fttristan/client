import{ad as b,w as f,j as e,ae as j,q as i,af as y,ag as v}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as t}from"./2R3b5JQuKIu9ouzzfEUO.js";import"./DMaOWi_7BvjHR9OOcqbD.js";import{u as A}from"./LiJY25P-VFx-37gB8DfS.js";import{M as w}from"./Dh1pI18XKqXPGMnhnqUq.js";const k=i.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,z=i.textarea`
	flex: 1;
	padding: 8px;
	border-radius: 4px;
	background-color: var(--background-secondary-alt);
	border: none;
	color: var(--text);
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	resize: none;
	outline: none;
`,B=y({reason:v().max(512,"Reason must be less than 512 characters")}).required();function q({target:o,type:R,...l}){var n,s;const d=A(),{register:c,handleSubmit:m,formState:{disabled:p,isLoading:u,isSubmitting:h}}=b({resolver:j(B)}),a=p||u||h,x=m(r=>{d.rest.put(f.guildBan(o.guild.id,o.user.id),void 0,void 0,r.reason?{"X-Audit-Log-Reason":r.reason}:void 0).then(()=>{t.pop("close")}).catch(g=>{console.error(g)})});return e.jsxs(w,{...l,title:`Ban '${(n=o.user)==null?void 0:n.username}'`,description:e.jsxs(k,{children:["Are you sure you want to ban ",e.jsxs("b",{children:["@",(s=o.user)==null?void 0:s.username]}),"? They won't be able to rejoin unless they are unbanned."]}),actions:[{onClick:x,children:e.jsx("span",{children:"Ban"}),palette:"danger",confirmation:!0,disabled:a,size:"small"},{onClick:()=>t.pop("close"),children:e.jsx("span",{children:"Cancel"}),palette:"link",disabled:a,size:"small"}],children:[e.jsx("img",{src:"https://media1.tenor.com/m/TG5OF7UkLasAAAAd/thanos-infinity.gif",loading:"lazy",alt:"Thanos Snap GIF",height:300,style:{marginBottom:20,borderRadius:8}}),e.jsx(z,{...c("reason"),id:"reason",name:"reason",placeholder:"Reason",maxLength:512})]})}export{q as B};
