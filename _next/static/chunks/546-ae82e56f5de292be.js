(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{6087:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},1901:function(e,t,n){"use strict";n.d(t,{oC:function(){return ta},VY:function(){return tt},ZA:function(){return tn},ck:function(){return to},wU:function(){return tl},__:function(){return tr},Uv:function(){return te},Ee:function(){return tu},Rk:function(){return tc},fC:function(){return e3},Z0:function(){return ti},Tr:function(){return td},tu:function(){return tf},fF:function(){return ts},xz:function(){return e9}});var r=n(2110),o=n(2265),a=n(4991),u=n(1266),c=n(4104),l=n(9310),i=n(9586),d=n(7533),s=n(3876),f=n(1260),p=n(6007),m=n(8082),v=n(8687),g=n(5341),h=n(7881),w=n(4887),E=n(2618);let M=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,a]=(0,o.useState)(),u=(0,o.useRef)({}),c=(0,o.useRef)(e),l=(0,o.useRef)("none"),[i,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return(0,o.useEffect)(()=>{let e=_(u.current);l.current="mounted"===i?e:"none"},[i]),(0,E.b)(()=>{let t=u.current,n=c.current;if(n!==e){let r=l.current,o=_(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),c.current=e}},[e,d]),(0,E.b)(()=>{if(r){let e=e=>{let t=_(u.current).includes(e.animationName);e.target===r&&t&&(0,w.flushSync)(()=>d("ANIMATION_END"))},t=e=>{e.target===r&&(l.current=_(u.current))};return r.addEventListener("animationstart",t),r.addEventListener("animationcancel",e),r.addEventListener("animationend",e),()=>{r.removeEventListener("animationstart",t),r.removeEventListener("animationcancel",e),r.removeEventListener("animationend",e)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(i),ref:(0,o.useCallback)(e=>{e&&(u.current=getComputedStyle(e)),a(e)},[])}}(t),a="function"==typeof n?n({present:r.isPresent}):o.Children.only(n),c=(0,u.e)(r.ref,a.ref);return"function"==typeof n||r.isPresent?(0,o.cloneElement)(a,{ref:c}):null};function _(e){return(null==e?void 0:e.animationName)||"none"}M.displayName="Presence";var b=n(9830);let y="rovingFocusGroup.onEntryFocus",C={bubbles:!1,cancelable:!0},R="RovingFocusGroup",[D,T,k]=(0,d.B)(R),[I,O]=(0,c.b)(R,[k]),[S,x]=I(R),P=(0,o.forwardRef)((e,t)=>(0,o.createElement)(D.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(D.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(F,(0,r.Z)({},e,{ref:t}))))),F=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:c,loop:d=!1,dir:f,currentTabStopId:p,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:g,...h}=e,w=(0,o.useRef)(null),E=(0,u.e)(t,w),M=(0,s.gm)(f),[_=null,R]=(0,l.T)({prop:p,defaultProp:m,onChange:v}),[D,k]=(0,o.useState)(!1),I=(0,b.W)(g),O=T(n),x=(0,o.useRef)(!1),[P,F]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=w.current;if(e)return e.addEventListener(y,I),()=>e.removeEventListener(y,I)},[I]),(0,o.createElement)(S,{scope:n,orientation:c,dir:M,loop:d,currentTabStopId:_,onItemFocus:(0,o.useCallback)(e=>R(e),[R]),onItemShiftTab:(0,o.useCallback)(()=>k(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>F(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>F(e=>e-1),[])},(0,o.createElement)(i.WV.div,(0,r.Z)({tabIndex:D||0===P?-1:0,"data-orientation":c},h,{ref:E,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(y,C);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable);L([e.find(e=>e.active),e.find(e=>e.id===_),...e].filter(Boolean).map(e=>e.ref.current))}}x.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>k(!1))})))}),A=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:c=!1,tabStopId:l,...d}=e,s=(0,v.M)(),f=l||s,p=x("RovingFocusGroupItem",n),m=p.currentTabStopId===f,g=T(n),{onFocusableItemAdd:h,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(u)return h(),()=>w()},[u,h,w]),(0,o.createElement)(D.ItemSlot,{scope:n,id:f,focusable:u,active:c},(0,o.createElement)(i.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return Z[o]}(e,p.orientation,p.dir);if(void 0!==t){e.preventDefault();let o=g().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=p.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>L(o))}})})))}),Z={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function L(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}var N=n(9143),K=n(6674),U=n(7225);let V=["Enter"," "],G=["ArrowUp","PageDown","End"],W=["ArrowDown","PageUp","Home",...G],B={ltr:[...V,"ArrowRight"],rtl:[...V,"ArrowLeft"]},X={ltr:["ArrowLeft"],rtl:["ArrowRight"]},z="Menu",[H,Y,j]=(0,d.B)(z),[J,q]=(0,c.b)(z,[j,g.D7,O]),Q=(0,g.D7)(),$=O(),[ee,et]=J(z),[en,er]=J(z),eo=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e,u=Q(n);return(0,o.createElement)(g.ee,(0,r.Z)({},u,a,{ref:t}))}),ea="MenuPortal",[eu,ec]=J(ea,{forceMount:void 0}),el="MenuContent",[ei,ed]=J(el),es=(0,o.forwardRef)((e,t)=>{let n=ec(el,e.__scopeMenu),{forceMount:a=n.forceMount,...u}=e,c=et(el,e.__scopeMenu),l=er(el,e.__scopeMenu);return(0,o.createElement)(H.Provider,{scope:e.__scopeMenu},(0,o.createElement)(M,{present:a||c.open},(0,o.createElement)(H.Slot,{scope:e.__scopeMenu},l.modal?(0,o.createElement)(ef,(0,r.Z)({},u,{ref:t})):(0,o.createElement)(ep,(0,r.Z)({},u,{ref:t})))))}),ef=(0,o.forwardRef)((e,t)=>{let n=et(el,e.__scopeMenu),c=(0,o.useRef)(null),l=(0,u.e)(t,c);return(0,o.useEffect)(()=>{let e=c.current;if(e)return(0,K.Ry)(e)},[]),(0,o.createElement)(em,(0,r.Z)({},e,{ref:l,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),ep=(0,o.forwardRef)((e,t)=>{let n=et(el,e.__scopeMenu);return(0,o.createElement)(em,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),em=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:c=!1,trapFocus:l,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:v,onEscapeKeyDown:h,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:M,onDismiss:_,disableOutsideScroll:b,...y}=e,C=et(el,n),R=er(el,n),D=Q(n),T=$(n),k=Y(n),[I,O]=(0,o.useState)(null),S=(0,o.useRef)(null),x=(0,u.e)(t,S,C.onContentChange),F=(0,o.useRef)(0),A=(0,o.useRef)(""),Z=(0,o.useRef)(0),L=(0,o.useRef)(null),K=(0,o.useRef)("right"),V=(0,o.useRef)(0),B=b?U.Z:o.Fragment,X=b?{as:N.g7,allowPinchZoom:!0}:void 0,z=e=>{var t,n;let r=A.current+e,o=k().filter(e=>!e.disabled),a=document.activeElement,u=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,c=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let u=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return u!==n?u:void 0}(o.map(e=>e.textValue),r,u),l=null===(n=o.find(e=>e.textValue===c))||void 0===n?void 0:n.ref.current;!function e(t){A.current=t,window.clearTimeout(F.current),""!==t&&(F.current=window.setTimeout(()=>e(""),1e3))}(r),l&&setTimeout(()=>l.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(F.current),[]),(0,p.EW)();let H=(0,o.useCallback)(e=>{var t,n,r;return K.current===(null===(t=L.current)||void 0===t?void 0:t.side)&&!!(r=null===(n=L.current)||void 0===n?void 0:n.area)&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let u=t[e].x,c=t[e].y,l=t[a].x,i=t[a].y;c>r!=i>r&&n<(l-u)*(r-c)/(i-c)+u&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,o.createElement)(ei,{scope:n,searchRef:A,onItemEnter:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),onItemLeave:(0,o.useCallback)(e=>{var t;H(e)||(null===(t=S.current)||void 0===t||t.focus(),O(null))},[H]),onTriggerLeave:(0,o.useCallback)(e=>{H(e)&&e.preventDefault()},[H]),pointerGraceTimerRef:Z,onPointerGraceIntentChange:(0,o.useCallback)(e=>{L.current=e},[])},(0,o.createElement)(B,X,(0,o.createElement)(m.M,{asChild:!0,trapped:l,onMountAutoFocus:(0,a.M)(i,e=>{var t;e.preventDefault(),null===(t=S.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:h,onPointerDownOutside:w,onFocusOutside:E,onInteractOutside:M,onDismiss:_},(0,o.createElement)(P,(0,r.Z)({asChild:!0},T,{dir:R.dir,orientation:"vertical",loop:c,currentTabStopId:I,onCurrentTabStopIdChange:O,onEntryFocus:(0,a.M)(v,e=>{R.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(g.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":eL(C.open),"data-radix-menu-content":"",dir:R.dir},D,y,{ref:x,style:{outline:"none",...y.style},onKeyDown:(0,a.M)(y.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&z(e.key));let o=S.current;if(e.target!==o||!W.includes(e.key))return;e.preventDefault();let a=k().filter(e=>!e.disabled).map(e=>e.ref.current);G.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(F.current),A.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,eU(e=>{let t=e.target,n=V.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>V.current?"right":"left";K.current=t,V.current=e.clientX}}))})))))))}),ev=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"group"},a,{ref:t}))}),eg=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({},a,{ref:t}))}),eh="MenuItem",ew="menu.itemSelect",eE=(0,o.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:c,...l}=e,d=(0,o.useRef)(null),s=er(eh,e.__scopeMenu),f=ed(eh,e.__scopeMenu),p=(0,u.e)(t,d),m=(0,o.useRef)(!1);return(0,o.createElement)(eM,(0,r.Z)({},l,{ref:p,disabled:n,onClick:(0,a.M)(e.onClick,()=>{let e=d.current;if(!n&&e){let t=new CustomEvent(ew,{bubbles:!0,cancelable:!0});e.addEventListener(ew,e=>null==c?void 0:c(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&V.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),eM=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:c=!1,textValue:l,...d}=e,s=ed(eh,n),f=$(n),p=(0,o.useRef)(null),m=(0,u.e)(t,p),[v,g]=(0,o.useState)(!1),[h,w]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var t;w((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[d.children]),(0,o.createElement)(H.ItemSlot,{scope:n,disabled:c,textValue:null!=l?l:h},(0,o.createElement)(A,(0,r.Z)({asChild:!0},f,{focusable:!c}),(0,o.createElement)(i.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":c||void 0,"data-disabled":c?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,eU(e=>{c?s.onItemLeave(e):(s.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus())})),onPointerLeave:(0,a.M)(e.onPointerLeave,eU(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>g(!0)),onBlur:(0,a.M)(e.onBlur,()=>g(!1))}))))}),e_=(0,o.forwardRef)((e,t)=>{let{checked:n=!1,onCheckedChange:u,...c}=e;return(0,o.createElement)(eT,{scope:e.__scopeMenu,checked:n},(0,o.createElement)(eE,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eN(n)?"mixed":n},c,{ref:t,"data-state":eK(n),onSelect:(0,a.M)(c.onSelect,()=>null==u?void 0:u(!!eN(n)||!n),{checkForDefaultPrevented:!1})})))}),[eb,ey]=J("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),eC=(0,o.forwardRef)((e,t)=>{let{value:n,onValueChange:a,...u}=e,c=(0,b.W)(a);return(0,o.createElement)(eb,{scope:e.__scopeMenu,value:n,onValueChange:c},(0,o.createElement)(ev,(0,r.Z)({},u,{ref:t})))}),eR=(0,o.forwardRef)((e,t)=>{let{value:n,...u}=e,c=ey("MenuRadioItem",e.__scopeMenu),l=n===c.value;return(0,o.createElement)(eT,{scope:e.__scopeMenu,checked:l},(0,o.createElement)(eE,(0,r.Z)({role:"menuitemradio","aria-checked":l},u,{ref:t,"data-state":eK(l),onSelect:(0,a.M)(u.onSelect,()=>{var e;return null===(e=c.onValueChange)||void 0===e?void 0:e.call(c,n)},{checkForDefaultPrevented:!1})})))}),eD="MenuItemIndicator",[eT,ek]=J(eD,{checked:!1}),eI=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,forceMount:a,...u}=e,c=ek(eD,n);return(0,o.createElement)(M,{present:a||eN(c.checked)||!0===c.checked},(0,o.createElement)(i.WV.span,(0,r.Z)({},u,{ref:t,"data-state":eK(c.checked)})))}),eO=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(i.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:t}))}),eS=((e,t)=>{let{__scopeMenu:n,...a}=e,u=Q(n);return(0,o.createElement)(g.Eh,(0,r.Z)({},u,a,{ref:t}))},"MenuSub"),[ex,eP]=J(eS),eF="MenuSubTrigger",eA=(0,o.forwardRef)((e,t)=>{let n=et(eF,e.__scopeMenu),c=er(eF,e.__scopeMenu),l=eP(eF,e.__scopeMenu),i=ed(eF,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(eo,(0,r.Z)({asChild:!0},p),(0,o.createElement)(eM,(0,r.Z)({id:l.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":l.contentId,"data-state":eL(n.open)},e,{ref:(0,u.F)(t,l.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,eU(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,eU(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,u=o[a?"left":"right"],c=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:c,y:o.top},{x:c,y:o.bottom},{x:u,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&B[c.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})))}),eZ=(0,o.forwardRef)((e,t)=>{let n=ec(el,e.__scopeMenu),{forceMount:c=n.forceMount,...l}=e,i=et(el,e.__scopeMenu),d=er(el,e.__scopeMenu),s=eP("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,u.e)(t,f);return(0,o.createElement)(H.Provider,{scope:e.__scopeMenu},(0,o.createElement)(M,{present:c||i.open},(0,o.createElement)(H.Slot,{scope:e.__scopeMenu},(0,o.createElement)(em,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},l,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=X[d.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function eL(e){return e?"open":"closed"}function eN(e){return"indeterminate"===e}function eK(e){return eN(e)?"indeterminate":e?"checked":"unchecked"}function eU(e){return t=>"mouse"===t.pointerType?e(t):void 0}let eV=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:a,onOpenChange:u,modal:c=!0}=e,l=Q(t),[i,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,b.W)(u),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,o.createElement)(g.fC,l,(0,o.createElement)(ee,{scope:t,open:n,onOpenChange:p,content:i,onContentChange:d},(0,o.createElement)(en,{scope:t,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:c},r)))},eG=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:a}=e,u=et(ea,t);return(0,o.createElement)(eu,{scope:t,forceMount:n},(0,o.createElement)(M,{present:n||u.open},(0,o.createElement)(h.h,{asChild:!0,container:a},r)))},eW=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:a}=e,u=et(eS,t),c=Q(t),[l,i]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,b.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,o.createElement)(g.fC,c,(0,o.createElement)(ee,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(ex,{scope:t,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:l,onTriggerChange:i},n)))},eB="DropdownMenu",[eX,ez]=(0,c.b)(eB,[q]),eH=q(),[eY,ej]=eX(eB),eJ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:c=!1,...l}=e,d=ej("DropdownMenuTrigger",n),s=eH(n);return(0,o.createElement)(eo,(0,r.Z)({asChild:!0},s),(0,o.createElement)(i.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":c?"":void 0,disabled:c},l,{ref:(0,u.F)(t,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{c||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!c&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eq=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,c=ej("DropdownMenuContent",n),l=eH(n),i=(0,o.useRef)(!1);return(0,o.createElement)(es,(0,r.Z)({id:c.contentId,"aria-labelledby":c.triggerId},l,u,{ref:t,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=c.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!c.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eQ=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(ev,(0,r.Z)({},u,a,{ref:t}))}),e$=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eg,(0,r.Z)({},u,a,{ref:t}))}),e0=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eE,(0,r.Z)({},u,a,{ref:t}))}),e1=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(e_,(0,r.Z)({},u,a,{ref:t}))}),e8=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eC,(0,r.Z)({},u,a,{ref:t}))}),e2=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eR,(0,r.Z)({},u,a,{ref:t}))}),e7=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eI,(0,r.Z)({},u,a,{ref:t}))}),e6=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eO,(0,r.Z)({},u,a,{ref:t}))}),e5=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eA,(0,r.Z)({},u,a,{ref:t}))}),e4=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=eH(n);return(0,o.createElement)(eZ,(0,r.Z)({},u,a,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e3=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:u,defaultOpen:c,onOpenChange:i,modal:d=!0}=e,s=eH(t),f=(0,o.useRef)(null),[p=!1,m]=(0,l.T)({prop:u,defaultProp:c,onChange:i});return(0,o.createElement)(eY,{scope:t,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eV,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),n))},e9=eJ,te=e=>{let{__scopeDropdownMenu:t,...n}=e,a=eH(t);return(0,o.createElement)(eG,(0,r.Z)({},a,n))},tt=eq,tn=eQ,tr=e$,to=e0,ta=e1,tu=e8,tc=e2,tl=e7,ti=e6,td=e=>{let{__scopeDropdownMenu:t,children:n,open:a,onOpenChange:u,defaultOpen:c}=e,i=eH(t),[d=!1,s]=(0,l.T)({prop:a,defaultProp:c,onChange:u});return(0,o.createElement)(eW,(0,r.Z)({},i,{open:d,onOpenChange:s}),n)},ts=e5,tf=e4},4848:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return d}});var r=n(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",u="undefined"==typeof window,c=r.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=r.useContext(c))?e:l},d=e=>r.useContext(c)?e.children:r.createElement(f,{...e}),s=["light","dark"],f=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:u=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:d=s,defaultTheme:f=u?"system":"light",attribute:h="data-theme",value:w,children:E,nonce:M}=e,[_,b]=r.useState(()=>m(i,f)),[y,C]=r.useState(()=>m(i)),R=w?Object.values(w):d,D=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&u&&(t=g());let r=w?w[t]:t,a=n?v():null,c=document.documentElement;if("class"===h?(c.classList.remove(...R),r&&c.classList.add(r)):r?c.setAttribute(h,r):c.removeAttribute(h),l){let e=o.includes(f)?f:null,n=o.includes(t)?t:e;c.style.colorScheme=n}null==a||a()},[]),T=r.useCallback(e=>{let t="function"==typeof e?e(e):e;b(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),k=r.useCallback(e=>{C(g(e)),"system"===_&&u&&!t&&D("system")},[_,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(k),k(e),()=>e.removeListener(k)},[k]),r.useEffect(()=>{let e=e=>{e.key===i&&T(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),r.useEffect(()=>{D(null!=t?t:_)},[t,_]);let I=r.useMemo(()=>({theme:_,setTheme:T,forcedTheme:t,resolvedTheme:"system"===_?y:_,themes:u?[...d,"system"]:d,systemTheme:u?y:void 0}),[_,T,t,y,u,d]);return r.createElement(c.Provider,{value:I},r.createElement(p,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:u,enableColorScheme:l,storageKey:i,themes:d,defaultTheme:f,attribute:h,value:w,children:E,attrs:R,nonce:M}),E)},p=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:u,enableSystem:c,enableColorScheme:l,defaultTheme:i,value:d,attrs:s,nonce:f}=e,p="system"===i,m="class"===u?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(s.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(u,"',s='setAttribute';"),v=l?(o.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=d?d[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),c="";return l&&n&&!t&&o.includes(e)&&(c+="d.style.colorScheme = '".concat(e,"';")),"class"===u?t||r?c+="c.add(".concat(a,")"):c+="null":r&&(c+="d[s](n,".concat(a,")")),c},h=t?"!function(){".concat(m).concat(g(t),"}()"):c?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}").concat(p?"":"else{"+g(i,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(g(d?"x[e]":"e",!0),"}else{").concat(g(i,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:h}})}),m=(e,t)=>{let n;if(!u){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);