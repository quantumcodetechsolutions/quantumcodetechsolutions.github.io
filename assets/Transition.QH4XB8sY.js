import{R as x}from"./index.RYns6xqu.js";import{R as v}from"./index.Cp7Odyem.js";function S(){return S=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var i in r)({}).hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},S.apply(null,arguments)}function k(a,s){if(a==null)return{};var r={};for(var i in a)if({}.hasOwnProperty.call(a,i)){if(s.includes(i))continue;r[i]=a[i]}return r}function b(a,s){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},b(a,s)}function y(a,s){a.prototype=Object.create(s.prototype),a.prototype.constructor=a,b(a,s)}const N={disabled:!1},g=x.createContext(null);var R=function(s){return s.scrollTop},m="unmounted",l="exited",f="entering",h="entered",O="exiting",p=function(a){y(s,a);function s(i,e){var t;t=a.call(this,i,e)||this;var n=e,o=n&&!n.isMounting?i.enter:i.appear,u;return t.appearStatus=null,i.in?o?(u=l,t.appearStatus=f):u=h:i.unmountOnExit||i.mountOnEnter?u=m:u=l,t.state={status:u},t.nextCallback=null,t}s.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:l}:null};var r=s.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=O)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t,n,o;return t=n=o=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,o=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:o}},r.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&R(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:m})},r.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,u=this.props.nodeRef?[o]:[v.findDOMNode(this),o],c=u[0],E=u[1],T=this.getTimeouts(),C=o?T.appear:T.enter;if(!e&&!n||N.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(C,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||N.disabled){this.safeSetState({status:l},function(){e.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:O},function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(o)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),o=e==null&&!this.props.addEndListener;if(!n||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=u[0],E=u[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=k(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(g.Provider,{value:null},typeof n=="function"?n(e,o):x.cloneElement(x.Children.only(n),o))},s}(x.Component);p.contextType=g;p.propTypes={};function d(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};p.UNMOUNTED=m;p.EXITED=l;p.ENTERING=f;p.ENTERED=h;p.EXITING=O;export{l as E,p as T,k as _,O as a,f as b,h as c,S as d,y as e,R as f};
