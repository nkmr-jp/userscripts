// ==UserScript==
// @name         Azure Devops gitmoji
// @namespace    https://github.com/nkmr-jp/userscripts
// @description  gitmoji
// @author       nkmr-jp
// @include      https://dev.azure.com/*
// @include      https://*.visualstudio.com/*
// ==/UserScript==

const SELECTORS = ".change-comment, .change-link";

(function () {
  'use strict';
  runConvert()
})();

function runConvert() {
  const intervalId = setInterval(() => {
    convert()
  }, 200);
  setTimeout(function () {
    clearInterval(intervalId);
  }, 1400);
}

function convert() {
  const tags = document.querySelectorAll(SELECTORS);
  if (tags.length === 0) {
    return
  }
  for (let i = 0; i < tags.length; i++) {
    tags[i].innerText = tags[i].innerText
      .replace(":art:", "🎨") // Improving structure / format of the code.
      .replace(":zap:", "⚡️") // Improving performance.
      .replace(":fire:", "🔥") // Removing code or files.
      .replace(":bug:", "🐛") // Fixing a bug.
      .replace(":ambulance:", "🚑") // Critical hotfix.
      .replace(":sparkles:", "✨") // Introducing new features.
      .replace(":pencil:", "📝") // Writing docs.
      .replace(":memo:", "📝") // Writing docs.
      .replace(":rocket:", "🚀") // Deploying stuff.
      .replace(":lipstick:", "💄") // Updating the UI and style files.
      .replace(":tada:", "🎉") // Initial commit.
      .replace(":white_check_mark:", "✅") // Updating tests.
      .replace(":lock:", "🔒") // Fixing security issues.
      .replace(":apple:", "🍎") // Fixing something on macOS.
      .replace(":penguin:", "🐧") // Fixing something on Linux.
      .replace(":checkered_flag:", "🏁") // Fixing something on Windows.
      .replace(":robot:", "🤖") // Fixing something on Android.
      .replace(":green_apple:", "🍏") // Fixing something on iOS.
      .replace(":bookmark:", "🔖") // Releasing / Version tags.
      .replace(":rotating_light:", "🚨") // Removing linter warnings.
      .replace(":construction:", "🚧") // Work in progress.
      .replace(":green_heart:", "💚") // Fixing CI Build.
      .replace(":arrow_down:", "⬇️") // Downgrading dependencies.
      .replace(":arrow_up:", "⬆️") // Upgrading dependencies.
      .replace(":pushpin:", "📌") // Pinning dependencies to specific versions.
      .replace(":construction_worker:", "👷") // Adding CI build system.
      .replace(":chart_with_upwards_trend:", "📈") // Adding analytics or tracking code.
      .replace(":recycle:", "♻️") // Refactoring code.
      .replace(":whale:", "🐳") // Work about Docker.
      .replace(":heavy_plus_sign:", "➕") // Adding a dependency.
      .replace(":heavy_minus_sign:", "➖") // Removing a dependency.
      .replace(":wrench:", "🔧") // Changing configuration files.
      .replace(":globe_with_meridians:", "🌐") // Internationalization and localization.
      .replace(":pencil2:", "✏️") // Fixing typos.
      .replace(":poop:", "💩") // Writing bad code that needs to be improved.
      .replace(":rewind:", "⏪") // Reverting changes.
      .replace(":twisted_rightwards_arrows:", "🔀") // Merging branches.
      .replace(":package:", "📦") // Updating compiled files or packages.
      .replace(":alien:", "👽") // Updating code due to external API changes.
      .replace(":truck:", "🚚") // Moving or renaming files.
      .replace(":page_facing_up:", "📄") // Adding or updating license.
      .replace(":boom:", "💥") // Introducing breaking changes.
      .replace(":bento:", "🍱") // Adding or updating assets.
      .replace(":ok_hand:", "👌") // Updating code due to code review changes.
      .replace(":wheelchair:", "♿️") // Improving accessibility.
      .replace(":bulb:", "💡") // Documenting source code.
      .replace(":beers:", "🍻") // Writing code drunkenly.
      .replace(":speech_balloon:", "💬") // Updating text and literals.
      .replace(":card_file_box:", "🗃") // Performing database related changes.
      .replace(":loud_sound:", "🔊") // Adding logs.
      .replace(":mute:", "🔇") // Removing logs.
      .replace(":busts_in_silhouette:", "👥") // Adding contributor(s).
      .replace(":children_crossing:", "🚸") // Improving user experience / usability.
      .replace(":building_construction:", "🏗") // Making architectural changes.
      .replace(":iphone:", "📱") // Working on responsive design.
      .replace(":clown_face:", "🤡") // Mocking things.
      .replace(":egg:", "🥚") // Adding an easter egg.
      .replace(":see_no_evil:", "🙈") // Adding or updating a .gitignore file
      .replace(":camera_flash:", "📸") // Adding or updating snapshots
      .replace(":alembic:", "⚗") // Experimenting new things
      .replace(":mag:", "🔍") // Improving SEO
      .replace(":wheel_of_dharma:", "☸️") // Work about Kubernetes
      .replace(":label:", "🏷️") // Adding or updating types (Flow, TypeScript)
  }
}
