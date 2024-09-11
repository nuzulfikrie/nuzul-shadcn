import{j as ne}from"./jsx-runtime-DWbWqHZ-.js";import{r as de}from"./index-l2PZgWEW.js";import{c as le,S as ue}from"./utils-Cladc653.js";function ae(t){var r,e,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(e=ae(t[r]))&&(n&&(n+=" "),n+=e);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function me(){for(var t,r,e=0,n="";e<arguments.length;)(t=arguments[e++])&&(r=ae(t))&&(n&&(n+=" "),n+=r);return n}const k=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,j=me,fe=(t,r)=>e=>{var n;if((r==null?void 0:r.variants)==null)return j(t,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:d,defaultVariants:s}=r,B=Object.keys(d).map(a=>{const o=e==null?void 0:e[a],c=s==null?void 0:s[a];if(o===null)return null;const i=k(o)||k(c);return d[a][i]}),z=e&&Object.entries(e).reduce((a,o)=>{let[c,i]=o;return i===void 0||(a[c]=i),a},{}),oe=r==null||(n=r.compoundVariants)===null||n===void 0?void 0:n.reduce((a,o)=>{let{class:c,className:i,...ie}=o;return Object.entries(ie).every(ce=>{let[D,S]=ce;return Array.isArray(S)?S.includes({...s,...z}[D]):{...s,...z}[D]===S})?[...a,c,i]:a},[]);return j(t,B,oe,e==null?void 0:e.class,e==null?void 0:e.className)},ve=fe("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),x=de.forwardRef(({className:t,variant:r,size:e,asChild:n=!1,...d},s)=>{const B=n?ue:"button";return ne.jsx(B,{className:le(ve({variant:r,size:e,className:t})),ref:s,...d})});x.displayName="Button";x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}};function se({variant:t,size:r,...e}){return ne.jsx(x,{variant:t,size:r,...e,children:e.children||"Button example"})}se.__docgenInfo={description:"",methods:[],displayName:"ShadcnButton",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}},composes:["VariantProps"]};const ye={title:"Components/ShadcnButton",component:se,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"],description:"Select the button variant"},size:{control:"select",options:["default","sm","lg","icon"],description:"Select the button size"},disabled:{control:"boolean",description:"Disable the button"},children:{control:"text",description:"Button label"}}},l={args:{variant:"default",size:"default",children:"Default Button"}},u={args:{variant:"destructive",size:"default",children:"Destructive Button"}},m={args:{variant:"outline",size:"default",children:"Outline Button"}},f={args:{variant:"secondary",size:"default",children:"Secondary Button"}},v={args:{variant:"ghost",size:"default",children:"Ghost Button"}},p={args:{variant:"link",size:"default",children:"Link Button"}},g={args:{size:"lg",children:"Large Button"}},h={args:{size:"sm",children:"Small Button"}},y={args:{size:"icon",children:"🔍"}},b={args:{variant:"default",size:"default",disabled:!0,children:"Disabled Button"}};var N,V,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button'
  }
}`,...(w=(V=l.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var C,O,L;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button'
  }
}`,...(L=(O=u.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var _,A,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button'
  }
}`,...(E=(A=m.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,I,P;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button'
  }
}`,...(P=(I=f.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var T,q,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button'
  }
}`,...(R=(q=v.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var K,U,W;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button'
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var F,H,J;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: 'Large Button'
  }
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var M,Q,X;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: 'Small Button'
  }
}`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'icon',
    children: '🔍' // Example icon, replace with your icon component or emoji
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(re=(te=b.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const be=["Default","Destructive","Outline","Secondary","Ghost","Link","Large","Small","Icon","Disabled"];export{l as Default,u as Destructive,b as Disabled,v as Ghost,y as Icon,g as Large,p as Link,m as Outline,f as Secondary,h as Small,be as __namedExportsOrder,ye as default};
