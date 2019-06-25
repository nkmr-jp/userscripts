// ==UserScript==
// @name         Github code translate ignore
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  When translating pages with Google Translate, translate without code blocks.
// @author       nkmr-jp
// @include      https://github.com/*
// ==/UserScript==

(function () {
  'use strict';
  const preTags = document.querySelectorAll('.highlight pre');
  for (let i = 0; i < preTags.length; i++) {
    const preTag = preTags[i];
    const codeTag = document.createElement('code');
    codeTag.style.cssText = 'padding:0'
    preTag.after(codeTag);
    codeTag.append(preTag);
  }
})();
