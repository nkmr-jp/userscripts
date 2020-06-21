// ==UserScript==
// @name         Translate excluding code
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
// @author       nkmr-jp
// @include      https://github.com/*
// @include      https://www.elastic.co/*
// @include      https://medium.com/*
// @include      https://en.wikipedia.org/*
// @include      https://pkg.go.dev/*
// @include      https://godoc.org/*
// @include      https://*.github.io/*
// @include      http://*.github.io/*
// @include      https://openapi-generator.tech/*
// @include      https://www.deepl.com/*
// ==/UserScript==

(function () {
  'use strict';
    const github = ', table.js-file-line-container, table.js-diff-table'
    const excludes = document.querySelectorAll('pre' + github);
    for (let i = 0; i < excludes.length; i++) {
        excludes[i].classList.add("notranslate");
    }
})();
