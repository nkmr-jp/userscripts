// ==UserScript==
// @name         Translate excluding code
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
// @author       nkmr-jp
// @include      https://github.com/*
// @include      https://www.elastic.co/*
// @include      https://medium.com/*
// ==/UserScript==

(function () {
  'use strict';
  const targets = document.querySelectorAll('pre');
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const org_html = target.innerHTML;
    target.innerHTML = `<code style="padding:0">${org_html}</code>`;
  }
})();
