window.MathJax = {
  tex2jax: { inlineMath: [['`','`']], displayMath: [['``','``']] },
  TeX: { equationNumbers: {autoNumber: "all"} },
};

var mathjax_js = document.createElement("script");

mathjax_js.type = "text/javascript";
mathjax_js.src = "http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML";

document.head.appendChild( mathjax_js );
