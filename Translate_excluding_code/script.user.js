// ==UserScript==
// @name         Translate excluding code
// @version      0.6
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
// @include      https://interledger.org/*
// @include      https://www.deepl.com/*
// @include      https://docs.rs/*
// @include      https://www.autohotkey.com/*
// @include      https://openapi-generator.tech/*
// @include      https://gorm.io/*
// @include      https://docs.cryptowat.ch/*
// @include      https://*.qwiklabs.com/*
// @include      https://gobyexample.com/*
// ==/UserScript==

(function () {
  'use strict';
    const github = ', table.js-file-line-container, table.js-diff-table'
    const qwiklabs = ', ql-code-block'
    const excludes = document.querySelectorAll('pre' + github + qwiklabs);
    for (let i = 0; i < excludes.length; i++) {
        excludes[i].classList.add("notranslate");
    }
})();
