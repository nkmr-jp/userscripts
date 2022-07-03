// ==UserScript==
// @name         Translate excluding code
// @version      0.11
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
// @author       nkmr-jp
// @match        https://github.com/*
// @match        https://www.elastic.co/*
// @match        https://medium.com/*
// @match        https://en.wikipedia.org/*
// @match        https://pkg.go.dev/*
// @match        https://go.dev/*
// @match        https://godoc.org/*
// @match        https://*.github.io/*
// @match        http://*.github.io/*
// @match        https://openapi-generator.tech/*
// @match        https://interledger.org/*
// @match        https://www.deepl.com/*
// @match        https://docs.rs/*
// @match        https://www.autohotkey.com/*
// @match        https://openapi-generator.tech/*
// @match        https://gorm.io/*
// @match        https://docs.cryptowat.ch/*
// @match        https://*.qwiklabs.com/*
// @match        https://gobyexample.com/*
// @match        https://*.gitbook.io/*
// @match        https://cloud.google.com/*
// @match        https://www.npmjs.com/*
// @match        https://docs.npmjs.com/*
// @match        https://*.terraform.io/*
// @match        https://*.hashicorp.com/*
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
