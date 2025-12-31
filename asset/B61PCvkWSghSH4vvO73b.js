import{j as r,q as t}from"./YuA7MKX-N8BBDZOAxa77.js";const n=t.a`
	// remove the default underline
	text-decoration: none;
	// set the color to the primary color
	color: ${e=>e.color||"var(--primary-light)"};
	cursor: pointer;

	// remove the color when already visited because ew
	&:visited {
		color: ${e=>e.color||"var(--primary-light)"};
	}

	// when hovered, add underline
	&:hover {
		text-decoration: underline;
	}
`;function a(e){return r.jsx(n,{onContextMenu:o=>{o.stopPropagation()},...e})}export{a as L};
