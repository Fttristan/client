import{j as e,q as n}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as r}from"./2R3b5JQuKIu9ouzzfEUO.js";import"./DMaOWi_7BvjHR9OOcqbD.js";import t from"./C1ay08-o_RwlpkYnMo7b.js";import{M as i}from"./Dh1pI18XKqXPGMnhnqUq.js";const s=n.div`
	background-color: var(--background-secondary);
	margin-top: 16px;
	box-shadow: 0 0 0 1px var(--background-tertiary), 0 2px 10px 0 var(--background-tertiary);
	border-radius: 4px;
	overflow: hidden;
	padding: 5px 6px;
`;function x({target:o,...a}){return e.jsx(i,{...a,title:"Delete Message",description:"Are you sure you want to delete this message?",actions:[{onClick:()=>{r.pop("close")},children:e.jsx("span",{children:"Cancel"}),palette:"link",size:"small",confirmation:!0},{onClick:async()=>{await o.delete(),r.pop("close")},children:e.jsx("span",{children:"Delete"}),palette:"danger",size:"small"}],children:e.jsx(s,{children:e.jsx(t,{content:o.content})})})}export{x as D};
