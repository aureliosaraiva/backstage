/*! For license information please see e2a8e8b3.4182295d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[684904],{308411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(824246),o=t(511151);const s={id:"plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node"},c=void 0,a={id:"reference/plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node",source:"@site/../docs/reference/plugin-catalog-node.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-node",permalink:"/docs/reference/plugin-catalog-node",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-node.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-node",title:"@backstage/plugin-catalog-node",description:"API Reference for @backstage/plugin-catalog-node"}},i={},l=[{value:"Functions",id:"functions",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Variables",id:"variables",level:2},{value:"Type Aliases",id:"type-aliases",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node",children:(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-node"})})]}),"\n",(0,r.jsxs)(n.p,{children:["The catalog-backend-node module for ",(0,r.jsx)(n.code,{children:"@backstage/plugin-catalog-backend"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspectolocationentity",children:"locationSpecToLocationEntity(opts)"})}),(0,r.jsx)(n.td,{children:"A standard way of producing a machine generated Location kind entity for a location."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspectometadataname",children:"locationSpecToMetadataName(location)"})}),(0,r.jsx)(n.td,{children:"A standard way of producing a machine generated name for a location."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Interface"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorcache",children:"CatalogProcessorCache"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.p,{children:"A cache for storing data during processing."}),(0,r.jsx)(n.p,{children:"The values stored in the cache are always local to each processor, meaning no processor can see cache values from other processors."}),(0,r.jsx)(n.p,{children:"The cache instance provided to the CatalogProcessor is also scoped to the entity being processed, meaning that each processor run can't see cache values from processing runs for other entities."}),(0,r.jsx)(n.p,{children:"Values that are set during a processing run will only be visible in the directly following run. The cache will be overwritten every run unless no new cache items are written, in which case the existing values remain in the cache."})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityprovider",children:"EntityProvider"})}),(0,r.jsxs)(n.td,{children:["An entity provider is able to provide entities to the catalog. See ",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"https://backstage.io/docs/features/software-catalog/life-of-an-entity"})," for more details."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityproviderconnection",children:"EntityProviderConnection"})}),(0,r.jsx)(n.td,{children:"The connection between the catalog and the entity provider. Entity providers use this connection to add and remove entities from the catalog."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Variable"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.processingresult",children:"processingResult"})}),(0,r.jsx)(n.td,{children:"Factory functions for the standard processing result types."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"type-aliases",children:"Type Aliases"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type Alias"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.analyzeoptions",children:"AnalyzeOptions"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessor",children:"CatalogProcessor"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessoremit",children:"CatalogProcessorEmit"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorentityresult",children:"CatalogProcessorEntityResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorerrorresult",children:"CatalogProcessorErrorResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorlocationresult",children:"CatalogProcessorLocationResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorparser",children:"CatalogProcessorParser"})}),(0,r.jsx)(n.td,{children:"A parser, that is able to take the raw catalog descriptor data and turn it into the actual result pieces. The default implementation performs a YAML document parsing."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrefreshkeysresult",children:"CatalogProcessorRefreshKeysResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorrelationresult",children:"CatalogProcessorRelationResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.catalogprocessorresult",children:"CatalogProcessorResult"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.deferredentity",children:"DeferredEntity"})}),(0,r.jsx)(n.td,{children:"Entities that are not yet processed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entitiessearchfilter",children:"EntitiesSearchFilter"})}),(0,r.jsx)(n.td,{children:"Matches rows in the search table."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityfilter",children:"EntityFilter"})}),(0,r.jsx)(n.td,{children:"A filter expression for entities."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityprovidermutation",children:"EntityProviderMutation"})}),(0,r.jsx)(n.td,{children:"A 'full' mutation replaces all existing entities created by this entity provider with new ones. A 'delta' mutation can both add and remove entities provided by this provider. Previously provided entities from a 'full' mutation are not removed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityproviderrefreshoptions",children:"EntityProviderRefreshOptions"})}),(0,r.jsx)(n.td,{children:"The options given to an entity refresh operation."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.entityrelationspec",children:"EntityRelationSpec"})}),(0,r.jsx)(n.td,{children:"Holds the relation data for entities."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.locationspec",children:"LocationSpec"})}),(0,r.jsx)(n.td,{children:"Holds the entity location information."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolver",children:"PlaceholderResolver"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverparams",children:"PlaceholderResolverParams"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverread",children:"PlaceholderResolverRead"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.placeholderresolverresolveurl",children:"PlaceholderResolverResolveUrl"})}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/reference/plugin-catalog-node.scmlocationanalyzer",children:"ScmLocationAnalyzer"})}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!i.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:a.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,g={};function j(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}function y(){}function v(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||p}j.prototype.isReactComponent={},j.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=j.prototype;var m=v.prototype=new y;m.constructor=v,x(m,j.prototype),m.isPureReactComponent=!0;var b=Array.isArray,_=Object.prototype.hasOwnProperty,k={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var o,s={},c=null,a=null;if(null!=n)for(o in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(c=""+n.key),n)_.call(n,o)&&!R.hasOwnProperty(o)&&(s[o]=n[o]);var i=arguments.length-2;if(1===i)s.children=r;else if(1<i){for(var l=Array(i),d=0;d<i;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===s[o]&&(s[o]=i[o]);return{$$typeof:t,type:e,key:c,ref:a,props:s,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var S=/\/+/g;function P(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,s,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case r:i=!0}}if(i)return c=c(i=e),e=""===s?"."+P(i,0):s,b(c)?(o="",null!=e&&(o=e.replace(S,"$&/")+"/"),C(c,n,o,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(S,"$&/")+"/")+e)),n.push(c)),1;if(i=0,s=""===s?".":s+":",b(e))for(var l=0;l<e.length;l++){var d=s+P(a=e[l],l);i+=C(a,n,o,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(a=e.next()).done;)i+=C(a=a.value,n,o,d=s+P(a,l++),c);else if("object"===a)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function A(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=j,n.Fragment=o,n.Profiler=c,n.PureComponent=v,n.StrictMode=s,n.Suspense=d,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=x({},e.props),s=e.key,c=e.ref,a=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,a=k.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in n)_.call(n,l)&&!R.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==i?i[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){i=Array(l);for(var d=0;d<l;d++)i[d]=arguments[d+2];o.children=i}return{$$typeof:t,type:e.type,key:s,ref:c,props:o,_owner:a}},n.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},n.createElement=w,n.createFactory=function(e){var n=w.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:A}},n.memo=function(e,n){return{$$typeof:u,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=T.transition;T.transition={};try{e()}finally{T.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(667294);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);