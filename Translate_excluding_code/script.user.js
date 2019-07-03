// ==UserScript==
// @name         Translate excluding code
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
// @author       nkmr-jp
// @include      https://github.com/*
// @include      https://www.elastic.co/*
// @include      https://medium.com/*
// ==/UserScript==

const style = "padding:0; margin: 0; background: inherit; display: inherit; white-space: inherit; font-size: inherit;";

(function () {
  'use strict';
  const preTags = document.querySelectorAll('pre, td.blob-code-inner');
  for (let i = 0; i < preTags.length; i++) {
    const preTag = preTags[i];
    const html = preTag.innerHTML;
    preTag.innerHTML = `<code style="${style}">${html}</code>`;
  }
})();

