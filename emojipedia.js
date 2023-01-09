// bookmarklet source:
// fetch("https://nic-hartley.github.io/bm/emojipedia.js").then(r=>r.text()).then(b=>eval(b))
let code = document.body.innerText.match(/(?<=U\+)[A-F0-9]+/)[0].toLowerCase();
let link = `https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/${code}.svg`;
window.open(link, "_blank");
