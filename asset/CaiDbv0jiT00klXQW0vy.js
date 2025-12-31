import{ad as b,w as f,j as e,ae as k,q as t,af as j,ag as v}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as i}from"./2R3b5JQuKIu9ouzzfEUO.js";import"./DMaOWi_7BvjHR9OOcqbD.js";import{u as w}from"./LiJY25P-VFx-37gB8DfS.js";import{M as y}from"./Dh1pI18XKqXPGMnhnqUq.js";const z=t.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
	margin-top: 8px;
`,M=t.textarea`
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
`,R=j({reason:v().max(512,"Reason must be less than 512 characters")}).required();function T({target:o,...l}){var s,a;const c=w(),{register:d,control:S,handleSubmit:m,formState:{disabled:u,isLoading:p,isSubmitting:h}}=b({resolver:k(R)}),r=u||p||h,x=m(n=>{c.rest.delete(f.guildMember(o.guild.id,o.user.id),void 0,n.reason?{"X-Audit-Log-Reason":n.reason}:void 0).then(()=>{i.pop("close")}).catch(g=>{console.error(g)})});return e.jsx(y,{...l,title:`Kick ${(s=o.user)==null?void 0:s.username} from Guild`,description:e.jsxs(z,{children:["Are you sure you want to kick ",e.jsxs("b",{children:["@",(a=o.user)==null?void 0:a.username]})," from the guild? They will be able to rejoin again with a new invite."]}),actions:[{onClick:x,children:e.jsx("span",{children:"Kick"}),palette:"danger",confirmation:!0,disabled:r,size:"small"},{onClick:()=>i.pop("close"),children:e.jsx("span",{children:"Cancel"}),palette:"link",disabled:r,size:"small"}],children:e.jsx(M,{...d("reason"),id:"reason",name:"reason",placeholder:"Reason",maxLength:512})})}export{T as K};
