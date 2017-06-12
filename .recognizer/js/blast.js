/**
 * This code has been instrumented using Recognizer
 * https://github.com/equiet/recognizer
 */

var __recognizer312285488 = (function () {
    'use strict';

    var global = this;

    function Tracer() {
        this._calls = [];
        this._args = [];
        this.global = global;

        this._probeValues = {};
    }
    Tracer.prototype = {
        logEntry: function (location, args) {
            this._calls.push({
                index: this._calls.length,
                position: location,
                // args: Array.prototype.slice.call(args),
                argsCount: args.length,
                time: Date.now()
            });
            this._args.push(_.cloneDeep(args));
        },

        getCalls: function (since) {
            var calls = this._calls.filter(function(call) {
                return (since) ? call.time > since : true;
            });
            return stringify(calls);
        },

        getCallCount: function () {
            return this._calls.length;
        },

        logProbe: function (location, result) {
            this._probeValues[location.toString()] = _.cloneDeep(result);
            return result;
        },

        updateProbeValues: function () {
            var self = this;

            var probeIds = Object.keys(this._probeValues);
            var output = probeIds.map(function(probeId) {
               return {
                   id: probeId,
                   type: self.getType(self._probeValues[probeId])
               };
            });

            return stringify(output);
        },

        getType: function (value) {
            var type = typeof value;

            if (type === 'number' && isNaN(value)) {
                type = 'NaN';
            }
            if (type === null) {
                type = 'null';
            }

            return type;
        },

        test: function () {
            console.log('[recognizer tracer] test function run successfully');
        },

        connect: function () {
            return this;
        }
    };


    /**
     * JSON stringify with circular references
     * Copyright (c) Isaac Z. Schlueter ("Author")
     * The BSD License
     */
    function getSerialize(a,b){var c=[],d=[];return b=b||function(a,b){return"[Circular "+getPath(b,c,d)+"]"},function(e,f){var g=f;return"object"==typeof f&&f&&(-1!==c.indexOf(f)?g=b(e,f):(c.push(f),d.push(e))),a&&(g=a(e,g)),g}}
    function getPath(a,b,c){var d=b.indexOf(a),e=[c[d]];for(d--;d>=0;d--)b[d][e[0]]===a&&(a=b[d],e.unshift(c[d]));return"~"+e.join(".")}
    function stringify(a,b,c,d){return JSON.stringify(a,getSerialize(b,d),c)}stringify.getSerialize=getSerialize;


    /**
     * @license
     * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
     * Build: `lodash modern -o ./dist/lodash.js`
     */
    ;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
    }}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
    }function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
        t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
        return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
    }function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
    }if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
        De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
    }var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
    }function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
        if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
    });return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
        for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
        var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
    }),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
    }function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
        var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
        if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
    else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
    });return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
        for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
        return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
    }function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
        m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
        i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
    }catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
        var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
    }:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
        return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
        return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
    }},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
    },J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
        (Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
        return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
        return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
    });return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
    }else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
    })},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
    },J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
    })),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
    },J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
    }),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
    },J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
    },J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
    },J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
    }),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
    },J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
    },J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
        return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
        K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
        var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);


    return new Tracer();

}());


/**
 * Instrumented code
 */

;
(function ($, window, document, undefined) {
    __recognizer312285488.logEntry([
        7,
        2,
        7,
        10
    ], arguments);
    var IE = function () {
            __recognizer312285488.logEntry([
                14,
                14,
                14,
                22
            ], arguments);
            if (__recognizer312285488.logProbe([
                    15,
                    21,
                    15,
                    33
                ], __recognizer312285488.logProbe([
                    15,
                    12,
                    15,
                    20
                ], document).documentMode)) {
                return __recognizer312285488.logProbe([
                    16,
                    28,
                    16,
                    40
                ], __recognizer312285488.logProbe([
                    16,
                    19,
                    16,
                    27
                ], document).documentMode);
            } else {
                for (var i = 7; __recognizer312285488.logProbe([
                        18,
                        28,
                        18,
                        29
                    ], i) > 0; __recognizer312285488.logProbe([
                        18,
                        35,
                        18,
                        36
                    ], i)--) {
                    var div = function () {
                            var obj = __recognizer312285488.logProbe([
                                    19,
                                    26,
                                    19,
                                    34
                                ], document), fn = __recognizer312285488.logProbe([
                                    19,
                                    35,
                                    19,
                                    48
                                ], obj.createElement);
                            return fn.apply(obj, arguments);
                        }.bind(this)('div');
                    div.innerHTML = '<!--[if IE ' + __recognizer312285488.logProbe([
                        21,
                        48,
                        21,
                        49
                    ], i) + ']><span></span><![endif]-->';
                    if (__recognizer312285488.logProbe([
                            23,
                            53,
                            23,
                            59
                        ], function () {
                            var obj = __recognizer312285488.logProbe([
                                    23,
                                    20,
                                    23,
                                    23
                                ], div), fn = __recognizer312285488.logProbe([
                                    23,
                                    24,
                                    23,
                                    44
                                ], obj.getElementsByTagName);
                            return fn.apply(obj, arguments);
                        }.bind(this)('span').length)) {
                        div = null;
                        return __recognizer312285488.logProbe([
                            26,
                            27,
                            26,
                            28
                        ], i);
                    }
                    div = null;
                }
            }
            return __recognizer312285488.logProbe([
                33,
                15,
                33,
                24
            ], undefined);
        }();
    var console = __recognizer312285488.logProbe([
            37,
            25,
            37,
            32
        ], __recognizer312285488.logProbe([
            37,
            18,
            37,
            24
        ], window).console) || {
            log: function () {
                __recognizer312285488.logEntry([
                    37,
                    43,
                    37,
                    51
                ], arguments);
            },
            time: function () {
                __recognizer312285488.logEntry([
                    37,
                    65,
                    37,
                    73
                ], arguments);
            }
        };
    var NAME = 'blast', characterRanges = {
            latinPunctuation: '\xe2\u20ac\u201c\xe2\u20ac\u201d\xe2\u20ac\xb2\xe2\u20ac\u2122\'\xe2\u20ac\u0153\xe2\u20ac\xb3\xe2\u20ac\u017e"(\xc2\xab.\xe2\u20ac\xa6\xc2\xa1\xc2\xbf\xe2\u20ac\xb2\xe2\u20ac\u2122\'\xe2\u20ac\x9d\xe2\u20ac\xb3\xe2\u20ac\u0153")\xc2\xbb.\xe2\u20ac\xa6!?',
            latinLetters: '\\u0041-\\u005A\\u0061-\\u007A\\u00C0-\\u017F\\u0100-\\u01FF\\u0180-\\u027F'
        }, Reg = {
            abbreviations: new (__recognizer312285488.logProbe([
                50,
                31,
                50,
                37
            ], RegExp))('[^' + __recognizer312285488.logProbe([
                50,
                61,
                50,
                73
            ], __recognizer312285488.logProbe([
                50,
                45,
                50,
                60
            ], characterRanges).latinLetters) + '](e\\.g\\.)|(i\\.e\\.)|(mr\\.)|(mrs\\.)|(ms\\.)|(dr\\.)|(prof\\.)|(esq\\.)|(sr\\.)|(jr\\.)[^' + __recognizer312285488.logProbe([
                50,
                189,
                50,
                201
            ], __recognizer312285488.logProbe([
                50,
                173,
                50,
                188
            ], characterRanges).latinLetters) + ']', 'ig'),
            innerWordPeriod: new (__recognizer312285488.logProbe([
                51,
                33,
                51,
                39
            ], RegExp))('[' + __recognizer312285488.logProbe([
                51,
                62,
                51,
                74
            ], __recognizer312285488.logProbe([
                51,
                46,
                51,
                61
            ], characterRanges).latinLetters) + '].[' + __recognizer312285488.logProbe([
                51,
                102,
                51,
                114
            ], __recognizer312285488.logProbe([
                51,
                86,
                51,
                101
            ], characterRanges).latinLetters) + ']', 'ig'),
            onlyContainsPunctuation: new (__recognizer312285488.logProbe([
                52,
                41,
                52,
                47
            ], RegExp))('[^' + __recognizer312285488.logProbe([
                52,
                71,
                52,
                87
            ], __recognizer312285488.logProbe([
                52,
                55,
                52,
                70
            ], characterRanges).latinPunctuation) + ']'),
            adjoinedPunctuation: new (__recognizer312285488.logProbe([
                53,
                37,
                53,
                43
            ], RegExp))('^[' + __recognizer312285488.logProbe([
                53,
                67,
                53,
                83
            ], __recognizer312285488.logProbe([
                53,
                51,
                53,
                66
            ], characterRanges).latinPunctuation) + ']+|[' + __recognizer312285488.logProbe([
                53,
                111,
                53,
                127
            ], __recognizer312285488.logProbe([
                53,
                95,
                53,
                110
            ], characterRanges).latinPunctuation) + ']+$', 'g'),
            skippedElements: /(script|style|select|textarea)/i,
            hasPluginClass: new (__recognizer312285488.logProbe([
                55,
                32,
                55,
                38
            ], RegExp))('(^| )' + __recognizer312285488.logProbe([
                55,
                49,
                55,
                53
            ], NAME) + '( |$)', 'gi')
        };
    $.fn[NAME] = function (options) {
        __recognizer312285488.logEntry([
            62,
            17,
            62,
            25
        ], arguments);
        function encodePunctuation(text) {
            __recognizer312285488.logEntry([
                70,
                17,
                70,
                34
            ], arguments);
            return function () {
                var obj = function () {
                        var obj = __recognizer312285488.logProbe([
                                71,
                                19,
                                71,
                                23
                            ], text), fn = __recognizer312285488.logProbe([
                                73,
                                21,
                                73,
                                28
                            ], obj.replace);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        73,
                        33,
                        73,
                        46
                    ], __recognizer312285488.logProbe([
                        73,
                        29,
                        73,
                        32
                    ], Reg).abbreviations), function (match) {
                        __recognizer312285488.logEntry([
                            73,
                            48,
                            73,
                            56
                        ], arguments);
                        return function () {
                            var obj = __recognizer312285488.logProbe([
                                    74,
                                    31,
                                    74,
                                    36
                                ], match), fn = __recognizer312285488.logProbe([
                                    74,
                                    37,
                                    74,
                                    44
                                ], obj.replace);
                            return fn.apply(obj, arguments);
                        }.bind(this)(/\./g, '{{46}}');
                    }), fn = __recognizer312285488.logProbe([
                        77,
                        21,
                        77,
                        28
                    ], obj.replace);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer312285488.logProbe([
                77,
                33,
                77,
                48
            ], __recognizer312285488.logProbe([
                77,
                29,
                77,
                32
            ], Reg).innerWordPeriod), function (match) {
                __recognizer312285488.logEntry([
                    77,
                    50,
                    77,
                    58
                ], arguments);
                return function () {
                    var obj = __recognizer312285488.logProbe([
                            78,
                            31,
                            78,
                            36
                        ], match), fn = __recognizer312285488.logProbe([
                            78,
                            37,
                            78,
                            44
                        ], obj.replace);
                    return fn.apply(obj, arguments);
                }.bind(this)(/\./g, '{{46}}');
            });
        }
        function decodePunctuation(text) {
            __recognizer312285488.logEntry([
                83,
                17,
                83,
                34
            ], arguments);
            return function () {
                var obj = __recognizer312285488.logProbe([
                        84,
                        19,
                        84,
                        23
                    ], text), fn = __recognizer312285488.logProbe([
                        84,
                        24,
                        84,
                        31
                    ], obj.replace);
                return fn.apply(obj, arguments);
            }.bind(this)(/{{(\d{1,3})}}/g, function (fullMatch, subMatch) {
                __recognizer312285488.logEntry([
                    84,
                    50,
                    84,
                    58
                ], arguments);
                return function () {
                    var obj = __recognizer312285488.logProbe([
                            85,
                            23,
                            85,
                            29
                        ], String), fn = __recognizer312285488.logProbe([
                            85,
                            30,
                            85,
                            42
                        ], obj.fromCharCode);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    85,
                    43,
                    85,
                    51
                ], subMatch));
            });
        }
        function wrapNode(node, opts) {
            __recognizer312285488.logEntry([
                93,
                17,
                93,
                25
            ], arguments);
            var wrapper = function () {
                    var obj = __recognizer312285488.logProbe([
                            94,
                            26,
                            94,
                            34
                        ], document), fn = __recognizer312285488.logProbe([
                            94,
                            35,
                            94,
                            48
                        ], obj.createElement);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    94,
                    54,
                    94,
                    57
                ], __recognizer312285488.logProbe([
                    94,
                    49,
                    94,
                    53
                ], opts).tag));
            wrapper.className = __recognizer312285488.logProbe([
                97,
                32,
                97,
                36
            ], NAME);
            if (__recognizer312285488.logProbe([
                    100,
                    21,
                    100,
                    32
                ], __recognizer312285488.logProbe([
                    100,
                    16,
                    100,
                    20
                ], opts).customClass)) {
                wrapper.className += ' ' + __recognizer312285488.logProbe([
                    101,
                    48,
                    101,
                    59
                ], __recognizer312285488.logProbe([
                    101,
                    43,
                    101,
                    47
                ], opts).customClass);
                if (__recognizer312285488.logProbe([
                        104,
                        25,
                        104,
                        40
                    ], __recognizer312285488.logProbe([
                        104,
                        20,
                        104,
                        24
                    ], opts).generateIndexID)) {
                    wrapper.id = __recognizer312285488.logProbe([
                        105,
                        38,
                        105,
                        49
                    ], __recognizer312285488.logProbe([
                        105,
                        33,
                        105,
                        37
                    ], opts).customClass) + '-' + __recognizer312285488.logProbe([
                        105,
                        66,
                        105,
                        78
                    ], __recognizer312285488.logProbe([
                        105,
                        58,
                        105,
                        65
                    ], Element).blastedIndex);
                }
            }
            if (__recognizer312285488.logProbe([
                    110,
                    21,
                    110,
                    30
                ], __recognizer312285488.logProbe([
                    110,
                    16,
                    110,
                    20
                ], opts).delimiter) === 'all' && function () {
                    var obj = /\s/, fn = __recognizer312285488.logProbe([
                            110,
                            49,
                            110,
                            53
                        ], obj.test);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    110,
                    59,
                    110,
                    63
                ], __recognizer312285488.logProbe([
                    110,
                    54,
                    110,
                    58
                ], node).data))) {
                wrapper.style.whiteSpace = 'pre-line';
            }
            if (__recognizer312285488.logProbe([
                    115,
                    21,
                    115,
                    39
                ], __recognizer312285488.logProbe([
                    115,
                    16,
                    115,
                    20
                ], opts).generateValueClass) === true && !__recognizer312285488.logProbe([
                    115,
                    58,
                    115,
                    64
                ], __recognizer312285488.logProbe([
                    115,
                    53,
                    115,
                    57
                ], opts).search) && (__recognizer312285488.logProbe([
                    115,
                    74,
                    115,
                    83
                ], __recognizer312285488.logProbe([
                    115,
                    69,
                    115,
                    73
                ], opts).delimiter) === 'character' || __recognizer312285488.logProbe([
                    115,
                    108,
                    115,
                    117
                ], __recognizer312285488.logProbe([
                    115,
                    103,
                    115,
                    107
                ], opts).delimiter) === 'word')) {
                var valueClass, text = __recognizer312285488.logProbe([
                        117,
                        32,
                        117,
                        36
                    ], __recognizer312285488.logProbe([
                        117,
                        27,
                        117,
                        31
                    ], node).data);
                if (__recognizer312285488.logProbe([
                        121,
                        25,
                        121,
                        34
                    ], __recognizer312285488.logProbe([
                        121,
                        20,
                        121,
                        24
                    ], opts).delimiter) === 'word' && function () {
                        var obj = __recognizer312285488.logProbe([
                                121,
                                53,
                                121,
                                76
                            ], __recognizer312285488.logProbe([
                                121,
                                49,
                                121,
                                52
                            ], Reg).onlyContainsPunctuation), fn = __recognizer312285488.logProbe([
                                121,
                                77,
                                121,
                                81
                            ], obj.test);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        121,
                        82,
                        121,
                        86
                    ], text))) {
                    text = function () {
                        var obj = __recognizer312285488.logProbe([
                                123,
                                27,
                                123,
                                31
                            ], text), fn = __recognizer312285488.logProbe([
                                123,
                                32,
                                123,
                                39
                            ], obj.replace);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        123,
                        44,
                        123,
                        63
                    ], __recognizer312285488.logProbe([
                        123,
                        40,
                        123,
                        43
                    ], Reg).adjoinedPunctuation), '');
                }
                valueClass = __recognizer312285488.logProbe([
                    126,
                    29,
                    126,
                    33
                ], NAME) + '-' + function () {
                    var obj = __recognizer312285488.logProbe([
                            126,
                            47,
                            126,
                            56
                        ], __recognizer312285488.logProbe([
                            126,
                            42,
                            126,
                            46
                        ], opts).delimiter), fn = __recognizer312285488.logProbe([
                            126,
                            57,
                            126,
                            68
                        ], obj.toLowerCase);
                    return fn.apply(obj, arguments);
                }.bind(this)() + '-' + function () {
                    var obj = __recognizer312285488.logProbe([
                            126,
                            79,
                            126,
                            83
                        ], text), fn = __recognizer312285488.logProbe([
                            126,
                            84,
                            126,
                            95
                        ], obj.toLowerCase);
                    return fn.apply(obj, arguments);
                }.bind(this)();
                wrapper.className += ' ' + __recognizer312285488.logProbe([
                    128,
                    43,
                    128,
                    53
                ], valueClass);
            }
            if (__recognizer312285488.logProbe([
                    132,
                    21,
                    132,
                    25
                ], __recognizer312285488.logProbe([
                    132,
                    16,
                    132,
                    20
                ], opts).aria)) {
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            133,
                            16,
                            133,
                            23
                        ], wrapper), fn = __recognizer312285488.logProbe([
                            133,
                            24,
                            133,
                            36
                        ], obj.setAttribute);
                    return fn.apply(obj, arguments);
                }.bind(this)('aria-hidden', 'true'));
            }
            (function () {
                var obj = __recognizer312285488.logProbe([
                        136,
                        12,
                        136,
                        19
                    ], wrapper), fn = __recognizer312285488.logProbe([
                        136,
                        20,
                        136,
                        31
                    ], obj.appendChild);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                var obj = __recognizer312285488.logProbe([
                        136,
                        32,
                        136,
                        36
                    ], node), fn = __recognizer312285488.logProbe([
                        136,
                        37,
                        136,
                        46
                    ], obj.cloneNode);
                return fn.apply(obj, arguments);
            }.bind(this)(false)));
            return __recognizer312285488.logProbe([
                138,
                19,
                138,
                26
            ], wrapper);
        }
        function traverseDOM(node, opts) {
            __recognizer312285488.logEntry([
                141,
                17,
                141,
                28
            ], arguments);
            var matchPosition = -1, skipNodeBit = 0;
            if (__recognizer312285488.logProbe([
                    146,
                    21,
                    146,
                    29
                ], __recognizer312285488.logProbe([
                    146,
                    16,
                    146,
                    20
                ], node).nodeType) === 3 && __recognizer312285488.logProbe([
                    146,
                    49,
                    146,
                    55
                ], __recognizer312285488.logProbe([
                    146,
                    44,
                    146,
                    48
                ], __recognizer312285488.logProbe([
                    146,
                    39,
                    146,
                    43
                ], node).data).length)) {
                if (__recognizer312285488.logProbe([
                        148,
                        28,
                        148,
                        41
                    ], __recognizer312285488.logProbe([
                        148,
                        20,
                        148,
                        27
                    ], Element).nodeBeginning)) {
                    node.data = !__recognizer312285488.logProbe([
                        151,
                        39,
                        151,
                        45
                    ], __recognizer312285488.logProbe([
                        151,
                        34,
                        151,
                        38
                    ], opts).search) && __recognizer312285488.logProbe([
                        151,
                        54,
                        151,
                        63
                    ], __recognizer312285488.logProbe([
                        151,
                        49,
                        151,
                        53
                    ], opts).delimiter) === 'sentence' ? __recognizer312285488.logProbe([
                        151,
                        82,
                        151,
                        110
                    ], __recognizer312285488.logProbe([
                        151,
                        82,
                        151,
                        99
                    ], encodePunctuation)(__recognizer312285488.logProbe([
                        151,
                        105,
                        151,
                        109
                    ], __recognizer312285488.logProbe([
                        151,
                        100,
                        151,
                        104
                    ], node).data))) : __recognizer312285488.logProbe([
                        151,
                        113,
                        151,
                        141
                    ], __recognizer312285488.logProbe([
                        151,
                        113,
                        151,
                        130
                    ], decodePunctuation)(__recognizer312285488.logProbe([
                        151,
                        136,
                        151,
                        140
                    ], __recognizer312285488.logProbe([
                        151,
                        131,
                        151,
                        135
                    ], node).data)));
                    Element.nodeBeginning = false;
                }
                matchPosition = function () {
                    var obj = __recognizer312285488.logProbe([
                            156,
                            37,
                            156,
                            41
                        ], __recognizer312285488.logProbe([
                            156,
                            32,
                            156,
                            36
                        ], node).data), fn = __recognizer312285488.logProbe([
                            156,
                            42,
                            156,
                            48
                        ], obj.search);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    156,
                    49,
                    156,
                    63
                ], delimiterRegex));
                if (__recognizer312285488.logProbe([
                        159,
                        20,
                        159,
                        33
                    ], matchPosition) !== -1) {
                    var match = function () {
                            var obj = __recognizer312285488.logProbe([
                                    160,
                                    37,
                                    160,
                                    41
                                ], __recognizer312285488.logProbe([
                                    160,
                                    32,
                                    160,
                                    36
                                ], node).data), fn = __recognizer312285488.logProbe([
                                    160,
                                    42,
                                    160,
                                    47
                                ], obj.match);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer312285488.logProbe([
                            160,
                            48,
                            160,
                            62
                        ], delimiterRegex)), matchText = __recognizer312285488.logProbe([
                            161,
                            42,
                            161,
                            43
                        ], __recognizer312285488.logProbe([
                            161,
                            36,
                            161,
                            41
                        ], match)[0]), subMatchText = __recognizer312285488.logProbe([
                            162,
                            45,
                            162,
                            46
                        ], __recognizer312285488.logProbe([
                            162,
                            39,
                            162,
                            44
                        ], match)[1]) || false;
                    if (__recognizer312285488.logProbe([
                            166,
                            24,
                            166,
                            33
                        ], matchText) === '') {
                        __recognizer312285488.logProbe([
                            167,
                            24,
                            167,
                            37
                        ], matchPosition)++;
                    } else if (__recognizer312285488.logProbe([
                            170,
                            31,
                            170,
                            43
                        ], subMatchText) && __recognizer312285488.logProbe([
                            170,
                            47,
                            170,
                            59
                        ], subMatchText) !== __recognizer312285488.logProbe([
                            170,
                            64,
                            170,
                            73
                        ], matchText)) {
                        matchPosition += function () {
                            var obj = __recognizer312285488.logProbe([
                                    171,
                                    41,
                                    171,
                                    50
                                ], matchText), fn = __recognizer312285488.logProbe([
                                    171,
                                    51,
                                    171,
                                    58
                                ], obj.indexOf);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer312285488.logProbe([
                            171,
                            59,
                            171,
                            71
                        ], subMatchText));
                        matchText = __recognizer312285488.logProbe([
                            172,
                            36,
                            172,
                            48
                        ], subMatchText);
                    }
                    var middleBit = function () {
                            var obj = __recognizer312285488.logProbe([
                                    176,
                                    36,
                                    176,
                                    40
                                ], node), fn = __recognizer312285488.logProbe([
                                    176,
                                    41,
                                    176,
                                    50
                                ], obj.splitText);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer312285488.logProbe([
                            176,
                            51,
                            176,
                            64
                        ], matchPosition));
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                180,
                                20,
                                180,
                                29
                            ], middleBit), fn = __recognizer312285488.logProbe([
                                180,
                                30,
                                180,
                                39
                            ], obj.splitText);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        180,
                        50,
                        180,
                        56
                    ], __recognizer312285488.logProbe([
                        180,
                        40,
                        180,
                        49
                    ], matchText).length)));
                    skipNodeBit = 1;
                    if (!__recognizer312285488.logProbe([
                            185,
                            30,
                            185,
                            36
                        ], __recognizer312285488.logProbe([
                            185,
                            25,
                            185,
                            29
                        ], opts).search) && __recognizer312285488.logProbe([
                            185,
                            45,
                            185,
                            54
                        ], __recognizer312285488.logProbe([
                            185,
                            40,
                            185,
                            44
                        ], opts).delimiter) === 'sentence') {
                        middleBit.data = __recognizer312285488.logProbe([
                            187,
                            41,
                            187,
                            74
                        ], __recognizer312285488.logProbe([
                            187,
                            41,
                            187,
                            58
                        ], decodePunctuation)(__recognizer312285488.logProbe([
                            187,
                            69,
                            187,
                            73
                        ], __recognizer312285488.logProbe([
                            187,
                            59,
                            187,
                            68
                        ], middleBit).data)));
                    }
                    var wrappedNode = __recognizer312285488.logProbe([
                            191,
                            38,
                            191,
                            85
                        ], __recognizer312285488.logProbe([
                            191,
                            38,
                            191,
                            46
                        ], wrapNode)(__recognizer312285488.logProbe([
                            191,
                            47,
                            191,
                            56
                        ], middleBit), __recognizer312285488.logProbe([
                            191,
                            58,
                            191,
                            62
                        ], opts), __recognizer312285488.logProbe([
                            191,
                            72,
                            191,
                            84
                        ], __recognizer312285488.logProbe([
                            191,
                            64,
                            191,
                            71
                        ], Element).blastedIndex)));
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                193,
                                30,
                                193,
                                40
                            ], __recognizer312285488.logProbe([
                                193,
                                20,
                                193,
                                29
                            ], middleBit).parentNode), fn = __recognizer312285488.logProbe([
                                193,
                                41,
                                193,
                                53
                            ], obj.replaceChild);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        193,
                        54,
                        193,
                        65
                    ], wrappedNode), __recognizer312285488.logProbe([
                        193,
                        67,
                        193,
                        76
                    ], middleBit)));
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                196,
                                28,
                                196,
                                36
                            ], __recognizer312285488.logProbe([
                                196,
                                20,
                                196,
                                27
                            ], Element).wrappers), fn = __recognizer312285488.logProbe([
                                196,
                                37,
                                196,
                                41
                            ], obj.push);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        196,
                        42,
                        196,
                        53
                    ], wrappedNode)));
                    __recognizer312285488.logProbe([
                        198,
                        28,
                        198,
                        40
                    ], __recognizer312285488.logProbe([
                        198,
                        20,
                        198,
                        27
                    ], Element).blastedIndex)++;
                }
            } else if (__recognizer312285488.logProbe([
                    206,
                    28,
                    206,
                    36
                ], __recognizer312285488.logProbe([
                    206,
                    23,
                    206,
                    27
                ], node).nodeType) === 1 && function () {
                    var obj = __recognizer312285488.logProbe([
                            206,
                            46,
                            206,
                            50
                        ], node), fn = __recognizer312285488.logProbe([
                            206,
                            51,
                            206,
                            64
                        ], obj.hasChildNodes);
                    return fn.apply(obj, arguments);
                }.bind(this)() && !function () {
                    var obj = __recognizer312285488.logProbe([
                            206,
                            75,
                            206,
                            90
                        ], __recognizer312285488.logProbe([
                            206,
                            71,
                            206,
                            74
                        ], Reg).skippedElements), fn = __recognizer312285488.logProbe([
                            206,
                            91,
                            206,
                            95
                        ], obj.test);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    206,
                    101,
                    206,
                    108
                ], __recognizer312285488.logProbe([
                    206,
                    96,
                    206,
                    100
                ], node).tagName)) && !function () {
                    var obj = __recognizer312285488.logProbe([
                            206,
                            118,
                            206,
                            132
                        ], __recognizer312285488.logProbe([
                            206,
                            114,
                            206,
                            117
                        ], Reg).hasPluginClass), fn = __recognizer312285488.logProbe([
                            206,
                            133,
                            206,
                            137
                        ], obj.test);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    206,
                    143,
                    206,
                    152
                ], __recognizer312285488.logProbe([
                    206,
                    138,
                    206,
                    142
                ], node).className))) {
                for (var i = 0; __recognizer312285488.logProbe([
                        208,
                        32,
                        208,
                        33
                    ], i) < __recognizer312285488.logProbe([
                        208,
                        52,
                        208,
                        58
                    ], __recognizer312285488.logProbe([
                        208,
                        41,
                        208,
                        51
                    ], __recognizer312285488.logProbe([
                        208,
                        36,
                        208,
                        40
                    ], node).childNodes).length); __recognizer312285488.logProbe([
                        208,
                        60,
                        208,
                        61
                    ], i)++) {
                    Element.nodeBeginning = true;
                    i += __recognizer312285488.logProbe([
                        211,
                        25,
                        211,
                        62
                    ], __recognizer312285488.logProbe([
                        211,
                        25,
                        211,
                        36
                    ], traverseDOM)(__recognizer312285488.logProbe([
                        211,
                        53,
                        211,
                        54
                    ], __recognizer312285488.logProbe([
                        211,
                        42,
                        211,
                        52
                    ], __recognizer312285488.logProbe([
                        211,
                        37,
                        211,
                        41
                    ], node).childNodes)[i]), __recognizer312285488.logProbe([
                        211,
                        57,
                        211,
                        61
                    ], opts)));
                }
            }
            return __recognizer312285488.logProbe([
                215,
                19,
                215,
                30
            ], skipNodeBit);
        }
        var opts = function () {
                var obj = __recognizer312285488.logProbe([
                        222,
                        19,
                        222,
                        20
                    ], $), fn = __recognizer312285488.logProbe([
                        222,
                        21,
                        222,
                        27
                    ], obj.extend);
                return fn.apply(obj, arguments);
            }.bind(this)({}, __recognizer312285488.logProbe([
                222,
                43,
                222,
                51
            ], __recognizer312285488.logProbe([
                222,
                37,
                222,
                41
            ], __recognizer312285488.logProbe([
                222,
                34,
                222,
                36
            ], __recognizer312285488.logProbe([
                222,
                32,
                222,
                33
            ], $).fn)[NAME]).defaults), __recognizer312285488.logProbe([
                222,
                53,
                222,
                60
            ], options)), delimiterRegex, Element = {};
        if (__recognizer312285488.logProbe([
                232,
                24,
                232,
                30
            ], __recognizer312285488.logProbe([
                232,
                17,
                232,
                23
            ], __recognizer312285488.logProbe([
                232,
                12,
                232,
                16
            ], opts).search).length) && (typeof __recognizer312285488.logProbe([
                232,
                47,
                232,
                53
            ], __recognizer312285488.logProbe([
                232,
                42,
                232,
                46
            ], opts).search) === 'string' || function () {
                var obj = /^\d/, fn = __recognizer312285488.logProbe([
                        232,
                        76,
                        232,
                        80
                    ], obj.test);
                return fn.apply(obj, arguments);
            }.bind(this)(__recognizer312285488.logProbe([
                232,
                81,
                232,
                104
            ], __recognizer312285488.logProbe([
                232,
                81,
                232,
                91
            ], parseFloat)(__recognizer312285488.logProbe([
                232,
                97,
                232,
                103
            ], __recognizer312285488.logProbe([
                232,
                92,
                232,
                96
            ], opts).search)))))) {
            opts.delimiter = function () {
                var obj = function () {
                        var obj = __recognizer312285488.logProbe([
                                234,
                                34,
                                234,
                                40
                            ], __recognizer312285488.logProbe([
                                234,
                                29,
                                234,
                                33
                            ], opts).search), fn = __recognizer312285488.logProbe([
                                234,
                                41,
                                234,
                                49
                            ], obj.toString);
                        return fn.apply(obj, arguments);
                    }.bind(this)(), fn = __recognizer312285488.logProbe([
                        234,
                        52,
                        234,
                        59
                    ], obj.replace);
                return fn.apply(obj, arguments);
            }.bind(this)(/[-[\]{,}(.)*+?|^$\\\/]/g, '\\$&');
            delimiterRegex = new (__recognizer312285488.logProbe([
                241,
                33,
                241,
                39
            ], RegExp))('(?:^|[^-' + __recognizer312285488.logProbe([
                241,
                69,
                241,
                81
            ], __recognizer312285488.logProbe([
                241,
                53,
                241,
                68
            ], characterRanges).latinLetters) + '])(' + __recognizer312285488.logProbe([
                241,
                97,
                241,
                106
            ], __recognizer312285488.logProbe([
                241,
                92,
                241,
                96
            ], opts).delimiter) + '(\'s)?)(?![-' + __recognizer312285488.logProbe([
                241,
                141,
                241,
                153
            ], __recognizer312285488.logProbe([
                241,
                125,
                241,
                140
            ], characterRanges).latinLetters) + '])', 'i');
        } else {
            if (typeof __recognizer312285488.logProbe([
                    244,
                    28,
                    244,
                    37
                ], __recognizer312285488.logProbe([
                    244,
                    23,
                    244,
                    27
                ], opts).delimiter) === 'string') {
                opts.delimiter = function () {
                    var obj = __recognizer312285488.logProbe([
                            245,
                            38,
                            245,
                            47
                        ], __recognizer312285488.logProbe([
                            245,
                            33,
                            245,
                            37
                        ], opts).delimiter), fn = __recognizer312285488.logProbe([
                            245,
                            48,
                            245,
                            59
                        ], obj.toLowerCase);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            }
            switch (__recognizer312285488.logProbe([
                    248,
                    25,
                    248,
                    34
                ], __recognizer312285488.logProbe([
                    248,
                    20,
                    248,
                    24
                ], opts).delimiter)) {
            case 'all':
                delimiterRegex = /(.)/;
                break;
            case 'letter':
            case 'char':
            case 'character':
                delimiterRegex = /(\S)/;
                break;
            case 'word':
                delimiterRegex = /\s*(\S+)\s*/;
                break;
            case 'sentence':
                delimiterRegex = /(?=\S)(([.]{2,})?[^!?]+?([.â€¦!?]+|(?=\s+$)|$)(\s*[â€²â€™'â€â€³â€œ")Â»]+)*)/;
                break;
            case 'element':
                delimiterRegex = /(?=\S)([\S\s]*\S)/;
                break;
            default:
                if (__recognizer312285488.logProbe([
                        296,
                        29,
                        296,
                        38
                    ], __recognizer312285488.logProbe([
                        296,
                        24,
                        296,
                        28
                    ], opts).delimiter) instanceof __recognizer312285488.logProbe([
                        296,
                        50,
                        296,
                        56
                    ], RegExp)) {
                    delimiterRegex = __recognizer312285488.logProbe([
                        297,
                        46,
                        297,
                        55
                    ], __recognizer312285488.logProbe([
                        297,
                        41,
                        297,
                        45
                    ], opts).delimiter);
                } else {
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                299,
                                24,
                                299,
                                31
                            ], console), fn = __recognizer312285488.logProbe([
                                299,
                                32,
                                299,
                                35
                            ], obj.log);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        299,
                        36,
                        299,
                        40
                    ], NAME) + ': Unrecognized delimiter, empty search string, or invalid custom Regex. Aborting.'));
                    return true;
                }
            }
        }
        (function () {
            var obj = __recognizer312285488.logProbe([
                    311,
                    8,
                    311,
                    12
                ], this), fn = __recognizer312285488.logProbe([
                    311,
                    13,
                    311,
                    17
                ], obj.each);
            return fn.apply(obj, arguments);
        }.bind(this)(function () {
            __recognizer312285488.logEntry([
                311,
                18,
                311,
                26
            ], arguments);
            var $this = __recognizer312285488.logProbe([
                    312,
                    24,
                    312,
                    31
                ], __recognizer312285488.logProbe([
                    312,
                    24,
                    312,
                    25
                ], $)(__recognizer312285488.logProbe([
                    312,
                    26,
                    312,
                    30
                ], this))), text = function () {
                    var obj = __recognizer312285488.logProbe([
                            313,
                            23,
                            313,
                            28
                        ], $this), fn = __recognizer312285488.logProbe([
                            313,
                            29,
                            313,
                            33
                        ], obj.text);
                    return fn.apply(obj, arguments);
                }.bind(this)();
            if (__recognizer312285488.logProbe([
                    316,
                    16,
                    316,
                    23
                ], options) !== false) {
                Element = {
                    blastedIndex: 0,
                    nodeBeginning: false,
                    wrappers: __recognizer312285488.logProbe([
                        328,
                        38,
                        328,
                        46
                    ], __recognizer312285488.logProbe([
                        328,
                        30,
                        328,
                        37
                    ], Element).wrappers) || []
                };
                if (function () {
                        var obj = __recognizer312285488.logProbe([
                                336,
                                20,
                                336,
                                25
                            ], $this), fn = __recognizer312285488.logProbe([
                                336,
                                26,
                                336,
                                30
                            ], obj.data);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        336,
                        31,
                        336,
                        35
                    ], NAME)) !== __recognizer312285488.logProbe([
                        336,
                        41,
                        336,
                        50
                    ], undefined) && (function () {
                        var obj = __recognizer312285488.logProbe([
                                336,
                                55,
                                336,
                                60
                            ], $this), fn = __recognizer312285488.logProbe([
                                336,
                                61,
                                336,
                                65
                            ], obj.data);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        336,
                        66,
                        336,
                        70
                    ], NAME)) !== 'search' || __recognizer312285488.logProbe([
                        336,
                        93,
                        336,
                        99
                    ], __recognizer312285488.logProbe([
                        336,
                        88,
                        336,
                        92
                    ], opts).search) === false)) {
                    __recognizer312285488.logProbe([
                        337,
                        20,
                        337,
                        40
                    ], __recognizer312285488.logProbe([
                        337,
                        20,
                        337,
                        27
                    ], reverse)(__recognizer312285488.logProbe([
                        337,
                        28,
                        337,
                        33
                    ], $this), __recognizer312285488.logProbe([
                        337,
                        35,
                        337,
                        39
                    ], opts)));
                    if (__recognizer312285488.logProbe([
                            339,
                            29,
                            339,
                            34
                        ], __recognizer312285488.logProbe([
                            339,
                            24,
                            339,
                            28
                        ], opts).debug))
                        (function () {
                            var obj = __recognizer312285488.logProbe([
                                    339,
                                    36,
                                    339,
                                    43
                                ], console), fn = __recognizer312285488.logProbe([
                                    339,
                                    44,
                                    339,
                                    47
                                ], obj.log);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer312285488.logProbe([
                            339,
                            48,
                            339,
                            52
                        ], NAME) + ': Removed element\'s existing Blast call.'));
                }
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            343,
                            16,
                            343,
                            21
                        ], $this), fn = __recognizer312285488.logProbe([
                            343,
                            22,
                            343,
                            26
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    343,
                    27,
                    343,
                    31
                ], NAME), __recognizer312285488.logProbe([
                    343,
                    38,
                    343,
                    44
                ], __recognizer312285488.logProbe([
                    343,
                    33,
                    343,
                    37
                ], opts).search) !== false ? 'search' : __recognizer312285488.logProbe([
                    343,
                    73,
                    343,
                    82
                ], __recognizer312285488.logProbe([
                    343,
                    68,
                    343,
                    72
                ], opts).delimiter)));
                if (__recognizer312285488.logProbe([
                        345,
                        25,
                        345,
                        29
                    ], __recognizer312285488.logProbe([
                        345,
                        20,
                        345,
                        24
                    ], opts).aria)) {
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                346,
                                20,
                                346,
                                25
                            ], $this), fn = __recognizer312285488.logProbe([
                                346,
                                26,
                                346,
                                30
                            ], obj.attr);
                        return fn.apply(obj, arguments);
                    }.bind(this)('aria-label', __recognizer312285488.logProbe([
                        346,
                        45,
                        346,
                        49
                    ], text)));
                }
                if (__recognizer312285488.logProbe([
                        354,
                        25,
                        354,
                        38
                    ], __recognizer312285488.logProbe([
                        354,
                        20,
                        354,
                        24
                    ], opts).stripHTMLTags)) {
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                355,
                                20,
                                355,
                                25
                            ], $this), fn = __recognizer312285488.logProbe([
                                355,
                                26,
                                355,
                                30
                            ], obj.html);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        355,
                        31,
                        355,
                        35
                    ], text)));
                }
                try {
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                360,
                                20,
                                360,
                                28
                            ], document), fn = __recognizer312285488.logProbe([
                                360,
                                29,
                                360,
                                42
                            ], obj.createElement);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        360,
                        48,
                        360,
                        51
                    ], __recognizer312285488.logProbe([
                        360,
                        43,
                        360,
                        47
                    ], opts).tag)));
                } catch (__recognizer312285488.logProbe([
                        361,
                        25,
                        361,
                        30
                    ], error)) {
                    opts.tag = 'span';
                    if (__recognizer312285488.logProbe([
                            364,
                            29,
                            364,
                            34
                        ], __recognizer312285488.logProbe([
                            364,
                            24,
                            364,
                            28
                        ], opts).debug))
                        (function () {
                            var obj = __recognizer312285488.logProbe([
                                    364,
                                    36,
                                    364,
                                    43
                                ], console), fn = __recognizer312285488.logProbe([
                                    364,
                                    44,
                                    364,
                                    47
                                ], obj.log);
                            return fn.apply(obj, arguments);
                        }.bind(this)(__recognizer312285488.logProbe([
                            364,
                            48,
                            364,
                            52
                        ], NAME) + ': Invalid tag supplied. Defaulting to span.'));
                }
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            368,
                            16,
                            368,
                            21
                        ], $this), fn = __recognizer312285488.logProbe([
                            368,
                            22,
                            368,
                            30
                        ], obj.addClass);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    368,
                    31,
                    368,
                    35
                ], NAME) + '-root'));
                if (__recognizer312285488.logProbe([
                        371,
                        25,
                        371,
                        30
                    ], __recognizer312285488.logProbe([
                        371,
                        20,
                        371,
                        24
                    ], opts).debug))
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                371,
                                32,
                                371,
                                39
                            ], console), fn = __recognizer312285488.logProbe([
                                371,
                                40,
                                371,
                                44
                            ], obj.time);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        371,
                        45,
                        371,
                        49
                    ], NAME)));
                __recognizer312285488.logProbe([
                    372,
                    16,
                    372,
                    39
                ], __recognizer312285488.logProbe([
                    372,
                    16,
                    372,
                    27
                ], traverseDOM)(__recognizer312285488.logProbe([
                    372,
                    28,
                    372,
                    32
                ], this), __recognizer312285488.logProbe([
                    372,
                    34,
                    372,
                    38
                ], opts)));
                if (__recognizer312285488.logProbe([
                        373,
                        25,
                        373,
                        30
                    ], __recognizer312285488.logProbe([
                        373,
                        20,
                        373,
                        24
                    ], opts).debug))
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                373,
                                32,
                                373,
                                39
                            ], console), fn = __recognizer312285488.logProbe([
                                373,
                                40,
                                373,
                                47
                            ], obj.timeEnd);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        373,
                        48,
                        373,
                        52
                    ], NAME)));
            } else if (__recognizer312285488.logProbe([
                    376,
                    23,
                    376,
                    30
                ], options) === false && function () {
                    var obj = __recognizer312285488.logProbe([
                            376,
                            44,
                            376,
                            49
                        ], $this), fn = __recognizer312285488.logProbe([
                            376,
                            50,
                            376,
                            54
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    376,
                    55,
                    376,
                    59
                ], NAME)) !== __recognizer312285488.logProbe([
                    376,
                    65,
                    376,
                    74
                ], undefined)) {
                __recognizer312285488.logProbe([
                    377,
                    16,
                    377,
                    36
                ], __recognizer312285488.logProbe([
                    377,
                    16,
                    377,
                    23
                ], reverse)(__recognizer312285488.logProbe([
                    377,
                    24,
                    377,
                    29
                ], $this), __recognizer312285488.logProbe([
                    377,
                    31,
                    377,
                    35
                ], opts)));
            }
            if (__recognizer312285488.logProbe([
                    385,
                    21,
                    385,
                    26
                ], __recognizer312285488.logProbe([
                    385,
                    16,
                    385,
                    20
                ], opts).debug)) {
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            386,
                            16,
                            386,
                            17
                        ], $), fn = __recognizer312285488.logProbe([
                            386,
                            18,
                            386,
                            22
                        ], obj.each);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    386,
                    31,
                    386,
                    39
                ], __recognizer312285488.logProbe([
                    386,
                    23,
                    386,
                    30
                ], Element).wrappers), function (index, element) {
                    __recognizer312285488.logEntry([
                        386,
                        41,
                        386,
                        49
                    ], arguments);
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                387,
                                20,
                                387,
                                27
                            ], console), fn = __recognizer312285488.logProbe([
                                387,
                                28,
                                387,
                                31
                            ], obj.log);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        387,
                        32,
                        387,
                        36
                    ], NAME) + ' [' + __recognizer312285488.logProbe([
                        387,
                        51,
                        387,
                        60
                    ], __recognizer312285488.logProbe([
                        387,
                        46,
                        387,
                        50
                    ], opts).delimiter) + '] ' + __recognizer312285488.logProbe([
                        387,
                        75,
                        387,
                        84
                    ], __recognizer312285488.logProbe([
                        387,
                        70,
                        387,
                        74
                    ], this).outerHTML)));
                    this.style.backgroundColor = __recognizer312285488.logProbe([
                        388,
                        49,
                        388,
                        54
                    ], index) % 2 ? '#f12185' : '#075d9a';
                }));
            }
        }));
        function reverse($this, opts) {
            __recognizer312285488.logEntry([
                397,
                17,
                397,
                24
            ], arguments);
            if (__recognizer312285488.logProbe([
                    398,
                    21,
                    398,
                    26
                ], __recognizer312285488.logProbe([
                    398,
                    16,
                    398,
                    20
                ], opts).debug))
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            398,
                            28,
                            398,
                            35
                        ], console), fn = __recognizer312285488.logProbe([
                            398,
                            36,
                            398,
                            40
                        ], obj.time);
                    return fn.apply(obj, arguments);
                }.bind(this)('blast reversal'));
            var skippedDescendantRoot = false;
            (function () {
                var obj = function () {
                        var obj = function () {
                                var obj = function () {
                                        var obj = __recognizer312285488.logProbe([
                                                402,
                                                12,
                                                402,
                                                17
                                            ], $this), fn = __recognizer312285488.logProbe([
                                                403,
                                                17,
                                                403,
                                                28
                                            ], obj.removeClass);
                                        return fn.apply(obj, arguments);
                                    }.bind(this)(__recognizer312285488.logProbe([
                                        403,
                                        29,
                                        403,
                                        33
                                    ], NAME) + '-root'), fn = __recognizer312285488.logProbe([
                                        404,
                                        17,
                                        404,
                                        27
                                    ], obj.removeAttr);
                                return fn.apply(obj, arguments);
                            }.bind(this)('aria-label'), fn = __recognizer312285488.logProbe([
                                405,
                                17,
                                405,
                                21
                            ], obj.find);
                        return fn.apply(obj, arguments);
                    }.bind(this)('.' + __recognizer312285488.logProbe([
                        405,
                        28,
                        405,
                        32
                    ], NAME)), fn = __recognizer312285488.logProbe([
                        406,
                        21,
                        406,
                        25
                    ], obj.each);
                return fn.apply(obj, arguments);
            }.bind(this)(function () {
                __recognizer312285488.logEntry([
                    406,
                    26,
                    406,
                    34
                ], arguments);
                var $this = __recognizer312285488.logProbe([
                        407,
                        36,
                        407,
                        43
                    ], __recognizer312285488.logProbe([
                        407,
                        36,
                        407,
                        37
                    ], $)(__recognizer312285488.logProbe([
                        407,
                        38,
                        407,
                        42
                    ], this)));
                if (!__recognizer312285488.logProbe([
                        409,
                        65,
                        409,
                        71
                    ], function () {
                        var obj = __recognizer312285488.logProbe([
                                409,
                                29,
                                409,
                                34
                            ], $this), fn = __recognizer312285488.logProbe([
                                409,
                                35,
                                409,
                                42
                            ], obj.closest);
                        return fn.apply(obj, arguments);
                    }.bind(this)('.' + __recognizer312285488.logProbe([
                        409,
                        49,
                        409,
                        53
                    ], NAME) + '-root').length)) {
                    var thisParentNode = __recognizer312285488.logProbe([
                            410,
                            54,
                            410,
                            64
                        ], __recognizer312285488.logProbe([
                            410,
                            49,
                            410,
                            53
                        ], this).parentNode);
                    if (__recognizer312285488.logProbe([
                            413,
                            32,
                            413,
                            34
                        ], IE) <= 7)
                        __recognizer312285488.logProbe([
                            413,
                            68,
                            413,
                            76
                        ], __recognizer312285488.logProbe([
                            413,
                            57,
                            413,
                            67
                        ], __recognizer312285488.logProbe([
                            413,
                            42,
                            413,
                            56
                        ], thisParentNode).firstChild).nodeName);
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                416,
                                28,
                                416,
                                42
                            ], thisParentNode), fn = __recognizer312285488.logProbe([
                                416,
                                43,
                                416,
                                55
                            ], obj.replaceChild);
                        return fn.apply(obj, arguments);
                    }.bind(this)(__recognizer312285488.logProbe([
                        416,
                        61,
                        416,
                        71
                    ], __recognizer312285488.logProbe([
                        416,
                        56,
                        416,
                        60
                    ], this).firstChild), __recognizer312285488.logProbe([
                        416,
                        73,
                        416,
                        77
                    ], this)));
                    (function () {
                        var obj = __recognizer312285488.logProbe([
                                419,
                                28,
                                419,
                                42
                            ], thisParentNode), fn = __recognizer312285488.logProbe([
                                419,
                                43,
                                419,
                                52
                            ], obj.normalize);
                        return fn.apply(obj, arguments);
                    }.bind(this)());
                } else {
                    skippedDescendantRoot = true;
                }
            }));
            if (__recognizer312285488.logProbe([
                    426,
                    23,
                    426,
                    28
                ], __recognizer312285488.logProbe([
                    426,
                    16,
                    426,
                    22
                ], window).Zepto)) {
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            427,
                            16,
                            427,
                            21
                        ], $this), fn = __recognizer312285488.logProbe([
                            427,
                            22,
                            427,
                            26
                        ], obj.data);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    427,
                    27,
                    427,
                    31
                ], NAME), __recognizer312285488.logProbe([
                    427,
                    33,
                    427,
                    42
                ], undefined)));
            } else {
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            429,
                            16,
                            429,
                            21
                        ], $this), fn = __recognizer312285488.logProbe([
                            429,
                            22,
                            429,
                            32
                        ], obj.removeData);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    429,
                    33,
                    429,
                    37
                ], NAME)));
            }
            if (__recognizer312285488.logProbe([
                    432,
                    21,
                    432,
                    26
                ], __recognizer312285488.logProbe([
                    432,
                    16,
                    432,
                    20
                ], opts).debug)) {
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            433,
                            16,
                            433,
                            23
                        ], console), fn = __recognizer312285488.logProbe([
                            433,
                            24,
                            433,
                            27
                        ], obj.log);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    433,
                    28,
                    433,
                    32
                ], NAME) + ': Reversed Blast' + (function () {
                    var obj = __recognizer312285488.logProbe([
                            433,
                            57,
                            433,
                            62
                        ], $this), fn = __recognizer312285488.logProbe([
                            433,
                            63,
                            433,
                            67
                        ], obj.attr);
                    return fn.apply(obj, arguments);
                }.bind(this)('id') ? ' on #' + function () {
                    var obj = __recognizer312285488.logProbe([
                            433,
                            86,
                            433,
                            91
                        ], $this), fn = __recognizer312285488.logProbe([
                            433,
                            92,
                            433,
                            96
                        ], obj.attr);
                    return fn.apply(obj, arguments);
                }.bind(this)('id') + '.' : '.') + (__recognizer312285488.logProbe([
                    433,
                    119,
                    433,
                    140
                ], skippedDescendantRoot) ? ' Skipped reversal on the children of one or more descendant root elements.' : '')));
                (function () {
                    var obj = __recognizer312285488.logProbe([
                            434,
                            16,
                            434,
                            23
                        ], console), fn = __recognizer312285488.logProbe([
                            434,
                            24,
                            434,
                            31
                        ], obj.timeEnd);
                    return fn.apply(obj, arguments);
                }.bind(this)('blast reversal'));
            }
        }
        if (__recognizer312285488.logProbe([
                444,
                12,
                444,
                19
            ], options) !== false && __recognizer312285488.logProbe([
                444,
                38,
                444,
                53
            ], __recognizer312285488.logProbe([
                444,
                33,
                444,
                37
            ], opts).returnGenerated) === true) {
            var newStack = function () {
                    var obj = __recognizer312285488.logProbe([
                            446,
                            27,
                            446,
                            30
                        ], __recognizer312285488.logProbe([
                            446,
                            27,
                            446,
                            28
                        ], $)()), fn = __recognizer312285488.logProbe([
                            446,
                            31,
                            446,
                            34
                        ], obj.add);
                    return fn.apply(obj, arguments);
                }.bind(this)(__recognizer312285488.logProbe([
                    446,
                    43,
                    446,
                    51
                ], __recognizer312285488.logProbe([
                    446,
                    35,
                    446,
                    42
                ], Element).wrappers));
            newStack.prevObject = __recognizer312285488.logProbe([
                447,
                34,
                447,
                38
            ], this);
            newStack.context = __recognizer312285488.logProbe([
                448,
                36,
                448,
                43
            ], __recognizer312285488.logProbe([
                448,
                31,
                448,
                35
            ], this).context);
            return __recognizer312285488.logProbe([
                450,
                19,
                450,
                27
            ], newStack);
        } else {
            return __recognizer312285488.logProbe([
                452,
                19,
                452,
                23
            ], this);
        }
    };
    $.fn.blast.defaults = {
        returnGenerated: true,
        delimiter: 'word',
        tag: 'span',
        search: false,
        customClass: '',
        generateIndexID: false,
        generateValueClass: false,
        stripHTMLTags: false,
        aria: true,
        debug: false
    };
}(__recognizer312285488.logProbe([
    472,
    10,
    472,
    16
], __recognizer312285488.logProbe([
    472,
    3,
    472,
    9
], window).jQuery) || __recognizer312285488.logProbe([
    472,
    27,
    472,
    32
], __recognizer312285488.logProbe([
    472,
    20,
    472,
    26
], window).Zepto), __recognizer312285488.logProbe([
    472,
    34,
    472,
    40
], window), __recognizer312285488.logProbe([
    472,
    42,
    472,
    50
], document)));