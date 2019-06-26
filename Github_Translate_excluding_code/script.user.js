// ==UserScript==
// @name         Github Translate excluding code
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
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
