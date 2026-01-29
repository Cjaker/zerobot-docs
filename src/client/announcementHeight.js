(function () {
  if (typeof window === "undefined") return;

  const root = document.documentElement;
  const setVar = (h) => root.style.setProperty("--zb-announcement-h", `${Math.max(0, Math.round(h))}px`);

  const findBar = () => {
    const wrapper =
      document.querySelector(".announcementBar") ||
      document.querySelector('[class*="announcementBar_"]') ||
      document.querySelector('div[class*="announcementBar"]');

    if (!wrapper) return null;

    const isContent = wrapper.className.includes("announcementBarContent");
    return isContent ? wrapper.parentElement : wrapper;
  };

  const update = () => {
    const bar = findBar();
    if (!bar) return setVar(0);
    setVar(bar.getBoundingClientRect().height);
  };

  update();
  window.addEventListener("resize", update);

  const mo = new MutationObserver(update);
  mo.observe(document.body, { childList: true, subtree: true });

  setTimeout(update, 100);
  setTimeout(update, 500);
})();
