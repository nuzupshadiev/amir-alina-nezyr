// Scroll-reveal bootstrap. Runs inline while the HTML is parsed, so [data-js] is
// set before the first paint and nothing flashes in unstyled. The observer is
// self-contained, so reveals work even before the React bundle has hydrated.
// Without JS the attribute is never set and every [data-reveal] stays visible.
//
// The attribute is re-applied if it disappears: an unrelated hydration mismatch
// makes React client-render from the root, which drops attributes the server
// did not emit.
const script = "(function(){var d=document,r=d.documentElement;function flag(){r.setAttribute(\"data-js\",\"1\")}flag();if(window.MutationObserver)new MutationObserver(function(){if(!r.hasAttribute(\"data-js\"))flag()}).observe(r,{attributes:true,attributeFilter:[\"data-js\"]});if(!(\"IntersectionObserver\" in window))return;var obs={},pend=0;function hit(es,o){for(var i=0;i<es.length;i++){var e=es[i];if(e.isIntersecting){e.target.setAttribute(\"data-in\",\"1\");o.unobserve(e.target)}}}function ob(t,m){var k=t+\"|\"+m;return obs[k]||(obs[k]=new IntersectionObserver(hit,{threshold:t,rootMargin:m}))}function scan(){pend=0;var l=d.querySelectorAll(\"[data-reveal]:not([data-seen])\"),vh=window.innerHeight||800;for(var i=0;i<l.length;i++){var n=l[i];n.setAttribute(\"data-seen\",\"1\");var a=parseFloat(n.getAttribute(\"data-reveal\"));if(isNaN(a))a=.18;var m=n.getAttribute(\"data-reveal-margin\")||\"0px\";var h=n.offsetHeight,t=a;if(h>0&&a>0&&h*a>vh*.9)t=vh*.9/h;if(t>1)t=1;if(t<0)t=0;ob(Math.round(t*100)/100,m).observe(n)}}function q(ms){for(var i=0;i<ms.length;i++){if(ms[i].addedNodes.length){if(!pend){pend=1;setTimeout(scan,0)}return}}}function init(){scan();if(window.MutationObserver)new MutationObserver(q).observe(d.body,{childList:true,subtree:true})}if(d.readyState===\"loading\")d.addEventListener(\"DOMContentLoaded\",init);else init()})()";

export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
