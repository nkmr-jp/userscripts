// ==UserScript==
// @name         Github code translate ignore
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translates pages excluding code blocks
// @author       nkmr-jp
// @include      https://github.com/*
// ==/UserScript==

(function () {
  'use strict';
  var preTags = document.querySelectorAll('.highlight pre');
  for (let i = 0; i < preTags.length; i++) {
    var preTag = preTags[i];
    var codeTag = document.createElement('code');
    codeTag.style.cssText="padding:0"
    preTag.after(codeTag);
    codeTag.append(preTag);
  }
})();
