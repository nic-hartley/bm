// bookmarklet source:
// fetch("https://nic-hartley.github.io/bm/ccdel.js").then(r=>r.text()).then(b=>eval(b))
(_=>{
  let deleted = 0;
  console.log("Running CCdel...");
  setInterval(_ => {
    let deleted = 0;
    document.querySelectorAll(".user-notice-line").forEach(e => {
      if (e.innerText.includes("Crowd Control Coin")) {
        deleted += 1;
        e.parentNode.removeChild(e);
      }
    });
  }, 100);
  setInterval(_ => {
    if (deleted > 0) {
      console.log(`Deleted ${deleted} in the past 5 seconds`);
      deleted = 0;
    }
  }, 5000);
})()
