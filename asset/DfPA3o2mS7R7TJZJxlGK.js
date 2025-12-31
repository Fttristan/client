import{q as a,o as l,j as e,f as d,R as p,_ as f}from"./YuA7MKX-N8BBDZOAxa77.js";import{M as m}from"./Dq5XuKB9w2CI2BHWJqtY.js";import{u as c}from"./LiJY25P-VFx-37gB8DfS.js";import{C as x}from"./RzQK5gOFCAaM1irpjd0P.js";import{M as u}from"./C0ofvvnDyqvdOCIw6poK.js";import{M as h}from"./BahgDdYV3aWNslUOOn1-.js";import{T as j}from"./DjBOI3N0JFyGleaijQJ_.js";const v=a.div`
	display: flex;
	flex-direction: row;
	flex: 1 1 auto;
	overflow: hidden;
`,s=a.div`
	display: flex;
	flex-direction: column;
	background-color: var(--background-primary-alt);
	flex: 1 1 auto;
	overflow: hidden;
`,C=a.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 auto;
	position: relative;
	overflow: hidden;
`;function y({channel:o,guild:r}){const t=c().readStateStore.get(o.id);return d.useEffect(()=>{o.markAsRead()},[o,r]),e.jsxs(C,{children:[e.jsx(h,{guild:r,channel:o,before:t==null?void 0:t.lastMessageId}),e.jsx(u,{channel:o,guild:r}),e.jsx(j,{channel:o})]})}const g=l(o=>{const{memberListVisible:r}=c();return e.jsxs(v,{children:[e.jsx(y,{...o}),r&&e.jsx(m,{})]})});function w(){const o=c(),{activeChannel:r,activeGuild:n,activeChannelId:t,activeGuildId:i}=o;return p.useEffect(()=>{!r||!n||t==="@me"||f(()=>{o.gateway.onChannelOpen(i,t)})},[r,n]),i&&i==="@me"?e.jsx(s,{children:e.jsx("span",{style:{padding:"1rem",userSelect:"none"},children:"Home Section Placeholder"})}):!n||!r?e.jsx(s,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"Unknown Guild or Channel"})}):r.hasPermission("VIEW_CHANNEL")?e.jsxs(s,{children:[e.jsx(x,{channel:r}),e.jsx(g,{channel:r,guild:n})]}):e.jsx(s,{children:e.jsx("span",{style:{color:"var(--text-secondary)",fontSize:"1.5rem",margin:"auto"},children:"You do not have permission to view this channel"})})}const L=l(w);export{L as C};
