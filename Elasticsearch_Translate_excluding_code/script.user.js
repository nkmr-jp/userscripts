// ==UserScript==
// @name         Elasticsearch_Translate_excluding_code
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  Translate excluding code blocks when translating pages with Google Translate.
// @author       nkmr-jp
// @include      https://github.com/*
// ==/UserScript==

const SELECTORS = '.pre_wrapper pre, .console_widget a.sense_widget';

(function () {
  'use strict';
  const targets = document.querySelectorAll(SELECTORS);
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    const wrapper = document.createElement('code');
    wrapper.style.cssText = 'padding:0'
    target.after(wrapper);
    wrapper.append(target);
  }
})();
