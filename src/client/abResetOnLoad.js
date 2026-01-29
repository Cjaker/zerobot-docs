(function () {
  if (typeof window === "undefined") return;

  const ANNOUNCEMENT_ID = "help-update-docs-v2";

  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (!k) continue;

    if (!k.toLowerCase().includes("announcement")) continue;

    const v = localStorage.getItem(k) || "";

    if (k.includes(ANNOUNCEMENT_ID) || v.includes(ANNOUNCEMENT_ID)) {
      localStorage.removeItem(k);
    }
  }
})();
